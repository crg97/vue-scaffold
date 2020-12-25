<template>
  <div>
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" @click="$router.push('/mainOne')">MainOne</el-menu-item>
          <el-menu-item index="2" @click="$router.push('/mainTwo')">MainTwo</el-menu-item>
          {{ getCount }}<el-button @click="update">更新</el-button>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      activeIndex: '1'
    }
  },
  computed: {
    ...mapGetters('test', ['getCount'])
  },
  methods: {
    handleSelect() {},
    update() {
      let count = this.getCount
      count += 1
      console.log(count)
      this.updateCount(count)
    },
    ...mapActions('test', ['updateCount'])
  }
}
</script>

<style scoped lang="scss">

</style>
