const mongoose = require('mongoose')
const requirelogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys')

module.exports = (app) => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!')
  })

  app.post('/api/survey', requirelogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body
    const rec = recipients.split(',').map(email => email.trim())
    const emails = recipients.split(',').map(email => ({
      email: email.trim(),
    }))
    const survey = new Survey({
      title,
      body,
      subject,
      recipients: emails,
      _user: req.user.id,
      dateSent: Date.now(),
    })

    const mailer = new Mailer({ subject, recipients: rec }, surveyTemplate(survey))
    try {
      const res = await mailer.send()
      console.log(res)
      await survey.save()

      req.user.credits -= 1
      const user = await req.user.save()

      res.send(user)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
