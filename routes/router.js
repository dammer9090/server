const express = require('express');
const { createClub, getClub, deleteClub } = require('../controllers/Club');
const router = express.Router();


router.post('/createClub', createClub);

router.get('/getClub', getClub)

router.delete('/deleteClub/:clubId', deleteClub)

 
module.exports = router;
 

