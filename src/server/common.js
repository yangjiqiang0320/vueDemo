import service from 'axios'

const CancelToken = service.CancelToken
var cancel

export let get = (url,param)=>{
  return new Promise((resolve,reject)=>{
    service({
      method:'get',
      url,
      params:param,
      cancelToken:new CancelToken(c=>{
        cancel=c
      })
    }).then(res=>{  //axios返回的是一个promise对象
      resolve(res)  //resolve在promise执行器内部
    }).catch(err=>{
      reject (err)
    })

  })
};

export let post = (url,param)=>{
  return new Promise((resolve,reject)=>{
    service({
      method:'post',
      url,
      params:param,
      cancelToken:new CancelToken(c=>{
        cancel=c
      })
    }).then(res=>{  //axios返回的是一个promise对象
      resolve(res)  //resolve在promise执行器内部
    }).catch(err=>{
      reject (err)
    })
  })
};

