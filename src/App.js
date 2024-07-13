import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import BookingForm from './components/BookingForm/BookingForm';
import './App.css';
import BookingConfirmation from './components/BookingConfirmation/BookingConfirmation';
// import ExampleComponent from './components/ExampleComponent';
const App = () => {
    return (
        <Router>
            <div className="app">
            {/* <ExampleComponent /> */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/booking" element={<BookingForm />} />
                    <Route path="/confirmation/:horse" element={<BookingConfirmation />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
