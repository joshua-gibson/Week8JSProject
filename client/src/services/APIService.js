const daysToAdd = 30;
const limit = 100;

const getDateString = (date) => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + (date.getDate() + 1)).slice(-2);
  return `${year}-${month}-${day}`
};

// TODO: Retry if no responses in this range
// Add a response if we've reached the end of all data
export default {
  getLaunches(date) {
  const endDate = new Date(date);
  endDate.setDate(endDate.getDate() + daysToAdd);
  const baseURL = `https://launchlibrary.net/1.4/launch/${getDateString(date)}/${getDateString(endDate)}?limit=${limit}`
    return fetch(`${baseURL}`).then(res=>res.json());
  }
}
