<template>
  <div>
    <CartItemComponent v-for="(item,index) in cartItems"
    :key="index"
    :item="item"/>
    <div class="cart_bottom_info">
      <div>
        <input type="checkbox" :checked="allChecked"
        @click="handleClick"/>
        全选
      </div>
      <div>
        {{`总量：${totalCount}  总价：${totalPrice}`}}
      </div>
    </div>
  </div>
</template>

<script>
import CartItemComponent from "../components/CartItemComponent";

export default {
  components:{
    CartItemComponent
  },
  methods:{
    handleClick(event){
      let allCheckStatus = event.target.checked;
      this.$store.dispatch("cartModule/updateAllChecked",allCheckStatus);
    }
  },
  computed:{
    cartItems:function(){
      return this.$store.state.cartModule.cartItems
    },
    allChecked:function(){
      return this.$store.state.cartModule.allChecked
    },
    totalCount:function(){
      return this.$store.state.cartModule.totalCount
    },
    totalPrice:function(){
      return this.$store.state.cartModule.totalprice
    }
  }
}
</script>

<style scoped>
.cart_bottom_info
{
  width: 100%;
  height: 120px;
  border: 1px solid blue;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
</style>