export default {
  name: 'mainOne',
  path: '/mainOne',
  meta: {
    title: 'MainOne'
  },
  children: [{
    name: 'cardIndex',
    path: '/',
    meta: {
      title: '卡片'
    },
    component: () => import('@/views/card/CardIndex')
  }, {
    name: 'addressIndex',
    path: 'address',
    meta: {
      title: '地址'
    },
    component: () => import('@/views/address/AddressIndex')
  }],
  component: () => import('@/views/MainOne')
}
