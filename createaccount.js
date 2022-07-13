const recurly = require('recurly')
// You should store your API key somewhere safe
// and not in plain text if possible
const myApiKey = '' //add api key here
const client = new recurly.Client(myApiKey)



async function createAccount () {
    try {
      const accountCode = 'test-0001';
      const accountCreate = {
        code: accountCode,
        firstName: 'Steve',
        lastName: 'Jacobs',
        address: {
          street1: '901 Camp St',
          city: 'New Orleans',
          region: 'LA',
          postalCode: '70115',
          country: 'US'
        }
      }
      const account = await client.createAccount(accountCreate)
      console.log('Created Account: ', account.code)
    } catch (err) {
      if (err instanceof recurly.errors.ValidationError) {
        // If the request was not valid, you may want to tell your user
        // why. You can find the invalid params and reasons in err.params
        // must have open line item or invoice to run.
        console.log('Failed validation', err.params)
      } else {
        // If we don't know what to do with the err, we should
        // probably re-raise and let our web framework and logger handle it
        console.log('Unknown Error: ', err)
      }
     } }

createAccount();