const express = require('express');
const router = express.Router();

// home
router.get('/', (req, res) => {
    res.render('index.ejs', { title: 'First express and ejs web'});
});

module.exports = router;