<template>
  <div class="container">
    <div class="acticle-box jj-flex jj-flex-space">
      <div class="left-acticle" v-infinite-scroll="loadMore">
        <acticle-filter
          :sort-list="sortList"
          :sort-id="sortId"
          :sort-change="sortMethods"
          :search-word="word"
        ></acticle-filter>
        <acticle-list-com
          v-if="acticleList && acticleList.length"
          :acticle-list="acticleList"
          :sort-list="sortList"
        ></acticle-list-com>
      </div>
      <div class="other-remain"></div>
    </div>
  </div>
</template>

<script>
import { watch } from "vue";
import { useRoute } from "vue-router";
import ActicleFilter from "/@/components/acticle/ActicleFilter.vue";
import ActicleList from "/@/components/acticle/ActicleList.vue";
import { Acticle, SortActicle } from "/@/methods/acticle/acticle.js";
export default {
  components: { ActicleListCom: ActicleList, ActicleFilter },
  setup() {
    const router = useRoute();
    // 获取文章
    const acticle = new Acticle(router.params);
    const {
      state: { word },
      getActicleList,
      loadMore,
    } = acticle;
    // 获取前端排序的方法
    const sortObject = new SortActicle(acticle);
    const { sortList, sortId, acticleList, sortMethods } = sortObject;
    // watch(
    //   () => router.path,
    //   (newVal) => {
    //     acticle.state.word = newVal
    //     acticle.state.page = 1;
    //     getActicleList();
    //   }
    // );
    return {
      getActicleList,
      loadMore,
      word,
      acticleList,
      sortMethods,
      sortList,
      sortId,
    };
  },
};
</script>

<style lang="scss" scoped>
.acticle-box {
  width: 960px;
  //   max-height: 100vh;
  margin: auto;
  .left-acticle {
    width: 700px;
    background: white;
  }
  .other-remain {
    width: 200px;
  }
}
</style>
