<script setup lang="ts">
import { ref } from "vue";

</script>
<template>
<div class="bottom-wrap">
    <h3>山东春秋环境科技有限公司</h3>
    <div class="content">
        <div class="text">
            <div>联系电话： 0531-87508296</div>
            <div>邮箱： shandongchunqiu@126.com</div>
            <div>联系地址： 山东省济南市市中区机床二厂路1号</div>
        </div>
        <div class="picture">
            <img src="/src/assets/image/admin/company-code.png" alt="">
            <img src="/src/assets/image/admin/company-wechat.jpg" alt="">
        </div>
    </div>
    <div class="copyright">&copy;2023 - 山东春秋环境科技有限公司 版权所有</div>
</div>
</template>
<style scoped lang="scss">
.bottom-wrap {
    width: 100%;
    background: #353535;
    padding: 20px 10%;
    box-sizing: border-box;
    color: #fff;
    h3 {
        font-size: 22px;
    }
    .content {
        padding-top: 40px;
        display: flex;
        color: #ddd;
        justify-content: space-between;
        .picture img {
            margin-left: 20px;
            width: 100px;
            height: 100px;
        }
    }
    .copyright {
        width: 100%;
        color: #ddd;
        text-align: center;
    }
}
</style>
