const recurly = require('recurly')
// You should store your API key somewhere safe
// and not in plain text if possible
const myApiKey = '' //add api key here
const client = new recurly.Client(myApiKey)



async function createInvoice () {
    try {
        // const invoiceId = "code-1234";
        const accountId = "code-123456";
        let invoiceCreate = { 
          currency: 'USD',
          collectionMethod: 'automatic'
        }
        let invoiceCollection = await client.createInvoice(accountId, invoiceCreate)
        console.log('Created Invoice:')
        console.log('Charge Invoice: ', invoiceCollection.chargeInvoice)
        console.log('Credit Invoices: ', invoiceCollection.creditInvoices)
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
      } }
createInvoice();