<template>
	<view class="u-page">
		<view class="header">
			<view class="u-flex search-bar" style="background:#fff;">
				<view>
					<u-icon name="map"></u-icon>
					<text class="u-m-r-15">永春县</text>
				</view>
				<u-search
					class="u-flex-1"
					placeholder="请输入您感兴趣的职位"
					v-model="searchForm.keyword"
					height="75"
					border-color="#fff"
					bg-color="#f2f2f2"
					search-icon=""
				></u-search>
			</view>			
			<view class="filter-bar">
				<cs-dropdown ref="uDropdown"  @self-open="showFilter">
					<cs-dropdown-item v-model="searchForm.region" title="全县" :options="regionList"></cs-dropdown-item>
					<cs-dropdown-item title="期望职位" :blocked="true"></cs-dropdown-item>
					<cs-dropdown-item title="筛选">
						<view class="slot-content u-p-l-25" style="background-color: #FFFFFF;">
							<scroll-view scroll-y="true" style="height:600rpx;padding-bottom:30rpx;" @touchmove.stop.prevent>
								<filterCheckbox :list="genderList" v-model="searchForm.gender" label="性别要求" :showAll="false"></filterCheckbox>
								<filterCheckbox :list="identityList" v-model="searchForm.identity" label="身份要求" :showAll="false"></filterCheckbox>
								<filterCheckbox :list="worktimeList" v-model="searchForm.time" label="工作时间"></filterCheckbox>
								<view class="filter-label">期望薪资</view>
								<view class="u-flex">
									<view class="u-m-r-30 u-flex">最低薪资：<u-input type="number" placeholder="最低薪资" v-model="searchForm.price_from" border style="width:160rpx"></u-input>元</view>
									<view class="u-flex">最高薪资：<u-input type="number" placeholder="最高薪资" v-model="searchForm.price_to" border style="width:160rpx"></u-input>元</view>
								</view>
								<filterCheckbox :list="sortList" v-model="searchForm.sort" label="排列方式"></filterCheckbox>
							</scroll-view>
							<view class="u-flex opt-btn-group u-border-top">
								<view class="opt-btn reset-btn" @click="resetFilter">重置</view>
								<view class="opt-btn save-btn" @click="closeDropdown">确定</view>
							</view>
						</view>
					</cs-dropdown-item>
				</cs-dropdown>
				<view class="dropdowncont-panel" :class="{'hidden': !isShowFilter}">
					<job-filter v-model="searchForm.jobs" @cancel="hideFilter" @save="saveFilter">
						<u-button @click="closeDropdown">关闭</u-button>
					</job-filter>
				</view>
			</view>
		</view>
		<view class="search-result">
      <scroll-view
				scroll-y
				style="height:100%; width: 100%;"
				@scrolltolower="reachBottom"
			>
				<job-list :list="listData" type="2"></job-list>
				<view class="empty" v-if="!listData.length && !isLoading">没有符合条件的结果</view>
				<view class="loading" v-if="isLoading">加载中...</view>
      </scroll-view>
		</view>
	</view>
</template>

<script>
  import jobFilter from '@/components/job-filter.vue';
	import jobList from '@/components/job-list.vue';
	import filterCheckbox from '@/components/filter-checkbox.vue';
	export default {
    components: { jobFilter, jobList, filterCheckbox },
		data() {
			return {
				searchForm: {
					keyword: '',
					region: '',
					jobs: ['水电、电焊', '杂工', '促销员'],
					gender: [],
					identity: [],
					time: [],
					sort: [],
					price_from: '',
					price_to: ''
				},
				regionList: [
					{label: '全县', value: ''},
					{label: '乡镇1', value: '1'},
					{label: '乡镇2', value: '2'},
					{label: '乡镇3', value: '3'},
				],
				genderList: [
					{id: 0, name: '不限性别'},
					{id: 1, name: '男性'},
					{id: 2, name: '女性'}
				],
				identityList: [
					{id: 0, name: '不限身份'},
					{id: 1, name: '学生可做'},
					{id: 2, name: '非学生可做'}
				],
				worktimeList: [
					{id: 0, name: '仅周末'},
					{id: 1, name: '仅工作日'},
					{id: 2, name: '半天'},
					{id: 3, name: '全天'},
				],
				sortList: [
					{id: 0, name: '推荐排序'},
					{id: 1, name: '离我最近'},
					{id: 2, name: '最新发布'},
					{id: 3, name: '薪资最高'},
				],
				listData: [],
				isLoading: false,
				isShowFilter: false
			}
		},
		methods: {
			showFilter(){
				this.isShowFilter = true;
			},
			hideFilter(){
				this.isShowFilter = false;
				this.$refs.uDropdown.close();
			},
			saveFilter(){
				this.isShowFilter = false;
				this.$refs.uDropdown.close();
				this.getData(true);
			},
			getData(isReload){
				if(isReload) this.listData = [];
				this.isLoading = true;
				setTimeout(()=>{
					this.isLoading = false;
					for(let i=0; i<10; i++){
						this.listData.push(i);
					}
				}, 1000)
			},
			reachBottom(){
			  console.log('reachBottom....')
				this.getData(false)
			},
			resetFilter(){
				this.$set(this.searchForm, 'gender', []);
				this.$set(this.searchForm, 'identity', []);
				this.$set(this.searchForm, 'time', []);
				this.$set(this.searchForm, 'sort', []);
				this.$set(this.searchForm, 'price_from', '');
				this.$set(this.searchForm, 'price_to', '');
			},
			closeDropdown(){
				this.$refs.uDropdown.close();
			},
		},
		onShow(){
			this.getData(true);
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: $cs-bg-color;
}
.header{
	width: 100%;
}
.search-bar{
	height:120rpx;
	padding: 0 30rpx;
}
.filter-bar{
	height: 90rpx;
	background:$cs-bg-color;
}
.search-result{
  height: calc(100vh - var(--window-top) - var(--window-bottom) - 210rpx);
}
.empty{
	padding-top: 100rpx;
	text-align: center;
}
.loading{
	padding: 0 80rpx;
	text-align: center;
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
.dropdowncont-panel{
  position: fixed;
	top: 0;
	left:0;
	bottom:0;
	right: 0;
	z-index: 1000;
  background: $cs-bg-color;
	transform: translateY(0);
	transition: all 0.3s;
	&.hidden{
		transform: translateY(-100%);
		transition: all 0.3s;
	}
}
</style>
