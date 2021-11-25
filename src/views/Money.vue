<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注" placeholder="请在这里输入备注" @update:value="onUpdateNotes"/>
    </div>
    <Tags @update:value="onChangeTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money/Tags.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import FormItem from '@/components/Money/FormItem.vue';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tags, FormItem , Tabs, NumberPad },
})
export default class Money extends Vue {
  get recordList() {
    console.log('get localStorage recordList' , this.$store.state.recordList)
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [], notes: '' , type: '-' , amount: 0
  };

  created() {
    this.$store.commit('fetchRecord');
  }

  onChangeTags(tag: []) {
    this.record.tags = tag
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
  }
}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
