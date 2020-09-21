import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const request =  axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${cookies.get('patientToken')}`
  },  
   transformResponse: [res => {
    return res
   }]

});

request.defaults.baseURL = 'https://virtserver.swaggerhub.com/m-ullah/shasthoboi/1.0';

export default request;
