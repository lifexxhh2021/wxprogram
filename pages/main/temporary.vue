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
								<view class="filter-label">性别要求</view>
								<view class="filter-options u-flex u-flex-wrap">
									<view class="option">全部</view>
									<view class="option">不限性别</view>
									<view class="option">男性</view>
									<view class="option">女性</view>
								</view>
								<view class="filter-label">身份要求</view>
								<view class="filter-options u-flex u-flex-wrap">
									<view class="option">全部</view>
									<view class="option">不限身份</view>
									<view class="option">学生可做</view>
									<view class="option">非学生可做</view>
								</view>
								<view class="filter-label">工作时间</view>
								<view class="filter-options u-flex u-flex-wrap">
									<view class="option">全部</view>
									<view class="option">仅周末</view>
									<view class="option">仅工作日</view>
									<view class="option">半天</view>
									<view class="option">全天</view>
								</view>
								<view class="filter-label">期望薪资</view>
								<view class="u-flex">
									<view class="u-m-r-30 u-flex">最低薪资：<u-input type="number" placeholder="最低薪资" border style="width:160rpx"></u-input>元</view>
									<view class="u-flex">最高薪资：<u-input type="number" placeholder="最高薪资" border style="width:160rpx"></u-input>元</view>
								</view>
								<view class="filter-label">排列方式</view>
								<view class="filter-options u-flex u-flex-wrap">
									<view class="option">推荐排序</view>
									<view class="option">离我最近</view>
									<view class="option">最新发布</view>
									<view class="option">薪资最高</view>
								</view>
							</scroll-view>
							<view class="u-flex opt-btn-group u-border-top">
								<view class="opt-btn reset-btn" @click="closeDropdown">重置</view>
								<view class="opt-btn save-btn" @click="closeDropdown">确定</view>
							</view>
						</view>
					</cs-dropdown-item>
				</cs-dropdown>
				<view class="dropdowncont-panel" :class="{'hidden': !isShowFilter}">
					<job-filter @cancel="hideFilter" @save="saveFilter">
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
        <view class="result-item u-border-bottom" v-for="item,index in listData" :key="index">
          <view class="title u-flex u-row-between">
            <view class="name">临促</view>
            <view class="money">70元-300元/月</view>
          </view>
          <view class="u-flex u-row-between u-m-t-10">
            <view class="u-flex-1">
              <view class="desc u-line-1">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</view>
              <view class="time u-m-t-5">工作时间：xxxx-xxxx 08:00-12:00</view>
              <view class="u-flex u-flex-wrap">
                <view class="tag u-m-t-15">兼职</view>
              </view>
            </view>
            <view class="delivery-btn">投简历</view>
          </view>
        </view>
			<view class="empty" v-if="!listData.length && !isLoading">没有符合条件的结果</view>
			<view class="loading" v-if="isLoading">加载中...</view>
      </scroll-view>
		</view>
	</view>
</template>

<script>
  import jobFilter from '@/components/job-filter.vue';
	export default {
    components: { jobFilter },
		data() {
			return {
				searchForm: {
					keyword: '',
					region: ''
				},
				regionList: [
					{label: '全县', value: ''},
					{label: '乡镇1', value: '1'},
					{label: '乡镇2', value: '2'},
					{label: '乡镇3', value: '3'},
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
			closeDropdown(){
				this.$refs.uDropdown.close();
			},
		},
		onShow(){
			this.getData(true);
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
.result-item{
	width:100%;
	background: #fff;
	padding: 30rpx;
	.name{
		color: #000;
		font-weight: bold;
		font-size: 36rpx;
	}
	.money{
		color: $cs-red;
		font-weight: bold;
		font-size: 36rpx;
	}
	.desc{
		max-width: 500rpx;
	}
	.time{
		color: #a0a0a0;
	}
	.tag{
		padding: 15rpx;
		background: $cs-bg-color;
		border-radius: 10rpx;
		margin-right: 20rpx;
	}
	.delivery-btn{
		padding: 20rpx;
		background:$cs-primary-color;
		color: #fff;
		border-radius: 15rpx;
	}
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
