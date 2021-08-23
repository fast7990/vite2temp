<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 23:31:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-08-22 00:21:13
-->
<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="12">
          <div>
            <el-button>默认按钮</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-button type="success">成功按钮</el-button>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script setup>
import { ref, reactive } from "vue";
const state = reactive({ count: 0 });
const app = ref("0");
const add = () => {
  app.value++;
};
</script>
<style>
.el-main {
  padding: 0px;
}
</style>
