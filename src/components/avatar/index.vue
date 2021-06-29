<template>
  <div class="Tavatar" :style="{ ...TavatarStyle }">
    <img class="TavatarImage" v-if="src" :src="src" />
    <span v-else :style="{ color: textColor }">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "T-avatar",
  props: {
    size: {
      type: String,
      default: () => "50px",
    },
    radius: {
      type: Boolean,
      default: () => true,
    },
    background: {
      type: String,
      default: () => "gray",
    },
    text: {
      type: String,
      default: () => "T",
    },
    textColor: {
      type: String,
      default: () => "white",
    },
    src: {
      type: String,
    },
  },
  computed: {
    // avatar外层样式
    TavatarStyle() {
      return {
        width: this.size,
        height: this.size,
        borderRadius: this.radius ? "50%" : "",
        background: this.background,
        fontSize: `calc(${this.size} / 1.5)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.Tavatar {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  user-select: none;
  transition: all 0.3s;
  cursor: pointer;

  .TavatarImage {
    width: 100%;
    height: 100%;
    // 禁止图片拖拽
    pointer-events: none;
  }
}
</style>