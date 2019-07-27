const Keygrip = require('keygrip')
const keys = require('../../config/keys')
const keygrip = new Keygrip([keys.cookieKey])
const Buffer = require('safe-buffer').Buffer

console.log('test')
module.exports = (user) => {
  const sessionObject = {
    passport: {
      user: user._id.toString()
    }
  }
  const session = Buffer.from(JSON.stringify(sessionObject)).toString('base64')
  const sig = keygrip.sign('session=' + session)
  return { session, sig }
}