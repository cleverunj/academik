import Axios from "axios";


const storedData = localStorage.getItem('token');
if (storedData) {
  const token = JSON.parse(localStorage.getItem('token'));
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Interceptar errores de manera centralizada
Axios.interceptors.response.use(
  response => {
    
    return response;
  },
  error => {

    if (error.code === "ERR_NETWORK") {
      //window.location.href = '/login';
    }
    if (error.code === "ERR_BAD_RESPONSE") {
      // localStorage.clear();
      // window.location.href = '/error';
    }
    if (error.response && error.response.status === 401) {
      //localStorage.clear();
      //window.location.href = '/login';
    }
    if (error.response && error.response.status === 504) {
      //localStorage.clear();
      //window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
