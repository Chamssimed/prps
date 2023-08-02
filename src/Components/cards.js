import React from "react";

const Cards = ({list}) => {
  return (
    <div className="box">
      <img src={list.img}></img>
      <h1>{list.name}</h1>
      <p>
        {list.Lieunaissance}
        {list.description}
        {list.Poids}
      </p>
    </div>
  );
};
export default Cards;
