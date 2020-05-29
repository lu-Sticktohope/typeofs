<template>
  <div class="home">
    <el-container>
      <el-header height="60px">
        <div class="home_header_container">
          <SortComponent/>
        </div>
      </el-header>
      <el-container>
        <el-aside width="25%">
          <div class="home_aside_container">
            <FilterComponent/>
          </div>
        </el-aside>
        <el-main>
          <div class="home_main_container">
            <el-row :gutter="10">
              <el-col v-for="(item,index) in listItem"
              :key="index"
              :lg="6"
              :md="6"
              :sm="8"
              :xs="24"
              >
                <StoreItemComponent :item="item"/>
              </el-col>
            </el-row>
          </div>
          <div class="home_main_loading_container" 
          v-customShow="isLoading">
            <div class="home_main_loading_wrapper">
              <img src="../assets/loading.gif"/>
            </div>
          </div>
        </el-main>
        <!-- <el-footer v-show="isLoading"> -->
        
        <!-- </el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SortComponent from "../components/SortComponent";
import FilterComponent from "../components/FilterComponent";
import StoreItemComponent from "../components/StoreItemComponent";

export default {
  name: 'Home',
  components: {
    SortComponent,
    FilterComponent,
    StoreItemComponent
  },
  data(){
    return{
      height:document.documentElement.scrollHeight,
      windowHeight:document.documentElement.clientHeight,
      page:1
    }
  },
  computed:{
    listItem:function(){
      return this.$store.state.homeModule.showListItem
    },
    isLoading:function(){
      return this.$store.state.homeModule.isLoading
    }
  },
  directives:{
    customShow:{
      bind(){

      },
      inserted(el,binding){
        if(binding.value){
          el.style.visibility = "visible"
        }else{
          el.style.visibility  = "hidden"
        }
      },
      update(el,binding){
        if(binding.value){
          el.style.visibility = "visible"
        }else{
          el.style.visibility  = "hidden"
        }
      }
    }
  },
  //生命周期
  mounted(){
    //注意：不是路径，是模块名称
    this.$store.dispatch("homeModule/initData");

    if(this.height <= this.windowHeight){
      this.$store.dispatch("homeModule/changeLoadingStatus",true)
      // this.page++;
      this.$store.dispatch("homeModule/getMoreData",++this.page);
    }

    window.addEventListener("scroll",()=>{
      // 页面总高度 - 可是区域高度  - 底部滚动高度
      //滚动距离
      var scrollOffset = document.documentElement.scrollTop;
      //页面总高度
      this.height = document.documentElement.scrollHeight;
      //可视区域高度
      this.windowHeight = document.documentElement.clientHeight;
      //距离页面底部小于20px
      var offset = this.height-this.windowHeight-scrollOffset
  
      if(offset == 0){
        this.$store.dispatch("homeModule/changeLoadingStatus",true)
        window.console.log("页面即将滚动到底部");
        this.$store.dispatch("homeModule/getMoreData",++this.page);
      }
    })
  }
}
</script>

<style scoped>
 .el-header, .el-footer {
    /* background-color: #B3C0D1; */
    color: #333;
  }
  
  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    text-align: center;

  }
  
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

  .home_header_container
  {
    width: 100%;
    height: 60px;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .home_aside_container
  {
    width: 100%;
    /* height: 500px; */
    /* background-color: red; */
  }

  .home_main_container
  {
    width: 100%;
    /* height: 1500px; */
    /* background-color: yellow; */
    /* padding-bottom: 100px; */
  }

  .home_main_loading_container
  {
    width: 100%;
    height: 30px;
    /* background-color: blue; */
    /* position: fixed;
    left: 0px;
    bottom: 0px; */
  }

  .home_main_loading_wrapper
  {
    width: 100%;
    height: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
 
</style>
