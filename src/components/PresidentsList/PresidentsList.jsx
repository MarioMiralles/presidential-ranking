import React from "react";
import './PresidentsList.scss';

function PresidentsList({ presidents }) {
  return (
    <section className="presidents__list">
      {presidents.map((president) => (
        <article className="president" key={president.id}>
          <h3 className="president__name">{president.name}</h3>
          <img className="president__image" src={president.img} alt={president.name} />
          <p className="president__ranking">Ranking: #{president.ranking}</p>
        </article>
      ))}
    </section>
  );
}

export default PresidentsList;