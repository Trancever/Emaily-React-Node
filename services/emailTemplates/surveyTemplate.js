const keys = require('../../config/keys')

module.exports = (survey) => {
  return `
    <div style="text-align: center;">
      <h3>I'd like your input!</h3>
      <p>Please answer the following question:</p>
      <p>${survey.body}</p>
      <div>
        <a href="${keys.domain}/api/surveys/thanks">Yes</a>
      </div>
      <div>
      <a href="${keys.domain}/api/surveys/thanks">No</a>
      </div>
    </div>
    <h1>${survey.body}</h1>
  `
}
