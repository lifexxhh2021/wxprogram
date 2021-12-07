<template>
	<view>
		<view class="filter-label" v-html="label"></view>
		<view class="filter-options u-flex u-flex-wrap">
			<view class="filter-option" :class="{'active': isCheckAll}" v-if="showAll" @click="checkAllHander">{{showAllText}}</view>
			<view class="filter-option" 
				v-for="item,index in list" 
				:key="item.id" 
				:class="{'active': selected.includes(item.id)}"
				@click.stop="checkItemHandler(item,index)"
			>{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: Array,
				default: []
			},
			label: {
				type: String,
				default: ''
			},
			list: {
				type: Array,
				default: ()=>[]
			},
			multiple: {
				type: Boolean,
				default: false
			},
			showAll: {
				type: Boolean,
				default: false
			},
			showAllText: {
				type: String,
				default: '全部'
			}
		},
		data() {
			return {
				isCheckAll: false,
				selected: [],
			}
		},
		watch: {
			value:{
				handler: function(nv, ov){
					this.initData()
				},
				deep: true
			}
		},
		methods: {
			checkAllHander(){
				this.selected = [];
				this.isCheckAll = true;
				this.$emit('input', this.selected);
			},
			checkItemHandler(item, index){
				if(this.multiple){
					let _index = this.selected.findIndex(a=>a==item.id);
					if(_index > -1){
						this.selected.splice(_index, 1);
					} else {
						this.selected.push(item.id);
					}
					this.$emit('input', this.selected);
				} else {
					this.selected = [item.id];
					this.$emit('input', this.selected);
				}
				this.isCheckAll = !this.selected.length || this.selected.length===this.list.length;
			},
			initData(){
				this.selected = this.value;
				this.isCheckAll = !this.selected.length || this.selected.length===this.list.length;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.filter-label{
		color: #000;
		font-weight: bold;
		line-height: 80rpx;
	}
	.filter-options{
		.filter-option{
			min-width: 160rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			background: #f7f7f9;
			margin-right: 15rpx;
			margin-bottom: 15rpx;
			&.active{
				background-color: $cs-primary-color;
				color: #fff;
			}
		}
	}
</style>
