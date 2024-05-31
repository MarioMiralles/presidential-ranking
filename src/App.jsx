import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.scss'
import Header from "./components/Header/Header";
import FeaturedPresident from "./components/FeaturedPresident/FeaturedPresident";
import PresidentsList from "./components/PresidentsList/PresidentsList";

function App() {
  const [presidents, setPresidents] = useState([]);
  const [featuredPresidentId, setFeaturedPresidentId] = useState(null);
  const [filteredPresidents, setFilteredPresidents] = useState([]);

  useEffect(() => {
    const fetchAllPresidents = async () => {
      try {
        const res = await axios.get("http://localhost:8800");
        setPresidents(res.data);
        if (res.data.length > 0) {
          setFeaturedPresidentId(res.data[0].id);
        }
      } catch (error) {
        console.log(error)
      };
    }
    fetchAllPresidents();
  }, [])

  useEffect(() => {
    if (featuredPresidentId) {
      setFilteredPresidents(presidents.filter((president) => president.id !== featuredPresidentId));
    }
  }, [presidents, featuredPresidentId])

  const featuredPresident = presidents.find((president) => president.id === featuredPresidentId);

  return (
    <>
      <Header />
      <main className="presidents">
        <h1 className="presidents__title">U.S. Presidential <br></br><span className="presidents__title--secondary">Freedom</span> Rankings</h1>
        {featuredPresident && (
          <FeaturedPresident president={featuredPresident} />
        )}
        <PresidentsList presidents={filteredPresidents} />
      </main>
    </>
  )
}

export default App