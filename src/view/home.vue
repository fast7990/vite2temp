<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 22:18:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-04 20:05:45
-->
<template>
  <Header/>
  <HelloWorld :time="time"></HelloWorld>
</template>
<script setup>
import HelloWorld from "@/components/HelloWorld";
import Header from "@/components/header";
const time = "111";
</script>

