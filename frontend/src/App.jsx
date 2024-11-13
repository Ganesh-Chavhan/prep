import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProblemList from './pages/ProblemList';
import ProblemDetail from './pages/ProblemDetail';


function App() {

    const token = localStorage.getItem('token');
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {
                    !token && <Route path="/login" element={<Login />} /> 
                }
                {
                    !token && <Route path="/register" element={<Register />} />
                }

                <Route path="/problems/:id" element={<ProblemDetail />} />
            </Routes>
        </Router>
    );
}

export default App;