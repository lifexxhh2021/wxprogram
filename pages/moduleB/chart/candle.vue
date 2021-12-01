<template>
    <view>
        <view class="u-text-center u-padding-20">K线图</view>
		<view class="chart-wrap">
			<canvas canvas-id="chart1" id="chart1" class="charts" @touchstart="touchChart($event, 'chart1')"></canvas>
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
            let chartData = {
                categories: ['2019/5/5', '2019/5/6', '2019/5/6', '2019/5/8', '2019/5/9', '2019/5/10'],
                series: [{
                    name: '上证指数',
                    data: [
                        [2320.26, 2302.6, 2287.3, 2362.94],
                        [2300, 2291.3, 2288.26, 2308.38],
                        [2295.35, 2346.5, 2295.35, 2346.92],
                        [2347.22, 2358.98, 2337.35, 2363.8],
                        [2360.75, 2382.48, 2347.89, 2383.76],
                        [2383.43, 2385.42, 2371.23, 2391.82],
                        [2377.41, 2419.02, 2369.57, 2421.15]
                    ]
                }]
            }
            this.chart1 = new uCharts({
                $this: self,
                canvasId: chartId,
                width: self.cWidth * self.pixelRatio,
                height: self.cHeight * self.pixelRatio,
                pixelRatio: self.pixelRatio,
                type: 'candle',
                categories: chartData.categories,
                series: chartData.series,
				fontSize: 11,
				animation: true,
				enableScroll: true,
				xAxis: {
					disableGrid:true,
					itemCount:10,
					scrollShow:true,
					scrollAlign:'right',
				},
				yAxis: {
					gridType:'dash',
					splitNumber:5,
					format:(val)=>{return val.toFixed(0)}
				},
				extra: {
					candle:{
						color:{
							upLine:'#f04864',
							upFill:'#f04864',
							downLine:'#2fc25b',
							downFill:'#2fc25b'
						},
						average:{
							show:true,
							name:['MA5','MA10','MA30'],
							day:[5,10,30],
							color:['#1890ff', '#2fc25b', '#facc14']
						}
					},
					tooltip:{
						bgColor:'#000000',
						bgOpacity:0.7,
						gridType:'dash',
						dashLength:5,
						gridColor:'#1890ff',
						fontColor:'#FFFFFF',
						horizentalLine:true,
						xAxisLabel:true,
						yAxisLabel:true,
						labelBgColor:'#DFE8FF',
						labelBgOpacity:0.95,
						labelAlign:'left',
						labelFontColor:'#666666'
					}
				},
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