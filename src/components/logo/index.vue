<script setup lang="ts">
</script>
<template>
    <div class="logo-wrap">
      <div class="logo">
        <img src="/src/assets/image/logo.png" alt="">
        <span>山东春秋环境科技有限公司</span>
        <div class="label">Shandong Chunqiu Environmental Technology Co. LTD</div>
      </div>
    </div>
</template>
<style scoped lang="scss">
.logo-wrap {
    position: absolute;
    z-index: 9;
    padding: 30px 150px;
    box-sizing: border-box;
    color: #fff;
    .logo {
        display: flex;
        align-items: center;
        position: relative;
        img {
            z-index: 11;
            width: 100px;
        }
        >span {
            font-size: 50px;
            font-weight: 500;
            padding-left: 20px;
        }
        .label {
            position: absolute;
            right: 0;
            top: 90px;
            font-size: 20px;
        }
    }

}
</style>
