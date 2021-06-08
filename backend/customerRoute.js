const express = require('express')
const customerRoute = express.Router()

// Student model
let customerModel = require('../models/customer')

customerRoute.route('/').get((req, res, next) => {
  customerModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

customerRoute.route('/create-customer').post((req, res, next) => {
  customerModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

customerRoute.route('/edit-customer/:id').get((req, res, next) => {
  customerModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update student
customerRoute.route('/update-customer/:id').post((req, res, next) => {
  customerModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

// Delete student
customerRoute.route('/delete-customer/:id').delete((req, res, next) => {
  customerModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = customerRoute
