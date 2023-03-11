import React, { useState, useEffect } from "react";
import capi from "../capi.json";

function ListArticles() {
  const [articles, setArticles] = useState(capi.results);
  const [references, setReferences] = useState(capi.references);

  useEffect(() => {
    setReferences(capi.references);
  }, []);

  const getImageUrl = (id) => {
    if (!id || !references[id] || !references[id].link || !references[id].link.media) {
      return "";
    }
    return references[id].link.media.href;
  };

  return (
    <div>
      <h1>List of Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title && article.title.title}</h2>
            <p>{article.lifecycle && article.lifecycle.initialPublishDateTime}</p>
            <p>{article.standFirst && article.standFirst.standfirst}</p>
            <img
              src={getImageUrl(article.related?.thumbnail?.default?.[0]?.id)}
              alt="thumbnail"
            />
            <a href={article.canonicalWebLink && article.canonicalWebLink.url}>Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListArticles;
