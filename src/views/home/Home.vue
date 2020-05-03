<template>
  <div id="home">
    <nav-bar class="home_nav" id="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper v-bind:banners="banners"></home-swiper>
    <recommend-view v-bind:recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" v-bind:titles="['流行','新款','精选']" @tabClick="btnClick"></tab-control>
    <goods-list v-bind:goods="showImage"></goods-list>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childrenComps/HomeSwiper";
  import RecommendView from "views/home/childrenComps/RecommendView";
  import FeatureView from "./childrenComps/FeatureView";
  import TabControl from "components/content/TabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import {getHomeImg} from "assets/myimg/img";
  import {getHomeMultidata,getHomeGoods} from 'network/home.js';

    export default {
      name: "Home",
      components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,

      },
      data(){
        return {
          banners:[],
          recommends:[],
          goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]},
          },
          currendIndex:'pop'
        }
      },
      created() {
        this.getHomeMultidata()
        // this.goods['pop'].list.push(...myimg)

        // this.getHomeGoods('pop')
        // this.getHomeGoods('new')
        // this.getHomeGoods('sell')

        this.getHomeImgData('pop')
        this.getHomeImgData('new')
      },
      methods:{
        //网络相关
        getHomeMultidata(){
          getHomeMultidata().then(res =>{
            console.log(res);
            this.banners = res.data.data.banner.list;
            this.recommends = res.data.data.recommend.list;
          })
        },
        getHomeGoods(type){
          const page = this.goods[type].page+ 1
          // getHomeGoods(type,page).then(res =>{
            // console.log("goodgood"+res.data);
            // this.goods[type].list.push(...res.data.list)
          if(type === 'pop'){
            this.goods[type].list.push(...myimg.pop)
          }else if(type === 'new'){
            this.goods[type].list.push(...myimg.new)
          }else if(type === 'sell'){
            this.goods[type].list.push(...myimg.sell)
          }

          // })
        },
        //自己写的
        getHomeImgData(type){
          const page = this.goods[type].page+ 1
          const res = getHomeImg(type)[type]
          this.goods[type].list.push(...res)
        },
        //事件监听
        btnClick(index){
            switch (index) {
              case 0: this.currendIndex = 'pop'
                    break
              case 1: this.currendIndex = 'new'
                    break
              case 2: this.currendIndex = 'sell'
                    break
              default:this.currendIndex = 'pop'
            }
        }
      },
      computed:{
        showImage(){
          return this.goods[this.currendIndex].list
        }
      }
    }
</script>

<style scoped>
  #home_nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  #home{
    padding-top: 44px;
  }
.home_nav{
  background-color: var(--color-tint);
  color: #ffffff;
}
  .tab-control{
    position: sticky;
    top: 44px;
    background-color: #ffffff;
  }
</style>
