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
      <>
        <h1>{content.title}</h1>

        <p>{content.description}</p>

        <ReactMarkdown source={content.body_markdown} escapeHtml={false} />

        <div>{content.tags.length && `#${content.tags.join(' #')}`}</div>

        <button onClick={handleOnClick}>Regresar</button>
      </>
    )
  );
};

export default Article;
