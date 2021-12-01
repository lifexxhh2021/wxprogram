<template>
    <view>
        <view class="u-text-center u-padding-20">饼状图</view>
		<view class="chart-wrap">
			<canvas canvas-id="chart1" id="chart1" class="charts" @touchstart="touchChart($event, 'chart1')"></canvas>
		</view>
		<view class="u-text-center u-padding-20">圆环图</view>
		<view class="chart-wrap">
			<canvas canvas-id="chart2" id="chart2" class="charts" @touchstart="touchChart($event, 'chart2')"></canvas>
		</view>
    </view>
</template>

<script>
import uCharts from '@/components/u-charts/u-charts.js';
export default {
    data(){
        return {
            cWidth: 700, //单位为rpx
            cHeight: 500, //单位为rpx
            pixelRatio: 1,
        }
    },
    methods: {
		touchChart(e, chartId){
			this[chartId].showToolTip(e, {
				format: function (item) {
					return item.name + ': ' + item.data; 
				}
			});
			this[chartId].touchLegend(e, {animation:true});
		},
        initChart1(chartId){
            let self = this;
            let chartData = [
                {
                    "name": "一班",
                    "data": 50
                }, {
                    "name": "二班",
                    "data": 30
                }, {
                    "name": "三班",
                    "data": 20
                }, {
                    "name": "四班",
                    "data": 18
                }, {
                    "name": "五班",
                    "data": 8
                }
            ]
            this.chart1 = new uCharts({
                $this: self,
                canvasId: chartId,
                width: self.cWidth * self.pixelRatio,
                height: self.cHeight * self.pixelRatio,
                pixelRatio: self.pixelRatio,
                type: 'pie',
                series: chartData,
				fontSize: 11,
				colors: ['#4cd2c1','#ff7887','#ffa354','#49b0f1','#9b7ed4','#4fdee0','#fd8e83','#ffbc83','#2e83e2','#6b6ed6'],
				animation: true,
				title: {
					name: 'pie chart'
				},
				legend: {
					position: 'top',
					legendShape: 'line'
				},
                extra: {
                    pie: {
                        labelWidth: 10,
						offsetAngle: 0,
						activeOpacity: 0.6,
						activeRadius: 10
                    }
                },
				tooltip: {
					showBox: false,
					bgColor: '#000',
					bgOpacity: '0.5',
					fontColor: '#fff'
				}
            })
        },
		initChart2(chartId){
		    let self = this;
		    let chartData = [
		        {
		            "name": "一班",
		            "data": 50
		        }, {
		            "name": "二班",
		            "data": 30
		        }, {
		            "name": "三班",
		            "data": 20
		        }, {
		            "name": "四班",
		            "data": 18
		        }, {
		            "name": "五班",
		            "data": 8
		        }
		    ]
		    this.chart2 = new uCharts({
		        $this: self,
		        canvasId: chartId,
		        width: self.cWidth * self.pixelRatio,
		        height: self.cHeight * self.pixelRatio,
		        pixelRatio: self.pixelRatio,
		        type: 'ring',
		        series: chartData,
		        extra: {
		            pie: {
		                labelWidth:15
		            }
		        }
		    })
		},
    },
    onLoad(){
        //#ifdef MP-ALIPAY
        let sysInfo = uni.getSystemInfoSync();
        if(sysInfo.pixelRatio>1) this.pixelRatio = 2;
        //#endif
        // rpx转px
        this.cWidth = uni.upx2px(this.cWidth);
        this.cHeight = uni.upx2px(this.cHeight);
        this.initChart1('chart1');
		this.initChart2('chart2');
    }
}
</script>

<style lang="scss" scoped>
	.chart-wrap{
		width: 700rpx;
		height: 500rpx;
		border: 2rpx solid #ccc;
		margin: 0 auto;
	}
    .charts{
		width: 100%;
		height: 100%;
	}
</style>