import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.scss'
import Header from "./components/Header/Header";

function App() {
  const [presidents, setPresidents] = useState([]);

  useEffect(() => {
    const fetchAllPresidents = async () => {
      try {
        const res = await axios.get("http://localhost:8800");
        setPresidents(res.data);
      } catch (error) {
        console.log(error)
      };
    }
    fetchAllPresidents();
  }, [])

  return (
    <>
      <Header />
      <h1 className="presidents__title">U.S. Presidential <span className="presidents__title--secondary">Freedom</span> Rankings</h1>
      <section className="presidents">
        {presidents.map((president) => (
          <article className="president" key={president.id}>
            <h3 className="president__name">{president.name}</h3>
            <img className="president__image" src={president.img} />
            <p className="president__party">Party: {president.party}</p>
            <p className="president__good-policies">The Good: {president.good_policies}</p>
            <p className="president__good-score">Positive Score: {president.good_score}</p>
            <p className="president__bad-policies">The Bad: {president.bad_policies}</p>
            <p className="president__bad-score">Negative Score: {president.bad_score}</p>
            <p className="president__total-score">Total Score: {president.total_score}</p>
            <p className="president__ranking">Rank: #{president.ranking}</p>
          </article> 
        ))}
      </section>
    </>
  )
}

export default App