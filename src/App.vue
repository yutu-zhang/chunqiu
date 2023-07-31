<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRoute, useRouter, Router, RouterLink } from 'vue-router'
import LogoView from '@/components/logo/index.vue'
import BannerView from '@/components/homeBanner/index.vue'
import BottomBarView from '@/components/bottomBar/index.vue'
import { TabsType } from '@/const/enum';
import routes from '@/router/routes/modules';

const router = useRouter()
const route = useRoute()
const activeName = ref<string>('/home')
const routerList = ref<any[]>([]);

onMounted(()=>{
  routerList.value = routes
})
watch(
  () => route?.path,
  (newPath) => {
    nextTick(() => {
      activeName.value = newPath
    })
  },
  { immediate: true }
);
const handleTabsClick = (paneName: any) => {
  activeName.value = paneName
}
</script>
<template>
  <div class="app-wrap">
    <!-- logo -->
    <LogoView />
    <!-- 网页top （tabs, banner等）-->
    <BannerView :activeName="activeName" :routerList="routerList" @clickToPage="handleTabsClick" />
    <div class="page-content-wrap">
      <router-view></router-view>
    </div>
    <BottomBarView />
  </div>
</template>
<style>
body, html, .app-wrap {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
* {
  padding: 0;
  margin: 0;
}
a {
    font-size: 30px;
    color: #fff;
    text-decoration: none;
}
.app-wrap  {
  min-height: 100vh;
}
.page-content-wrap {
  min-height: calc(100vh - 300px);
  >div {
    width: 100%;
    height: 100%;
    /* padding: 0px 20%; */
    box-sizing: border-box;
  }
}
.width-100vw {
  /* padding: 0 -20%; */
}

</style>
