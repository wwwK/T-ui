<template>
  <div class="T-button">
    <button
      @mouseenter="shadow = true"
      @mouseleave="shadow = false"
      :style="buttonStyle()"
    >
      <slot />
    </button>
  </div>
</template>

<script>
import toRGB from "../../utils/color2rgb";
export default {
  name: "T-button",
  props: {
    type: {
      type: String,
      default: () => "filled",
    },
    color: {
      type: String,
      default: () => "#1F74FF",
    },
    fontColor: {
      type: String,
      default: () => "white",
    },
    disabled: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      shadow: false,
    };
  },
  methods: {
    // 加禁用！！！！！
    buttonStyle() {
      // 类型是filled时的样式
      if (this.type === "filled") {
        return {
          background: this.color,
          color: this.fontColor,
          boxShadow:
            this.shadow || this.disabled
              ? `0 0 7px 0.5px ${this.toRGB(this.color, 0.4)}`
              : "",
        };
      }
    },
    toRGB(color, a) {
      return toRGB(color, a);
    },
  },
};
</script>

<style lang="scss" scoped>
.T-button {
  button {
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px 10px;
    transition: all 0.2s;
  }
}
</style>