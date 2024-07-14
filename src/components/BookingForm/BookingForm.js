import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import './BookingForm.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        horse: '',
        date: '',
        startTime: '',
        endTime: '',
        name: '',
        email: '',
        phone: ''
    });
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true); // Show the form after 2 seconds
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        if (selectedDate.getDay() === 0) { // 0 = Sunday
            alert("Sundays are holidays. Please select another date.");
            return;
        }
        setFormData({ ...formData, date: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data
        if (!formData.horse || !formData.date || !formData.startTime || !formData.endTime || !formData.name || !formData.email || !formData.phone) {
            alert('Please fill out all fields.');
            return;
        }

        const selectedDate = new Date(formData.date);
        const dayOfWeek = selectedDate.getDay();
        const startHour = parseInt(formData.startTime.split(':')[0]);
        const endHour = parseInt(formData.endTime.split(':')[0]);

        if (dayOfWeek === 6) { // Saturday
            if (startHour < 15 || endHour > 23) {
                alert('On Saturdays, please select a valid time range between 3 PM and 12 AM.');
                return;
            }
        }

        if (startHour >= endHour || endHour - startHour !== 1) {
            alert('Please select a valid one-hour time slot.');
            return;
        }

        // Dispatch an action to store the booking data
        dispatch({ type: 'SUBMIT_BOOKING', payload: formData });

        // Redirect to the confirmation page
        navigate(`/confirmation/${formData.horse}`);
    };

    return (
        <div 
            className="booking-form-container" 
            style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg12.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {showForm && (
                <motion.form 
                    onSubmit={handleSubmit} 
                    className="booking-form"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <label>
                        Select Horse:
                        <select name="horse" value={formData.horse} onChange={handleChange}>
                            <option value="">Select...</option>
                            <option value="Thunder">Thunder</option>
                            <option value="Blaze">Blaze</option>
                            <option value="Shadow">Shadow</option>
                            <option value="Spirit">Spirit</option>
                        </select>
                    </label>
                    <label>
                        Date:
                        <input type="date" name="date" value={formData.date} onChange={handleDateChange} />
                    </label>
                    <label>
                        Start Time:
                        <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
                    </label>
                    <label>
                        End Time:
                        <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} />
                    </label>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Phone:
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                    </label>
                    <motion.button 
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Submit
                    </motion.button>
                </motion.form>
            )}
        </div>
    );
};

export default BookingForm;


