import Cookies from 'universal-cookie';
const cookies = new Cookies();
const Auth = {
    getAuth () {
      // if(cookies.get('%tokenExpiry%') )
      return !!cookies.get('patientToken')
    }
  }
  
  export default Auth
  