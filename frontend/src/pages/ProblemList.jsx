import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProblemList = () => {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        const fetchProblems = async () => {
            const response = await axios.get('http://localhost:5000/api/problems');
            setProblems(response.data);
        };
        fetchProblems();
    }, []);

    return (
        <div>
            <h2>Problem Statements</h2>
            <ul>
                {problems.map((problem) => (
                    <li key={problem.id}>
                        <Link to={`/problems/${problem.id}`}>{problem.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProblemList;