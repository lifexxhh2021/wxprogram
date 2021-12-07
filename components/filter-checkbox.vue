<template>
	<view>
		<view class="filter-label" v-html="label"></view>
		<view class="filter-options u-flex u-flex-wrap">
			<view class="option" :class="{'active': isCheckAll}" v-show="showAll" @click="checkAll">全部</view>
			<view class="option" 
				v-for="item,index in list" 
				:key="item.id" 
				:class="{'active': item.checked}"
				@click="checkItem(item,index)"
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
			label: '',
			list: {
				type: Array,
				default: [] 
			},
			multiple: false,
			showAll: true
		},
		computed: {
			isCheckAll() {
				if(!this.value.length) return true;
				if(this.value.length === this.list.length) return true;
				return false;
			}
		},
		watch: {
			value(nv, ov){
				this.initData()
			}
		},
		methods: {
			checkAll() {
				this.list = this.map(a=>{
					this.$set(a, 'checked', false);
				})
				this.$emit('input', [])
			},
			checkItem(item, index){
				if(this.multiple){
					this.$set(item, 'checked', !item.checked);
					this.$set(this.list[index], 'checked', !item.checked);
					this.$emit('input', this.list.filter(a=>a.checked).map(a=>a.id));
				} else {
					this.list.map(l=>{
						this.$set(l, 'checked', false);
					})
					this.$set(item, 'checked', true);
					this.$emit('input', [item.id]);
				}
			},
			initData(){
				this.list.map(item=>{
					if(this.value.some(val=>val==item.id)){
						this.$set(item, 'checked', true);
					} else {
						this.$set(item, 'checked', false);
					}
				})
			}
		},
		created(){
			this.initData()
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
		.option{
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
