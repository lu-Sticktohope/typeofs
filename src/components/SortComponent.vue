<template>
  <div class="sort_container">
    <div class="sort_way">
      <div>Sort By:</div>
      <div>{{sortWay}}</div>
    </div>
    <div class="sort_button"
    v-on:click="onClick">
      <div>Price</div>
      <div>
        <i :class="sortWay==='Default'?'el-icon-top':'el-icon-bottom'"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
     
    }
  },
  computed:{
    sortWay:function(){
      return this.$store.state.homeModule.sortWay
    }
  },
  methods:{
    onClick(){
      var tempWay = this.sortWay
      if(this.sortWay === "Default"){
        tempWay = "highToLow"
      }else{
        tempWay = "Default"
      }
      this.$store.dispatch("homeModule/sortItems",tempWay)
    }
  }
}
</script>

<style scoped>
.sort_container
{
  width: 200px;
  /* border: 1px solid green; */
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}

.sort_way
{
  width: 140px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}

.sort_button
{
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>