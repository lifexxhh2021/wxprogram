<template>
	<view>
		<view class="content">
			<view class="u-p-l-25 u-p-r-25 u-p-t-30">
				<view class="u-flex u-row-between">
					<view class="title">店员</view>
					<view class="money">1800元-2800元/月</view>
				</view>
				<!-- 非弹性 -->
				<view>
					<view class="u-flex u-p-t-10">
						<view>
							<u-icon name="map"></u-icon>
							<text>地区地区地区地区</text>
						</view>
						<view class="line u-p-l-15 u-p-r-15">|</view>
						<view>
							<u-icon name="bookmark"></u-icon>
							<text>经验不限</text>
						</view>
					</view>
					<view class="u-m-t-5">
						<u-icon name="bookmark"></u-icon>
						<text>学历不限</text>
					</view>
				</view>
				<!-- 弹性 -->
				<view style="display: none;">
					<view class="u-font-32 u-m-t-15">工作要求：</view>
					<view class="u-flex u-flex-wrap u-m-t-15">				
						<view class="tag">18-45岁</view>
						<view class="tag">全天</view>
						<view class="tag">不限身份</view>
					</view>
					<view class="u-font-32 u-m-t-15">工作时间：</view>
					<view class="u-flex u-flex-wrap u-m-t-15">2019-12-01至2019-12-15 08:30-18:00</view>
				</view>
			</view>
			<view class="u-p-l-25 u-p-r-25">
				<view class="u-border-bottom title u-p-t-30 u-p-b-30">工作地点</view>
				<view class="u-flex u-p-t-20 u-p-b-20">
					<view class="u-flex u-col-top">
						<u-icon name="map-fill" color="#059bf4" size="60"></u-icon>
						<text @click="showLocation">详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址详细地址</text>
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="split-line"></view>
			<view class="u-p-l-25 u-p-r-25">			
				<view class="u-border-bottom title u-p-t-30 u-p-b-30">职位描述</view>
				<view class="u-flex u-flex-wrap u-m-t-30">
					<view class="tag">试用期1个月</view>
					<view class="tag">求有上进心，有想法的小伙伴</view>
				</view>
				<view class="u-m-t-30">
					<u-read-more show-height="300">
						<rich-text :nodes="content"></rich-text>
					</u-read-more>
				</view>
			</view>
			<view class="split-line"></view>
			<view class="u-p-l-25 u-p-r-25">	
				<view class="u-flex u-row-between u-p-t-30 u-p-b-30 u-border-bottom">
					<view class="u-flex">
						<u-image 
							width="100rpx" 
							height="100rpx" 
							src="https://cdn.uviewui.com/uview/swiper/1.jpg"
						></u-image>
						<view class="u-m-l-10">
							<view class="company-name">XXXXXX餐厅</view>
							<view>20人以下 服务行业-饭店酒店</view>
						</view>
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="u-p-l-25 u-p-r-25">
				<view class="u-relative u-m-t-30">
					<view class="phone-icon u-flex u-row-center u-col-center">
						<u-icon name="phone" color="#fff" size="50"></u-icon>
					</view>
					<view class="to-recruitment">我是公司？我也去招聘</view>
				</view>
			</view>
		</view>
		<view class="fixed-bottom">
			<view class="u-flex u-row-between">
				<view class="u-flex u-col-center u-p-l-25">
					<view class="u-p-r-10 u-m-r-20">	
						<u-icon name="home" size="40"></u-icon>
						<view @click="openPage('/pages/main/recruitment', 'switchTab')">首页</view>
					</view>
					<view class="u-p-l-10 u-p-r-10">
						<u-icon name="bookmark" size="40"></u-icon>
						<view>收藏</view>
					</view>
				</view>
				<view class="delivery u-font-36" @click="delivery">投递简历</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '北京2022冬奥会计划于2月4日开幕北京2022冬奥会计划于2月4日开幕北京2022冬奥会计划于2月4日开幕北京2022冬奥会计划于2月4日开幕北京2022冬奥会计划于2月4日开幕北京2022冬奥会计划于2月4日开幕北京2022冬奥会计划于2月4日开幕北京2022冬奥会计划于2月4日开幕北京2022冬奥会计划于2月4日开幕北京2022冬奥会计划于2月4日开幕北京2022冬奥会计划于2月4日开幕'
			};
		},
		methods: {
			showLocation() {
				console.log('获取地址。。。。')
				wx.getLocation({
					type: 'gcj02',
					success: function (res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						wx.chooseLocation({
							latitude: res.latitude,
							longitude: res.longitude
						})
					}
				})
			},
			delivery(){
				this.openPage('/pages/personal/resume', 'navigateTo')
			}
		},
	}
</script>

<style lang="scss">
	page{
		background: $cs-bg-color;
	}
	.content{
		background-color: #fff;
		padding-bottom: 200rpx;
	}
	.title{
		font-size: 36rpx;
		color: #000;
		font-weight: 600;
	}
	.money{
		font-size: 36rpx;
		color: $cs-red;
	}
	.tag{
		padding: 15rpx;
		background: $cs-bg-color;
		border-radius: 10rpx;
		margin-right: 20rpx;
	}
	.detail-cont{
		min-height: 300rpx;
	}
	.company-name{
		color: #000;
		font-size:32rpx;
	}
	.phone-icon{
		width: 90rpx;
		height: 90rpx;
		background-color: $cs-primary-color;
		color: #fff;
		border-radius: 50%;
		position: absolute;
		top: 10rpx;
		left:-10rpx;
	}
	.to-recruitment{
		height: 88rpx;
		line-height: 88rpx;
		background-color: #f2f5fa;
		color: #059bf4;
		padding: 0 20rpx;
		text-align: center;
		font-weight: bold;
		font-size: 32rpx;
	}
	.fixed-bottom{
		width: 100%;
		height: 100rpx;
		position: fixed;
		// #ifndef H5
		bottom: calc(constant(safe-area-inset-bottom) + var(--window-bottom));
		bottom: calc(env(safe-area-inset-bottom) + var(--window-bottom));
		// #endif
		// #ifdef H5
		bottom: 0;
		// #endif
		z-index: 9999;
		background: #fff;
		&>view{
			height: 100%;
			text-align: center;
		}
	}
	.delivery{
		width: 50%;
		height: 100rpx;
		line-height: 100rpx;
		background-color: $cs-primary-color;
		color: #fff;
	}
</style>
