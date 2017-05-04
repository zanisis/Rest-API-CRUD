var ObjectId = require('mongoose').Types.ObjectId;
const rest = require('../models/restaurant');
let controller = {}

//create
controller.create = function(req, res, next) {
    var data = rest({
        name: req.body.name,
        owner: req.body.own,
        address: req.body.address,
        open_status: req.body.open
    })

    data.save((err, result) => {
        if (err) throw err
        res.send('User saved successfully!');
    })
}

//delete
controller.delete = (req, res, next) => {
    rest.findOneAndRemove({
        _id: ObjectId(req.params.id)
    }, (err) => {
        if (err) throw err
        res.send('User Delete!')
    })
}

//update
controller.update = (req, res, next) => {
  rest.findOne({
    _id: ObjectId(req.params.id)
  })
  .then((data)=>{
    rest.update({
      _id: ObjectId(req.params.id)
    },{
      name: req.body.name || data.name,
      owner: req.body.own || data.owner,
      address: req.body.address || data.address,
      open_status: req.body.open || data.open_status
    },(err, user) => {
        if (err) throw err;
        res.send('Update Successfully')
    })
  })
}

//findall
controller.findall = (req, res, next) => {
    rest.find({}, (err, users) => {
        if (err) throw err
        res.send(users)
    })
}

//findone
controller.findone = (req, res, next) => {
    rest.find({
        _id: ObjectId(req.params.id)
    }, (err, user) => {
        if (err) throw err
        res.send(user)
    })
}

module.exports = controller;