<template>
  <div>
    <tabbar>
      <tabbar-item link="/index">
        <template #icon><img src="~assets/img/tabbar/home.svg"></template>
        <template #icon-active><img src="~assets/img/tabbar/home_active.svg"></template>
        <template #label>
          主页
        </template>
      </tabbar-item>
      <tabbar-item link="/category">
        <template #icon><img src="~assets/img/tabbar/category.svg"></template>
        <template #icon-active><img src="~assets/img/tabbar/category_active.svg"></template>
        <template #label>
          分类
        </template>
      </tabbar-item>
      <tabbar-item link="/cart">
        <template #icon><img src="~assets/img/tabbar/shopcart.svg"></template>
        <template #icon-active><img src="~assets/img/tabbar/shopcart_active.svg"></template>
        <template #label>
          购物车
        </template>
      </tabbar-item>
      <tabbar-item link="/profile">
        <template #icon><img src="~assets/img/tabbar/profile.svg"></template>
        <template #icon-active><img src="~assets/img/tabbar/profile_active.svg"></template>
        <template #label>
          我的
        </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from '../components/tabbar/index.js'

  export default {
    name: 'MainTabbar',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>
</style>