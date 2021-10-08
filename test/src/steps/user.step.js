const { When, Then, Given } = require('@cucumber/cucumber')
const pactum = require('pactum')

const spec = pactum.spec()

Given('Request To {string}', function (URL) {
    spec.get(URL)
})

When('Recieves Response', async function () {
    await spec.toss()
})

Then('Recieved Response {int}', function (statusCode) {
    spec.response().should.have.status(statusCode)
})