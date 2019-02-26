<template>
    <div class="wapper">
      <v-header></v-header>
      <v-sidebar></v-sidebar>
    </div>
</template>
<script>
import vHeader from './Header'
import vSidebar from './SideBar'

export default {
  data () {
    return {

    }
  },
  components: {
    vHeader,
    vSidebar
  }
}
</script>
<style>

</style>
