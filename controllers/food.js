var ObjectId = require('mongoose').Types.ObjectId;
const food = require('../models/food');
let controller = {}

//create
controller.create = function(req, res, next) {
    var data = food({
        name: req.body.name,
        price: req.body.price,
        expired_date: req.body.expired
    })

    data.save((err, result) => {
        if (err) throw err
        res.send('User saved successfully!');
    })
}

//delete
controller.delete = (req, res, next) => {
    food.findOneAndRemove({
        _id: ObjectId(req.params.id)
    }, (err) => {
        if (err) throw err
        res.send('User Delete!')
    })
}

//update
controller.update = (req, res, next) => {
    food.findOne({
      _id: ObjectId(req.params.id)
    })
    .then((data)=>{
      food.update({
        _id: ObjectId(req.params.id)
      },{
        name: req.body.name || data.name,
        price: req.body.price || data.price,
        expired_date: req.body.expired || data.expired_date
      },(err, user) => {
        // console.log(user);
          if (err) throw err;
          res.send('Update Successfully')
      })
    })
}

//findall
controller.findall = (req, res, next) => {
    food.find({}, (err, users) => {
        if (err) throw err
        res.send(users)
    })
}

//findone
controller.findone = (req, res, next) => {
    food.find({
        _id: ObjectId(req.params.id)
    }, (err, user) => {
        if (err) throw err
        res.send(user)
    })
}

module.exports = controller;