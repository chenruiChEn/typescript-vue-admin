<template>
  <div class="home">
    <img alt="Vue logo" class="img" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../../components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
.home {
  width: 800px;
  margin: 0 auto;
  .img {
    width: 300px;
    height: 300px;
  }
}
</style>
