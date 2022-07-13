const recurly = require('recurly')
// You should store your API key somewhere safe
// and not in plain text if possible
const myApiKey = '1c2dc01087ff4093a01dd51116db62c1' //add api key here
const client = new recurly.Client(myApiKey)



async function accountUpdate() {
  try {
    const accountId = "code-123456";
    const accountUpdate = {
      firstName: 'Bling',
      lastName: 'Blong'
    }
    const account = await client.updateAccount(accountId, accountUpdate)
    console.log('Updated account: ', account)
  } catch (err) {
    if (err instanceof recurly.errors.ValidationError) {
      // If the request was not valid, you may want to tell your user
      // why. You can find the invalid params and reasons in err.params
      console.log('Failed validation', err.params)
    } else {
      // If we don't know what to do with the err, we should
      // probably re-raise and let our web framework and logger handle it
      console.log('Unknown Error: ', err)
    }
  }
}
accountUpdate();