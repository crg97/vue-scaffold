<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="defaultIndex">
        <el-menu-item index="cardIndex" @click="$router.push('/mainOne/cardIndex')">
          <i class="el-icon-menu"/>
          <span slot="title">卡片</span>
        </el-menu-item>
        <el-menu-item index="address" @click="$router.push('/mainOne/address')">
          <i class="el-icon-menu"/>
          <span slot="title">地址</span>
        </el-menu-item>
        <el-menu-item index="relationshipChart" @click="$router.push('/mainOne/relationshipChart')">
          <i class="el-icon-menu"/>
          <span slot="title">图表</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import Home from '@/views/Home'
export default {
  name: 'MainOne',
  component: { Home },
  computed: {
    defaultIndex() {
      console.log(this.$route.path.indexOf())
      return 'cardIndex'
    }
  }
}
</script>

<style scoped>

</style>
