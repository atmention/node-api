const recurly = require('recurly')
// You should store your API key somewhere safe
// and not in plain text if possible
const myApiKey = '1c2dc01087ff4093a01dd51116db62c1' //add api key here
const client = new recurly.Client(myApiKey)



async function listThem () {
    try {
        const accounts = client.listAccounts({ params: { limit: 200 } })

for await (const account of accounts.each()) {
  console.log(account.code)
}

    } catch (err) {
      // handle err from client
    }
  }

  listThem();