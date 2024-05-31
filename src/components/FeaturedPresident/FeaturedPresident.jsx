import React from "react";
import './FeaturedPresident.scss'
import divider from '../../assets/images/featured-divider.png'

function FeaturedPresident({ president }) {
    return (
        <article className="featured">
            <section className="featured__heading">
                <div className="featured__ranking">
                    <h2 className="featured__ranking-number">#{president.ranking}</h2>
                </div>
                <div className="featured__info">
                    <h3 className="featured__name">{president.name}</h3>
                    <h4 className="featured__party">Party: {president.party}</h4>
                </div>
            </section>
            <img className="featured__image" src={president.img} alt={president.name} />
            <div className="featured__policies">
                <h5 className="featured__policies-header">+{president.good_score}</h5>
                <p className="featured__policies-description">{president.good_policies}</p>
            </div>
            <div className="featured__divider-container">
                <img src={divider} className="featured__divider" alt="divider" />
            </div>
            <div className="featured__policies">
                <h5 className="featured__policies-header">{president.bad_score}</h5>
                <p className="featured__policies-description">{president.bad_policies}</p>
            </div>
            <p className="featured__total-score">Total Freedom Score: {president.total_score}</p>
        </article>
    )
}

export default FeaturedPresident;