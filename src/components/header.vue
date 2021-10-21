<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 23:31:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-10-22 01:01:05
-->
<template>
  <div class="header flex flex1 align-center justify-between">
    <div class="left flex">
      <img class="img" src="../assets/img/logo.png" alt>
      <div class="title flex align-center">
        Nor-Shipping2019
        <span class="flex flex-column arrow margin_left_15">
          <i class="el-icon-arrow-up"></i>
          <i class="el-icon-arrow-down"></i>
        </span>
      </div>
    </div>
    <div class="right flex">
      <ul class="list flex padding_right_20" @mouseleave="showAvatarFn(false)">
        <li class="item flex align-center flex-column" v-for="(item,index) in menuLists.top">
          <span>{{item.label}}</span>
          <span>{{item.num}}</span>
        </li>
      </ul>
      <div class="avatar flex align-center" :class="state.show_avatar?'hover':''">
        <div class="box flex align-center padding_left_20">
          <img src="../assets/img/img (158).jpg" class="margin_right_10" alt>
          <div @mouseover.stop="showAvatarFn(true)">
            <i :class="state.show_avatar?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
          </div>
        </div>
        <div class="popubox" v-if="state.show_avatar" @mouseleave="showAvatarFn(false)">
          <ul>
            <li v-for="(item,index) in menuLists.setmenu">{{item.label}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
const state = reactive({ show_avatar: false });
const store = new useStore();
const menuLists = store.state.common.menu;
let showAvatarFn = flag => {
  console.log(flag);
  state.show_avatar = flag;
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  height: 80px;
  border-bottom: 1px solid $uni-border-color;
  padding: 0 90px 0 28px;
  .left {
    .img {
      width: 60px;
      height: 32px;
      margin-right: 27px;
    }
    .title {
      font-size: $uni-font-size-lg;
    }
    .arrow {
      i {
        font-weight: 800;
      }
      font-size: $uni-font-size-sm;
    }
  }
  .right {
    .list {
      .item {
        position: relative;
        height: 40px;
        padding-left: 11px;
        padding-right: 33px;
        span:nth-child(1) {
          font-size: $uni-font-size-sm;
          color: $uni-text-color-grey;
        }
        span:nth-child(2) {
          font-size: $uni-font-size-lg;
        }
      }
      .item:before {
        position: absolute;
        content: " ";
        height: 100%;
        width: 3px;
        background-color: $uni-bg-color-1;
        border-radius: 3px;
        left: 0;
      }
    }
    .avatar {
      height: 85px;
      position: absolute;
      right: 0;
      top: 0;
      i {
        font-size: $uni-font-size-sm;
        color: $uni-text-color-grey;
        font-weight: 800;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .box {
        position: absolute;
        height: 85px;
        right: 0;
        padding-right: 28px;
      }
    }
    .avatar.hover .box {
      background: $uni-bg-color;
      border-left: 1px solid $uni-border-color;
      z-index: 1;
    }
    .popubox {
      width: 168px;
      position: absolute;
      right: 0;
      top: 84px;
      background: $uni-bg-color;
      border: 1px solid $uni-border-color;
      z-index: 0;
      ul {
        li {
          height: 43px;
          line-height: 43px;
          padding-left: 15px;
          cursor: pointer;
          font-size: $uni-font-size-base;
        }
        li:hover {
          background: $uni-bg-color-hover;
        }
      }
    }
  }
}
</style>
