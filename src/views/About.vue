<template>
  <div>
    <div class="fl">
      <div v-for="(item, index) in nameArr" :key="index" style="120px">
        <div class="name-box" @click="detail(index)">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="fr" @click="back">
      <i class="iconfont icon-fanhui"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classid: this.$route.query.classid,
      nameArr: [],
    };
  },
  methods: {
    categoryDetail() {
      this.$axios
        .get("/api/byclass", {
          params: {
            appkey: "4005c1e92dfb3876",
            num: 10,
            start: 0,
            classid: this.$route.query.classid,
          },
        })
        .then((res) => {
          let data = res.data;
          if (data.status === 0) {
            this.nameArr = data.result.list.slice(0, 10);
          }
          console.log(789,this.nameArr)
        });
    },
    back(){
      this.$router.push('/')
    },
    detail(index){
      console.log(index)
      this.$router.push('/detail?id='+this.nameArr[index].id)
      
    }
  },
  mounted() {
    this.categoryDetail();
    
  },
};
</script>

<style  scoped>
.name-box {
  width: 120px;
  height: 50px;
  background-color: lightcoral;
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
}
.icon-fanhui {
  font-size: 30px;
}
</style>
