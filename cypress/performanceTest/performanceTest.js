import http from 'k6/http';
import {check} from 'k6';
export const options = {
  vus: 125,
  duration: '20s',

  thresholds: { 
    http_req_duration: ["avg<100","p(90)<250" ,"p(95)<200"]
  },
};

export default function () {
  const url = 'http://localhost:3000/createUser';
  const payload = JSON.stringify( {
    "userName": "Widget Adapter",
    "documentsInfo": {
      "documentType": "Passport",
      "documentNumber": "Z1233ABC"
    },
    "userInfo": {
      "Address": "Kristine, Tallinn",
      "Country": "Estonia",
      "phone": "408-867-5309"
    }
  });
  
  const params = {
    headers: {
      'Authorization': '123',
      'Content-Type': 'application/json'
    }
  }
  
  const res = http.post(url, payload, params);
  check(res,{
    'is status 200': (r)=> r.status === 200,
    'duration was <=': (r)=> r.timings.duration <= 200
  })
}