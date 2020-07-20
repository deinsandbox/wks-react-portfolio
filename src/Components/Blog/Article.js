import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { isEmptyObject } from "../../utils/validaton";

import axios from "axios";
import "./Article.css";

const Article = () => {
  const { id } = useParams();

  const [content, setContent] = useState({});

  useEffect(() => {
    const BLOG_API = process.env.REACT_APP_BLOG_API;
    axios
      .get(`${BLOG_API}/${id}`)
      .then(({ data }) => {
        setContent(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    !isEmptyObject(content) && (
      <div>
        <h1>{content.title}</h1>

        <p>{content.description}</p>

        <div>{content.tags.length && `#${content.tags.join(", #")}`}</div>
      </div>
    )
  );
};

export default Article;
