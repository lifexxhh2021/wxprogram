<template>
	<view class="u-page">
		<view class="u-flex-col u-col-center u-margin-top-30">
			<button type="primary" size="mini" open-type="share" id="share1">自定义分享</button>
			<button type="primary" size="mini" open-type="share" id="share2" class="u-margin-top-20">自定义分享2</button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		// 分享给朋友
		onShareAppMessage(res, e){
			console.log('share => ', res);
			if(res.from == 'button'){
				return {
					title: res.target.id=='share1' ? '自定义分享1' : '自定义分享2',
					path: '/pages/login/index',
					imageUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=31976775,3027814075&fm=11&gp=0.jpg'
				}
			}
		}
	}
</script>

<style>
</style>
