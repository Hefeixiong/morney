import {RecordItem} from '@/custom';

const localStorageList = 'recordList';

const model = {
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageList) || '[]') as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageList, JSON.stringify(data));
  }
};

export {model};