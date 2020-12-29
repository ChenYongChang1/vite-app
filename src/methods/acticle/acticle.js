/**
 * acticle 方法
 */
import { computed, reactive, ref } from "vue";
import axios from "/@/axios";
export function Acticle({ word }) {
  // constructor({ word }) {
  this.state = reactive({
    word,
    page: 1,
    length: 0,
    pageSize: 30,
    acticleList: [],
  });
  //   获取数据
  this.getActicleList = async () => {
    const params = {
      db: "juejin",
      table: "acticle",
      jsonMessage: {
        "article_info.title": this.state.word,
      },
      type: "模糊查询",
      page: this.state.page,
      pageSize: this.state.pageSize,
    };
    const res = await axios.post(
      "http://106.14.212.56/api/query/getdata",
      params
    );
    const { data = {} } = res;
    if (this.state.page === 1) {
      this.state.acticleList = data.Data;
      this.state.length = data.length
    } else {
      this.state.acticleList = this.state.acticleList.concat(data.Data);
    }
  };
  this.loadMore = () => {
    if (this.state.length > this.state.acticleList.length) {
      this.state.page++;
      this.getActicleList();
    }
  };

  this.getActicleList();
}

/**
 * 排序
 */
export function SortActicle(acticleClass) {
  const { state } = acticleClass;
  this.sortId = ref(0);
  this.sortList = [
    { id: 1, name: "查看", key: "article_info.view_count" },
    { id: 2, name: "时间", key: "article_info.ctime" },
  ];
  // 获取值
  const getSortValue = (row, sortObj) => {
    const sortKey = sortObj.key.split(".");
    return sortKey.reduce((data, item) => {
      return data[item];
    }, row);
  };
  // 排序方式改变后 改变列表
  this.acticleList = computed(() => {
    if (this.sortId.value === 0) {
      return state.acticleList;
    }

    const sortObj = this.sortList.find((item) => item.id === this.sortId.value);
    return state.acticleList.sort((a, b) => {
      return getSortValue(b, sortObj) - getSortValue(a, sortObj);
    });
  });

  this.sortMethods = (sortId) => {
    this.sortId.value = sortId;
    console.log(state);
    // 通过计算属性改变list
  };
}
