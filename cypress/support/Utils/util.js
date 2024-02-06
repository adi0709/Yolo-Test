export function expectStatusCode(response, statusCode) {
    expect(response.status).to.be.equal(statusCode, 'Status Code of the response')
  }