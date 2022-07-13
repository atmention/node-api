const recurly = require('recurly')
// You should store your API key somewhere safe
// and not in plain text if possible
const myApiKey = ''
const client = new recurly.Client(myApiKey)

async function failInvoice() {
  try {
    const invoiceId = "number-2039";
    console.log(client);
    const invoice = await client.markInvoiceFailed(invoiceId)
    console.log('Failed invoice: ', invoice.number)
  } catch (err) {
    if (err instanceof recurly.errors.ValidationError) {
      // If the request was not valid, you may want to tell your user
      // why. You can find the invalid params and reasons in err.params
      console.log('Failed validation', err)
    } else {
      // If we don't know what to do with the err, we should
      // probably re-raise and let our web framework and logger handle it
      console.log('Unknown Error: ', err)
    }
  }
}
failInvoice();