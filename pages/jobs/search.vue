<template>
	<view class="u-p-25">
		<view class="u-flex search-bar" style="background:#fff;">
			<u-search
				class="u-flex-1"
				placeholder="请输入关键字"
				v-model="keyword"
				height="75"
				bg-color="#f8f8f8"
				action-text=" "
				@search="search"
			></u-search>
			<view @click="cancel">取消</view>
		</view>
		<view class="u-p-t-30 u-p-b-30 u-border-bottom">热门搜索</view>
		<view class="u-flex u-flex-wrap u-m-t-30">
			<view class="search-tag" v-for="item,index in hotTags" :key="index" @click="search(item)">蒙自</view>
		</view>
		<view class="u-p-t-40 u-p-b-30 u-border-bottom u-flex u-row-between">
			<view>历史搜索</view>
			<view class="delete" v-show="historyList.length">
				<u-icon name="close" size="24" @click="emptyHistory"></u-icon>			
			</view>
		</view>
		<view class="history-list">
			<view class="history-item u-flex u-row-between u-border-bottom" 
				v-for="item in historyList" 
				:key="item.id"
			>
				<view class="u-flex-1" @click="search(item.name)">{{item.name}}</view>
				<view class="delete" @click.stop="deleteHistory(item,index)">
					<u-icon name="close" size="24"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	  export default{
			data() {
				return {
					keyword: '',
					hotTags: ['蒙自', '驾驶员', '木工'],
					historyList: [
						{id: 1, name: '木工'},
						{id: 2, name: '蒙自'},
						{id: 3, name: '蒙自'},
					]
				}
			},
			methods: {
				search(keyword){
					this.openPage('/pages/jobs/search2', 'navigateTo', {keyword})
				},
				cancel(){
					this.$u.route({type:'back'})
				},
				deleteHistory(item, index){
					this.historyList.splice(index, 1);
				},
				emptyHistory(){
					this.historyList = [];
				}
			},
			onLoad(opt){			
				console.log('onLoad>>', opt)
			},
		}
</script>

<style lang="scss">
	/deep/ .search-bar{
		.u-action{
			width: 15rpx !important
		}
	}
	.search-tag{
		padding: 15rpx;
		background: #fff;
		border: 2rpx solid #ccc;
		border-radius: 10rpx;
		margin-right: 20rpx;
	}
	.history-item{
		height: 90rpx;
		line-height: 90rpx;
		.delete{
			height: 90rpx;
			padding-left:40rpx;
		}
	}
</style>
