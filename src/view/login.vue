<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 23:43:58
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-08-22 00:29:28
-->
<template>
  <div>{{ app }}</div>
  <div>{{ab}}</div>
  <div>{{state.count}}</div>
</template>
<script setup>
import { ref, reactive } from "vue";
const state = reactive({ count: 0 });
let app = ref(0);
let ab=1
const add = () => {
  app.value++;
  state.count++
  ab++
};
add();
</script>