
import React, { useState } from "react";
import taj from '../components/assets/taj.jpg';
import est from '../components/assets/est.jpg';
import et from '../components/assets/et.jpg';

function Posts() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  return (
    <div>
      <style>{`
        .posts-container {
          text-align: center;
          padding: 20px;
        }

        .images-row {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin: 20px 0;
        }

        .post-image {
          width: 350px;
          height: 250px;
          cursor: pointer;
          border-radius: 10px;
          transition: transform 0.2s;
        }

        .post-image:hover {
          transform: scale(1.05);
        }

        .modal {
          display: ${isOpen ? 'block' : 'none'};
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.8);
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          position: relative;
          margin: auto;
          padding: 20px;
          width: 60%;
          max-width: 500px;
        }

        .modal-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 25px;
          color: #fff;
          font-size: 35px;
          font-weight: bold;
          cursor: pointer;
        }

        .close:hover,
        .close:focus {
          color: #bbb;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>

      <div className="posts-container">
        <div className="images-row">
          <img src={taj} alt="Taj" className="post-image" onClick={() => openModal(taj)} />
          <img src={est} alt="ESB" className="post-image" onClick={() => openModal(est)} />
          <img src={et} alt="eiffel" className="post-image" onClick={() => openModal(et)} />
          <img src={taj} alt="Taj" className="post-image" onClick={() => openModal(taj)} />
          <img src={est} alt="ESB" className="post-image" onClick={() => openModal(est)} />
          <img src={et} alt="eiffel" className="post-image" onClick={() => openModal(et)} />
        </div>
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            <img src={currentImage} alt="Enlarged view" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Posts;
