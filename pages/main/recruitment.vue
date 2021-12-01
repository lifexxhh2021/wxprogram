<template>
	<view class="u-page">
		<u-swiper :list="banners" height="548"></u-swiper>
		<view>
			<text>最新资讯</text>
			<text>2021永春最新补贴政策</text>
		</view>
		<view>
			<u-search 
				placeholder="请输入搜索内容" 
				v-model="keyword"
				height="120"
				border-color="#ccc"
				:action-style="{position:'absolute', right: '5rpx'}"
			></u-search>
		</view>
		<view style="height:400rpx;background:#F0AD4E"></view>
		<u-sticky :offset-top="0">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banners: [
					{ image: 'https://cdn.uviewui.com/uview/swiper/1.jpg' },
					{ image: 'https://cdn.uviewui.com/uview/swiper/2.jpg' },
					{ image: 'https://cdn.uviewui.com/uview/swiper/3.jpg' },
				],
				keyword: '',
				stickyTop: 0,
				tabs: [{name: '为您推荐'},{name: '附近职位'},{name: '高薪职位'},{name: '最新发布'}],
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
</style>
