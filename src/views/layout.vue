<template>
  <div class="layout">
    <h1>This is an layout page</h1>
    <p v-for="item in menu" :key="item.label" @click="clickHandle">
      {{ item.value }}
    </p>
    <p @click="resetCount">reset</p>
    <h1>{{ count }}</h1>
    <HelloWorld msg="sdfsdf" />
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  // 声明响应式属性
  private menu: Array<object> = [
    {
      label: "1",
      value: "1"
    },
    {
      label: "2",
      value: "3"
    }
  ];
  private count: number = 0;

  clickHandle(): void {
    this.count += 1;
  }
  resetCount(): void {
    this.count = 0;
  }
  @Watch('count')
  changeCount(newValue: number, oldValue: number)  {
    console.log(`newValue: ${newValue}, oldValue: ${oldValue}`);
  }
  handle(msg: string){
    console.log(msg)
  }
}
</script>
