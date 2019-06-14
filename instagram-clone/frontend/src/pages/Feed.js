import React, { Component } from "react"

import "./Feed.css"
import more from "../assets/more.svg"
import like from "../assets/like.svg"
import comment from "../assets/comment.svg"
import send from "../assets/send.svg"

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Jorge jorjão</span>
              <span className="place">Jorgênia</span>
            </div>
            <img src={more} alt="mais" />
          </header>
          <img
            src="http://localhost:3333/files/Los-Angeles-Wallpaper-9.jpg"
            alt=""
          />
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong>900 curtidas</strong>

            <p>
              primeiro post pra ajustar o css
              <span>#react #oministack #top</span>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user-info">
              <span>Jorge jorjão</span>
              <span className="place">Jorgênia</span>
            </div>
            <img src={more} alt="mais" />
          </header>
          <img
            src="http://localhost:3333/files/Los-Angeles-Wallpaper-9.jpg"
            alt=""
          />
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong>900 curtidas</strong>

            <p>
              primeiro post pra ajustar o css
              <span>#react #oministack #top</span>
            </p>
          </footer>
        </article>
      </section>
    )
  }
}

export default Feed
