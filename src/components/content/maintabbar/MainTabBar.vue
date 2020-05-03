<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activecor="pink">
        <img slot="tab-bar-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="tab-bar-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="tab-bar-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category" activecor="pink">
        <img slot="tab-bar-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="tab-bar-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="tab-bar-text"><router-link to="/category" tag="span">分类</router-link></div>
      </tab-bar-item>

      <tab-bar-item path="/cart" activecor="pink">
        <img slot="tab-bar-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="tab-bar-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="tab-bar-text"><router-link to="/cart" tag="span">购物车</router-link></div>
      </tab-bar-item>

      <tab-bar-item path="/profile" activecor="pink">
        <img slot="tab-bar-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="tab-bar-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="tab-bar-text"><router-link to="/profile" tag="span">我的</router-link></div>
      </tab-bar-item>
    </tab-bar>

  </div>

</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from "components/common/tabbar/TabBarItem.vue";

    export default {
        name: "MainTabBar",
        components:{
        TabBar,
        TabBarItem
        }
    }
</script>

<style scoped>

</style>
