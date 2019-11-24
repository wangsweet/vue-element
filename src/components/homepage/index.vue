<template>
  <div class="homepage">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple sum">
          <p>
            图书总数
            <span>
              i
              <i>指标说明</i>
            </span>
          </p>
          <p>12450</p>
          <p>
            周同比&nbsp;&nbsp;12%
            <span></span>
          </p>
          <p>
            日同比&nbsp;&nbsp;11%
            <span></span>
          </p>
          <p>日上传量1234</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple look">
          <p>
            访问量
            <span>
              i
              <i>指标说明</i>
            </span>
          </p>
          <div id="main" style="width: 200px;height:100px;"></div>
          <p>日访问量1234</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple articlesum">
          <p>
            文章总数
            <span>
              i
              <i>指标说明</i>
            </span>
          </p>
          <div id="artsum" style="width: 200px;height:100px;"></div>
          <p>阅读率40%</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple activ">
          <p>
            运营活动效果
            <span>
              i
              <i>指标说明</i>
            </span>
          </p>
          <div id="act" style="width: 200px;height:100px;"></div>
          <p>
            <span>周同比&nbsp;&nbsp;12%</span>&nbsp;
            <span>日同比&nbsp;&nbsp;11%</span>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark content-middle">
          <div class="middle-title">
            <ul>
              <li>图书量</li>
              <li>访问量</li>
            </ul>
            <ol>
              <li>今日</li>
              <li>本周</li>
              <li>本月</li>
              <li>全年</li>
              <li>
                <input type="text" size="27" value="2019-10-26——2019-10-26          📅" />
              </li>
            </ol>
          </div>
          <div class="middle-content">
            <div id="middle-canvas" style></div>
            <div class="shop-detail">
              <h4>门店图书排名</h4>
              <ul>
                <li>
                  <span>1</span>沙阳路0号店
                  <span>323,234</span>
                </li>
                <li>
                  <span>2</span>沙阳路1号店
                  <span>323,234</span>
                </li>
                <li>
                  <span>3</span>沙阳路2号店
                  <span>323,234</span>
                </li>
                <li>
                  <span>4</span>沙阳路3号店
                  <span>323,234</span>
                </li>
                <li>
                  <span>5</span>沙阳路4号店
                  <span>323,234</span>
                </li>
                <li>
                  <span>6</span>沙阳路5号店
                  <span>323,234</span>
                </li>
                <li>
                  <span>7</span>沙阳路6号店
                  <span>323,234</span>
                </li>
                <li>
                  <span>8</span>沙阳路7号店
                  <span>323,234</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          y: "center",
          data: ["html", "js", "css"],
          textStyle: {
            fontSize: "12",
            fontWeight: "bold"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "16",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "html" },
              { value: 310, name: "js" },
              { value: 234, name: "css" }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawCharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("artsum"));
      // 指定图表的配置项和数据
      let option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["html", "node", "cdn", "mdn"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            splitNumber: 2
          },
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "70%",
            data: [76, 52, 200, 334]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChartss() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("act"));
      // 指定图表的配置项和数据
      let option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "value",
            data: ["Mon"],
            axisTick: {
              alignWithLabel: true
            },
            show: false
          }
        ],
        yAxis: {
          type: "category",
          show: false
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "50%",
            data: [8]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChartst() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("middle-canvas")
      );
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "图书量"
        },
        tooltip: {
          trigger: "axis"
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "图书量",
            type: "bar",
            data: [245, 432, 643, 123, 533, 583, 135, 162, 326, 200, 623, 332]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
    this.drawCharts();
    this.drawChartss();
    this.drawChartst();
  }
};
</script>

<style>
.homepage{
  width:100%;
  height:100%;
  background: #f5f5f5f5;
}
#artsum > div > canvas {
  top: -100px!important;
  left: -6px!important;
  height: 200px!important;
  font-size: 12px;
}
.grid-content {
  height: 180px;
  background: #fff;
  padding: 10px;
}
.content-middle {
  margin-top: 20px;
  height: 400px;
  margin-left: 0 !important;
  width: 1090px !important;
}
.el-main {
  text-align: left;
}
.sum,
.look,
.articlesum,
.activ p:nth-child(1) {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 22px;
}
.sum p:nth-child(2) {
  color: rgba(0, 0, 0, 0.85);
  font-size: 30px;
  line-height: 38px;
}

.sum p:nth-child(3),
.sum p:nth-child(4) {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 10px;
}

.sum p:nth-child(5),
.activ p:nth-child(3),
.look p:nth-child(3),
.articlesum p:nth-child(3) {
  border-top: 1px solid #e5e5e5;
  padding-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.65);
}

.sum p:nth-child(1) span,
.look p:nth-child(1) span,
.articlesum p:nth-child(1) span,
.activ p:nth-child(1) span {
  float: right;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgb(212, 209, 209);
  text-align: center;
  line-height: 14px;
  color: rgb(212, 209, 209);
}

.sum p:nth-child(1) span i,
.look p:nth-child(1) span i,
.articlesum p:nth-child(1) span i,
.activ p:nth-child(1) span i {
  position: absolute;
  left: -28px;
  top: -24px;
  width: 60px;
  text-align: center;
  background: #000;
  color: #fff;
  display: inline-block;
  font-style: normal;
  opacity: 0;
}

.content-middle {
  width: 1045px;
  height: 405px;
  background: #fff;
  margin-right: 25px;
  margin-left: 25px;
}

.middle-title {
  border-bottom: 1px solid #e5e5e5;
  height: 50px;
}

.middle-title > ul {
  float: left;
}

.middle-title > ul li {
  float: left;
  font-size: 16px;
  padding: 16px 16px 14px;
  margin-right: 16px;
  margin-left: 16px;
  text-align: center;
}

.middle-title > ul li:nth-child(1) {
  border-bottom: 2px solid rgb(140, 152, 221);
}

.middle-title > ol {
  float: right;
}

.middle-title > ol li {
  float: left;
  padding: 16px 16px 14px;
  margin-right: 16px;
  margin-left: 16px;
  line-height: 25px;
}

.middle-title > ol li:nth-child(1) {
  color: rgb(140, 152, 221);
}

.middle-content {
  width: 1045px;
  height: 350px;
}

#middle-canvas {
  width: 740px;
  height: 340px;
  float: left;
  overflow: hidden;
}

.shop-detail {
  float: left;
  padding: 20px;
  margin-left: 20px;
}

.shop-detail > h4 {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 25px;
}

.shop-detail ul li {
  font-size: 16px;
  margin-top: 15px;
  width: 240px;
}

.shop-detail ul li span:first-child {
  margin-right: 10px;
  display: inline-block;
  width: 15px;
  height: 15px;
}

.shop-detail ul li:nth-child(1) span:first-child,
.shop-detail ul li:nth-child(2) span:first-child,
.shop-detail ul li:nth-child(3) span:first-child {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: #000;
  color: #fff;
  text-align: center;
  line-height: 15px;
  border-radius: 50%;
}
.shop-detail ul li span:last-child {
  float: right;
}
</style>