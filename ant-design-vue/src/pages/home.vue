<!---->
<template>
  <div class="home-page">
    <a-input placeholder="Basic usage" />
    <div class="container">
      <p>home1</p>
      <p @click="goPage1">goPage1</p>
    </div>
    <img src="./spring.jpg" alt="">
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
  },
  methods: {
    goPage1(){
      this.$router.push({name:'page1'})
    }
  }
};
</script>

<style lang="less" scoped>
.home-page {
  .container {
    display: flex;
    justify-content:space-around;
  }
  color: blueviolet;
}
</style>