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
				disabled
				@click="openPage('/pages/jobs/search', 'navigateTo')"
			></u-search>
		</view>
		<view class="categorys u-flex">
			<view class="left">
				<view 
					class="catitem u-flex u-row-between u-col-center u-border-bottom"
					:class="{'active': index===catIndex}"
					v-for="item,index in categoryData"
					@click="showChildren(item,index)"
				>
					<view>{{item.name}}</view>
					<u-icon name="play-right-fill" class="icon"></u-icon>
				</view>
			</view>
			<view class="right">
				<view class="catitem u-flex u-row-between"
					v-for="item,index in subCategoryData"
					@click="search(item)"
				>
					<view>{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:'',
				catIndex: 0,
				categoryData: [
					{
						id: 1,
						name: '文职类',
						children: [
							{ id: 10001, name: '秘书' },
							{ id: 10002, name: '行政' },
							{ id: 10003, name: '文员' },
						]
					},
					{
						id: 2,
						name: '销售类',
						children: [
							{ id: 20001, name: '销售总监' },
							{ id: 20002, name: '房地产销售员' }
						]
					},
					{
						id: 2,
						name: '技术类',
						children: [
							{ id: 30001, name: '架构师' },
							{ id: 30002, name: '运维工程师' },
							{ id: 30003, name: '前端开发工程师' },
						]
					}
				]
			}
		},
		computed: {
			subCategoryData() {
				if(this.catIndex !== ''){
					return this.categoryData[this.catIndex].children;
				} else {
					return [];
				}
			}
		},
		methods: {
			showChildren(item,index){
				this.catIndex = index;
			},
			search(item){
				this.openPage('/pages/jobs/jobSearch', 'navigateTo', {catId: item.id, catName: item.name})
			}
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
