<template>
  <view class="filter-panel">
		<view class="operate-panel u-flex u-row-between">
			<text class="cancel" @click="cancel">取消</text>
			<text class="save" @click="save">完成</text>
		</view>
		<view class="selected-panel" v-if="value.length">
			<view class="selected-list u-flex u-flex-wrap">				
				<view class="selected-item u-m-t-30" v-for="item,index in value" :key="item">
					<text class="u-line-1">{{item}}</text>
					<u-icon class="delete" name="close" size="18" @click="deleteItem(item,index)"></u-icon>		
				</view>
			</view>
		</view>
		<view class="split-line"></view>
		<view class="u-flex u-row-between u-col-top cat-panel">
			<view class="left">
				<view class="catitem" 
					:class="{'active': selectedTab==index}" 
					v-for="item,index in panelData" :key="item.id"
					@click="selectTab(index)"
				>{{item.name}}</view>
			</view>
			<view class="right">
				<view class="catitem"
					:class="{'active': value.includes(item.name)}"
					v-for="item in subCategorys" :key="item.id"
					@click="toggleItem(item)"
				>{{item.name}}</view>
			</view>
		</view>
  </view>
</template>

<script>
  export default {
		props: {
			value: {
				type: Array,
				default: ()=>[]
			},
		},
		data() {
			return {
				panelData: [{
					id: 1,
					name: '临时务工',
					children: [
						{id:10001, name: '搬运、运输'},
						{id:10002, name: '背沙、背砖'},
						{id:10003, name: '水电、电焊'},
						{id:10004, name: '杂工'},
					]
				},{
					id: 2,
					name: '兼职',
					children: [
						{id: 20001, name: '保洁'},
						{id: 20002, name: '保姆'},
						{id: 20003, name: '促销员'},
						{id: 20004, name: '钟点工'},
					]
				}],
				selectedTab: 0,
			}
		},
		computed: {
			subCategorys() {
				return this.panelData[this.selectedTab].children || [];
			}
		},
    methods: {
			selectTab(index){
				this.selectedTab = index;
			},
			toggleItem(item){
				let index = this.value.findIndex(name=>name==item.name);
				if(index>-1){
					this.value.splice(index, 1);
				} else {
					this.value.unshift(item.name);
				}
				this.$emit('input', this.value);
			},
			deleteItem(item,index){
				this.value.splice(index, 1);
				this.$emit('input', this.value);
			},
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
		padding: 0 30rpx 30rpx 30rpx;
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
				right: -15rpx;
				top: -15rpx;
				background: #ddd;
				display: flex;
				justify-content: center;
				align-items: center;
				width:36rpx;
				height: 36rpx;
				border-radius: 100%;
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