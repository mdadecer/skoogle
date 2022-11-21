const express = require('express')
const router = express.Router()
const {companies} = require('../models')
const {videos} = require('../models')
const {skaters} = require('../models')



router.get('/', async (req, res) => {
    const videosList = await videos.findAll();
    const skatersList = await skaters.findAll();
    const companiesList = await companies.findAll();
    res.json({companiesList, skatersList, videosList});


});

module.exports = router;