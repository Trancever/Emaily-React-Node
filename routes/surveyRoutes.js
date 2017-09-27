const mongoose = require('mongoose')
const requirelogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')

const Survey = mongoose.model('surveys')

module.exports = (app) => {
  app.post('/api/survey', requirelogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body
    const survey = new Survey({
      title,
      body,
      subject,

    })
  })
}
