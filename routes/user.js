
const express = require('express');

const HomeController = require('../controllers/user/HomeController');
const UserController = require('../controllers/UserController');

const router = express.Router();

// Get all books
router.get('/user/books', (req, res) => {
    HomeController.getBooks(req, res);
});

// Admin Login
router.post('/admin/login', (req, res) => {
    UserController.doAdminLogin(req, res);
});

module.exports = router;