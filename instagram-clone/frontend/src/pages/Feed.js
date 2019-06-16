/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';

import './Feed.css';
import io from 'socket.io-client';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';
import api from '../services/api';

class Feed extends Component {
  state = {
    feed: [],
  }

  async componentDidMount() {
    this.registerToSocket();

    const response = await api.get('posts');
    this.setState({
      feed: response.data,
    });
  }

  registerToSocket = () => {
    const socket = io('http://localhost:3333');
    socket.on('post', (newPost) => {
      const { feed } = this.state;
      this.setState({
        feed: [newPost, ...feed],
      });
    });

    socket.on('like', (likedPost) => {
      const { feed } = this.state;
      const newFeed = feed.map(post => (post._id === likedPost._id ? likedPost : post));
      this.setState({
        feed: newFeed,
      });
    });
  }

  handleLike = (id) => {
    api.post(`/posts/${id}/like`);
  }

  render() {
    const { feed } = this.state;
    return (
      <section id="post-list">
        {feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">Jorgênia</span>
              </div>
              <img src={more} alt="mais" />
            </header>
            <img
              src={`http://localhost:3333/files/${post.image}`}
              alt=""
            />
            <footer>
              <div className="actions">
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="" />
                </button>
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>
              <strong>
                {post.likes}
                {' '}
curtidas
              </strong>

              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;
