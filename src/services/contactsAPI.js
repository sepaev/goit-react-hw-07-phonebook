import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'http://localhost:4321';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postContact({ newName, newNumber }) {
  const { data } = await axios.post('/contacts', { name: newName, number: newNumber });
  return data;
}

export async function deleteContact(id, name) {
  axios
    .delete('/contacts/' + id)
    .then(response => {
      console.log('response - ', response);
      Notify.success(`Contact ${name} was removed successfully`);
      return true;
    })
    .catch(error => {
      // console.log('error - ', error.message);
      Notify.failure(`Oh, no! ${error.message} Nothing was deleted.`);
      return false;
    });
}
