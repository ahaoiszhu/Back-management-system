<template>
  <div class="index">
    <el-row class="tac">
      <el-col :span="5">
        <img class="logo" src="./../assets/logo2.png"/>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :unique-opened= true
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <div index="1" class="indexx">
              <i style="color: #909399;margin-right: 8px;" class="el-icon-user-solid"></i>
              <span><router-link class="dianji" to="/Index/Home">首页</router-link></span>
          </div>
          <el-submenu index="2">
<!--          <el-menu-item index="2">-->
            <template slot="title">
            <i class="el-icon-refresh-right"></i>
            <span slot="title">记录查询</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><div class="quan"></div><router-link class="dianji" to="/Index/Exhibition">购买记录</router-link></el-menu-item>
              <el-menu-item index="1-2"><div class="quan"></div><router-link class="dianji" to="/Index/Tixianjl">体现记录</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-check"></i>
              <span slot="title">审核</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><div class="quan"></div><router-link class="dianji" to="/index">选项1</router-link></el-menu-item>
              <el-menu-item index="1-2"><div class="quan"></div><router-link class="dianji" to="/index">选项2</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-finance"></i>
              <span slot="title">体现</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><div class="quan"></div><router-link class="dianji" to="/index">选项1</router-link></el-menu-item>
              <el-menu-item index="1-2"><div class="quan"></div><router-link class="dianji" to="/index">选项2</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">反馈</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><div class="quan"></div><router-link class="dianji" to="/index">选项1</router-link></el-menu-item>
              <el-menu-item index="1-2"><div class="quan"></div><router-link class="dianji" to="/index">选项2</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-date"></i>
              <span slot="title">订单管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1"><div class="quan"></div><router-link class="dianji" to="/index">选项1</router-link></el-menu-item>
              <el-menu-item index="1-2"><div class="quan"></div><router-link class="dianji" to="/index">选项2</router-link></el-menu-item>
            </el-menu-item-group>
            <!--          </el-menu-item>-->
          </el-submenu>
          <el-submenu index="7">
            <!--          <el-menu-item index="2">-->
            <template slot="title">
              <i class="el-icon-warning-outline"></i>
              <span slot="title">关于我们</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1"><div class="quan"></div><router-link class="dianji" to="/index">选项1</router-link></el-menu-item>
              <el-menu-item index="1-2"><div class="quan"></div<router-link class="dianji" to="/index">选项2</router-link></el-menu-item>
            </el-menu-item-group>
            <!--          </el-menu-item>-->
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <div class="right">

        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
        msg:"123ahsndjijnc"
    }
  },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        onMousedown(event, column) {
            const resizeProxy = this.$refs.resizeProxy;
            resizeProxy.style.left = this.dragState.startLeft + 'px';
            document.onselectstart = function() { return false; };//解决拖动会选中文字的问题
            document.ondragstart = function() { return false; };

            const handleMouseMove = (event) => {
                const deltaLeft = event.clientX - this.dragState.startMouseLeft;
                const proxyLeft = this.dragState.startLeft + deltaLeft;

                resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
            };

            const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
                document.onselectstart = null;
                document.ondragstart = null;
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        },
    }
}
</script>
<style scoped>
.el-col-5{
  width: 180px;
  padding-left: 5px;
  background: rgb(84, 92, 100);
  padding-bottom: 50px;
  padding-top: 50px;
  height: 700px;
  -moz-user-select:none;/*火狐*/
  -webkit-user-select:none;/*webkit浏览器*/
  -ms-user-select:none;/*IE10*/
  user-select:none;
}
 .el-menu-item{
   min-width: 130px !important;
   margin-left: 40px;

 }
  .logo{
    width: 90px;
    /*margin-left: -10px;*/
  }
  .logo img{
    width: 100%;
  }
.el-menu{
  border: none !important;
}
  .right{
    position: absolute;
    top: 10px;
    left: 200px;
    width: 85%;
      background: cadetblue;

  }
  .quan{
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 1px solid #909399;
    position: absolute;
    top: 23px;
    left: 25px;
  }
  /*.asd{*/
  /*  width: 50%;*/
  /*  height: 100px;*/
  /*}*/
  .indexx{
    color: rgb(255, 255, 255);
    padding: 0 20px;
    cursor: pointer;
    width: 116px;
    height: 50px;
    line-height: 50px;
    padding-left: 25px;
    font-size: 14px;
  }
  .indexx:hover{
    background: rgb(67,74,80);
  }
.dianji{
  text-decoration: none;
  color: rgb(255, 255, 255);
}
</style>
