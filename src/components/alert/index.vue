<template>
  <div class="Talert" :style="{ width, ...TalertStyle }">
    <span v-if="title" class="Talert-Title" :style="{ ...TalertTitleStyle }">{{
      title
    }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  name: "T-alert",
  props: {
    width: {
      type: String,
      default: () => "500px",
    },
    title: {
      type: String,
    },
    color: {
      type: String,
      default: () => "#5C9FFF",
    },
  },
  computed: {
    // alert主体颜色
    TalertStyle() {
      return {
        background: `${this.toRGB(this.color, 0.2)}`,
        boxShadow: `0px 0px 6px 1px ${this.toRGB(this.color, 0.2)}`,
        color: `${this.toRGB(this.color, 1)}`,
      };
    },
    // alert文字颜色
    TalertTitleStyle() {
      return {
        boxShadow: `0 3px 3px -2px ${this.toRGB(this.color, 0.2)}`,
      };
    },
  },
  methods: {
    // 16进制颜色转换成RGB
    toRGB(data, p) {
      // 16进制颜色值的正则
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 把颜色值变成小写
      var color = data.toLowerCase();
      if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
          var colorNew = "#";
          for (let i = 1; i < 4; i += 1) {
            colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
          }
          color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        var colorChange = [];
        for (let i = 1; i < 7; i += 2) {
          colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return "rgba(" + colorChange.join(",") + "," + p + ")";
      } else {
        throw new Error("T-alert:颜色输出不正确!请输入16进制颜色");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Talert {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 5px;
  padding: 5px 15px;
  border-radius: 8px;
  transition: all 0.5s;
  // background: rgb(92, 159, 255, 0.3);
  // box-shadow: 0px 0px 6px 1px rgba(92, 159, 255, 0.3);
  // color: rgb(92, 159, 255);

  .Talert-Title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
    padding: 3px 0;
    // box-shadow: 0 3px 3px -2px rgba(92, 159, 255, 0.3);
  }
}
</style>