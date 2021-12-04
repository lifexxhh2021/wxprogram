<template>
  <view class="filter-panel">
		<view class="operate-panel u-flex u-row-between">
			<text class="cancel" @click="cancel">取消</text>
			<text class="save" @click="save">完成</text>
		</view>
		<view class="selected-panel">
			<view class="selected-list u-flex u-flex-wrap">				
				<view class="selected-item">
					<text class="u-line-1">保洁、保姆</text>
					<text class="delete u-flex">
						<u-icon name="close" size="24"></u-icon>
					</text>
				</view>
				<view class="selected-item">
					<text class="u-line-1">保洁222222222、保姆222222</text>
					<text class="delete u-flex">
						<u-icon name="close" size="24"></u-icon>
					</text>
				</view>
			</view>
		</view>
		<view class="split-line"></view>
		<view class="u-flex u-row-between u-col-top cat-panel">
			<view class="left">
				<view class="catitem active">临时务工</view>
				<view class="catitem">兼职</view>
			</view>
			<view class="right">
				<view class="catitem active">保洁</view>
				<view class="catitem active">保姆</view>
				<view class="catitem">促销员</view>
				<view class="catitem">钟点工</view>
			</view>
		</view>
  </view>
</template>

<script>
  export default {
    methods: {
    	cancel() {
    		this.$emit('cancel');
    	},
			save(){
				this.$emit('save');
			}
    },
  }
</script>

<style lang="scss" scoped>
	.operate-panel{
		height: 90rpx;
		background-color: $cs-bg-color;
		padding: 0 30rpx;
		.save{
			color: $cs-primary-color;
		}
	}
	.selected-panel{
		background-color: #fff;
		padding: 40rpx 30rpx;
		.selected-item{
			margin-right: 30rpx;
			display: inline-block;
			background-color: $cs-primary-color;
			color: #fff;
			border-radius: 10rpx;
			padding: 10rpx 20rpx;
			position: relative;
			.delete{
				position: absolute;
				right: -20rpx;
				top: -20rpx;
				background: #ddd;
				display: inline-block;
				width:36rpx;
				height: 36rpx;
				line-height: 36rpx;
				border-radius: 100%;
				text-align: center;
				*{
					color:$cs-primary-color;
				}
			}
		}
	}
	.cat-panel{
		.left{
			width:40%;
			background: $cs-bg-color;
		}
		.right{
			width: 60%;
			background-color: #fff;
			.catitem{
				&.active{
					border-left: 4rpx solid $cs-primary-color;
				}
			}
		}
		.catitem{
			line-height: 80rpx;
			padding: 0 30rpx;
			border-bottom: 1rpx solid #efefef;
			&.active{
				color: $cs-primary-color;
			}
		}
	}
</style>