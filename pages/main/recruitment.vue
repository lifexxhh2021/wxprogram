<template>
	<view class="u-page">
		<u-swiper :list="banners" height="364"></u-swiper>
		<view class="u-flex u-padding-left-25 u-padding-right-25 u-margin-top-15 u-margin-bottom-15">
			<view class="notice-text">		
				<view>最新</view><view>资讯</view>
			</view>
			<view class="flex-1">
				<u-notice-bar 
					mode="vertical" 
					:list="noticeData" 
					:volume-icon="false" 
					bg-color="transparent"
					:font-size="30"
					padding="20rpx"
					duration="3000"
				></u-notice-bar>
			</view>
		</view>
		<view class="u-padding-left-25 u-padding-right-25">
			<view class="u-flex">
				<view class="u-flex u-margin-right-15">
					<span>县城</span>
					<u-icon name="arrow-down" size="20"></u-icon>
				</view>
				<view class="u-relative flex-1">
					<u-search 
						placeholder="请输入搜索内容" 
						v-model="keyword"
						height="75"
						border-color="#ccc"
						:action-style="{position:'absolute', right: '5rpx'}"
						search-icon=""
						action-text=" "
					></u-search>
					<u-icon name="search" class="search-icon" size="40"></u-icon>
				</view>
			</view>
		</view>
		<view class="more-cat u-text-right u-padding-right-30 u-margin-top-20">更多</view>
		<view class="catlist clear">
			<view class="catitem" v-for="item in 8">
				<u-icon name="icon_delete1" custom-prefix="custom-icon"></u-icon>
				<view>鞋服纺织</view>
			</view>
		</view>
		<view class="stastics u-padding-25">入驻企业:1554 职位:1.52万 简历:5321 访问:3.64万</view>
		<u-sticky>
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
				noticeData: ['2021年永春最新补贴政策', '2021年永春最新补贴政策222'],
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
	.flex-1{
		flex: 1;
	}
	.search-icon{
		position: absolute;
		right: 20rpx;
		top: 18rpx;
	}
	.notice-text{
		color: #4b97e9;
		font-weight: bold;
		font-size: 18px;
	}
	.catlist{
		display: flex;
		flex-wrap: wrap;
		.catitem{
			width: 25%;
			text-align: center;
			margin: 15rpx 0;
		}
	}
	.stastics{
		border-bottom: 15rpx solid #f8f6f9;
	}
	.list-wrap {
		min-height: calc(100vh - 100rpx);
		padding: 0 20rpx;
		// min-height: calc(100vh - 44px - constant(safe-area-inset-top));
		// min-height: calc(100vh - 44px - env(safe-area-inset-top));
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
