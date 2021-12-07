<template>
	<view class="u-page">
		<view class="header">
			<view class="u-flex search-bar u-p-25" v-show="!catId">
				<u-search
					class="u-flex-1"
					placeholder="请输入关键字"
					v-model="keyword"
					height="75"
					bg-color="#fff"
					action-text=" "
					@search="search"
				></u-search>
				<view @click="cancel">取消</view>
			</view>
			<view class="filter-bar">
				<cs-dropdown ref="uDropdown" class="u-dropdown" @self-open="showFilter">
					<cs-dropdown-item title="最新" :blocked="true" :icon-hide="true"></cs-dropdown-item>
					<cs-dropdown-item title="推荐" :blocked="true" :icon-hide="true"></cs-dropdown-item>
					<cs-dropdown-item title="附近" :blocked="true" :icon-hide="true"></cs-dropdown-item>
					<cs-dropdown-item title="筛选">
						<view class="slot-content u-p-l-25" style="background-color: #FFFFFF;">
							<scroll-view scroll-y="true" style="height:600rpx;padding-bottom:30rpx;" @touchmove.stop.prevent>
								<filterCheckbox 
									:list="regionList" 
									v-model="searchForm.region" 
									label="工作地点" 
									:multiple="true" 
									:showAll="true" 
									showAllText="不限"
								></filterCheckbox>
								<filterCheckbox
									:list="priceList" 
									v-model="searchForm.price" 
									label="薪资(单选)" 
									:multiple="false" 
									:showAll="true" 
									showAllText="不限"
								></filterCheckbox>
								<filterCheckbox
									:list="limitList" 
									v-model="searchForm.limit" 
									label="工作经验(单选)" 
									:multiple="false" 
									:showAll="true" 
									showAllText="不限"
								></filterCheckbox>
							</scroll-view>
							<view class="u-flex opt-btn-group u-border-top">
								<view class="opt-btn reset-btn" @click="closeDropdown">重置</view>
								<view class="opt-btn save-btn" @click="closeDropdown">确定</view>
							</view>
						</view>
					</cs-dropdown-item>
				</cs-dropdown>
			</view>
			<view class="split-line"></view>
		</view>
		<view class="search-result" :class="{'spec': catId}">
			<scroll-view
				scroll-y
				style="height:100%; width: 100%;"
				@scrolltolower="reachBottom"
			>
				<job-list :list="listData"></job-list>
				<view class="empty" v-if="!listData.length && !isLoading">没有符合条件的结果</view>
				<view class="loading" v-if="isLoading">加载中...</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import jobList from '@/components/job-list'
	import filterCheckbox from '@/components/filter-checkbox.vue';
	export default {
		components: {
			jobList, filterCheckbox
		},
		data() {
			return {
				regionList: [
					{id: 1, name: '地点1'},
					{id: 2, name: '地点2'},
					{id: 3, name: '地点3'},
					{id: 4, name: '地点4'},
				],
				priceList: [
					{id: 1, name: '面议'},
					{id: 2, name: '1K以下'},
					{id: 3, name: '1-2K'},
					{id: 4, name: '2-3K'},
				],
				limitList: [
					{id: 1, name: '经验不限'},
					{id: 2, name: '应届毕业生'},
					{id: 3, name: '1年以下'},
					{id: 4, name: '1-2年'},
				],
				searchForm: {
					region: [],
					limit: [],
					price: []
				},
				keyword: '',
				catId: '',
				listData: [],
				isLoading: false,
			}
		},
		methods: {
			cancel(){
				this.$u.route({ type: 'back' });
			},
			showFilter(index){
				this.getData(true);
			},
			closeDropdown(){
				this.$refs.uDropdown.close();
			},
			async getData(isReload) {
			  if (isReload) this.listData = [];
			  if (this.isLoading) return;
			  this.isLoading = true;
			  // let ret = this.$u.api.getList();
			  setTimeout(() => {
			    this.isLoading = false;
			    for (let i = 0; i < 10; i++) {
			      this.listData.push(i);
			    }
			  }, 1000);
			},
			reachBottom(){
			  console.log('reachBottom....')
				this.getData(false)
			},
		},
		onLoad(opt){
			console.log('onload>>', opt)
			if(opt && opt.catId){
				this.catId = opt.catId;
				uni.setNavigationBarTitle({
					title: opt.catName + '搜索'
				})
			}
			this.keyword = opt&&opt.keyword || '';
		},
		onShow() {
		  this.getData(true);
		},
		onReachBottom() {
			this.getData();
		}
	}
</script>

<style lang="scss">
	page{
		background-color: $cs-bg-color;
	}
	.header{
		width: 100%;
	}
	/deep/ .search-bar{
		.u-action{
			width: 15rpx !important
		}
	}
	.filter-bar{
		height: 90rpx;
		background:#fff;
		.filter-item{
			height: 100%;
			line-height: 90rpx;
			padding: 0 40rpx;
		}
	}
	.search-result{
	  height: calc(100vh - var(--window-top) - var(--window-bottom) - 210rpx);
		&.spec{
			height: calc(100vh - var(--window-top) - var(--window-bottom) - 100rpx);
		}
	}
	.filter-label{
		color: #000;
		font-weight: bold;
		line-height: 80rpx;
	}
	.filter-options{
		.option{
			min-width: 160rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			background: #f7f7f9;
			margin-right: 15rpx;
			margin-bottom: 15rpx;
			&.active{
				background-color: $cs-primary-color;
				color: #fff;
			}
		}
	}
	.filter-content{
		position: fixed;
		top: 210rpx;
		left: 0;
		width: 100%;
		height: 400rpx;
		background: #007AFF;
		z-index:999;
	}
	.opt-btn{
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		font-size: 34rpx;
		&.save-btn{
			background-color: $cs-primary-color;
			color: #fff;
		}
	}
</style>
