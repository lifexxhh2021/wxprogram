<template>
	<view class="cs-page">
		<view class="u-tabs-box">
			<u-tabs-swiper 
				ref="uTabs" 
				:list="tabs" 
				:current="currentTab" 
				@change="changeTab" 
				:is-scroll="false"
				height="90"
				bar-width="56"
				bar-height="4"
				bar-style="{'background': 'linear-gradient(270deg, #FF8487 0%, #FF4D4F 100%)'}"
				font-size="29"
				active-color="#FF4D4F"
				inactive-color="#999"
			></u-tabs-swiper>
		</view>
		<swiper 
			class="swiper-box" 
			:current="currentSwiper" 
			@transition="transition" 
			@animationfinish="animationfinish"
		>
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height:100%; width: 100%;" @scrolltolower="reachBottom">
					<view class="swiper-content">
						<view 
							class="order-item" 
							v-for="oItem, oIndex in lists[index].data" 
							:key="oIndex"
						>
							{{oIndex}}
						</view>
						<view class="u-text-center u-padding-30 loading" v-if="isLoading[index]">加载中...</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [
					{name: '全部', status: ''},
					{name: '待付款', status: 1},
					{name: '待发货', status: 2},
					{name: '待收货', status: 3},
					{name: '已完成', status: 4},
					{name: '已取消', status: 5}
				],
				currentTab: 0,
				currentSwiper: 0,
				lists:[
					{hasMore: true, page:1, page_size:12, data: []},
					{hasMore: true, page:1, page_size:12, data: []},
					{hasMore: true, page:1, page_size:12, data: []},
					{hasMore: true, page:1, page_size:12, data: []},
					{hasMore: true, page:1, page_size:12, data: []},
					{hasMore: true, page:1, page_size:12, data: []}
				],
				isLoading: [false, false, false, false, false, false],
			};
		},
		methods: {
			// tabs通知swiper切换
			changeTab(index){
				let _list = this.lists[index];
				this.currentSwiper = index;
				if(_list.hasMore && !_list.data.length){
					this.getOrderList(index);
				}
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				let _list = this.lists[current];
				this.$refs.uTabs.setFinishCurrent(current);
				this.currentSwiper = current;
				this.currentTab = current;
				if(_list.hasMore && !_list.data.length){
					this.getOrderList(current);
				}
			},
			// 滑到底部加载更多
			reachBottom() {
				this.lists[this.currentTab].page++;
				this.getOrderList(this.currentTab);
			},
			// 获取数据
			getOrderList(index, page){
				let _this = this;
				let _list = this.lists[index];
				if(!_list.hasMore || this.isLoading[index]) return;
				let params = {
					store_id: _this.vuex_store_id,
					page: _list.page,
					page_size: _list.page_size,
					status: this.tabs[index].status
				}
				console.log('params=>', params);
				this.isLoading[index] = true;
				// this.$u.api.getOrderList(params).then(res => {});
				setTimeout(()=>{
					this.isLoading[index] = false;
					const newData = [1,2,3,4,5,6,7,8,9,10,11,12];
					_list.data.push(...newData);
					if(_list.data.length > 40){
						_list.hasMore = false;
					}
				}, 1000);
			},
		},
		onLoad(options){
			
		},
		onShow(){
			this.getOrderList(this.currentTab);
		}
	};
</script>

<style lang="scss">
	page {
		// height: 100%;
		background-color: #efefef;
	}
</style>
<style lang="scss" scoped>
	.cs-page{
		width: 100%;
		height: calc(100vh - var(--window-top));
		display: flex;
		flex-direction: column;
		.swiper-box {
			flex: 1;
		}
		.swiper-item {	
			height: 100%;
		}
	}
	.order-item{
		height: 100rpx;
		background: #fff;
		border-bottom: 2rpx solid $cs-border-color;
	}
</style>
