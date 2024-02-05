/// <reference types="cypress" />
import data from '../../fixtures/data.json'
import RestApi from '../../support/api/restApi'
import {expectStatusCode} from '../../support/utils/util'

describe('Test the mock apps', () => {

  it('POST REQUEST Create user 200 Response', () => {
   RestApi.postRequest('http://localhost:3000/createUser', true, data.correctRequestBody)
   .then(createUserResponse=>{
    expectStatusCode(createUserResponse, 200)
    expect(createUserResponse.body.userId).to.not.be.null
    expect(createUserResponse.body.userName).to.not.be.null
    expect(createUserResponse.body.documentsInfo).to.not.be.null
    expect(createUserResponse.body.userInfo).to.not.be.null
    expect(createUserResponse.body.userName).to.eq(data.correctRequestBody.userName)
    expect(createUserResponse.body.documentsInfo).to.eql(data.correctRequestBody.documentsInfo)
    expect(createUserResponse.body.userInfo).to.eql(data.correctRequestBody.userInfo)
   })
  })

  it('POST REQUEST Create user 400 Response', () => {
    RestApi.postRequest('http://localhost:3000/createUser', false, data.incorrectRequestBody)
    .then(createUserResponse=>{
     expectStatusCode(createUserResponse, 400)
     expect(createUserResponse. body.err).to.eq('err.mandatoryfield missing')
    })
   })
})
