<script setup lang="ts">;
import { NCarousel } from 'naive-ui';
import { ref, nextTick } from "vue";
import { TabsType } from '../../const/enum';

const bannerList = ref([
    { id: 1, tip: 'ENIRONMENTAL CONTROL', title1: '科技春秋', title2: '万法自然', content: '用科技为生物实验提供贴近自然的最优方案', img: '/src/assets/image/home_banner1.jpg'},
    { id: 2, tip: 'LOCALIZATION SERVICE', title1: '脚踏实地', title2: '顿本务实', content: '致力于低碳、高效、稳定的本土化产品定制服务', img: '/src/assets/image/home_banner1.jpg'},
])
const tabsList = ref([
    { id: 10, type: 1, title: '首页' },
    { id: 11, type: 2, title: '关于春秋' },
    { id: 12, type: 3, title: '产品与服务' },
    { id: 13, type: 4, title: '合作发展' },
    { id: 14, type: 5, title: '新闻资讯' },
    { id: 15, type: 6, title: '联系我们' }
])
const activeName = ref<TabsType>(TabsType.HOME)

const handleTabsClick = ({ paneName }: any) => {
   nextTick(() => {
    console.log(paneName,111,  activeName.value)
   })
}
</script>
<template>
    <div class="banner-wrap">
        <n-carousel autoplay show-arrow draggable v-if="activeName === TabsType.HOME">
            <div class="banner-wrap-item"
                v-for="item in bannerList"
                :key="item.id"
                :style="`background-image:url(${item.img})`">
                <div class="text-wrap">
                    <div class="tip">{{ item.tip }}</div>
                    <div>
                        <div class="title title-1">{{ item.title1 }}</div>
                        <div class="title title-2">{{ item.title2 }}</div>
                    </div>
                    <div class="content">{{ item.content }}</div>
                </div>
            </div>
        </n-carousel>

        <div class="tab-wrap">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleTabsClick">
                <el-tab-pane
                    v-for="item in tabsList"
                    :key="item.id"
                    :label="item.title"
                    :name="item.type"
                ></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<style scoped lang="scss">
.banner-wrap {
    height: 100vh;
    .banner-wrap-item {
        background-repeat: no-repeat;
        background-size: 100vw 100vh;
        width: 100%;
        height: 100vh;
        padding-top: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        .text-wrap {
            width: 70%;
            height: 50%;
            padding: 100px 150px;
            box-sizing: border-box;
            color: #fff;
            position: relative;
            margin-top: 140px;
            .tip {
                position: absolute;
                top: 0;
                left: 0;
                height: 50px;
                line-height: 50px;
                font-size: 40px;
                padding-left: 20px;
                border-left: 10px solid #fff;
            }
            .title {
                padding: 20px;
                font-size: 60px;
            }
            .title-1 {
                margin-top: 20px;
            }
            .title-2 {
                margin-left: 200px;
            }
            .content {
                width: 100%;
                padding: 50px 0 0 0;
                text-align: center;
                font-size: 24px;
            }
        }
    }

    .tab-wrap {
        position: absolute;
        top: 20%;
        right: 15%;
        :deep() {
            .el-tabs__item {
                font-size: 30px;
                margin-bottom: 20px;
                color: #fff;
            }
            .el-tabs__item:hover {
                color:#4cb050 !important;
            }
            .el-tabs__nav-wrap::after {
                display: none !important;
            }
            .is-active, .el-tabs__active-bar {
                color:#4cb050 !important;
            }
            .el-tabs__active-bar {
                background-color:#4cb050 !important;
            }
        }
    }
}
</style>
