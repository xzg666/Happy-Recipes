<template>
  <div>
    <div v-if="cookArr.length">
      <div v-for="(item, index) in cookArr" :key="index" class="cookbox">
        <div class="produce clearfix">
          <div class="fl produce-img-box">
            <img :src="item.pic" class="produce-img" />
          </div>
          <div class="prodeuce-txt fl">
            <p class="cook-name">{{ item.name }}</p>
            <div class="cook-index">
              <span>{{ item.preparetime }}</span>
              <span style="margin-left: 20%">{{ item.peoplenum }}</span>
            </div>
            <div class="cook-content">
              {{ item.content }}
            </div>
          </div>
        </div>
        <div class="cook-step">
            <div v-for="(stepitem,index) in item.process" :key="index" class="clearfix">
                <div class="step-pic fl">
                    <img :src="stepitem.pic"/>
                </div>
                <div>{{stepitem.pcontent}}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cookArr: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    console.log(999, this.cookArr);
  },
};
</script>

<style  scoped>
.cookbox{
    border: gray 2px solid;
    margin-bottom: 20px;
}
.produce {
  width: 100%;
  height: auto;
  font-size: 13px;
  border-bottom: gray 3px dashed;
}
.produce-img-box {
  width: 48%;
}
.produce-img {
  width: 90%;
  height: 150px;
  border-radius: 20%;
}
.prodeuce-txt {
  width: 48%;
  height: 150px;
}
.cook-name {
  width: 100%;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cook-index {
  width: 100%;
  height: 15px;
  color: gray;
  margin-top: 5px;
}
.cook-content {
  width: 100%;
  font-size: 14px;
  margin-top: 4px;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
.cook-step{
    width: 98%;
    height: auto;
    margin: 10px auto;
}
.step-pic{
    width: 45%;
}
.step-pic img {
    width: 95%;
    height: 100px;
    border-radius: 20%;
}
</style>