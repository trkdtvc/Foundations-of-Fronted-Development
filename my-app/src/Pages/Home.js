
import React from "react";
import batman from '../components/assets/batman.jpg';

function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <h1 style={{
        fontSize: "3em",
        textAlign: "center",
        transition: "transform 0.3s ease-in-out"
      }}>POZZ, DOBRODOSLI NA DANASNJU EMISIJU CIKA SISMIS SPASAVA GRAD</h1>
      <img src={batman} alt="Burch" className="about-image" />
    </div>
  );
}

export default Home;
