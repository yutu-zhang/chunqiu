<script setup lang="ts">
import LogoView from '@/components/logo/index.vue'
import BannerView from '@/components/homeBanner/index.vue'
import BottomBarView from '@/components/bottomBar/index.vue'

</script>
<template>
  <div>
    <!-- logo -->
    <LogoView />
    <!-- 网页top （banner等）-->
    <BannerView />
    <div>

    </div>
    <!-- 底栏 -->
    <BottomBarView />
  </div>
</template>
<style>
body,html {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
* {
  padding: 0;
  margin: 0;
}
</style>
