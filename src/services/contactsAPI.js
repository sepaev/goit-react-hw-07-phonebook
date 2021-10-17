import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4321';

export async function fetchContacts() {
  console.log(1);
  const { data } = await axios.get('/contacts');
  return data;
}
