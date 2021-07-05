<template>
  <div class="Tbreadcrumb">
    <ol>
      <template v-for="it in items">
        <li :key="it.title" @click="toPath(it.url)">{{ it.title }}</li>
        <span :key="it.url">•</span>
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
  },
  methods: {
    toPath(url) {
      console.log(this.$router);
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
  outline: 1px solid red;
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
    li.active {
      color: red;
    }
  }
}
</style>