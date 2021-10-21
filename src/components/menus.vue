<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 23:31:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-10-22 02:02:58
-->
<template>
  <div class="menu-1 main-contet">
    <ul class="flex align-center">
      <li
        class="flex align-center"
        :class="state.currindex===index?'curr':''"
        v-for="(item,index) in menuLists.linkmenu1"
        @click="showMenuFn(index)"
      >
        <i :class="item.icon" class="margin_right_10"></i>
        {{item.label}}
      </li>
    </ul>
  </div>
  <div class="bg3">
    <div class="menu-2 main-contet flex align-center">
      <ul class="flex" v-for="(item,index) in menuLists.linkmenu2" @click="showMenuFn(index,2)">
        <li class="button" :class="state.currindex2===index?'curr':''">{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
const state = reactive({ currindex: 0, currindex2: 0 });
const store = new useStore();
const menuLists = store.state.common.menu;
let showMenuFn = (i, type) => {
  console.log(i);
  if (type == 2) {
    state.currindex2 = i;
  } else {
    state.currindex = i;
  }
};
</script>
<style lang="scss" scoped>
.menu-1 {
  ul {
    height: 60px;
    li {
      height: 100%;
      margin-right: 40px;
      box-sizing: border-box;
      cursor: pointer;
      border-bottom: 2px solid $uni-bg-color;
    }
    li:hover {
      border-bottom: 2px solid $uni-active-color;
    }
    li.curr {
      color: $uni-active-color;
      border-bottom: 2px solid $uni-active-color;
    }
  }
}
.menu-2 {
  height: 50px;
  .button {
    padding: $uni-padding-sm;
    border-radius: $uni-border-radius-base;
    line-height: 1;
    font-size: $uni-font-size-base;
    margin-right: $uni-spacing-row-base;
    cursor: pointer;
  }
  .button.curr {
    background: $uni-bg-color;
    box-shadow: var(--el-box-shadow-base);
  }
}
</style>
