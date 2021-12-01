<template>
	<view class="u-page">
		<view class="address-list">
			<view class="address-item" v-for="item,index in list" :key="item.id">
				<view class="address">{{item.region}}{{item.address}}</view>
				<view class="name">{{item.name}}</view>
				<view class="mobile">{{item.mobile}}</view>
				<view class="opt-box u-text-right">
					<text @click="addressHandler('edit', item)">编辑</text>
				</view>
			</view>
		</view>
		<view class="u-padding-left-30 u-padding-right-30">	
			<view class="u-margin-top-20">
				<u-button type="default" @click="addressHandler('add')">新建收货地址</u-button>
			</view>
			<view class="u-margin-top-20">
				<u-button type="primary" @click="chooseWXAddress">使用微信地址</u-button>
				<view class="wx-address">
					<view>						
						{{wxAddress.provinceName || ''}}
						{{wxAddress.cityName || ''}}
						{{wxAddress.countyName || ''}}
						{{wxAddress.detailInfo || ''}} 
					</view>
					<view>					
						{{wxAddress.userName || ''}}
						{{wxAddress.telNumber || ''}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				list: [{
					id: 1,
					name: '张三',
					mobile: '18302565523',
					province: '广东省',
					city: '深圳市',
					area: '宝安区',
					region: '广东省深圳市宝安区',
					address: '自由路66号',
				},{
					id: 2,
					name: '李四',
					mobile: '15689565523',
					province: '福建省',
					city: '厦门市',
					area: '思明区',
					region: '福建省厦门市思明区',
					address: '湖滨路33号',
				}],
				wxAddress: {}
			}
		},
		methods:{
			addressHandler(type, item){
				switch(type){
					case 'add':
						this.openPage('/pages/moduleB/address/edit');
						break;
					case 'edit':
						this.openPage('/pages/moduleB/address/edit', 'navigateTo', item);
						break;
					case 'delete':
						break;
				}
			},
			chooseWXAddress(){
				let self = this;
				uni.chooseAddress({
					success(res){
						console.log('wx address => ', res);
						self.wxAddress = Object.assign({}, {
							countyName: res.countyName,
							provinceName: res.provinceName,
							cityName: res.cityName,
							detailInfo: res.detailInfo,
							userName: res.userName,
							telNumber: res.telNumber
						})
					}
				})
			}
		}
	}
</script>
	
<style lang="scss">
	.address-list{
		background-color: #fff;
	}
	.address-item{
		padding: 30rpx;
		border-bottom: 2rpx solid $cs-border-color;
	}
</style>
