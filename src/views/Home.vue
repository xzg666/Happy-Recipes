<template>
  <div>
      <div class="back-ground">
        <div class="searchbox clearfix">
          <div class="fl twocode"><i class="iconfont icon-saoma"></i></div>
          <input v-model="inValue" class="input-name fl" placeholder="红烧排骨"/>
          <div class="search fl"><i class="iconfont icon-sousuo"></i></div>
        </div>
        <functions :funcArr="info" v-if="info.length"></functions>
      </div>
  </div>
</template>

<script>
 import functions from '@/components/functions.vue'
  export default {
    data(){
      return{
        inValue:'',
        info:[]
      }
    },
    mounted(){
      this.loadData()
    },
    methods:{
      loadData(){
        this.$axios.get("/api/class",{params:{appkey:"4005c1e92dfb3876"}}).then((res)=>{
          console.log(res)
          this.info = res.data.result


        })
      }
    },
    components:{
      functions
    }
  }
</script>

<style  scoped>
.back-ground{
  width: 100%;
  height: 100vh;
  background-color: antiquewhite;
  padding-top: 10px;
}
.searchbox{
  width: 100%;

}
.input-name{
  width: 60%;
  height: 30px;
  border: 0;
  outline: none;
  border-radius: 10px 0 0 10px;
  padding-left: 5%;
  box-sizing: border-box;
  margin-left: 30px;
}
.icon-saoma{
  font-size: 22px;
  color: gray;

}
.twocode{
  margin:4px 0 0 2%;
}
.icon-sousuo{
  font-size: 20px;
  color: #fff;
}
.search{
  width: 10%;
  height: 30px;
  background-color: orange;
  border-radius: 0 10px 10px 0;
  text-align: center;
  line-height: 30px;
}
</style>
