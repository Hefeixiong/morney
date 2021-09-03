<template>
  <Layout>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Notes @update:value="onUpdateNotes"/>
    <Types :value.sync="record.type"/>
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';
import {model} from '@/model';
import {RecordItem} from '@/custom';

const recordList = model.fetch();

const version = window.localStorage.getItem('version') || '0';
if (version === '0.0.1') {
  //数据库升级，数据迁移
  recordList.forEach(record => {
    record.createdAt = new Date(2021, 1, 1);
  });
  //保存数据
  window.localStorage.setItem('recordList', JSON.stringify(recordList));
}
window.localStorage.setItem('version', '0.0.2');


@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const deepClone: RecordItem = model.clone(this.record);
    deepClone.createdAt = new Date();
    this.recordList.push(deepClone);
  }

  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>
