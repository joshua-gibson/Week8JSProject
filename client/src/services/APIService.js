const apiURL = 'http://localhost:3000/api/launches'

export default {
  getLaunches(sDate, eDate) {
    const startDate = new Date(sDate);
    const endDate = new Date(eDate);
    const baseURL = `${apiURL}/${sDate}/${eDate}`
    return fetch(`${baseURL}`).then(res=>res.json());
  }
}
