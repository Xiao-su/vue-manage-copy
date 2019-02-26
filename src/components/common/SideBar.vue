<template>
  <div class="sidebar">
    <el-menu 
      class="sidebar-el-menu" 
      :default-active="onRoutes" 
      :collapse="collapse" 
      background-color="#324157"
      text-color="#bfcbd9" 
      active-text-color="#20a0ff"
      unique-opened 
      router>
      <!-- <template>这里是外层</template>
      <el-menu-item-group title="具名slot">
        <el-menu-item title="选项1"></el-menu-item>
        <el-menu-item title="选项2"></el-menu-item>
      </el-menu-item-group> -->
      <template v-for="item in items">
        <template v-if="item.subs">

        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"><span slot="title">{{item.title}}</span></i>
          </el-menu-item>
        </template>
      </template>

    </el-menu>
  </div>
</template>
<script>
import {sidebarList} from '@/config/sidebar.config.js'

export default {
  data () {
    return {
      onRoutes: 1,
      collapse: false,
      items: sidebarList
    }
  }
}
</script>
<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
  }
  .sidebar::-webkit-scrollbar{
    width: 0;
  }
  .sidebar-el-menu:not(.el-menu--collapse){
    width: 250px;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
