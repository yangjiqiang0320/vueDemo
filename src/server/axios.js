import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

let service = axios.create({
  timeout:5000
});

//获取外部配置
let getJSON =(url)=>{
  return new Promise((resolve,reject)=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.onload =()=>{
      if(xhr.status == 200){
        resolve(JSON.parse(xhr.responseText));
      }else{
        reject(null);
      }
    };
    xhr.onerror =()=>{
      reject(null);
    };
    xhr.send(null);
  })
};

//设置基础路径
getJSON("conf/app-config.json").then(result=>{
  service.defaults.baseURL = result.baseURL;
}).catch(error=>{
  console.log(error,'获取配置信息错误!');
});

//添加请求拦截器
service.interceptors.request.use(config=>{
  return config
},error=>{
  return Promise.reject(error)
});

//添加响应拦截器
service.interceptors.response.use(response=>{
    return response
  },error=>{
    return Promise.reject(error)
  }
);

export default service


