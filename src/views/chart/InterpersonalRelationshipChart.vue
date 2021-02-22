<template>
  <div>
    <div
      id="main"
      style="height: 500px; background-image: url('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')"/>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'InterpersonalRelationshipChart',
  data() {
    return {
      dataEchart: [
        {
          name: '张1',
          symbolSize: 76,
          id: '1'
        },
        {
          name: '张2',
          id: '2'
        },
        {
          name: '张3',
          id: '3'
        },
        {
          name: '张4',
          id: '4'
        },
        {
          name: '张5',
          id: '5'
        },
        {
          name: '张6',
          id: '6'
        },
        {
          name: '张7',
          id: '7'
        },
        {
          name: '张6',
          id: '8'
        }
      ],
      linkEchart: [
        { value: '同事', source: '1', target: '2' },
        { value: '同事', source: '1', target: '3' },
        { value: '同事', source: '1', target: '4' },
        { value: '同学', source: '1', target: '5' },
        { value: '同学', source: '1', target: '6' },
        { value: '同学', source: '1', target: '7' },
        { value: '爸爸', source: '1', target: '8' }
      ]
    }
  },
  mounted() {
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      const charts = echarts.init(document.getElementById('main'), 'macarons')
      const option = {
        tooltip: {
          show: false
        },
        backgroundColor: 'transparent',
        series: [
          {
            edgeLabel: {
              normal: {
                formatter: '{c}',
                show: true
              }
            },
            edgeSymbol: 'circle',
            force: {
              repulsion: 2000
            },
            layout: 'force',
            roam: true,
            itemStyle: {
              normal: {
                color: '#ede264'
              },
              // 鼠标放上去有阴影效果
              emphasis: {
                shadowColor: '#dba427',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 40
              }
            },
            label: {
              normal: {
                show: true
              }
            },
            // 头像
            symbolSize: 86,
            type: 'graph',
            links: this.linkEchart,
            data: this.dataEchart,
            lineStyle: {
              color: 'source',
              curveness: 0.3
            }
          }
        ]
      }
      charts.setOption(option)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
