	import { mapState } from 'vuex'
	import store from "@/store"
	
	let $uStoreKey = [];
	try{
		$uStoreKey = store.state ? Object.keys(store.state) : [];
	}catch(e){
		
	}
	
	module.exports = {
		created() {
			this.$u.vuex = (name, value) => {
				this.$store.commit('$uStore', {
					name,value
				})
			}
		},
		computed: {
			...mapState($uStoreKey)
		},
		methods: {
			openPage(path, type="navigateTo", params){
				this.$u.route({url: path, type, params})
			}
		},
		// 分享给朋友
		onShareAppMessage(res){

		},
		// 分享到朋友圈
		onShareTimeline(res){
			
		}
	}