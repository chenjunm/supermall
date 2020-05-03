import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  instance.interceptors.request.use(config =>{
    console.log('请求发出')
    return config
  },err =>{
    console.log('请求失败')
  })

  instance.interceptors.response.use(config=>{
    console.log('数据收到');
    return config
  },err =>{
    console.log('没有收到数据')
  })

  return instance(config)
}
