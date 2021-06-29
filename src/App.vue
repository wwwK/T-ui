<template>
  <div id="app">
    <T-progress :progress="100" :textShow="true" />
    <T-card width="1000px" title="阿斯地方法撒地撒手架" titleColor="red">
      <div>151656</div>
      <template v-slot:bottom> bottom </template>
    </T-card>
    <T-alert color='#842993' width="1000px" title="大家好这里是标题"
      >骄傲杀敌际佛爱的发董事局覅哦</T-alert
    >

    <T-avatar background="red" />
    <T-avatar
      src="https://img0.baidu.com/it/u=3880341262,3308316348&fm=26&fmt=auto&gp=0.jpg"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      progress: 100,
    };
  },

  created() {},
};
</script>

<style lang="scss">
// body {
//   background: black;
// }
</style>
