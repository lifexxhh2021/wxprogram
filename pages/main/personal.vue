<template>
	<view class="wapper">
		<view class="u-flex u-p-l-20  u-p-r-20 u-m-b-25 b-white head p-relative">
			<view class="p-icon">
				<image src="/static/images/p_icon.png"></image>
			</view>
			<view class="u-m-l-20">
				<view class="u-m-b-10 u-font-32 p-bold">厦门海鸿盛世网络科技有限公司</view>
				<view>公司信息不足<view class="u-p-l-10 perfect">去完善<u-icon name="arrow-right"></u-icon></view></view>
			</view>
			<view class="switch">切换个人版</view>
		</view>
		<view class="b-white u-m-b-25">
			<view class="u-flex u-p-20 u-border-bottom">
				<view class="u-flex-1 u-font-30 p-bold">收到的简历</view>
				<view class="u-flex-1" style="text-align: right;">查看全部</view><u-icon name="arrow-right"></u-icon>
			</view>
			<view class="u-flex u-p-20 u-p-b-40">
				<view class="u-flex u-flex-1 d-col">
					<image class="p-image" src="/static/images/no_handle.png"></image>
					<view class="u-m-t-10">待处理</view>
				</view>
				<view class="u-flex u-flex-1 d-col">
					<image class="p-image" src="/static/images/audition.png"></image>
					<view class="u-m-t-10">待面试</view>
				</view>
				<view class="u-flex u-flex-1 d-col">
					<image class="p-image" src="/static/images/text.png"></image>
					<view class="u-m-t-10">已面试</view>
				</view>
				<view class="u-flex u-flex-1 d-col">
					<image class="p-image" src="/static/images/refuse.png"></image>
					<view class="u-m-t-10">不合适</view>
				</view>
			</view>
		</view>
		<view class="b-white u-m-b-25">
			<view class="u-flex u-p-20">
				<view class="u-flex-1 u-font-30 p-bold">更多功能</view>
			</view>
			<view class="u-flex u-p-20 u-p-b-40 u-flex-wrap">
				<view class="u-flex d-col w-25 u-m-b-60 p-relative">
					<image class="p-image" src="/static/images/company.png"></image>
					<view class="u-m-t-10">我的公司</view>
					<view class="u-font-12" style="color: #0398F6;position: absolute;bottom: -30rpx;">未认证</view>
				</view>
				<view class="u-flex d-col w-25 u-m-b-60">
					<image class="p-image" src="/static/images/work.png"></image>
					<view class="u-m-t-10">职位管理</view>
				</view>
				<view class="u-flex d-col w-25 u-m-b-60">
					<image class="p-image" src="/static/images/team.png"></image>
					<view class="u-m-t-10">我的团队</view>
				</view>
				<view class="u-flex d-col w-25 u-m-b-60">
					<image class="p-image" src="/static/images/setting.png"></image>
					<view class="u-m-t-10">设置</view>
				</view>
				<view class="u-flex d-col w-25 u-m-b-60">
					<image class="p-image" src="/static/images/post.png"></image>
					<view class="u-m-t-10">信箱</view>
				</view>
				<view class="u-flex d-col w-25 u-m-b-60">
					<image class="p-image" src="/static/images/advance.png"></image>
					<view class="u-m-t-10">意见建议</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				switch:'切换个人版'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.wapper{
		background-color: #F8F8F8;
		height: -webkit-fill-available;
		.head{
			height: 150rpx;
		}
	}
	.p-icon{
		border-radius: 50rpx;
		width: 100rpx;
		height: 100rpx;
		background-color: #DFF1FB;
	}
	.p-icon image{
		width: 100%;
		height: 100%;
		border-radius: 50rpx;
	}
	.p-bold{
		font-weight: bold;
	}
	.perfect{
		display: inline-block;
		color: #0398F6;
	}
	.b-white{
		background-color: #FFFFFF;
	}
	.p-image{
		width: 60rpx;
		height: 60rpx;
	}
	.d-col{
		flex-direction: column;
	}
	.w-25{
		width: 25%;
	}
	.p-relative{
		position: relative;
	}
	.switch{
		text-align: center;
		line-height: 60rpx;
		color: #FFFFFF;
		position: absolute;
		background-color: #0398F6;
		right: 0;
		top: 75rpx;
		height: 60rpx;
		width: 200rpx;
		border-top-left-radius: 30rpx;
		border-bottom-left-radius: 30rpx;
	}
</style>
