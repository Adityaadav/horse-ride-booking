import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HorseCard from '../HorseCard/HorseCard';
import { motion } from 'framer-motion';
import './LandingPage.css'; // Make sure the CSS file is imported

const horses = [
    { id: 1, name: 'Thunder', image: '/images/horse1.jpg' },
    { id: 2, name: 'Blaze', image: '/images/horse2.jpg' },
    { id: 3, name: 'Shadow', image: '/images/horse3.jpg' },
    { id: 4, name: 'Spirit', image: '/images/horse4.jpg' },
];

const LandingPage = () => {
    const [showHorses, setShowHorses] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHorses(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className="landing-page"
            style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + '/images/gene-devine-YwjY-8Ivag4-unsplash.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px'
            }}
        >
            <motion.header 
                className="header"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="title">Unleashing Horsepower</h1>
                <motion.p
                    className="about"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Welcome to our Horse Riding Club! Experience the thrill of horseback riding with our well-trained horses and professional instructors. Join us for an unforgettable adventure in the heart of nature.
                </motion.p>
            </motion.header>

            <motion.div
                className="horses-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {showHorses && horses.map(horse => (
                    <motion.div
                        key={horse.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <HorseCard key={horse.id} horse={horse} />
                    </motion.div>
                ))}
            </motion.div>
            <Link to="/booking" className='button'>Book Now</Link>
        </div>
    );
};

export default LandingPage;
