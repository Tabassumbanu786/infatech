'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PopupModal } from 'react-calendly';
import styles from './CalendlyPopupButton.module.css';

const CalendlyPopupButton = ({
  url = 'https://calendly.com/tabassumbanumusa/website-strategy-call',
  buttonText = 'Schedule a Call',
}) => {
  const [open, setOpen] = useState(false);
  const modalRootRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let modalRoot = document.getElementById('calendly-modal-root');

      if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'calendly-modal-root';
        document.body.appendChild(modalRoot);
      }

      modalRootRef.current = modalRoot;
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setOpen(true)}
        className="btn fw-semibold px-4 py-2 rounded-pill border border-white text-white"
        style={{
          backgroundColor: 'transparent',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        {buttonText}
      </button>

      {modalRootRef.current && (
        <PopupModal
          url={url}
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={modalRootRef.current}
        />
      )}
    </div>
  );
};

export default CalendlyPopupButton;
