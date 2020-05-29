<template>
  <div class="cart_item_container">
    <div class="cart_item_check_container">
      <input type="checkbox" :checked="checked"
      @click="handleClick"/>
    </div>
    <div class="cart_item_image_container">
      <img :src="item.productImage"/>
    </div>
    <div class="cart_item_title_container">{{item.productName}}</div>
    <div class="cart_item_price_container">{{item.salePrice | addCurrencyTag}}</div>
    <div class="cart_item_count_container">
      <el-input-number 
      v-model="num" 
      :min="1"
      @change="handleChange" ></el-input-number>
    </div>
    <div class="cart_item_total_price_container">{{totalPrice | addCurrencyTag}}</div>
    <div class="cart_item_delete_container">
      <button>删除</button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    item:Object
  },
  data(){
    return{
      num:this.item.count,
    }
  },
  computed:{
    totalPrice:function(){
      // window.console.log(this.item)
      return this.item.count*this.item.salePrice
    },
    checked:function(){
      return this.item.checked
    }
  },
  methods: {
    handleChange(value) {
      // window.console.log(value);
      this.$store.dispatch("cartModule/updateItemCount",{id:this.item._id,count:value})
    },
    handleClick(event){
      // window.console.log(event.target.checked)
      var checkStatus = event.target.checked
      this.$store.dispatch("cartModule/updateItemChecked",{id:this.item._id,checked:checkStatus})
    }
  }
}
</script>

<style scoped>
.cart_item_container
{
  width: 100%;
  height: 120px;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.cart_item_check_container
{
  width: 5%;
  height: 120px;
  border: 1px solid yellow;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.cart_item_image_container
{
  width: 10%;
  height: 120px;
  border: 1px solid black;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.cart_item_image_container img
{
  width: 100px;
  height: 100px;
}
.cart_item_title_container
{
  width: 30%;
  height: 120px;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.cart_item_price_container
{
  width: 10%;
  height: 120px;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.cart_item_count_container
{
  width: 20%;
  height: 120px;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.cart_item_total_price_container
{
  width: 12%;
  height: 120px;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.cart_item_delete_container
{
  width: 12%;
  height: 120px;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>