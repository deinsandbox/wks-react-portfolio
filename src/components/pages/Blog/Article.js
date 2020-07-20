import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown/with-html';
import { isEmptyObject } from '../../../utils/validation';

import axios from 'axios';
import './Article.css';

const Article = ({ history }) => {
  const { id } = useParams();
  const [content, setContent] = useState({});

  const handleOnClick = (e) => {
    history.goBack();
  };

  useEffect(() => {
    const BLOG_API = process.env.REACT_APP_BLOG_API;
    axios
      .get(`${BLOG_API}/articles/${id}`)
      .then(({ data }) => {
        setContent(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    !isEmptyObject(content) && (
      <div className="article">
        <img className="cover" src={content.cover_image} alt="Cover" />

        <h1>{content.title}</h1>

        <p>{content.description}</p>

        <ReactMarkdown
          className="content"
          source={content.body_markdown}
          escapeHtml={false}
        />

        <div>{content.tags.length && `#${content.tags.join(' #')}`}</div>

        <button onClick={handleOnClick}>Regresar</button>
      </div>
    )
  );
};

export default Article;
