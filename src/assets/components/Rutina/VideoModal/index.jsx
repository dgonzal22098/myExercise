import styled from 'styled-components';
import { IoClose } from "react-icons/io5";
import React from "react";

const VideoModal = ({ setShowModal, nombre, series, repeticiones, videoUrl }) => {
    return (
        <Overlay onClick={() => setShowModal(false)}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={() => setShowModal(false)}>
                    <IoClose size={24} />
                </CloseButton>

                <Info>
                    <h2>{nombre}</h2>
                    <p><strong>Series:</strong> {series}</p>
                    <p><strong>Repeticiones:</strong> {repeticiones}</p>
                </Info>

                <VideoContainer>
                    {/* Para YouTube */}
                    <iframe
                        width="100%"
                        height="400"
                        src={videoUrl}
                        title={nombre}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </VideoContainer>
            </Modal>
        </Overlay>
    );
};

export default VideoModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Modal = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 800px;
  max-height: 90dvh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #3BAC52;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: center;

  h2 {
    margin: 0;
    font-size: 1.6rem;
    color: #3BAC52;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  overflow: hidden;
`;
