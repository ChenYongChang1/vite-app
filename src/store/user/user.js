import { reactive, readonly } from "vue";

export let _user = {};

export const createUserStore = () => {
  const state = reactive({
    userInfo: {
      name: "快乐的美羊羊",
      age: 18,
    },
  });
  const setUserInfo = (info) => (state.userInfo = info);
  return { state: readonly(state), setUserInfo };
};

export const userStore = () => {
  _user = createUserStore();
  return _user;
};
