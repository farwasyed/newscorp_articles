import React, { useState, useEffect } from "react";
import './ListArticles.css';

function ListArticles({ articles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const articleTitles = articles.map(title => title.headline);
  const articleStandFirst = articles.map(sf => sf.standfirst);
  const articleDate = articles.map(date => date.date);
  const references = articles.map(ref => ref.references);
  const related = articles.map(related => related.related);
  const thumbnailIds = related.map(item => item.thumbnail.default[0]);
  // (references.{id}.link.media)

  function getImage(reference) {
    const foundRef = references.find(ref => ref.id === reference.id);
    return foundRef?.image ?? null;
  }
    
  function getLink(reference) {
    const foundRef = references.find(ref => ref.id === reference.id);
    return foundRef?.link?.media ?? null;
  }
  
  
  function getImageAndLink(id) {
    const index = thumbnailIds.findIndex(thumbnailId => thumbnailId === id);
  
    if (index !== -1) {
      const reference = references[index];
      const image = getImage(reference);
      const link = getLink(reference);
      console.log({ image, link });
      return { image, link };
    }
    return null;
  }
  
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const displayedTitles = articleTitles.slice(firstIndex, lastIndex);

  function handlePrevClick() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextClick() {
    if (currentPage < Math.ceil(articleTitles.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="container">
      <h1>List of News Corp Articles</h1>
      {displayedTitles.map((title, index) => {
        const thumbnailId = thumbnailIds[firstIndex + index];
        const { image, link } = getImageAndLink(thumbnailId) ;
        return (
          
          <div className="card" key={index}>
             
             <div className="image-container">
                {image ? (
                  <img src={image} alt={title.default} />
                ) : (
                  <img src="https://picsum.photos/400/400" alt="Placeholder image" />
                )}
                <div className="link-container">
                  {link ? (
                    <a href={link}>Read more</a>
                  ) : (
                    <a href="https://www.example.com">Read more</a>
                  )}
                </div>
              </div>

            
            <div className="content">
              <h4>{title.default}</h4>
              <p>{articleStandFirst[firstIndex + index].default}</p>
              {/* {link} */}
              <p className="date">{new Date(articleDate[firstIndex + index].live).toString()}</p>
            </div>
          </div>
        
        );
      })}
      <button  className="button" onClick={handlePrevClick} disabled={currentPage === 1}>
        Prev
      </button>
      <button
        onClick={handleNextClick}
        disabled={currentPage === Math.ceil(articleTitles.length / itemsPerPage)}
      >
        Next
      </button>
    </div>
  );
}

export default ListArticles;
