<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip effect="dark" placement="bottom" :content="fullScreen?'取消全屏':'全屏'">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip effect="dark" placement="bottom" :content="messages?`有${messages}条未读信息`:`消息中心`">
            <i class="el-icon-bell"></i>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="messages"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img :src="userImgUrl" alt="logoImg">
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" @command="handleCommand">
          <span class="el-dropdown-link">
            {{userName}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>关于作者</el-dropdown-item>
            <el-dropdown-item>项目仓库</el-dropdown-item>
            <el-dropdown-item divided command="signOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import userImg from '@/assets/logo.png'
export default {
  data () {
    return {
      userImgUrl: userImg,
      fullScreen: false,
      messages: 2,
      userName: 'Admin'
    }
  },
  methods: {
    handleFullScreen () {
      // 全屏事件
      // 兼容性全屏写法 标准, chrom, firefox, ie 
      let element = document.documentElement;
      if (this.fullScreen) {
          if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          }
      } else {
          if (element.requestFullscreen) {
              element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
              element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
              element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
              // IE11
              element.msRequestFullscreen();
          }
      }
      this.fullScreen = !this.fullScreen;
    },
    handleCommand () {
    }
  }
}
</script>
<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #ffffff;
  }
  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  .logo {
    float: left;
    width: 250px;
    line-height: 70px;
  }
  .header-right {
    float: right;
    padding-right: 50px;
  }
  .header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
  }
  .btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
  }
  .btn-bell, .btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
  }
  .btn-bell-badge {
    position:absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #f56c6c;
    color: #ffffff;
  }
  .user-avator{
    margin-left: 20px;
  }
  .user-avator img{
    display: block;
    width:40px;
    height:40px;
    border-radius: 50%;
  }
  .user-name {
    margin-left: 10px;
  }
  .el-dropdown-link{
    color: #fff;
    cursor: pointer;
  }
</style>
