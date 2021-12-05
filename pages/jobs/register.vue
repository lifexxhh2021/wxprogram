<template>
	<view>
		<view class="content u-p-l-30 u-p-r-30">
			<u-form :model="form" ref="uForm" :error-type="['message']">
				<u-form-item label="头像" prop="photo">
					<u-upload 
						ref="uUpload"
						:action="uploadAction" 
						:file-list="photoList"
						:show-upload-list="false"
						:auto-upload="false"
						:custom-btn="true"
						:multiple="false"
						@on-choose-complete="changePhoto"
						class="uploader"
					>
						<view slot="addBtn" class="upload u-flex u-row-right">
							<u-image width="100rpx" height="100rpx" :src="form.photo" mode="widthFix" shape="circle"></u-image>
							<u-icon name="arrow-right" class="u-m-l-15 gray"></u-icon>
						</view>
					</u-upload>
				</u-form-item>
				<u-form-item label="姓名" prop="name">
					<u-input v-model="form.name" input-align="right" placeholder="请输入姓名" />
				</u-form-item>
				<u-form-item label="性别" prop="gender">
					<view class="u-flex u-row-right">						
						<u-radio-group v-model="form.gender">
							<u-radio shape="circle" name="1">男</u-radio>
							<u-radio shape="circle" name="2">女</u-radio>
						</u-radio-group>
					</view>
				</u-form-item>
				<u-form-item label="出生年月" prop="date" label-width="160">					
					<view class="u-text-right" @click="showPicker('date')">
						<text v-if="form.date">{{form.date[0]}}-{{form.date[1]}}-{{form.date[2]}}</text>
						<text class="gray" v-else>请选择</text>
						<u-icon name="arrow-right" class="u-m-l-15 gray"></u-icon>
					</view>
					<u-input type="text" v-model="form.date" style="display: none;"></u-input>
				</u-form-item>
				<u-form-item label="最高学历" prop="education" label-width="160">
					<view class="u-flex u-row-right">						
						<u-input v-model="form.education" input-align="right" placeholder="请选择" disabled @click="showPicker('education')" />
						<u-icon name="arrow-right" class="u-m-l-15 gray"></u-icon>
					</view>
				</u-form-item>
				<u-form-item label="工作时间" prop="experience" label-width="160">
					<view class="u-flex u-row-right">						
						<u-input v-model="form.experience" input-align="right" placeholder="请选择" disabled @click="showPicker('experience')" />
						<u-icon name="arrow-right" class="u-m-l-15 gray"></u-icon>
					</view>
				</u-form-item>
				<u-form-item label="意向岗位" prop="profession" label-width="160">
					<view class="u-flex u-row-right">
						<u-input v-model="form.profession" input-align="right" placeholder="请选择" disabled @click="showPicker('profession')" />
						<u-icon name="arrow-right" class="u-m-l-15 gray"></u-icon>
					</view>
				</u-form-item>
				<view class="split-line"></view>
				<u-form-item label="手机" prop="mobile">
					<u-input v-model="form.mobile" input-align="right" placeholder="请输入手机号" />
				</u-form-item>
				<u-form-item label="邮箱(选填)" label-width="160">
					<u-input v-model="form.email" input-align="right" placeholder="请输入邮箱" />
				</u-form-item>
				<view class="split-line"></view>
				<u-form-item label="简历状态" prop="status" label-width="160">
					<view class="u-flex u-row-center">						
						<u-radio-group v-model="form.status">
							<u-radio shape="circle" name="1">公开</u-radio>
							<u-radio shape="circle" name="2">不公开</u-radio>
						</u-radio-group>
					</view>
				</u-form-item>
			</u-form>
			<view class="u-flex u-col-center u-m-t-30">
				<u-checkbox v-model="form.agree">我已阅读同意</u-checkbox>
				<text class="blue">《在线会员协议》</text>
				<text class="blue">《隐私协议》</text>
			</view>
		</view>
		<view class="fixed-bottom" @click="save">保 存</view>
		<!-- 日期选择 -->
		<u-picker v-model="isShowDatePicker" mode="time" @confirm="dateConfirm"></u-picker>
		<!-- 学历选择 -->
		<u-select v-model="isShowEducationPicker" mode="single-column" :list="educationData" @confirm="educationConfirm"></u-select>
		<!-- 工作时间选择 -->
		<u-select v-model="isShowExperiencePicker" mode="single-column" :list="experienceData" @confirm="experienceConfirm"></u-select>
		<!-- 意向岗位选择 -->
		<u-select v-model="isShowProfessionPicker" mode="single-column" :list="professionData" @confirm="professionConfirm"></u-select>
	</view>
	
</template>

<script>
	export default{
		data() {
			return {
				form: {
					photo: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					name: '',
					gender: '1',
					date: '',
					education: '',
					experience: '',
					profession: '',
					mobile: '',
					email: '',
					status: '1',
					agree: false,
				},
				rules: {
					name: [
						{ 
							required: true, 
							message: '请输入姓名', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change','blur'],
						}
					],
					date: [
						{ 
							required: true, 
							message: '请选择出生年月', 
							trigger: ['change','blur'],
						}
					],
					education: [
						{ 
							required: true, 
							message: '请选择最高学历', 
							trigger: ['change','blur'],
						}
					],
					experience: [
						{ 
							required: true, 
							message: '请选择工作时间', 
							trigger: ['change','blur'],
						}
					],
					profession: [
						{ 
							required: true, 
							message: '请选择意向岗位', 
							trigger: ['change','blur'],
						}
					],
					mobile: [
						{ 
							required: true, 
							message: '请填写手机号', 
							trigger: ['change','blur'],
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change','blur'],
						}
					]
				},
				uploadAction: 'http://www.example.com/upload',
				photoList: [],
				isShowDatePicker: false,
				dateParams: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
				isShowEducationPicker: false,
				educationData: [
					{value: 1, label: '应届毕业'}, 
					{value: 2, label: '初中'},
					{value: 3, label: '高中'}
				],
				isShowExperiencePicker: false,
				experienceData:[
					{value: 1, label: '1-3年'}, 
					{value: 2, label: '3-5年'}
				],
				isShowProfessionPicker: false,
				professionData: [
					{value: 1, label: '技术岗'},
					{value: 2, label: '销售岗'}
				]
			}
		},
		methods: {
			changePhoto(lists, name){
				console.log('changePhoto>>', lists, name);
				this.$refs.uUpload.remove(0);
				this.form.photo = lists[0].url;
			},
			showPicker(type){
				switch(type){
					case 'date':
						this.isShowDatePicker = true;
						break;
					case 'education':
						this.isShowEducationPicker = true;
						break;
					case 'experience':
						this.isShowExperiencePicker = true;
						break;
					case 'profession':
						this.isShowProfessionPicker = true;
						break;
					default:
						break;
				}
			},
			dateConfirm(e){
				console.log('dateConfirm>>', e);
				this.form.date = [e.year, e.month, e.day];
			},
			educationConfirm(e){
				this.form.education = e[0].label;
			},
			experienceConfirm(e){
				this.form.experience = e[0].label;
			},
			professionConfirm(e){
				this.form.profession = e[0].label;
			},
			save() {
				console.log('form>>', this.form)
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						this.saveForm();
					} else {
						console.log('验证失败');
					}
				});
			},
			saveForm(){
				this.openPage('pages/main/personal', 'switchTab');
			}
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style lang="scss">
	.content{
		background-color: #fff;
		padding-bottom: 100rpx;
	}
	.fixed-bottom{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 34rpx;
		position: fixed;
		// #ifndef H5
		bottom: calc(constant(safe-area-inset-bottom) + var(--window-bottom));
		bottom: calc(env(safe-area-inset-bottom) + var(--window-bottom));
		// #endif
		// #ifdef H5
		bottom: 0;
		// #endif
		z-index: 9999;
		background: $cs-primary-color;
		color: #fff;
	}
	.gray{
		color: rgb(192, 196, 204)
	}
	.blue{
		color:$cs-primary-color
	}
	/deep/.u-form-item__message {
		padding-left: 0 !important;
		text-align: right;
	}
	/deep/.u-form-item--right__content__slot{
		justify-content: flex-end !important;
	}
	.uploader{
		display: flex;
		justify-content: flex-end;
	}
	/deep/ .upload .u-image__image{
		width: 100% !important;
		height: 100% !important;
	}
</style>
