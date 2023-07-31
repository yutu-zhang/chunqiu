<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { TabsProps } from 'naive-ui'
import { productsList, advantageListData } from './const'
const placement = ref('bottom')
const advantageList = ref()

onMounted (() => {
    advantageList.value = advantageListData
})
</script>
<template>
<div class="home-wrap">
    <!-- 关于我们 -->
    <div class="about-wrap has-bgc-img-wrap">
        <div class="mask"></div>
        <div class="wrap">
            <div class="statistics">
                <div>
                    <div><span>16</span> 年</div>
                    <div>深耕行业</div>
                </div>
                <div>
                    <div><span>5</span> +</div>
                    <div>国家级平台设计</div>
                </div>
                <div>
                    <div><span>10</span> +</div>
                    <div>定制化技术支持</div>
                </div>
            </div>
            <div class="title-wrap">
                <div class="ch">关于我们</div>
                <div class="en">ABOUT US</div>
            </div>
            <div class="content">
                将现代装备制造与生物繁育的环境控制技术相结合，专注于环境试验设施的高效、节能，以及智能控制设备的研发、设计、制造、安装为一体的科技型企业。
            </div>
            <div class="more">
                <n-button color="rgb(74,179,68)" type="primary" strong>
                    <router-link to="/about">查看更多</router-link>
                </n-button>
            </div>
        </div>
    </div>
    <!-- 产品与服务 -->
    <div class="products-wrap">
        <div class="title-wrap">
            <div class="ch">产品与服务</div>
            <div class="en">PRODUCTS AND SERVICES</div>
        </div>
        <div class="content">
            <n-tabs type="line" trigger="hover" :placement="placement" animated>
                <n-tab-pane
                    v-for="item in productsList"
                    :key="item.id"
                    :name="item.title"
                    :tab="item.title"
                >
                    <div class="products-wrap-content-img">
                        <div v-for="itemImg in item.images" :key="itemImg.id">
                            <img :src="itemImg.img" alt="">
                        </div>
                    </div>
                </n-tab-pane>

            </n-tabs>
        </div>
        <div class="more">
            <n-button color="rgb(74,179,68)" type="primary" strong>查看更多</n-button>
        </div>
    </div>
    <!-- 项目优势 -->
    <div class="advantage-wrap has-bgc-img-wrap">
        <div class="mask"></div>
        <div class="wrap">
            <div class="title-wrap">
                <div class="ch">项目优势</div>
                <div class="en">ADVANTAGE</div>
            </div>
            <div class="content-wrap">
                <div class="content-item" v-for="item in advantageList" :key="item.id">
                    <img :src="item.img" />
                    <div class="title">{{ item.title }}</div>
                    <div class="content">{{ item.content }}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped lang="scss">
.home-wrap {
    color: #222;
    font-size: 30px;
  .advantage-wrap, .about-wrap, .products-wrap, .advantage-wrap {
    width: 100%;
    .title-wrap {
        font-size: 36px !important;
        margin-bottom: 10px;
        .en {
            font-size: 24px !important;
        }
    }
  }
  .about-wrap, .products-wrap, .advantage-wrap {
    .content {
        padding: 20px 0;
        box-sizing: border-box;
    }
    .more {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        button {
            width: 200px;
            height: 60px;
            font-size: 24px;
        }
    }
  }
  .products-wrap {
    padding: 20px 20%;
    box-sizing: border-box;
    &-content-img {
        display: flex;
        justify-content: space-between;
        >div {
            width: 30%;
            height: 300px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
  }
  .has-bgc-img-wrap {
    position: relative;
    >.wrap {
        z-index: 9;
        background-color: rgba(255, 255, 255, .6);
        padding: 20px 20%;
        box-sizing: border-box;
    }
    .mask {
        background-repeat: no-repeat;
        background-size: 100vw 100%;
        height: 100%;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
  }
  .about-wrap .mask {
    background-image: url('/src/assets/image/about/about.jpg');
  }
  .advantage-wrap .mask {
    background-image: url('/src/assets/image/home/background3.jpg');
  }
  .statistics {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 30px 0;
    >div {
        width: 30%;
        border-right: 1px solid #999;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 24px;
        span {
            font-size: 50px;
        }
    }
  }
  .advantage-wrap {
    >.wrap {
        display: flex;
        > .title-wrap {
            margin-top: 40px;
            min-width: 150px;
        }
        >.content-wrap {
            display: flex;
            justify-content: space-between;
            margin-left: 30px;
            .content-item {
                width: 30%;
                background-color: #fff;
                padding: 40px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    width: 70px;
                    height: 70px;
                    margin-bottom: 20px;
                }
                .title {
                    font-size: 30px;
                }
                .content {
                    font-size: 20px;
                }
            }
        }
    }
  }
}
</style>
