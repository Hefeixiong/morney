<template>
  <Layout>
    <Tags/>
    <Notes/>
    <Types :xxx="333" />
    <NumberPad/>
  </Layout>
</template>

<script lang="ts">
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';

export default {
  name: 'Money',
  components:{Tags , Notes , Types , NumberPad}
};
</script>
