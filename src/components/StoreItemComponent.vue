<template>
  <div class="store_item_container">
    <div class="store_item_image">
      <img :src="item.productImage"/>
    </div>
    <div class="store_item_title">{{item.productName}}</div>
    <div class="store_item_price">{{item.salePrice | addCurrencyTag}}</div>
    <div class="store_item_submit_button"
    v-on:click="onClick">加入购物车</div>
  </div>
</template>

<script>
export default {
  props:{
    item:Object
  },
  data(){
    return{
      loginStatus:true
    }
  },
  methods:{
    onClick(){
      //弹窗
      // if(this.loginStatus){
      //   this.$confirm('加入购物车成功', '提示', {
      //     confirmButtonText: '前往购物车',
      //     cancelButtonText: '再逛逛',
      //     type: 'success'
      //   }).then(() => {
      //     //点击确定按钮的操作

      //   }).catch(() => {
      //     //  点击取消按钮的操作
      //   });
      // }else{
      //    this.$alert('您还未登录', '提示', {
      //     confirmButtonText: '确定',
      //     callback: () => {
            
      //     }
      //   });
      // }

       this.$confirm('加入购物车成功', '提示', {
          confirmButtonText: '前往购物车',
          cancelButtonText: '再逛逛',
          type: 'success'
        }).then(() => {
          //点击确定按钮的操作
          this.$router.push("Cart")
        }).catch(() => {
          //  点击取消按钮的操作

        });
      this.$store.dispatch("cartModule/addItemToCart",this.item)
    }
  },
  filters:{
  
  }
}
</script>

<style scoped>
.store_item_container
{
   height: 300px;
   border: 1px solid red;
   margin-bottom: 10px;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
}

.store_item_container:hover {
  box-shadow: 0px 2px 10px red;
  transition: all 0.2s ease-in-out;
  transform: translateY(-5px);
}

.store_item_image
{
  width: 94%;
  height: 50%;
}

.store_item_image img
{
  width: 100%;
  height: 100%;
}

.store_item_title
{
  width: 94%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}

.store_item_price
{
  width: 94%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}

.store_item_submit_button
{
  width: 94%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border:1px solid red;
  height: 10%;
}
</style>