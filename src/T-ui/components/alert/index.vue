<template>
  <div class="Talert" :style="{ width, ...TalertStyle }">
    <span v-if="title" class="Talert-Title" :style="{ ...TalertTitleStyle }">{{
      title
    }}</span>
    <slot />
  </div>
</template>

<script>
import toRGB from "../../utils/color2rgb";
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
    toRGB(color, a) {
      return toRGB(color, a, () => {
        throw new Error("T-alert:color-只能传入十六进制颜色(例:#FFFFFF)");
      });
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