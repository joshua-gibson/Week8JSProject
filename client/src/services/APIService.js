const apiURL = 'http://localhost:3000/api/launches'
const daysToAdd = 30;

const getDateString = (date) => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + (date.getDate() + 1)).slice(-2);
  return `${year}-${month}-${day}`
};

export default {
  getLaunches(date) {
  const endDate = new Date(date);
  endDate.setDate(endDate.getDate() + daysToAdd);
  const baseURL = `${apiURL}/${getDateString(date)}/${getDateString(endDate)}`
    return fetch(`${baseURL}`).then(res=>res.json());
  }
}
