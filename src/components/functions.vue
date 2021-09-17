<template>
  <div>
    <div class="func-name">
      <i class="iconfont icon-hr"></i>
      <span>热门搜索</span>
      <i class="iconfont icon-hr"></i>
    </div>
    <div class="func-box">
      <div v-for="(item, index) in funcArr" :key="index" class="funcItem" @click="funcChoose(index)">
        <div>{{ item.name }}</div>
      </div>
    </div>
    <div class="bottom-line"></div>
    <func-item :funcCategory="category" v-if="category.length"></func-item>
  </div>
</template>

<script>
import funcItem from "@/components/funcItem.vue";
export default {
  props: {
    funcArr: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      category: this.funcArr[0].list.slice(0, 10),
    };
  },
  components: {
    funcItem,
  },
  mounted() {
    console.log(111, this.funcArr);
    console.log(123, this.category);
  },
  methods:{
      funcChoose(index){
        this.category = this.funcArr[index].list.slice(0, 10)
        console.log(666,this.category)

      }
  }
};
</script>

<style  scoped>
.func-name {
  width: 100px;
  margin: 10px auto;
}
.func-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 15px;
}
.funcItem {
  width: 80px;
  height: 40px;
  border-radius: 10px;
  background-color: orange;
  color: #fff;
  text-align: center;
  line-height: 40px;
  margin-top: 5px;
}
.bottom-line {
  width: 100%;
  height: 5px;
  margin-top: 10px;
  background-color: rgba(128, 128, 128, 0.5);
}
</style>