'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);


  
  router.post('/', (req, res) => {
    res.send('With this endpoint you can get cats.');
  });
  
  router.put('/cat', (req, res) => {
    res.send('With this endpoint you can get cats.');
  });
  
  router.delete('/cat', (req, res) => {
    res.send('With this endpoint you can get cats.');
  });

  module.exports = router;
