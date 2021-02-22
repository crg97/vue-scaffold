export default {
  name: 'mainOne',
  path: '/mainOne',
  redirect: 'mainOne/cardIndex',
  meta: {
    title: 'MainOne'
  },
  children: [{
    name: 'cardIndex',
    path: 'cardIndex',
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
  }, {
    name: 'relationshipChart',
    path: 'relationshipChart',
    meta: {
      title: '地址'
    },
    component: () => import('@/views/chart/InterpersonalRelationshipChart')
  }],
  component: () => import('@/views/MainOne')
}
