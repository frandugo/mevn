const articleRoutes = require('express').Router();

// Require Item model in our routes module
var Article = require('../models/article');

// Defined store route
articleRoutes.route('/add').post((req, res, next) => {
    var article = new Article(req.body);
    article.save()
    .then(article => {
      res.status(200).json({'article': 'article added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  });

// Defined get data(index or listing) route
articleRoutes.route('/').get(function (req, res) {
  Article.find(function (err, articles){
    if(err){
      console.log(err);
    }
    else {
      res.json(articles);
    }
  });
});

// Defined edit route
articleRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Article.findById(id, function (err, article){
      res.json(article);
  });
});

//  Defined update route
articleRoutes.route('/update/:id').post(function (req, res) {
  Article.findById(req.params.id, function(err, article) {
    if (!article)
      return next(new Error('Could not load Document'));
    else {
      article.name = req.body.name;
      article.description = req.body.description;
      article.date = req.body.date;
      article.reward = req.body.reward;
      article.rewardCount = req.body.rewardCount;
      article.price = req.body.price;
      article.active = req.body.active;
      article.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
articleRoutes.route('/delete/:id').get(function (req, res) {
  Article.findByIdAndRemove({_id: req.params.id}, function(err, article){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = articleRoutes;