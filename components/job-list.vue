<template>
	<view>
		<template v-if="type==1">
			<view class="result-item u-border-bottom"
				v-for="(item, index) in list" :key="index"
				@click="openPage('/pages/jobs/detail', 'navigateTo', {id: 100})"
			>
				<view class="u-flex u-row-between">
					<view class="name">服务员</view>
					<view class="money">2500元-3500元/月</view>
				</view>
				<view class="u-flex u-row-between u-m-t-10">
					<view>
						<view class="u-flex">
							<view class="addr u-line-1">永春县城关XX街道</view>
							<view class="limit u-m-l-30">1-2年</view>
						</view>
						<view class="education">初中及以下</view>
					</view>
					<view class="date">10月06日</view>
				</view>
			</view>
		</template>
		<!-- 临时务工 -->
		<template v-else>
			<view class="result-item u-border-bottom temporary" 
				v-for="item,index in list" :key="index" 
			>
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
					<view class="delivery-btn" @click="delivery">投简历</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: String | Number,
				default: 1
			},
			list: {
				type: Array,
				default: []
			},
		},
		methods: {
			delivery() {
				this.openPage('/pages/personal/resume', 'navigateTo');
			}
		},
	}
</script>

<style lang="scss">
.result-item {
	background: #fff;
	width: 100%;
	padding: 30rpx;
	.name {
		color: #2a272c;
		font-size: 32rpx;
		font-weight: bold;
	}
	&.temporary{
		.name{
			font-size: 36rpx;
		}
	}
	.money {
		color: $cs-red;
		font-size: 32rpx;
	}
	.limit {
		padding: 0 15rpx;
		border-left: 2rpx solid #efefef;
		border-right: 2rpx solid #efefef;
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
</style> 
