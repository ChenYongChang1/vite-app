/**
 * vuex
 */

import { inject, provide, reactive, readonly } from "vue";
import { userStore } from "./user/user";
// 用来取值
export const stateSymbol = Symbol("state");

export const createState = () => {
  const state = reactive({ count: 0 });
  const increment = () => state.count++;
  return { state: readonly(state), increment, userStore: userStore() };
};

/**
 * 
 * @param {which} which  哪个store  比如 userStore
 */
export const useState = (which = "") => {
  if (which) {
    return inject(stateSymbol)[which];
  }
  return inject(stateSymbol);
};
export const provideState = () => provide(stateSymbol, createState());
