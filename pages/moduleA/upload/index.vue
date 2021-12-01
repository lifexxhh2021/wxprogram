<template>
	<view class="u-page">
		<view class="u-flex-col u-col-center u-padding-30">
			<u-button type="primary" @click="chooseImage">选择图片</u-button>
			<view class="image-list u-flex u-flex-wrap u-row-center">
				<u-image width="200" height="200" :src="item" v-for="item,index in imageList" :key="index" @click="previewImage(index)"></u-image>
			</view>
			<u-button type="success" @click="saveImage" class="u-margin-top-20">保存图片</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				imageList: []
			}
		},
		methods: {
			chooseImage(){
				let self = this;
				uni.chooseImage({
					success: (res) => {
						console.log('choose image => ', res)
						self.imageList = res.tempFilePaths;
						// 上传图片
						// uni.uploadFile({
						// 	url: 'https://www.example.com/upload', //上传接口
						// 	filePath: self.imageList,
						// 	name: 'file',
						// 	formData: {
						// 		'user': 'test'
						// 	},
						// 	success: (uploadFileRes) => {
						// 		console.log(uploadFileRes.data);
						// 	}
						// })
					}
				})
			},
			// 图片预览
			previewImage(index){
				let self = this;
				uni.previewImage({
					urls: self.imageList,
					current: index,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
			},
			saveImage(){
				let self = this;
				uni.saveImageToPhotosAlbum({
					filePath: self.imageList[0],
					success: function(){
						uni.showToast({
							title: '保存成功'
						})
					}
				});
				// 下载文件
				// uni.downloadFile({
				// 	url: 'https://www.example.com/file/test', //下载接口
				// 	success: (res) => {
				// 		if (res.statusCode === 200) {
				// 			console.log('下载成功');
				// 		}
				// 	}
				// })
			}
		}
	}
</script>

<style>
</style>
