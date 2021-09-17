<template>
    <div>
        {{$route.query.id}}
    </div>
</template>

<script>
    export default {
        methods:{
            detailCook(){
                this.$axios.get('/api/detail',{params:{id:this.$route.query.id,appkey: "4005c1e92dfb3876"}}).then(res=>{
                    console.log(666,res)
                })
            }
        },
        mounted(){
            this.detailCook()
        }
    }
</script>

<style scoped>

</style>