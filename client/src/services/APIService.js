const baseURL = 'https://launchlibrary.net/1.4/launch/next/30'

export default {
  getLaunches(){
    return fetch(baseURL)
    .then(res=>res.json())
},
postLaunch(payload){
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json'}
  })
  .then(res => res.json())
}}
