<template>
	<view>
		test component
	</view>
</template>

<script>
	export default {
		name: 'csTest',
		beforeCreate(){
			console.log('beforeCreate')
		},
		created(){
			console.log('created')
		},
		beforeMount(){
			console.log('beforeMount')
		},
		mounted(){
			console.log('mounted')
		}
	}
</script>

<style>
</style>
