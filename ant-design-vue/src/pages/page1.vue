<!---->
<template>
<div class="page1-page">
  <p>page1</p>
  <router-link :to="{name:'home'}">
    goHme
  </router-link>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {

   };
  },
  created() {

  },
  methods: {

}
};
</script>

<style lang="less" scoped>
.page1-page{
  color:red;
  display: flex;
  justify-content: space-around
}
</style>