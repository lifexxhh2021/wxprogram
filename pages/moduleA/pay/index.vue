<template>
	<view class="u-page">
		<view class="u-flex u-row-center u-margin-top-30">
			<u-button type="primary" size="medium" @click="pay">付款</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			pay(){
				// let ret = await self.$u.api.payOrder({order_code: orderItem.order_code});
				// let retData = ret.data;
				uni.requestPayment({
				    provider: 'wxpay',
				    timeStamp: retData.timestamp,
				    nonceStr: retData.nonce_str,
				    package: retData.package,
				    signType: retData.sign_type,
				    paySign: retData.pay_sign,
				    success: function (res) {
				        uni.showToast({
				            title: '支付成功',
				            duration: 1500
				        });
				    },
				    fail: function (err) {
						console.log('支付失败:', err)
				        uni.showToast({
				            title: '支付失败',
				            duration: 1500
				        });
				    }
				})
			}
		}
	}
</script>

<style>
</style>
