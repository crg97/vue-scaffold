<template>
  <div>
    <card-dragger :data="cardList"/>
  </div>
</template>

<script>
import { cardDragger } from 'carddragger'

export default {
  name: 'CardIndex',
  components: { cardDragger },
  data() {
    return {
      cardList: [
        {
          positionNum: 1,
          name: '演示卡片999',
          id: 'card1'
          // OtherData这个是你自己定义的属性，注意不可与componentData属性名字重复
        },
        {
          positionNum: 2,
          name: '演示卡片2',
          id: 'card2'
          // OtherData这个是你自己定义的属性，注意不可与componentData属性名字重复
        },
        {
          positionNum: 3,
          name: '演示卡片3',
          id: 'card3'
          // OtherData这个是你自己定义的属性，注意不可与componentData属性名字重复
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
