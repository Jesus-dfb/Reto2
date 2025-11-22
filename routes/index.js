var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/registro",function(req,res, next){
  res.render("registro",{title: "registro"});
});

router.get("/contacto",function(req,res, next){
  res.render("contacto",{title: "contacto"});
});

router.get("/indexRegistrado",function(req,res, next){
  res.render("indexRegistrado",{title: "indexRegistrado"});
});

module.exports = router;