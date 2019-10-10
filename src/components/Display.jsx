import React from "react";

const Display = ({ title, url, date, media_type, explanation }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      {media_type === "image" ? (
        <img src={url} alt={title} />
      ) : (
        <span className="alert-span">
          Error: ( {title} ) does not have a valid image extension!
        </span>
      )}
        <p>{explanation}</p>
        <p className="date">{date}</p>
    </div>
  );
};

export default Display;
