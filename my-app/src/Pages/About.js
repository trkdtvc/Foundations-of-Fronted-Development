
import React from "react";
import deadpool from '../components/assets/deadpool.jpg';
import photo from '../components/assets/logan.jpg';

function About() {
  return (
    <div>
      <style>{`
        .about-container {
          text-align: center;
          padding: 20px;
        }

        .about-item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 40px 0;
          background-color: pink;
          border-radius: 10px;
          padding: 20px;
        }

        .about-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .about-image {
          width: 300px; 
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgb(196, 164, 132);
          margin: 0 20px;
        }

        .about-description {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgb(196, 164, 132);
          width: 250px;
        }

        .about-description p {
          margin: 0;
        }
      `}</style>
      <div className="about-container">
        <div className="about-item">
          <img src={photo} alt="See this photo" className="about-image" />
          <div className="about-description">
            <p>JA SAM TARIK DAUTOVIC, SIN NERMINA DAUTOVICA, RODJEN 10012004 U TUZLI. ZURIOSM ALI NISAM STIGAO.</p>
          </div>
        </div>
        <div className="about-item">
          <img src={deadpool} alt="Burch" className="about-image" />
          <div className="about-description">
            <p>IDEM TU I TAMO S VREMENA NA VRIJEME, POKRECEM BIZNISE I RADIM OKOLO KUCNE POSLOVE, ALI NOCU SPASAVAM ILIDZU I BISTRIK.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
