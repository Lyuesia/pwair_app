<template lang="html">
<div class="">
  <div class="form">
    <input class="loginForm" type="text" name="loginId" v-model="loginId">
  </div>
  <div class="password">
    <input class="loginForm" type="password" name="password" v-model="password">
  </div>
  <div class="login">
    <button class="loginForm" type="button" name="login" @click="loginWithId">확인</button>
  </div>
</div>
</template>

<script>
import { auth } from '../../firebase.js'
// import router from 'vue-router'

export default {
  data(){
    return {
      loginId : '',
      password: ''
    }
  },
  methods:{
    loginWithId() {
      var self = this;
      console.log(self);
      // loginId
      auth.signInWithEmailAndPassword(this.loginId, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('로그인 실패');
        // ...
      }).then(function (user) {
        console.log(user);
        self.$router.push('home')
      });

    }
  }

}
</script>

<style lang="css">
body{
  text-align: center;
}
.password{
  text-align: center;
}
 .form {
   padding-left: auto;
   padding-right: auto;
   text-align: center;
 }
 .loginForm{
   text-align: center;

 }
</style>
