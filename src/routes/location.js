const locationRoutes = require('express').Router();

// Require Item model in our routes module
var Location = require('../models/location');

// Defined store route
locationRoutes.route('/add').post((req, res, next) => {
    var location = new Location(req.body);
    location.save()
    .then(location => {
      res.status(200).json({'location': 'Location added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  });

// Defined get data(index or listing) route
locationRoutes.route('/').get(function (req, res) {
  Location.find(function (err, locations){
    if(err){
      console.log(err);
    }
    else {
      res.json(locations);
    }
  });
});

// Defined edit route
locationRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Location.findById(id, function (err, location){
      res.json(location);
  });
});

//  Defined update route
locationRoutes.route('/update/:id').post(function (req, res) {
  Location.findById(req.params.id, function(err, location) {
    if (!location)
      return next(new Error('Could not load Document'));
    else {
      location.long = req.body.long;
      location.lat = req.body.lat;

      location.save().then(location => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
locationRoutes.route('/delete/:id').get(function (req, res) {
  Location.findByIdAndRemove({_id: req.params.id}, function(err, location){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = locationRoutes;