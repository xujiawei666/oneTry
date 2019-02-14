<template>
    <div>
      <img :src="img" alt="">
      <end/>
    </div>
</template>

<script>
    import End from "./end";
    export default {
        name: "haobao",
      components: {End},
      data(){
          return{
            img:''
          }
      },
      mounted(){
          this.$axios.post('user/get_poster').then(res=>{
            this.img = res.data.content[0].img
          })
      }
    }
</script>

<style scoped>

</style>
