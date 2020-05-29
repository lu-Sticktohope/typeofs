<template>
  <div class="filter_container">
    <div class="filter_title">PRICE</div>
    <div class="filter_item">
      <div v-for="(item,index) in items"
      :key="index"
      :class="['filter_item_container',selectIndex===index?'filter_item_active':'filter_item_nomal']"
      v-on:click="onClick(index,item)">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectIndex:0
    }
  },
  methods:{
    onClick(index,item){
     this.selectIndex = index;
     this.$store.dispatch("homeModule/filterItems",item)
    }
  },
  computed:{
    items:function(){
      return this.$store.state.homeModule.filterItems
    }
  }
}
</script>

<style scoped>
.filter_container
{
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

.filter_title
{
  width: 90%;
  height: 40px;
  /* background-color: yellow; */
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
}

.filter_item
{
  width: 90%;
  /* background-color: green; */
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.filter_item_container
{
  width: 100%;
  height: 40px;
  padding: 5px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}

.filter_item_nomal
{
  font-size: 16px;
  color: gray
}

.filter_item_active
{
  font-size: 16px;
  font-weight: 500;
  color: orange;
  border-left: 3px solid orange;
}
</style>