const localStorageList = 'tagsList';

type Tag = {
  id: string
  name: string
}

type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => string // success 表示成功 duplicated 表示name重复
  save: () => void
}


const tagsListModel: TagListModel = {
  data: [],
  create(name) {
    const names = this.data.map(item => item.name)
    if (names.indexOf(name) >= 0) {return 'duplicated';}
    names.push(name);
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