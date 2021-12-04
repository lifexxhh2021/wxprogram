<template>
	<view>
		<view class="u-m-20">
			<u-search
				placeholder="请输入关键字"
				v-model="keyword"
				height="75"
				border-color="#ccc"
				bg-color="#fff"
				:action-style="{ position: 'absolute', right: '5rpx' }"
				action-text=" "
			></u-search>
		</view>
		<view class="categorys u-flex">
			<view class="left">
				<view 
					class="catitem u-flex u-row-between u-col-center u-border-bottom"
					:class="{'active': index==0}"
					v-for="item,index in 50"
				>
					<view>文职服务类{{index+1}}</view>
					<u-icon name="play-right-fill" class="icon"></u-icon>
				</view>
			</view>
			<view class="right">
				<view class="catitem u-flex u-row-between"
					v-for="item,index in 50"
				>
					<view>文秘</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:''
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background: #f9f9f9;
}
.categorys{
	.left, .right{
		width: 50%;
		height: calc(100vh - 115rpx);
		overflow-y: auto;
	}
	.left{
		background: #fff;
	}
	.catitem{
		height: 100rpx;
		padding: 0 30rpx;
		&.active{
			color: $cs-primary-color;
			.icon{
				color: $cs-primary-color;
			}
		}
	}
	.icon{
		color: #cacaca;
	}
}


</style>
