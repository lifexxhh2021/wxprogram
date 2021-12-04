<template>
	<view>
		<view class="header">
			<view class="u-flex sec white-bg u-p-t-30 u-p-b-30">
				<view>
					<u-icon name="map"></u-icon>
					<text class="u-m-r-15">永春县</text>
				</view>
				<u-search
					class="u-flex-1"
					placeholder="请输入您感兴趣的职位"
					v-model="keyword"
					height="75"
					border-color="#fff"
					bg-color="#f2f2f2"
					search-icon=""
				></u-search>
			</view>
			<view class="filter-bar u-flex">
				<view class="filter-item u-flex u-row-center">
					全县<u-icon name="arrow-down-fill" size="24"></u-icon>
				</view>
				<view class="filter-item u-flex u-row-center">
					期望职位<u-icon name="arrow-down-fill" size="24"></u-icon>
				</view>
				<view class="filter-item u-flex u-row-center">
					筛选<u-icon name="arrow-down-fill" size="24"></u-icon>
				</view>
			</view>
		</view>
		<view class="search-result">
			<view class="result-item" v-for="item in 5">
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
			<!-- <view class="empty">没有符合条件的结果</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: $cs-bg-color
}
.header{
	width: 100%;
	position: fixed;
}
.sec{
	padding: 0 30rpx;
}
.white-bg{
	background-color: #fff;
}
.filter-bar{
	width: 100%;
	height: 100rpx;
	background:$cs-bg-color;
	.filter-item{
		width: calc(100%/3);
	}
}
.search-result{
	padding-top: 240rpx;
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
</style>
