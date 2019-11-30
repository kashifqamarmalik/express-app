'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);


router.post('/', upload.none(), userController.user_create_post);
  
  
  router.put('/cat', (req, res) => {
    res.send('With this endpoint you can get cats.');
  });
  
  router.delete('/cat', (req, res) => {
    res.send('With this endpoint you can get cats.');
  });

  module.exports = router;
