<template>
  <div class="acticle-list">
    <user-acticle-item
      v-for="(item, index) in acticleList"
      :key="`user-acticle-${index}`"
      :user-row="item"
    ></user-acticle-item>
  </div>
</template>

<script>
// import { defineAsyncComponent } from "vue";
import UserActicleItem from "/@/components/acticle/UserActicleItem.vue";
export default {
  name: "ActicleList",
  components: {
    UserActicleItem,
    /* defineAsyncComponent({
      loader: () => import("/@/components/acticle/UserActicleItem.vue"),
      delay: 200,
      timeout: 3000,
      // error: ErrorComponent,
      // loading: LoadingComponent,
    }),
    */
  },
  props: {
    acticleList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.acticle-list {
  width: 100%;
}
</style>
