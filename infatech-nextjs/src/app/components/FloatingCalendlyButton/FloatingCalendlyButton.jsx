'use client';

import React from 'react';
import CalendlyPopupButton from '../Calendly/CalendlyPopupButton';
import { CalendarClock } from 'lucide-react';
const FloatingCalendlyButton = ({hide}) => {
    if (hide) return null;
    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 999999,
            }}
        >
          <CalendlyPopupButton
  buttonText={
    <CalendarClock
      color="#ff3b00"
      strokeWidth={2}
      style={{ cursor: 'pointer' }}
    />
  }
  // Add title directly to the Calendly button wrapper using wrapperProps (if supported)
  wrapperProps={{ title: "Book a Call" }}
/>

        </div>
    );
};

export default FloatingCalendlyButton;
