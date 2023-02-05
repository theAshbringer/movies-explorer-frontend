import React from 'react';
import { createPortal } from 'react-dom';
import Button from '../../Button/Button';
import Modal from '../Modal';
import './InfoModal.css';

function InfoModal({ onClick, message }) {
  return createPortal(
    <Modal className="info">
      <div className="info__container">
        <p className="info__text">{message}</p>
        <Button type="button" mode="solidWide" onClick={onClick}>Ок</Button>
      </div>
    </Modal>,
    document.body,
  );
}

export default InfoModal;
