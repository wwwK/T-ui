<template>
  <div id="app">
    <T-progress :progress="20" :textShow="true" />
    <T-card
      width="1000px"
      title="大家好这里是标题"
      titleColor="red"
      shadow="hover"
    >
      <div>151656</div>
      <template v-slot:bottom> bottom </template>
    </T-card>
    <T-alert color="#00FF00" width="1000px" title="大家好这里是标题"
      >骄傲杀敌际佛爱的发董事局覅哦</T-alert
    >

    <T-avatar background="red" />
    <T-avatar
      src="https://img0.baidu.com/it/u=3880341262,3308316348&fm=26&fmt=auto&gp=0.jpg"
    />

    <T-breadcrumb :items="items" separator=">" />

    <T-button type="flat" color="#00ff00">32132</T-button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      progress: 100,
      items: [
        {
          title: "第一项",
          url: "#/first",
        },
        {
          title: "第二项",
          url: "#/er",
        },
        {
          title: "帅宝",
          url: "#/shuai",
        },
      ],
    };
  },

  created() {},
};
</script>

<style lang="scss">
#app {
  margin-bottom: 50px;
}
// body {
//   background: black;
// }
</style>
