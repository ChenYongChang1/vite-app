<template>
  <div @click="increment">index {{ state }} {{ userStore }}</div>
</template>

<script>
import { useState } from "/@/store/index";
export default {
  name: "index",
  setup() {
    const { state, increment, userStore } = useState();
    return {
      state,
      increment,
      userStore,
    };
  },
  mounted() {
    this.$axios.post("/web/api/query/getdata", {});
  },
};
</script>

<style></style>
