<template>
  <div class="Talert" :style="{ width }">
    <span class="Talert-Title">{{ title }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  name: "T-alert",
  props: {
    width: {
      type: String,
      default: () => "",
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.Talert {
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 5px 15px;
  border-radius: 8px;
  background: rgb(226, 247, 226);
  box-shadow: 0px 0px 6px 2px rgba(226, 247, 226, 0.7);
  color: rgb(110, 203, 117);

  .Talert-Title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
    padding: 3px 0;
    // border-bottom: 1px solid rgba(110, 203, 117, 0.2);
    box-shadow: 0 2px 3px -1px rgb(201, 239, 198);
  }
}
</style>