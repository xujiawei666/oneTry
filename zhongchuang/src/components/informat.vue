<template>
  <div class="informat">
    <div class="nav">
      <span @click="$router.push('/mymessage')">返回</span>
      <p>修改个人信息</p>
    </div>
    <div class="middle">
      <div class="item">
        <p><img src="../assets/img/phone.png" alt=""> 手机号</p>
        <input type="text" v-model="phone">
      </div>
      <div class="item">
        <p><img src="../assets/img/wechat.png" alt=""> 微信号</p>
        <input type="text" v-model="weChat">
      </div>
      <div class="item">
        <p><img src="../assets/img/email.png" alt=""> 电子邮箱</p>
        <input type="text" v-model="email">
      </div>
      <div class="item">
        <p><img src="../assets/img/psw.png" alt=""> 修改密码</p>
        <input type="password" v-model="pass">
        <span @click="showPass($event)"><img src="../assets/img/visible.png" alt=""></span>
      </div>
      <div class="item">
        <p><img src="../assets/img/psw.png" alt=""> 确认密码</p>
        <input type="password" v-model="cPass">
        <span @click="showPass($event)"><img src="../assets/img/visible.png" alt=""></span>
      </div>
    </div>
    <div class="submit" @click="updatesa">提交</div>
  </div>
</template>

<script>
  import { Toast } from 'vant';

    export default {
      name: "informat",
      data (){
          return{
            phone: '',
            weChat: '',
            email : '',
            pass : '',
            cPass: ""
          }
      },
      methods:{
        showPass: function (e) {
            let ment = e.currentTarget.previousElementSibling;
            if (ment.type == "password") {
              ment.type = "text"
            }else {
              ment.type = "password"
            }
          },
        updatesa : function () {
          let reg = /^[a-zA-Z0-9]{6,8}$/;
          let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
          let eReg = /^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\.){1,4}[a-z]{2,4}$/;
          if (!this.phone.match(myreg)) {
            Toast("请输入正确的手机号")
          }else if(!this.weChat){
            Toast("请输入微信号")
          }else if (!this.email.match(eReg)){
            Toast("邮箱格式不正确，请重新输入！")
          }else if (!this.pass.match(reg)) {
            Toast("请输入6-8位字母或数字组成的密码")
          }else if (this.cPass != this.pass){
            Toast("两次输入的密码不一致")
          }else {
            let user = {
              id : sessionStorage.id,
              pwd : this.pass
            };
            this.$axios.post('user/resetpwd',user).then(res=>{
              Toast.success("修改成功");
              this.$router.push("/mymessage")
            });
          }
        }
      }
    }
</script>

<style scoped>
  .informat{
    width: 7.5rem;
  }

  .nav{
    height: .88rem;
    background-color: #DE4D4E;
    color: white;
    overflow: hidden;
  }
  .nav p{
    font-size: .34rem;
    text-align: center;
    margin-top: -.1rem;
  }
  .nav span{
    display: inline-block;
    font-size: .24rem;
    padding-top: .2rem;
    padding-left: .2rem;
  }

  .middle{
    background-color: #EBEBEB;
    margin-top: .8rem;
    overflow: hidden;
  }
  .item{
    height: .8rem;
    background-color: white;
    margin: .3rem auto;
  }
  .item p{
    line-height: .8rem;
    display: inline-block;
    width: 1.52rem;
    font-size: .24rem;
    color: #C9C7C7;
    margin-left: 1.12rem;
  }
  .item p img{
    width: .39rem;
    height: .39rem;
  }
  .item span img{
    width: .45rem;
  }
  .submit{
    width: 5.78rem;
    height: .88rem;
    background-color: #FF6363;
    margin: .8rem auto;
    color: white;
    font-size: .34rem;
    text-align: center;
    line-height: .88rem;
    border-radius: .2rem;
  }
</style>
