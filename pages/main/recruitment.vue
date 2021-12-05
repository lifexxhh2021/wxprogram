<template>
  <view class="u-page">
    <u-swiper :list="banners" height="364"></u-swiper>
    <view class="u-flex u-p-l-25 u-p-r-25 u-m-t-15 u-m-b-15">
      <view class="notice-text"> <view>最新</view><view>资讯</view> </view>
      <view class="u-flex-1">
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
		<view class="u-flex">
			<cs-dropdown ref="uDropdown" class="region-select" @self-open="showFilter">
				<cs-dropdown-item v-model="region" title="全县" :options="regionList"></cs-dropdown-item>
			</cs-dropdown>
			<view class="u-flex-1 u-relative u-m-l-20 u-p-r-25 search-bar">
				<u-search
					placeholder="请输入搜索内容"
					v-model="keyword"
					height="75"
					border-color="#ccc"
					bg-color="#fff"
					:action-style="{ position: 'absolute', right: '5rpx' }"
					:clearable="false"
					search-icon=""
					action-text=" "
					disabled
					@click="openPage('/pages/jobs/search', 'navigateTo', {region: 100})"
				></u-search>
				<u-icon name="search" class="search-icon" size="40"></u-icon>
			</view>
		</view>
    <view class="more-cat u-text-right u-m-t-20 u-m-r-20">
      更多
      <u-icon name="arrow-right-double"></u-icon>
    </view>
    <view class="catlist">
      <view class="catitem" v-for="item,index in 8" :key="index">
        <u-icon
          name="icon_delete1"
          custom-prefix="custom-icon"
          size="80"
          color="#6867cf"
        ></u-icon>
        <view class="text">鞋服纺织</view>
      </view>
    </view>
    <view class="stastics u-p-25">入驻企业:1554 职位:1.52万 简历:5321 访问:3.64万</view>
    <u-sticky>
      <view class="tab-bar" id="tabBar">
        <u-tabs
          :list="tabs"
          :current="currentTab"
          @change="changeTab"
          :is-scroll="true"
          item-width="250"
          height="96"
          bar-width="74"
          font-size="32"
          active-color="#0090f4"
          bar-style="{'text-align':'center'}"
        ></u-tabs>
      </view>
    </u-sticky>
    <view class="list-wrap">
      <view class="list-item" 
				v-for="(item, index) in listData" :key="index"
				@click="openPage('/pages/jobs/detail', 'navigateTo', {id: 100})"
			>
        <view>
          <view class="name">服务员</view>
          <view class="addr u-m-t-10 u-line-1">永春县城关XX街道</view>
          <view class="education">初中及以下</view>
        </view>
        <view class="limit u-m-t-32">1-2年</view>
        <view class="u-flex-col u-text-right">
          <view class="money">2500元-3500元/月</view>
          <view class="date u-m-t-30">10月06日</view>
        </view>
      </view>
      <view class="loading" v-if="isLoading">加载中...</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        { image: "https://cdn.uviewui.com/uview/swiper/1.jpg" },
        { image: "https://cdn.uviewui.com/uview/swiper/2.jpg" },
        { image: "https://cdn.uviewui.com/uview/swiper/3.jpg" },
      ],
			regionList: [
				{label: '全县', value: ''},
				{label: '乡镇1', value: '1'},
				{label: '乡镇2', value: '2'},
				{label: '乡镇3', value: '3'},
			],
			region: '',
      keyword: "",
      stickyTop: 0,
      noticeData: ["2021年永春最新补贴政策", "2021年永春最新补贴政策222"],
      tabs: [{ name: "为您推荐" }, { name: "热门职位" }, { name: "最新发布" }],
      currentTab: 0,
      listData: [],
      isLoading: false,
    };
  },
  methods: {
		showFilter(){
			this.isShowFilter = true;
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
    changeTab(index) {
      this.currentTab = index;
      uni.createSelectorQuery().selectViewport().scrollOffset((res) => {
				if (res.scrollTop > this.tabBarTop) {
					uni.pageScrollTo({
						scrollTop: this.tabBarTop,
						duration: 0,
					});
				}
			}).exec();
      this.getData(true);
    },
  },
  onLoad(options) {
    console.log("页面参数：", options);
  },
  onShow() {
    this.getData(true);

    // let sysInfo = uni.getSystemInfoSync();
    // let _top = sysInfo.statusBarHeight + 44;
    // #ifndef H5
    // px转rpx
    // this.stickyTop = _top / (uni.upx2px(_top) / _top);
    // #endif
    uni
      .createSelectorQuery()
      .select("#tabBar")
      .boundingClientRect((res) => {
        // this.tabBarTop = res.top - _top;
				this.tabBarTop = res.top;
      })
      .exec();
  },
  onReachBottom() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.search-icon {
  position: absolute;
  right: 45rpx;
  top: 18rpx;
}
/deep/ .region-select {
	// flex: unset !important;
	.u-dropdown__content{
		width: 750rpx !important
	}
	.u-dropdown__menu {
		padding-left: 25rpx;
	}
}
.notice-text {
  color: $cs-primary-color;
  font-weight: bold;
  font-size: 32rpx;
}
.catlist {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20rpx;
  .catitem {
    width: 25%;
    text-align: center;
    margin: 20rpx 0;
    .text {
      color: #847d7d;
      margin-top: 15rpx;
      font-size: 30rpx;
    }
  }
}
.stastics {
  border-bottom: 15rpx solid #f8f6f9;
}
.list-wrap {
  // min-height: calc(100vh - 100rpx);
  min-height: 2000rpx;
  padding: 0 20rpx;
  // min-height: calc(100vh - 44px - constant(safe-area-inset-top));
  // min-height: calc(100vh - 44px - env(safe-area-inset-top));
}
.list-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  .name {
    font-size: 32rpx;
    color: #2a272c;
    font-weight: bold;
  }
  .limit {
    align-self: center;
  }
  .money {
    color: $cs-red;
    font-size: 32rpx;
  }
}
.loading {
  text-align: center;
  padding: 30rpx 0;
}
</style>
