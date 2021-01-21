
const setSelecter = require('.././selecter')
const setRefiner = require('.././refiner')
const mongoose = require('mongoose');
const { validationResult } = require('express-validator/check');

const Ride = require('../models/rides')
const Person = require('../models/person');
const List = require('../models/list');

const createPost = async (req, res, next) => {
let result = setSelecter(req.body)
let carz = {...result.cars}

// const carList = result.list
 let refined = setRefiner(result.cars)
 await List.deleteMany()
const newstartlist = result.startlist
 const startlist = new List({
   list: newstartlist
 })
 
 startlist.save()
await Ride.deleteMany()
 

for (let key in carz) {
       const car = new Ride({
        carId: key,
        rides: refined[key],  
      })
  
      try {
        
        await car.save()
      } catch (err) {
        err => console.error(`Failed to insert documents: ${err}`)
      
      }      
     
}
    res.status(201).json({ message: 'Confirmed' });

};


const  getPosts = async (req, res, next) => {
 const carId = req.params.carId
  
    try {
     const ride  = await Ride.findOne({ carId }).exec();
      if (!ride) {
      return res.status(404).json({ msg: 'Rit niet gevonden' })
    }

        res.status(201).json(ride );

      } catch (err) {
        err => console.error(`Failed to find car: ${err}`)
     
      }     

}
const getCarList = async (req, res, next) => {
   try {
     const cars  = await List.find()
      if (!cars) {
      return res.status(404).json({ msg: 'Rit niet gevonden' })
    }

        res.status(201).json(cars);

      } catch (err) {
        err => console.error(`Failed to find car: ${err}`)
     
      }   

}

const getSinglePost = async (req, res, next) => {
  const carId = req.params.carId
  const ritId = req.params.ritId - 1
  
    try {
     const ride  = await Ride.findOne({ carId }).exec();
      if (!ride) {
      return res.status(404).json({ msg: 'Rit niet gevonden' })
    }

        res.status(201).json({
        ride: ride.rides[ritId]
  });

      } catch (err) {
        err => console.error(`Failed to find car: ${err}`)
     
      }      
}

const  getPost = async (req, res, next) => {
  const carId = req.params.carId
  
    try {
     const ride  = await Ride.findOne({ carId }).exec();
      if (!ride) {
      return res.status(404).json({ msg: 'Rit niet gevonden' })
    }

        res.status(201).json(ride );

      } catch (err) {
        err => console.error(`Failed to find car: ${err}`)
     
      }      
}

const createPerson = async (req, res, next) => {
  const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
 
       const name = req.body.name
    const note = req.body.note
  const person = new Person({
    name: name,
    note: note
  });
  try {
    await person.save();
    
    res.status(201).json({
      message: 'Post created successfully!'
    });
  } catch (err) {
     if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
 


 
exports.createPerson = createPerson
exports.createPost = createPost;
exports.getPosts = getPosts;
exports.getPost = getPost;
exports.getSinglePost = getSinglePost
exports.getCarList = getCarList
 