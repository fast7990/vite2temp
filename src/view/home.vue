<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-09-19 10:17:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-10-22 01:00:33
-->
<template>
  <Header></Header>
  <Menus></Menus>
</template>
<script>
import {
  reactive,
  getCurrentInstance,
  onMounted,
  onActivated,
  onBeforeMount,
  toRefs,
  toRaw,
  ref
} from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import Header from "@/components/header.vue";
import Menus from "@/components/menus.vue";
export default {
  components: {
    Header,
    Menus
  },
  setup(props) {
    const { ctx, proxy, appContext } = getCurrentInstance();
    const store = new useStore();
    const route = useRoute();
    const router = useRouter();

    const news_list_obj = reactive({
      result: [1],
      count: 0
    });
    let menulist = ref([]);
    onBeforeMount(() => {
      menulist.value = router.options.routes;
      console.log(menulist, "====111");
    });
    onMounted(() => {
      // console.log(import.meta.env, "===");
    });
    onActivated(() => {
      // keeplive，每次执行todo
    });
  }
};
</script>
<style scoped lang="scss">
.infinite-list {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
}
.hei {
  color: $color;
}
</style>