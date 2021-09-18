<template>
  <div>
    <div  @click="back">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <detail-cook :cookArr="detailArr"></detail-cook>
  </div>
</template>

<script>
import DetailCook from './detailChild/DetailCook.vue'
export default {
  data() {
    return {
      detailArr: [],
    };
  },
  methods: {
    detailCook() {
      this.$axios
        .get("/api/detail", {
          params: { id: this.$route.query.id, appkey: "4005c1e92dfb3876" },
        })
        .then((res) => {
          console.log(666, res);
          let result = res.data.result;
          if (res.data.status == 0) {
            this.detailArr.push(result);
          }
          console.log(456,this.detailArr)
        });
    },
    searchLoad() {
      this.$axios
        .get("/api/search", {
          params: {
            keyword: this.$route.params.keyword,
            appkey: "4005c1e92dfb3876",
            num: 10,
          },
        })
        .then((res) => {
          console.log(777, res);
          let list = res.data.result.list;
          if (res.data.status == 0) {
            this.detailArr = list;
          }
          // console.log(456,this.detailArr)
        });
    },
    back() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.detailCook();
    this.searchLoad();
  },
  components:{
      DetailCook
  }
};
</script>

<style scoped>
.icon-fanhui{
    font-size: 22px;
}
</style>