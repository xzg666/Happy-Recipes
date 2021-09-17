<template>
  <div>
    <div class="categorybox">
      <div v-for="(item, index) in funcCategory" :key="index">
        <div class="categoryItem" @click="cateDetail(index)">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    funcCategory: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
      cateDetail(index){
          console.log(index)
          console.log(this.funcCategory)
          this.classid = this.funcCategory[index].classid
          this.$router.push('/about?classid='+this.classid)
      }
  },
  data(){
      return{
          classid:0,
      }
  }
};
</script>

<style  scoped>
.categoryItem {
  width: 150px;
  height: 60px;
  background-color: lightcoral;
  text-align: center;
  line-height: 60px;
  margin-top: 15px;
  border-radius: 20px;
}
.categorybox {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>