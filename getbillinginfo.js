const recurly = require('recurly')
// You should store your API key somewhere safe
// and not in plain text if possible
const myApiKey = '' //add api key here
const client = new recurly.Client(myApiKey)



async function listThem() {
  try {
    const accountId = "code-123456"; //can use const accountID = "r62o3ace2qke" AKA accountID via API
    const billingInfo = await client.getBillingInfo(accountId)
    console.log('Fetched Billing Info: ', billingInfo) //can use console.log('Fetched Billing Info: ', billingInfo.id) to return the billing info ID as seen in the API payload
  } catch (err) {
    if (err instanceof recurly.errors.NotFoundError) {
      // If the request was not found, you may want to alert the user or
      // just return null
      console.log('Resource Not Found')
    } else {
      // If we don't know what to do with the err, we should
      // probably re-raise and let our web framework and logger handle it
      console.log('Unknown Error: ', err)
    }
  }
}
listThem();