import React from 'react';
import { motion } from 'framer-motion';
import './HorseCard.css';

const HorseCard = ({ horse }) => {
    return (
        <motion.div 
            className="horse-card"
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img src={horse.image} alt={horse.name} />
            <h2>{horse.name}</h2>
        </motion.div>
    );
};

export default HorseCard;
