<template>
  <div class="TprogressItem">
    <div :style="{ ...progressBarStyle }" class="progressBar">
      <div :style="{ ...progressStyle }"></div>
    </div>
    <span v-if="textShow">{{ progress }}%</span>
  </div>
</template>

<script>
export default {
  name: "T-progress",
  props: {
    width: {
      type: String,
      default: () => "100%",
    },
    height: {
      type: String,
      default: () => "10px",
    },
    progress: {
      type: Number,
      default: () => 10,
    },
    progressColor: {
      type: String,
      default: () =>
        "linear-gradient(to right, rgb(61, 137, 220), rgb(1, 254, 254))",
    },
    backgroundColor: {
      type: String,
      default: () => "rgba(48, 69, 104, 0.2)",
    },
    textShow: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    // 外层样式
    progressBarStyle() {
      return {
        width: this.width,
        height: this.height,
        backgroundColor: this.backgroundColor,
      };
    },
    // 内层进度样式
    progressStyle() {
      return {
        width: `${this.progress}%`,
        background: this.progressColor,
      };
    },
  },
};
</script>

<style scoped>
.TprogressItem {
  display: flex;
  align-items: center;
}

.TprogressItem span {
  margin: 0 10px;
}

.TprogressItem .progressBar {
  width: 100%;
  display: inline-block;
  position: relative;
}
.TprogressItem .progressBar div {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  transition: width 1s;
}
</style>