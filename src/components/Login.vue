<template>
  <!--在视频外面加一个容器-->
  <div class="input_video">
    <video muted autoplay="autoplay" loop  id="bgvid">

      <source src="./../assets/vedio/haitan.webm" type="video/webm">

      <source src="./../assets/vedio/haitan.mp4" type="video/mp4">

    </video>
    <div class="mengban"></div>
    <div class="Login">
      <div class="dowebok">
        <div style="height: 10px" v-show="!isshow" ></div>
        <h1 class="logo">欢迎登录易传后台</h1>
        <div style="height: 20px" v-show="!isshow" ></div>
        <div class="form-item">
          <i class="el-icon-user icone"></i>
          <input id="username" type="text" autocomplete="off" placeholder="用户名">

        </div>
        <div style="height: 20px" v-show="!isshow" ></div>

        <div class="form-item">
          <i class="el-icon-key icone"></i>
          <input id="password" type="password" autocomplete="off" placeholder="登录密码">

        </div>
        <div style="height: 10px" v-show="!isshow" ></div>

        <div class="tishi" v-show="isshow">{{msg}}</div>
        <slide-verify :l="32"
                      :r="10"
                      :w="307"
                      :h="105"
                      slider-text="向右滑动"
                      @success="onSuccess"
                      @fail="onFail"
                      @refresh="onRefresh"
                      v-show="isshow"
        ></slide-verify>
        <div style="height: 10px" v-show="!isshow" ></div>

        <div class="form-item"><button id="submit" @click="logins()">登 录</button></div>

        <div class="reg-bar">
          <div style="height: 10px" v-show="!isshow" ></div>
          <a class="forget" href="javascript:">忘记密码</a>
          <div style="height: 80px" v-show="!isshow" ></div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'App',
        data(){
            return {
                msg: '请滑动拼图到对应位置。',
                isshow:false,
                num:0,

            }
        },
        methods: {
            onSuccess(){
                this.msg = '成功'
            },
            onFail(){
                this.msg = '请重新滑动拼图到对应位置。'
            },
            onRefresh(){
                this.msg = '请滑动拼图到对应位置。'
            },
            logins(){
                let username = document.querySelector("#username").value;
                let password = document.querySelector("#password").value;
                if(this.isshow==true){
                    if(this.msg!="成功"){
                        document.querySelector('.tishi').setAttribute("style",'color:red');
                        this.onRefresh()

                        return;
                    }else if(this.msg=="成功"){
                        document.querySelector('.tishi').setAttribute("style",'color:#fff;');
                    }
                }
                if(!username||!password){
                    alert("请补全您的信息！！");
                    this.num++;
                    if(this.num>1){
                        this.isshow=true
                        console.log("this1",this.num)
                        this.num=0
                    }
                    this.onRefresh()
                }
                else {
                    let params = {
                        username: username,
                        password: password,
                    };
                    this.$axios
                        .post("http://101.200.122.133:8980/sysUser/login.do", params)
                        .then(res => {
                            if(res.data.code==0){
                                alert(res.data.msg);
                                // window.document.cookie = 'cookid='+ res.data.data.token
                                this.onRefresh()
                                this.$cookieStore.setCookie( 'cookie' ,res.data.data.token, 7200);//存入用户名，设置有效时间1分钟
                                this.$router.push('Index/Home');
                            }
                        })
                        .catch(err => {
                            this.num++;
                            if(this.num>1){
                                this.isshow=true;
                                this.num=0

                            }
                            alert(err.response.data.msg)
                            this.onRefresh()
                        })
                }
            }
        }
    }
</script>
<style scoped>
  video#bgvid {

    position: fixed; right: 0; bottom: 0;

    min-width: 100%; min-height: 100%;

    width: auto; height: auto; z-index: -100;

    background: url(./../assets/haitan.jpg) no-repeat;
    background-size: 100%;

  }
  .mengban{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background:rgba(255,255,255,0);
  }
  video { display: block; }
  * { margin: 0; padding: 0; }

  html { height: 100%; }
  .dowebok { position: absolute; left: 50%; top: 50%; width: 430px; padding-bottom: 50px; margin: -300px 0 0 -215px; border: 1px solid #fff; border-radius: 20px; overflow: hidden;}
  /*.logo { width: 104px; height: 104px; background: url(./../assets/logo2.png) 10% 10% no-repeat; background-size: 100%;}!*头像*!*/
  .logo { width: 100%; height: 104px; text-align: center;line-height: 100px;color: #ffffff}/*头像*/

  .form-item { position: relative; width: 360px; margin: 10px auto;margin-bottom: -5px;margin-top: 0px; padding-bottom: 30px;}

  .form-item input { width: 288px; height: 48px; padding-left: 70px; border: 1px solid #fff; border-radius: 25px; font-size: 18px; color: #fff; background-color: transparent; outline: none;}

  .form-item button { width: 360px; height: 50px; border: 0; border-radius: 25px; font-size: 18px;margin-top:15px; color: #1f6f4a; outline: none; cursor: pointer; background-color: #fff; }

  .tip { display: none; position: absolute; left: 20px; top: 52px; font-size: 14px; color: #f50; }

  .reg-bar { width: 360px; margin: 20px auto 0;margin-top: 0px; font-size: 14px; overflow: hidden;}

  .reg-bar a { color: #fff; text-decoration: none; }

  .reg-bar a:hover { text-decoration: underline; }

  .reg-bar .reg { float: left; }

  .reg-bar .forget { float: right; }

  .dowebok ::-webkit-input-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}

  .dowebok :-moz-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}

  .dowebok ::-moz-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}

  .dowebok :-ms-input-placeholder { font-size: 18px; line-height: 1.4; color: #fff;}

  @media screen and (max-width: 500px) {

    * { box-sizing: border-box; }

    .dowebok { position: static; width: auto; height: auto; margin: 0 30px; border: 0; border-radius: 0; }


    .form-item { width: auto; }

    .form-item input, .form-item button, .reg-bar { width: 100%; }

  }
  .icone{
    color: #fff;
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 20px;
  }
  .slide-verify{
    left: 15%;
    text-align: center;
  }
  .slide-verify-slider{
    margin-top: -4px !important;
    width: 308px !important;
  }
  .tishi{
    width: 308px;
    position: relative;
    top: 0px;
    left: 65px;
    min-height:30px;
    line-height: 30px;
    /*background: #909399;*/
    color: #fff;
  }
</style>
