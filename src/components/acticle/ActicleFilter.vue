<template>
  <div class="acticle-filter jj-flex jj-flex-start jj-align-center">
    <div
      v-for="(item, index) in sortList"
      :key="`filter-item-${index}`"
      class="filter-item jj-pointer font-12"
      :class="item.id === sortId ? 'active' : ''"
      @click="sortChange(item.id)"
    >
      {{ item.name }}
    </div>
    <el-input
      type="text"
      placeholder="搜索"
      v-model="acticleName"
      @keydown.enter="searchActicle"
    />
  </div>
</template>

<script>
import { ref, inject, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "ActicleFilter",
  props: {
    sortList: {
      type: Array,
      default: () => [],
    },
    sortId: {
      type: Number,
      default: 1,
    },
    sortChange: {
      type: Function,
      default: () => {},
    },
    searchWord: {
      type: String,
      default: '',
    },
  },
  setup(props, ctx) {
    // const { emit } = ctx;
    console.log(props);
    const router = useRouter();
    const acticleName = ref(props.searchWord || "");
    const searchActicle = () => {
      router.push(`/acticle-${acticleName.value}`);
    };
    return { acticleName, searchActicle };
  },
};
</script>

<style lang="scss" scoped>
.acticle-filter {
  width: 100%;
  height: 47px;
  border: solid 1px rgba(178, 186, 194, 0.15);
  padding: 0 25px;
  .filter-item {
    padding: 0 5px 0 0;
    margin: 0 5px 0 0;
    height: 20px;
    line-height: 20px;
    &:hover {
      color: #007fff;
    }
  }
  .active {
    color: #007fff;
  }
}
</style>
