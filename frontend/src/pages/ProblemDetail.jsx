import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProblemDetail = () => {
    const { id } = useParams();
    const [problem, setProblem] = useState(null);

    useEffect(() => {
        const fetchProblem = async () => {
            const response = await axios.get(`http://localhost:5000/api/problems/${id}`);
            setProblem(response.data);
        };
        fetchProblem();
    }, [id]);

    if (!problem) return <div>Loading...</div>;

    return (
        <div>
            <h2>{problem.title}</h2>
            <p>{problem.description}</p>
            <h3>Setup Instructions</h3>
            <p>{problem.setup_instructions}</p>
        </div>
    );
};

export default ProblemDetail;