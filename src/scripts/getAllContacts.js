import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {
        const data = await readContacts(PATH_DB, 'utf8');
        return data;
      } catch (err) {
        console.error('Помилка читання файлу:', err);
      }
};

console.log(await getAllContacts());
