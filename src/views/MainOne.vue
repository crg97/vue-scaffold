<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="1">
        <el-menu-item index="1">
          <i class="el-icon-menu"/>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"/>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"/>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'MainOne'
}
</script>

<style scoped>

</style>
