import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    setCurrentTag: function (state, id: string) {
      // @ts-ignore
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    updateTag(state, payload: { id: string, name: string }) {
      const {id, name} = payload;
      // @ts-ignore
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        // @ts-ignore
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复了');
        } else {
          // @ts-ignore
          const tag = state.tagList.filter(item => item.id === id)[0]
          // @ts-ignore
          tag.name = name
          store.commit('saveTags')
        }
      }
    }
  },
});

export default store