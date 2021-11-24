const localStorageKyyName = 'tagList';
const tagStore = {
  tagList: [] as Tag[],
  fetchTags() {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKyyName) || '[]');
    return this.tagList;
  },

  findTag(id: string) {
    return this.tagList.filter(t => t.id === id )[0];
  }
};