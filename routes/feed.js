const express = require('express');

const feedController = require('../controllers/feed');
const { body } = require('express-validator/check');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);
// GET STARTCARLIST 

router.get('/startlist', feedController.getCarList)


// Get RIDE by ID 
router.get('/post/:carId', feedController.getPost);
router.get('/post/:carId/:ritId', feedController.getSinglePost);

 

 


// POST /feed/post// INITALL CARS FOR ADMIN
router.post('/post', feedController.createPost);

// Create new address person

router.post('/post/person', 
  [
    body('name')
      .trim()
      .isLength({ min: 5 }),
    body('note')
      .trim()
      .isLength({ min: 5 })
  ],feedController.createPerson)


module.exports = router;