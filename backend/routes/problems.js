const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Create a new problem
router.post('/', (req, res) => {
    const { title, description, setup_instructions } = req.body;
    db.query('INSERT INTO problems (title, description, setup_instructions) VALUES (?, ?, ?)', [title, description, setup_instructions], (err, result) => {
        if (err) return res.status(500).send('Error creating problem');
        res.status(201).send('Problem created successfully');
    });
});

// Get all problems
router.get('/', (req, res) => {
    db.query('SELECT * FROM problems', (err, results) => {
        if (err) return res.status(500).send('Error fetching problems');
        res.status(200).json(results);
    });
});

// Get a specific problem
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM problems WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).send('Error fetching problem');
        if (results.length === 0) return res.status(404).send('Problem not found');
        res.status(200).json(results[0]);
    });
});

// Update a problem
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, setup_instructions } = req.body;
    db.query('UPDATE problems SET title = ?, description = ?, setup_instructions = ? WHERE id = ?', [title, description, setup_instructions, id], (err, result) => {
        if (err) return res.status(500).send('Error updating problem');
        res.status(200).send('Problem updated successfully');
    });
});

// Delete a problem
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM problems WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).send('Error deleting problem');
        res.status(200).send('Problem deleted successfully');
    });
});

module.exports = router;