<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    // import $ from 'jquery'
export default {

  name: 'App',
    created(){
      console.log(window.document.cookie.substring(7))
        if(window.document.cookie.substring(7)==""){
            this.$router.push('Login');
        }
    },
    mounted(){

    }
}
</script>

<style>
#div {
  width: 1500px;
}
</style>
