import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css';

const Blog = ({ history }) => {
  const USERNAME = 'equiman';
  const [list, setList] = useState([]);

  const handleOnClick = (e) => {
    const { id } = e.target.dataset;
    history.push(`/article/${id}`);
  };

  useEffect(() => {
    const BLOG_API = process.env.REACT_APP_BLOG_API;
    axios
      .get(`${BLOG_API}/articles?username=${USERNAME}`)
      .then(({ data }) => {
        const result = data.filter(
          (article) => !article?.title.startsWith('Curso JSON - ')
        );
        setList(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      {!!list.length && <h1>Blog</h1>}

      {!!list.length &&
        list.map(({ id, title, description, tag_list }, index) => {
          return (
            <section key={index}>
              <h2 data-id={id} onClick={handleOnClick}>
                {title}
              </h2>

              <p>{description}</p>

              <div>{tag_list.length && `#${tag_list.join(' #')}`}</div>

              <button data-id={id} onClick={handleOnClick}>
                Leer
              </button>
            </section>
          );
        })}
    </section>
  );
};

export default Blog;
