const baseURL = 'https://launchlibrary.net/1.4/launch/next/30'

export default {
  getLaunches(){
    return fetch(baseURL).then(res=>res.json());
  }
}
