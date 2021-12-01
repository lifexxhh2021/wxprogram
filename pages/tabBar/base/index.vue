<template>
	<view>
		<view class="panel-item u-flex u-row-between u-col-center" @tap="openPage('/pages/login/index')">
			<view>登录</view>
			<u-icon name="arrow-right" color="#333" size="24"></u-icon>
		</view>
		<view class="panel-item u-flex u-row-between u-col-center" @tap="openPage('/pages/moduleA/pay/index')">
			<view>支付</view>
			<u-icon name="arrow-right" color="#333" size="24"></u-icon>
		</view>
		<view class="panel-item u-flex u-row-between u-col-center" @tap="openPage('/pages/moduleA/share/index')">
			<view>分享</view>
			<u-icon name="arrow-right" color="#333" size="24"></u-icon>
		</view>
		<view class="panel-item u-flex u-row-between u-col-center" @tap="openPage('/pages/moduleA/upload/index')">
			<view>图片上传/下载</view>
			<u-icon name="arrow-right" color="#333" size="24"></u-icon>
		</view>
		<view class="panel-item u-flex u-row-between u-col-center" @tap="openPage('/pages/moduleA/contact/index')">
			<view>在线客服</view>
			<u-icon name="arrow-right" color="#333" size="24"></u-icon>
		</view>
		<view class="panel-item u-flex u-row-between u-col-center" @tap="openPage('/pages/moduleA/customIcon/index')">
			<view>自定义字体图标</view>
			<u-icon name="arrow-right" color="#333" size="24"></u-icon>
		</view>
		<view class="panel-item u-flex u-row-between u-col-center" @tap="openPage('/pages/moduleB/address/index')">
			<view>地址管理</view>
			<u-icon name="arrow-right" color="#333" size="24"></u-icon>
		</view>
		<view class="panel-item u-flex u-row-between u-col-center" @tap="openPage('/pages/moduleB/order/index')">
			<view>订单管理</view>
			<u-icon name="arrow-right" color="#333" size="24"></u-icon>
		</view>
		<view class="panel-item u-flex u-row-between u-col-center" @tap="openPage('/pages/moduleB/order/index2')">
			<view>订单管理2</view>
			<u-icon name="arrow-right" color="#333" size="24"></u-icon>
		</view>
		<view class="panel-item u-flex u-row-between u-col-center" @tap="openPage('/pages/moduleB/order/index3')">
			<view>订单管理3</view>
			<u-icon name="arrow-right" color="#333" size="24"></u-icon>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.panel-item{
		height: 90rpx;
		border-bottom: 2rpx solid $cs-border-color;
		padding: 0 30rpx;
	}
</style>
