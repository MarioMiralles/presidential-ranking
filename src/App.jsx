import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [presidents, setPresidents] = useState([]);

  useEffect(() => {
    const fetchAllPresidents = async () => {
      try {
        const res = await axios.get("http://localhost:8800");
        console.log(res);
      } catch (error) {
        console.log(error)
      };
    }
    fetchAllPresidents();
  }, [])

  return (
    <>
      <h1>U.S. Presidential Rankings</h1>
    </>
  )
}

export default App