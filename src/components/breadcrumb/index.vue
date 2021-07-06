<template>
  <div class="Tbreadcrumb">
    <ol>
      <template v-for="(it, index) in items">
        <li
          :key="it.title"
          @click="toPath(it.url)"
          :class="{ active: index === items.length - 1 }"
          :style="{ color: index === items.length - 1 ? activeColor : '' }"
        >
          {{ it.title }}
        </li>
        <span :key="it.url" v-show="index !== items.length - 1">{{
          separator
        }}</span>
      </template>
    </ol>
  </div>
</template>

<script>
export default {
  name: "T-breadcrumb",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    separator: {
      type: String,
      default: () => "•",
    },
    activeColor: {
      type: String,
      default: () => "rgb(31,116,255)",
    },
  },
  methods: {
    toPath(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style lang="scss" scoped>
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.Tbreadcrumb {
  display: inline-block;
  padding: 15px 20px;

  ol {
    display: flex;

    li:not([class="active"]) {
      cursor: pointer;
      color: rgb(192, 192, 192);
      transition: all 0.5s;
    }
    li:not([class="active"]):hover {
      color: rgb(61, 61, 61);
      text-decoration: underline;
    }

    span {
      cursor: default;
      margin: 0 10px;
    }
  }
}
</style>