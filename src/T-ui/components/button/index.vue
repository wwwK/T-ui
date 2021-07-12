<template>
  <div class="T-button">
    <button
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :style="buttonStyle"
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
      default: () => false,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    buttonStyle() {
      if (this.type === "filled") {
        // 类型是filled时的样式
        return {
          background: this.disabled ? "#8FBAFF" : this.color,
          color: this.fontColor,
          cursor: this.disabled ? "auto" : "pointer",
          boxShadow:
            this.hover && !this.disabled
              ? `0 0 7px 0.5px ${this.toRGB(this.color, 0.4)}`
              : "",
        };
      } else if (this.type === "border") {
        // 类型是border时的样式
        return {
          background:
            this.hover && !this.disabled ? this.toRGB(this.color, 0.1) : "",
          border: this.disabled
            ? `1px solid #8FBAFF`
            : `1px solid ${this.color}`,
          color: this.disabled ? "#8FBAFF" : this.color,
          cursor: this.disabled ? "auto" : "pointer",
        };
      } else if (this.type === "flat") {
        // 类型是flat时的样式
        return {
          background:
            this.hover && !this.disabled ? this.toRGB(this.color, 0.1) : "",
          cursor: this.disabled ? "auto" : "pointer",
          color: this.disabled ? "#8FBAFF" : this.color,
        };
      }

      return {
        background: this.disabled ? "#8FBAFF" : this.color,
        color: this.fontColor,
        cursor: this.disabled ? "auto" : "pointer",
      };
    },
  },
  methods: {
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
    border-radius: 5px;
    padding: 5px 10px;
    transition: all 0.2s;
  }
}
</style>