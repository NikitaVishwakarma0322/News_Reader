import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div>
            <span
              class="badge rounded-pill bg-danger"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: 0,
              }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.hindustantimes.com/tech/img/2023/09/25/1600x900/FSBQdE1UYAI31IA_1651799976574_1695603424446.png"
            }
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small
                className="
              text-muted"
              >
                By {author ? author : "Unknown"}
              </small>
            </p>
            <p className="card-text">
              <small className="text-muted">
                On {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
