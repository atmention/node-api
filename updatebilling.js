const recurly = require('recurly')
// You should store your API key somewhere safe
// and not in plain text if possible
const myApiKey = '' //add api key here
const client = new recurly.Client(myApiKey)



async function listThem() {
  try {
    const accountId = "code-123456";
    const billingInfoUpdate = {
      firstName: 'Gina',
      lastName: 'Du Monde',
    }
    const billingInfo = await client.updateBillingInfo(accountId, billingInfoUpdate)
    console.log('Updated billing info: ', billingInfo) //can use console.log('Updated billing info: ', billingInfo.id) to only return the billing ID as found in the API payload
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
listThem();