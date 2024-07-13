import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './BookingConfirmation.css';

const BookingConfirmation = ({ horse, date }) => {
    

    useEffect(() => {
        const timer = setTimeout(() => {
            document.getElementById('confirmation-popup').style.display = 'block';
        }, 2000); // Display popup after 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="booking-confirmation-page">
            <motion.div
                className="booking-confirmation"
                id="confirmation-popup"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>Booking Confirmed!</h2>
                <p>Thank you for booking a ride , Enjoy your Ride!</p>
                <button
                    onClick={() =>
                        window.open(
                            `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Horse+Ride+with+${horse}&dates=${date}/${date}&details=Enjoy+your+ride!`,
                            '_blank'
                        )
                    }
                >
                    Add to Calendar
                </button>
            </motion.div>
        </div>
    );
};

export default BookingConfirmation;
