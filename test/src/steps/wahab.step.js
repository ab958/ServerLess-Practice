const { When, Then, Given } = require("@cucumber/cucumber");
const pactum = require("pactum");

const spec = pactum.spec();

Given("Request1 To {string}", function (URL) {
  spec.get(URL);
});

When("Recieves Response1", async function () {
  await spec.toss();
});

Then("Recieved1 Response {int}", function (statusCode) {
  spec.response().should.have.status(statusCode);
});
