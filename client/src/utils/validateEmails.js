export default (emails = '') => {
  return emails
    .split(',')
    .map(email => email.trim())
    .filter(email => email.length > 0)
    .filter(isInvalid)
}

const isInvalid = (email) => !EMAIL_VALIDATION_REGEXP.test(email)

const EMAIL_VALIDATION_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
