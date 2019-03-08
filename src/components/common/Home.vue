<template>
  <div class="wrapper">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse': collapse}">
        <v-tags></v-tags>
        <div class="content">
          <transition name="move" mode="out-in">
              <keep-alive :include="tagsList">
                <router-view></router-view>
              </keep-alive>
          </transition>
        </div>
    </div>
  </div>
</template>
<script>
import vHeader from '@/components/common/Header'
import vSidebar from '@/components/common/SideBar'
import vTags from '@/components/common/Tags'
import bus from '@/config/bus.js'

export default {
  data () {
    return {
      tagsList: [],
      collapse: false
    }
  },
  components: {
    vHeader,
    vSidebar,
    vTags
  },
  created () {
    bus.$on('collapse', msg => {
      this.collapse = msg
    })

    bus.$on('tags', msg => {
      let arr = []
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name)
      }
      this.tagsList = arr
    })
  }
}
</script>
<style scoped>

</style>
