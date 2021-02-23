<template>
  <div>
    <div id="main" class="relationship-charts"/>
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
          symbol: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          id: '1'
        },
        {
          name: '张2',
          symbol: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          id: '2'
        },
        {
          name: '张3',
          symbol: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          id: '3'
        },
        {
          name: '张4',
          symbol: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          id: '4'
        },
        {
          name: '张5',
          symbol: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          id: '5'
        },
        {
          name: '张6',
          symbol: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          id: '6'
        },
        {
          name: '张7',
          symbol: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          id: '7'
        },
        {
          name: '张6',
          symbol: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
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
    // this.test()
  },
  methods: {
    async test() {
      const img = await this.getImgData('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')
      console.log('img', img)
    },
    async initEcharts() {
      const charts = echarts.init(document.getElementById('main'), 'macarons')
      for (const item of this.dataEchart) {
        if (item.hasOwnProperty('symbol')) {
          item.symbol = `image://${await this.getImgData(item.symbol)}`
        }
      }
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
              edgeLength: [100, 200],
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
              width: 5,
              color: '#32e1ed',
              curveness: 0.1
            }
          }
        ]
      }
      charts.setOption(option)
    },
    getImgData(imgSrc) {
      return new Promise((resolve) => {
        const canvas = document.createElement('canvas')
        const contex = canvas.getContext('2d')
        const img = new Image()
        img.crossOrigin = ''
        img.onload = function() {
          const center = {
            x: img.width / 2,
            y: img.height / 2
          }
          var diameter = img.width <= img.height ? img.width : img.height
          canvas.width = diameter
          canvas.height = diameter
          contex.clearRect(0, 0, diameter, diameter)
          contex.save()
          contex.beginPath()
          const radius = diameter / 2
          contex.arc(radius, radius, radius, 0, 2 * Math.PI) // 画出圆
          contex.clip() // 裁剪上面的圆形
          contex.drawImage(img, center.x - radius, center.y - radius, diameter, diameter, 0, 0,
            diameter, diameter) // 在刚刚裁剪的园上画图
          contex.restore() // 还原状态
          resolve(canvas.toDataURL('image/png', 1))
        }
        img.src = imgSrc
      })
    }

  }
}
</script>

<style scoped lang="scss">

    .relationship-charts {
        height: 1000px;
        background-size: 100%;
        background-image: url('https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg');
        img {
            border-radius: 50%;
        }
    }

</style>
