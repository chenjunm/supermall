<template>
    <div class="tab-control">
      <div v-for="(item,index) in titles" class="tab-control-item" :class="{active: index === currentIndex}" @click="current_Index(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
      props:{
          titles:{
            type:Array,
            default() {
              return [];
            }
          }
      },
      data(){
        return {
          currentIndex:0
        }
      },
      methods:{
        current_Index(index){
          this.currentIndex = index
          this.$emit('tabClick',index)
        }
    }
    }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 44px;
  line-height: 44px;
  z-index: 9;
}
  .tab-control-item{
    flex: 1;

  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: #ff8198 1px solid;
    padding: 5px;
  }
</style>
