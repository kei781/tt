import http from 'k6/http'


export let options = {
  vus: 3000,
  duration: '10s'
}
export default function () {
  http.post('http://121.134.241.225/checkInfo')
}