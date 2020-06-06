import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';
import axios from 'axios';


interface Item {
	id: number;
	title: string;
	image_url: string;
}

interface IBGEUFResponse {
	sigla: string;
}
interface IBGECityResponse {
	nome: string;
}

const CreatePoint = () => {
	const [items, setitems] = useState<Item[]>([]);
	const [ufs, setUfs] = useState<string[]>([]);
	const [selectedUf, setSelectedUf] = useState('0');
	const [cities, setCities] = useState<string[]>([]);
	const [selectedCity, setSelectedCity] = useState('0');

	useEffect(() => {
		api.get('/items').then((response) => {
			setitems(response.data);
		});
	}, []);

	useEffect(() => {
		axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
			const ufInitials = response.data.map(uf => uf.sigla);
			setUfs(ufInitials);
		});
	});

	useEffect(() => {
		axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/distritos`).then(response => {
			const cityNames = response.data.map(city => city.nome);
			setCities(cityNames)
		})
	},[selectedUf])

	function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
		const uf = event.target.value;
		setSelectedUf(uf);
	}

	function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
		const city = event.target.value;
		setSelectedCity(city);
	}

	return (
		<div id="page-create-point">
			<header>
				<img src={logo} alt="Ecoleta"/>

				<Link to="/">
					<FiArrowLeft />
					Voltar para Home
				</Link>
			</header>

			<form action="">
				<h1>Cadastro do <br/> ponto de coleta</h1>

				<fieldset>
					<legend>
						<h2>Dados</h2>
					</legend>

					<div className="field">
						<label htmlFor="name">Nome da entidade</label>
						<input type="text" name="name" id="name"/>
					</div>

					<div className="field-group">
						<div className="field">
							<label htmlFor="email">E-mail</label>
							<input type="email" name="email" id="email"/>
						</div>

						<div className="field">
							<label htmlFor="whatsapp">Whatsapp</label>
							<input type="text" name="whatsapp" id="whatsapp"/>
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>
						<h2>Endereço</h2>
						<span>Selecione o endereço no mapa</span>
					</legend>

					<Map
						center={[-27.5660529, -48.5262317]}
						zoom={15}
					>
						<TileLayer
							 attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>

						<Marker position={[-27.5660529, -48.5262317]} />
					</Map>

					<div className="field-group">
						<div className="field">
							<label htmlFor="uf">Estado (UF)</label>
							<select
								name="uf" 
								id="uf"
								onChange={handleSelectUf}
								value={selectedUf}
							>
								<option value="0">Selecione uma UF</option>
								{ufs.map(uf => (
									<option key={uf} value={uf}>{uf}</option>
								))}
							</select>
						</div>

						<div className="field">
							<label htmlFor="city">Cidade</label>
							<select
								onChange={handleSelectCity}
								name="city"
								id="city"
								value={selectedCity}
							>
								<option value="0">Selecione uma Cidade</option>
								{cities.map(city => (
									<option key={city} value={city}>{city}</option>
								))}
							</select>
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>
						<h2>Ítens de Coleta</h2>
						<span>Selecione um ou mais ítens abaixo</span>
					</legend>
				
					<ul className="items-grid">

						{items.map(item => (
							<li key={item.id}>
								<img src={item.image_url} alt={item.title} />
								<span>{item.title}</span>
							</li>
						))}			
					</ul>
				</fieldset>

				<button type="submit">
					Cadastrar ponto de coleta
				</button>
			</form>
		</div>
	)
}

export default CreatePoint;