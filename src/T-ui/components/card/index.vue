<template>
  <div
    class="Tcard"
    :style="{ ...TcardStyle }"
    :class="[{ 'Tcard-border': border }, TcardClass]"
  >
    <!-- 标题 -->
    <h1 :class="{ 'Tcard-title': line }" :style="{ color: titleColor }">
      {{ title }}
    </h1>

    <!-- 中间展示区域 -->
    <div class="Tcard-content">
      <slot></slot>
    </div>

    <!-- 底部显示区域 -->
    <div class="Tcard-bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-card",
  props: {
    width: {
      type: String,
      default: () => "",
    },
    title: {
      type: String,
      default: () => "",
    },
    line: {
      type: Boolean,
      default: () => true,
    },
    backgroundCard: {
      type: String,
      default: () => "white",
    },
    titleColor: {
      type: String,
      default: () => "black",
    },
    border: {
      type: Boolean,
      default: () => true,
    },
    shadow: {
      type: String,
      default: () => "hover",
    },
  },
  computed: {
    // Tcard外层Style
    TcardStyle() {
      return {
        background: this.backgroundCard,
        width: this.width,
      };
    },
    // Tcard外层Class
    TcardClass() {
      if (this.shadow === "never") {
        return "";
      } else if (this.shadow === "always") {
        return "shadowAlways";
      } else {
        return "shadowHover";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Tcard {
  display: inline-block;
  padding: 5px 10px;
  box-sizing: border-box;
  position: relative;
  transition: all 0.3s;

  // 基础样式
  &.Tcard-border {
    border: 1px solid rgba(170, 170, 170, 0.5);
    border-radius: 10px;
  }
  // hover时效果
  &.shadowHover:hover {
    box-shadow: 0px 0px 10px 1px gray;
    transform: translateY(-3px);
  }
  // always时效果
  &.shadowAlways {
    box-shadow: 0px 0px 10px 1px gray;
    transform: translateY(-3px);
  }

  h1 {
    margin: 10px 0 10px 0;
    position: relative;
    font-size: 2.5rem;
    display: inline-block;
  }

  .Tcard-title {
    margin: 10px 0 35px 0;
  }
  .Tcard-title::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 80px;
    height: 15px;
    background-color: rgb(65, 198, 242);
  }
  .Tcard-title::before {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, rgb(65, 198, 242), transparent);
  }

  .Tcard-content {
    width: 100%;
    margin-bottom: 5px;
  }

  .Tcard-bottom {
    border-top: 1px solid rgba(145, 145, 145, 0.2);
    padding: 5px 0;
  }
}
</style>