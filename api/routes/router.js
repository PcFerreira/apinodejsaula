const express = require('express')
const router = new express.Router()

const animes = require('../controllers/animes')

router.route('/anime/:animeId').get(animes.getAnime)
router.route('/anime').post(animes.addAnime)
module.exports = router