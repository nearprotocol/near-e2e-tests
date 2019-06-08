describe('NEAR Studio', function() {
  before(function(client, done) {
    done();
  });

  it('Can run guest book project', function (client) {
    client
      .url('https://studio.nearprotocol.com')
      .waitForElementVisible('.modal-title-bar', 1000)
      .useXpath().click('//*[contains(text(), "NEAR Guest Book")]').useCss()
      .click('.button[title="Create"]')
      .waitForElementVisible('#near-guest-book', 5000)
      .assert.containsText('#near-guest-book', 'NEAR Guest Book');
  });

  after(function(client, done) {
    if (client.sessionId) {
      client.end(function() {
        done();
      });
    } else {
      done();
    }
  });

});
