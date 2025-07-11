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
                        size={28}
                        color="#042b62"
                        strokeWidth={2}
                        title="Book a Call"
                    />
                }
            />
        </div>
    );
};

export default FloatingCalendlyButton;
