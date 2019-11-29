'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });


router.get('/', catController.cat_list_get);

  
router.post('/', upload.none(), catController.upload_cat);

  
  
  router.put('/cat', (req, res) => {
    res.send('With this endpoint you can get cats.');
  });
  
  router.delete('/cat', (req, res) => {
    res.send('With this endpoint you can get cats.');
  });

  module.exports = router;
