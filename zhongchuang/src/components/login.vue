<template>
    <div class="login">
      <div class="zhuan"><img src="../assets/img/logo.png" alt=""></div>
      <div class="btns">
        <div id="btn" :class="{on:isAct}" @click="changeAct($event)">登录</div>
        <div id="btn" :class="{on:!isAct}" @click="changeAct($event)">注册</div>
      </div>
      <div class="login-middle" v-if="isAct">
        <div class="username">
          <img src="../assets/img/phone.png" alt="">
          <input type="text" placeholder="请输入手机号" v-model="telNumd">
        </div>
        <div class="username">
          <img src="../assets/img/psw.png" alt="">
          <input type="password" placeholder="请输入密码" v-model="passd">
          <span @click="showPass"><img src="../assets/img/visible.png" alt=""></span>
          <p @click="$router.push('/customer')">联系客服</p>
        </div>
        <div class="middle-btn" @click="logins">登陆</div>
      </div>
      <div class="register-middle" v-if="!isAct">
        <div class="username">
          <img src="../assets/img/ID.png" alt="">
          <input type="text" :placeholder="youId" disabled="disabled">
        </div>
        <div class="username">
          <img src="../assets/img/phone.png" alt="">
          <input type="text" placeholder="请输入手机号" v-model="telNum" >
        </div>
        <div class="username">
          <img src="../assets/img/wechat.png" alt="">
          <input type="text" placeholder="请输入微信号" v-model="weChat">
        </div>
        <div class="username">
          <img src="../assets/img/email.png" alt="">
          <input type="text" placeholder="请输入邮箱号" v-model="emails" >
        </div>
        <div class="username">
          <img src="../assets/img/psw.png" alt="">
          <input type="password" placeholder="请输入密码" v-model="pass" >
          <span @click="showPass($event)"><img src="../assets/img/visible.png" alt=""></span>
        </div>
        <div class="username">
          <img src="../assets/img/psw.png" alt="">
          <input type="password" placeholder="请确认密码" v-model="cPass" >
          <span @click="showPass"><img src="../assets/img/visible.png" alt=""></span>
        </div>
        <div class="middle-btn" @click="registers">提交注册</div>
        <p @click="$router.push('/haveto')">注册须知</p>
      </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';

    export default {
        name: "login",
      data(){
          return{
            isAct : true,
            youId : '6222',//父ID
            telNum : '',//注册手机号
            telNumd : '',//登录手机号
            emails : '',//邮箱
            weChat : '',//微信
            pass : '',//密码
            passd : '',//登录密码
            cPass : ''//确认密码
          }
        },
        methods:{
          // 登录注册按钮
          changeAct: function (e) {
           let myName = e.target.classList;
            if (myName != "on") {
              this.isAct = !this.isAct
            }
          },
          // 显示密码或者隐藏
          showPass : function (e) {
            let ment = e.currentTarget.previousElementSibling;
            if (ment.type == "password") {
              ment.type = "text"
            }else {
              ment.type = "password"
            }
          },
          // 登录
          logins(){
            let user = {
              phone : this.telNumd,
              pwd : this.passd
            };
            this.$axios.post('user/login',user).then(res=>{
              let users = res.data.content;
              if (res.data.msg == '登录失败!'){
                Toast.fail('账号密码错误')
              }else if (res.data.msg=='登录成功!'){
                sessionStorage.id = users.id;
                sessionStorage.lev = users.lev;
                Toast.success("登录成功");
                this.$router.push({name : 'home'})
              }
            })
          },
          // 注册
          registers : function () {
            let user = {
              phone : this.telNum,
              pwd : this.pass,
              pid : this.youId,
              mail : this.mail,
              wchat: this.weChat
            };
            let reg = /^[a-zA-Z0-9]{6,8}$/;
            let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            let eReg = /^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\.){1,4}[a-z]{2,4}$/;
            if (!this.telNum.match(myreg)) {
              Toast("请输入正确的手机号")
            }else if(!this.weChat){
              Toast("请输入微信号")
            }else if (!this.emails.match(eReg)){
              Toast("邮箱格式不正确，请重新输入！")
            }else if (!this.pass.match(reg)) {
              Toast("请输入6-8位字母或数字组成的密码")
            }else if (this.cPass != this.pass){
              Toast("两次输入的密码不一致")
            }else {
              this.$axios.post('user/regist',user).then(res=>{
                if (res.data.msg=='手机号已被注册!'){
                  Toast('手机号已注册')
                }else{
                  this.$axios.post('user/login',user).then(res=>{
                    let users = res.data.content;
                    sessionStorage.id = users.id;
                    sessionStorage.lev = users.lev;
                    Toast.success("注册成功");
                    this.$router.push("/home");
                  });
                }
              })
            }

          }
        }
    }
</script>

<style scoped>
  .login {
    width: 7.5rem;
    height: 100vh;
    background: url("../assets/img/login-bg.png")no-repeat;
    background-size: 100vw 100vh;
    overflow: hidden;
  }

  .zhuan{
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 50%;
    margin: .69rem auto .37rem;
  }

  .btns{
    width: 4.34rem;
    height: .8rem;
    background: #B10302;
    border-radius: .3rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  #btn{
    width: 2.11rem;
    height: .66rem;
    color: white;
    font-size: .24rem;
    line-height: .66rem;
    margin: .07rem;
    border-radius: .3rem;
  }
  .on{
    color: #000!important;
    background-color: white;
  }

  .login-middle{
    margin: 1.47rem auto;
    width: 5.78rem;
  }
  .username{
    width: 5.45rem;
    height: .75rem;
    background-color: white;
    margin: 0 auto .62rem;
    line-height: .71rem;
  }
  .username img{
    margin-left: .1rem;
    width: .39rem;
  }
  .username input{
    width: 4rem ;
    padding-left: .15rem;
    background-color: white;
  }
  .username p{
    color: white;
    text-align: right;
    margin-top: -.15rem;
    margin-left: 3.4rem;
    width: 2rem;
  }
  .middle-btn{
    width: 5.78rem;
    height: .88rem;
    background-color: #FF6363;
    border-radius: .2rem;
    color: white;
    font-size: .4rem;
    line-height: .88rem;
    text-align: center;
    margin-top: .87rem;
  }

  .register-middle{
    width: 5.78rem;
    margin: .38rem auto;
  }
  .register-middle .username{
    margin: .35rem auto;
  }
  .register-middle p{
    color: white;
    text-align: center;
    margin-top: .33rem;
    font-size: .24rem;
  }
</style>
