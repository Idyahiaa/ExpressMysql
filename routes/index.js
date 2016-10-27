var express = require('express');
var router = express.Router();
var controllers =require('.././controllers');
/* GET home page. */
router.get('/',controllers.homecontroller.index);

//GET liste produits
router.get('/liste',controllers.produitsctrl.index);

router.get('/nouveau',controllers.produitsctrl.nouveau);

router.post('/add',controllers.produitsctrl.nvproduit);

router.post('/supp',controllers.produitsctrl.supprimerProduits);

router.get('/modif/:id',controllers.produitsctrl.modifierProduirs);
router.post('/edit',controllers.produitsctrl.updateProd);

module.exports = router;
