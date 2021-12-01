/*
 * @Description: async-validator校验函数合集
 */
import patterns from './patterns.js'
export function validateMobile(rule, value, callback) {
	const reg = patterns.mobile;
	if(!value){
		callback(new Error('请输入手机号码'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的手机号码'));
	} else {
		callback();
	}
}

export function validateTelephone(rule, value, callback){
	const reg = patterns.telephone;
	if(!value){
		callback(new Error('请输入电话号码'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的电话号码'));
	} else {
		callback();
	}
}

export function validatePhone(rule, value, callback){
	const reg = patterns.phone;
	if(!value){
		callback(new Error('请输入电话号码'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的电话号码'));
	} else {
		callback();
	}
}

export function validateIdCard(rule, value, callback){
	const reg = patterns.idCard;
	if(!value){
		callback(new Error('请输入身份证号码'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的身份证号码'));
	} else {
		callback();
	}
}

export function validateEmail(rule, value, callback){
	const reg = patterns.email;
	if(!value){
		callback(new Error('请输入邮箱'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的邮箱'));
	} else {
		callback();
	}
}

export function validatePostCode(rule, value, callback){
	const reg = patterns.postCode;
	if(!value){
		callback(new Error('请输入邮编'));
	} else if(!reg.test(value)){
		callback(new Error('请输入正确的邮编'));
	} else {
		callback();
	}
}

export function validateUsername(rule, value, callback){
	const reg = patterns.username
	if(!value){
		callback(new Error('请输入用户名'));
	} else if(!reg.test(value)){
		callback(new Error('用户名格式错误，只能包含字母数字或下划线，长度为4-30个字符'));
	} else {
		callback();
	}
}

export function validatePassword(rule, value, callback){
	const reg = patterns.password
	// const reg = patterns.password2;
	if(!value){
		callback(new Error('请输入密码'));
	} else if(!reg.test(value)){
		callback(new Error('密码格式错误，密码以字母开头，只能包含字母数字或下划线，长度为6-18个字符'));
	} else {
		callback();
	}
}
