<template>
	<view>
		<u-navbar title="自定义标题栏" :background="background" title-color="#FFF" :is-back="false"></u-navbar>
		<view class="u-page">
			<u-swiper :list="banners"></u-swiper>
			<u-sticky :offset-top="stickyTop">
				<view class="tab-bar" id="tabBar">
					<u-tabs
						:list="tabs"
						:current="currentTab"
						@change="changeTab"
						:is-scroll="true" 
						gutter="30"
						height="100"
						bar-width="100"
						font-size="30"
						active-color="#FF4D4F"
						inactive-color="#666"
					></u-tabs>
				</view>
			</u-sticky>
			<view class="list-wrap u-flex u-flex-wrap">
				<view class="list-item" v-for="item,index in listData" :key="index">
					{{index}}
				</view>
			</view>
			<view class="loading">加载中...</view>
			<view class="totop" @click="scrollToTop">Top</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient(90deg, rgb(255, 0, 69), rgb(255, 106, 95))'
				},
				banners: [
					{ image: 'https://cdn.uviewui.com/uview/swiper/1.jpg' },
					{ image: 'https://cdn.uviewui.com/uview/swiper/2.jpg' },
					{ image: 'https://cdn.uviewui.com/uview/swiper/3.jpg' },
				],
				tabBarTop: 0,
				stickyTop: 0,
				tabs: [
					{name: '全部'},{name: '分类1'},{name: '分类2'},{name: '分类3'},{name: '分类4'},{name: '分类5'},{name: '分类6'},{name: '分类7'},{name: '分类8'},
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
				uni.createSelectorQuery().selectViewport().scrollOffset(res => {
					if(res.scrollTop > this.tabBarTop){	
						uni.pageScrollTo({
							scrollTop: this.tabBarTop,
							duration: 0
						});
					}
				}).exec();
				this.getData(true);
			},
			onLoad(options){
				console.log('页面参数：', options);
			},
			onShow(){
				this.getData(true);
				
				let sysInfo = uni.getSystemInfoSync();
				let _top = sysInfo.statusBarHeight + 44;
				// #ifndef H5
					// px转rpx
					this.stickyTop = _top/(uni.upx2px(_top)/_top);
				// #endif
				uni.createSelectorQuery().select('#tabBar').boundingClientRect(res => {
					this.tabBarTop = res.top - _top;
				}).exec();
			},
			onReachBottom(){
				this.getData();
			},
			scrollToTop(){
				uni.pageScrollTo({ scrollTop: 0, duration: 0 })
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	.list-wrap {
		padding: 0 20rpx;
		min-height: calc(100vh - 44px - constant(safe-area-inset-top));
		min-height: calc(100vh - 44px - env(safe-area-inset-top));
	}
	.list-item{
		width: 345rpx;
		height: 100rpx;
		border: 2rpx solid #efefef;
		border-radius: 8rpx;
		text-align: center;
		margin-top: 20rpx;
		background-color: #fff;
		&:nth-child(odd){
			margin-right: 20rpx;
		}
	}
	.loading{
		text-align: center;
		padding: 30rpx 0;
	}
	.totop{
		position: fixed;
		right: 0;
		padding: 10rpx 30rpx;
		background: #F0AD4E;
		color: #fff;
		right: 0;
		z-index: 999;
		bottom: calc(var(--window-bottom) + 20px + constant(safe-area-inset-bottom));
		bottom: calc(var(--window-bottom) + 20px + env(safe-area-inset-bottom));
	}
</style>
