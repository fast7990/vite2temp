<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24">
          <ul
            class="infinite-list"
            v-infinite-scroll="load"
            style="overflow: auto"
          >
            <li
              v-for="(item, index) in news_list_obj.result"
              :key="index"
              class="infinite-list-item"
            >
              <el-image
                style="width: 100px; height: 100px"
                :src="item.picurl"
                fit="cover"
              ></el-image>
              <a
                :href="item.url"
                target="_blank"
                :alt="item.name"
                class="hei"
                >{{ item.name }}</a
              >
              <el-button @click="delitem(index)" size="mini"
                >删除{{ news_list_obj.pass }}</el-button
              >
            </li>
          </ul>
        </el-col>
      </el-row>
      <el-row>
        <router-link
          v-for="(item, index) in menulist"
          :key="index"
          :to="item.path"
        >
          <el-button v-if="item.meta">{{ item.meta.title }}</el-button>
        </router-link>
      </el-row>
    </el-main>
  </el-container>
</template>
<script setup>
import { getWangYiNews } from "@/api";
import {
  reactive,
  getCurrentInstance,
  onMounted,
  onActivated,
  onBeforeMount,
  toRefs,
  toRaw,
  ref,
} from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const { ctx, proxy, appContext } = getCurrentInstance();
const store = new useStore();
const route = useRoute();
const router = useRouter();

const news_list_obj = reactive({
  result: [1],
  count: 0,
});
let menulist = ref([]);
onBeforeMount(() => {
  menulist.value = router.options.routes;
  console.log(menulist, "====111");
});
onMounted(() => {
  getWangYiNews({
    format: "json",
  }).then((res) => {
    news_list_obj.result = [res.data];
  });
  console.log(import.meta.env, "===");
});
onActivated(() => {
  // keeplive，每次执行todo
});
console.log(store.state.user.name, "ppppp");
store.commit("login", 123);
console.log(store.state.user.loginProvider, "ppppp222");
const load = () => {
  news_list_obj.count++;
  // console.log(news_list_obj.count);
};
const openlogin = () => {
  router.push("/login");
};
const delitem = (index) => {
  news_list_obj.result.splice(index, 1);
};
news_list_obj.pass = "12";
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