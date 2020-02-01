import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {
	const [githubUsername, setGihubUsername] = useState('');
	const [techs, setTechs] = useState('');
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				setLatitude(latitude);
				setLongitude(longitude);
			},
			(err) => {

			},{
				timeout: 30000,
			}
		)
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();

		await onSubmit({
			githubUsername,
			techs,
			latitude,
			longitude,
		});

		setGihubUsername('');
		setTechs('');
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<div className="input-block">
				<label htmlFor="github_username">Usuário do Github</label>
				<input
					type="text"
					name="github_username"
					id="github_username"
					value={githubUsername}
					onChange={e => setGihubUsername(e.target.value)}
					required
				/>
			</div>

			<div className="input-block">
				<label htmlFor="techs">Técnologias</label>
				<input
					type="text"
					name="techs"
					id="techsusername_gihub"
					value={techs}
					onChange={e => setTechs(e.target.value)}
					required
				/>
			</div>
			
			<div className="input-group">
				<div className="input-block">
					<label htmlFor="latitude">Latitude</label>
					<input
						type="number"
						name="latitude"
						id="latitude"
						value={latitude}
						onChange={(e => setLatitude(e.target.value))}
						required
					/>
				</div>

				<div className="input-block">
					<label htmlFor="longitude">Logitude</label>
					<input
						type="number"
						name="longitude"
						id="longitude"
						value={longitude}
						onChange={(e => setLongitude(e.target.value))}
						required
					/>
				</div>
			</div>

			<button type="submit">Salvar</button>
		</form>
	)
}

export default DevForm;