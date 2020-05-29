const cartModule = {
  namespaced:true,
  state:() => {
    return{
      cartItems:JSON.parse(localStorage.getItem("cartItem"))||[],
      allChecked:false,
      totalCount:0,
      totalprice:0
    }
  },
  mutations:{
    addItemToCart(state,item){
      let index = state.cartItems.findIndex((element)=>{
        return element._id === item._id;
      })
      if(index != -1){
        state.cartItems[index].count++
      }else{
        item.count = 1;
        item.checked = false;
        state.cartItems.push(item)
      }
      localStorage.setItem("cartItem",JSON.stringify(state.cartItems))
      console.log(state.cartItems)
    },
    updateItemCount(state,item){
      // console.log("=====",state.cartItems)

      state.cartItems.forEach((element)=>{
        if(element._id === item.id){
          element.count = item.count
        }
      })

      state.totalCount = 0;
      state.totalprice = 0;
      state.cartItems.forEach((element)=>{
        if(element.checked){
          state.totalCount+=element.count;
          state.totalprice+=element.salePrice*element.count
        }
      })

      localStorage.setItem("cartItem",JSON.stringify(state.cartItems))
      // console.log(state.cartItems)
    },
    updateItemChecked(state,item){
      state.cartItems.forEach((element)=>{
        if(element._id === item.id){
          element.checked = item.checked
        }
      });

     state.allChecked = state.cartItems.every((element)=>{
        return element.checked === true
      })

      state.totalCount = 0;
      state.totalprice = 0;
      state.cartItems.forEach((element)=>{
        if(element.checked){
          state.totalCount+=element.count;
          state.totalprice+=element.salePrice*element.count
        }
      })
      localStorage.setItem("cartItem",JSON.stringify(state.cartItems))
    },
    updateAllChecked(state,boolean){
      state.allChecked = boolean;
      state.cartItems.forEach((element)=>{
        element.checked = boolean
      });

      state.totalCount = 0;
      state.totalprice = 0;
      state.cartItems.forEach((element)=>{
        if(element.checked){
          state.totalCount+=element.count;
          state.totalprice+=element.salePrice*element.count
        }
      })
      localStorage.setItem("cartItem",JSON.stringify(state.cartItems))
    }
  },
  actions:{
    addItemToCart(context,item){
      context.commit("addItemToCart",item)
    },
    updateItemCount(context,item){
      context.commit("updateItemCount",item)
    },
    updateItemChecked(context,item){
      context.commit("updateItemChecked",item)
    },
    updateAllChecked(context,boolean){
      context.commit("updateAllChecked",boolean)
    }
  },
  modules:{

  }
}

export default cartModule;