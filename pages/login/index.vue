<template>
	<view class="u-page">
		<view class="u-flex u-row-center u-margin-top-30">
			<u-button type="primary" size="medium" open-type="getUserInfo" @getuserinfo="wxLogin">微信授权登录</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				redirectUrl: '',
				formData: {
					code: '',
					encrypted_data: '',
					iv: ''
				}
			}
		},
		methods: {
			wxLogin(data){
				console.log('login data => ', data);
				this.$set(this.formData, 'encrypted_data', data.detail.encryptedData);
				this.$set(this.formData, 'iv', data.detail.iv);
				let self = this;
				uni.login({
					provider: 'weixin',
					success: function(res){
						self.$set(self.formData, 'code', res.code);
						self.login();
					}
				});
			},
			async login(){
				// let ret = await this.$u.api.userLogin(this.formData);
				this.$u.vuex('vuex_token', 'token_20201021');
				this.openPage(this.redirectUrl||'/pages/tabBar/design/index', 'switchTab');
			}
		},
		onLoad(options){
			this.redirectUrl = options.redirect || '';
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
