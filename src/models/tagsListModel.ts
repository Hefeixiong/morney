import {RecordItem} from '@/custom';

const localStorageList = 'tagsList';

type TagListModel = {
  data: string[]
  fetch: () => string[]
  create: (name: string) => string // success 表示成功 duplicated 表示name重复
  save: () => void
}

const tagsListModel: TagListModel = {
  data: [],
  create(name) {
    if (this.data.indexOf(name) >= 0) {return 'duplicated';}
    this.data.push(name);
    this.save();
    return 'success';
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageList) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageList, JSON.stringify(this.data));
  }
};

export default tagsListModel;