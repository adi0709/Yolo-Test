export default class RestApi {
    
  static postRequest = (url, failOnStatusCode, body) =>{
        return cy.request({
            method: 'POST',
            url: url,
            failOnStatusCode: failOnStatusCode,
            headers: {
              Authorization: '123'
            },
            body: body,
          })
    }
}