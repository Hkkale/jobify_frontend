import axios from "axios";
import { navigateToLogin } from "../Services/AuthService";


const axiosInstance=axios.create({
  baseURL: "https://jobify-backend-oga5.onrender.comcd ",
});


axiosInstance.interceptors.request.use((config)=>{
  const token=localStorage.getItem("token");
  if(token){
    config.headers.Authorization=`Bearer ${token}`;
  }
  return config;
},
(error)=>{
  return Promise.reject(error);
})


export const  setupResponseInterceptor=(navigate)=>{

  axiosInstance.interceptors.response.use((response)=>{
    return response;
  },
(errpor)=>{
  
  console.log("Error in response interceptor",errpor.response?.status);
    if(errpor.response?.status===401){
      navigateToLogin(navigate);
      
    }
})

};
  

export default axiosInstance;


