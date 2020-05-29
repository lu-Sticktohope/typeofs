

const tempModule = {
  namespaced:true,
  state:()=>{
    return{

    }
  },
  mutations:{

  },
  actions:{
    initData(){
     console.log("我是temp模块的action")
    }
  },
  modules:{

  }
}

export default tempModule