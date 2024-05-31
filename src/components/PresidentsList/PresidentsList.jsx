import React, { useState, useEffect } from "react";
import './PresidentsList.scss';

const cardsPerPage = 4;

function PresidentsList({ presidents, onPresidentClick }) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(presidents.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const currentPresidents = presidents.slice(startIndex, startIndex + cardsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <article className="presidents__list">
            <section className="presidents__list-container">
                {currentPresidents.map((president) => (
                    <div className="president" key={president.id} onClick={() => onPresidentClick(president.id)}>
                        <h3 className="president__name">{president.name}</h3>
                        <img className="president__image" src={president.img} alt={president.name} />
                        <p className="president__ranking">Ranking: #{president.ranking}</p>
                    </div>
                ))}
            </section>
            <section className="presidents__pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`presidents__pagination-button ${index + 1 === currentPage ? "presidents__pagination-button--active" : ""}`}
                        onClick={() => handlePageChange(index + 1)}>{index + 1}
                    </button>
                ))}
            </section>
        </article >
    );
}

export default PresidentsList;