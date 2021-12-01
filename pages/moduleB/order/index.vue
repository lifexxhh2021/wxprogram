<template>
	<view>	
		<view class="u-page">
			<view class="tab-bar" id="tabBar">
				<u-tabs
					:list="tabs"
					:current="currentTab"
					@change="changeTab"
					:gutter="35"
					height="100"
					bar-width="100"
					font-size="30"
					active-color="#FF4D4F"
					inactive-color="#666"
				></u-tabs>
			</view>
			<view class="list-wrap">
				<view class="list-item" v-for="item,index in listData" :key="index">{{index}}</view>
			</view>
			<view class="loading" v-show="isLoading">加载中....</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				tabs: [
					{name: '全部'},{name: '待付款'},{name: '待发货'},{name: '待收货'},{name: '已取消'}
				],
				currentTab: 0,
				listData: [],
				isLoading: false,
			}
		},
		methods: {
			async getData(isReload){
				if(isReload) this.listData = [];
				if(this.isLoading) return;
				this.isLoading = true;
				// let ret = this.$u.api.getList();
				setTimeout(()=>{
					this.isLoading = false;
					for(let i=0; i<20; i++){
						this.listData.push(i);
					}
				}, 1000);
			},
			changeTab(index){
				this.currentTab = index;
				this.getData(true);
			},
			onShow(){
				this.getData(true);
			}
		},
		onReachBottom(){
			this.getData();
		},
		onPullDownRefresh(){
			this.getData(true);
			uni.stopPullDownRefresh();
		}
	}
</script>

<style lang="scss" scoped>
	.tab-bar{
		width: 100%;
		position: fixed;
		top: var(--window-top);
		left: 0;
	}
	.list-wrap{
		padding-top: 100rpx;
	}
	.list-item{
		height: 100rpx;
		border-bottom: 2rpx solid $cs-border-color;
	}
	.loading{
		text-align: center;
		padding: 30rpx 0;
	}
</style>
