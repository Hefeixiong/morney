<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
//使用TS实现
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-';
  /*Prop 告诉Vue.xxx不是data是prop
  *Number告诉Vue.xxx是个Number
  * xxx属性名
  * number ｜ undefined告诉TS xxx的编译时的类型*/
  @Prop(Number) xxx: number | undefined;

  selectType(type: string) {
    if (type !== '-' && type !== '+') {// type只能是'-'和'+'中的一个
      throw new Error('type is unknown');
    }
    this.type = type;
  }

  mounted() {
    if (this.xxx === undefined) {
      console.log('undefined');
    } else {
      console.log(this.xxx);
    }
  }
}
//使用js实现
// export default {
//   name: 'Types',
//   props: ['xxx'], //接受一个外部数据
//   data() {
//     return {
//       type: '-' //'-'表示支出'+'表示收入
//     }
//   },
//   mounted() {
//     console.log(this.xxx)
//   },
//   methods: {
//     selectType(type) {
//       if (type !== '-' && type !== '+') {//type只能是'-'和'+'中的一个
//         throw new Error('type is unknown')
//       }
//       this.type = type
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>