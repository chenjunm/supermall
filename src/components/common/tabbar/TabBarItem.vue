<template>

  <div class="tab-bar-item" @click="foundPath">
    <div v-if="!isActive">
      <slot name="tab-bar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-icon-active"></slot>
    </div>
<!--    <div :class="{active:isActive}">-->
    <div :style="activeColor">
      <slot  name="tab-bar-text"></slot>
    </div>

<!--    <img src="../../assets/img/tabbar/home.svg" alt="">-->
<!--    <div>首页</div>-->
  </div>

</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
          path:String,
          activecor:{
            type:String,
            default:'#008c8c'
          }
        },
        data(){
          return {
            // isActive: false
          }
        },
        computed:{
          isActive(){
            return this.$route.path.indexOf(this.path) !=-1
          },
          activeColor(){
            return this.isActive ? {color:this.activecor}:{}
          }
        },
        methods:{
          foundPath(){
            this.$router.replace(this.path)
          }
        }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    margin-top: 3px;
    vertical-align: middle;
    width: 24px;
    height: 24px;
  }
  /*.active{*/
  /*  color: #008c8c;*/
  /*}*/

</style>
