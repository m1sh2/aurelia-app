
export class StorageService {

  constructor() { }

  set(key, data) {
    key = key || prompt('Key:');
    data = data || prompt('Data:');

    if (typeof key === 'undefined') {
      console.error('No key');
      return false;
    }

    if (typeof data === 'undefined') {
      console.error('No data');
      return false;
    }

    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }

    localStorage.setItem(key, data);
  }

  get(key) {
    if (typeof key === 'undefined') {
      console.error('No data');
      return false;
    }

    const data = localStorage.getItem(key);

    if (!data) {
      console.error('No data');
      return false;
    }

    const dataFormatted = JSON.parse(data);

    if (!dataFormatted) {
      console.error('Wrong data');
      return false;
    }

    return dataFormatted;
  }

  remove(key) {
    key = key || prompt('Key:');

    if (typeof key === 'undefined') {
      console.error('No key');
      return false;
    }

    if (!localStorage.getItem(key)) {
      console.error('No data found');
      return false;
    }

    localStorage.removeItem(key);
  }
}

export const storage = new StorageService();
