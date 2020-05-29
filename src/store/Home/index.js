import axios from "axios";

let ascendingSortFnc = function(a,b){
  return a.salePrice-b.salePrice
 }
 let descendingSortFnc = function(a,b){
  return b.salePrice-a.salePrice
 }

const homeModule = {
  namespaced:true,
  state:()=>{
    return{
      filterItems:[],
      listItem:[],//源数据
      isLoading:false,
      sortWay:"Default",
      showListItem:[]//显示数据
    }
  },
  mutations:{
    initData(state,result){
      state.filterItems = result.filter;
      state.listItem = result.list;
      state.showListItem = result.list;
    },
    changeLoadingStatus(state,boolean){
      state.isLoading = boolean
    },
    getMoreData(state,items){
      state.listItem = [...state.listItem,...items];
      state.showListItem = [...state.showListItem,...items];

      if(state.sortWay === "Default"){
        state.showListItem.sort(ascendingSortFnc)
        state.listItem.sort(ascendingSortFnc)
      }else{
        state.showListItem.sort(descendingSortFnc)
        state.listItem.sort(ascendingSortFnc)
      }
      state.isLoading = false;
    },
    sortItems(state,sortWay){
      state.sortWay = sortWay
      if(sortWay === "Default"){
        state.showListItem.sort(ascendingSortFnc)
        state.listItem.sort(ascendingSortFnc)
      }else{
        state.showListItem.sort(descendingSortFnc)
        state.listItem.sort(ascendingSortFnc)
      }
    },
    filterItems(state,filter){
      // {
      //   "title":"ALL",
      //   "low":-1,
      //   "high":-1
      // },
      state.showListItem = [];
      if(filter.title === "ALL"){
        state.showListItem = [...state.listItem];
      }else{
        state.listItem.forEach((element)=>{
          if(element.salePrice > filter.low && element.salePrice <= filter.high){
            state.showListItem.push(element);
          }
        })
      }
    }
  },
  actions:{
    initData(context){
      axios.get("http://localhost:8080/data.json").then((response)=>{
        console.log(response.data)
        context.commit("initData",response.data.result)
      }).catch((error)=>{
        console.log(error)
      })
    },
    getMoreData(context,page){
      if(page > 3){
        context.commit("changeLoadingStatus",false)
        return;
      }
      axios.get(`http://localhost:8080/data${page}.json`).then((response)=>{
        console.log(response.data)
        setTimeout(() => {
          context.commit("getMoreData",response.data.result.list)
        }, 3000);
      }).catch((error)=>{
        console.log(error)
      })
    },
    changeLoadingStatus(context,boolean){
      context.commit("changeLoadingStatus",boolean)
    },
    sortItems(context,sortWay){
      context.commit("sortItems",sortWay);
    },
    filterItems(context,filter){
      context.commit("filterItems",filter)
    }
  },
  modules:{

  }
}

export default homeModule