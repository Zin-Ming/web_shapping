// JavaScript Document
	

var g_blue = Vue.component('g_blue',{

	template:'<div class="glasses_list blue"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses01-blue.png" alt=""></li><li> g_blue </li><li>$ 1000 </li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div class="btn_cart" @click="add()">Add cart</div></li></ul></div>',
	
	data:function(){
		
		return {
		
		name:'',
		
		price:'',
		
		count:1,
			
		};
	},
	
	methods:{
		
		add:function(){
			
			var item = {name:'g_blue',price:1000, count:1};
			
			glasses01.list.push(item);
			
		},
		
	},
			
});
	
var g_red = Vue.component('g_red',{
	
	template:'<div class="glasses_list red"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses01-red.png" alt=""></li><li> g_red </li><li>$ 1000 </li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div class="btn_cart" @click="add()">Add cart</div></li></ul></div>'
			
});
	
var g_yellow = Vue.component('g_yellow',{
	
	template:'<div class="glasses_list yellow"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses01-yellow.png" alt=""></li><li> glasses01_yellow </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div class="btn_cart" @click="add()">Add cart</div></li></ul></div>'
});
	

	
var v_blue = Vue.component('v_blue',{ 
			
	template:'<div class="glasses_list blue"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses02-blue.png" alt=""></li><li> variou_blue </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div class="btn_cart" @click="add()">Add cart</div></li></ul></div>'
});
	
var v_red = Vue.component('v_red',{	
			
	template:'<div class="glasses_list red"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses02-red.png" alt=""></li><li> variou_red </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div class="btn_cart" @click="add()">Add cart</div></li></ul></div>'
});
	
var v_yellow = Vue.component('v_yellow',{
			
	template:'<div class="glasses_list yellow"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses02-yellow.png" alt=""></li><li> variou_yellow </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div  class="btn_cart" @click="add()">Add cart</div></li></ul></div>',
	
	methods:{
		
		add:function(){
			
			var item = {name:'yellow',price:1000 ,count:1};
			
			glasses01.list.push(item);

		},
		
	},
	
	
});
	


var glasses01 = new Vue({
	
	el:'#shap',
	
	data:{
		
		g_view:'g_blue',
		
		v_view:'v_blue',
		
		show_shap:false,
		show_various_page:false,
		
		list:[],
	
	},
	
	methods:{
		
		show:function(){
			
			this.show_shap = !this.show_shap;
		},	
		
		show_various:function(){
			
			this.show_various_page = !this.show_various_page;
		},	
		
		show_g:function(color){
			
			if(color === 1){
			
				this.g_view = 'g_blue';
				
			}else if(color === 2){
				
				this.g_view = 'g_red';
				
			}else{
				
				this.g_view = 'g_yellow';
			}
			
		},
		
		show_v:function(index){
			
			if(index === 1){
				
				this.v_view = 'v_blue';
				
			}else if(index === 2){
				
				this.v_view = 'v_red';
				
			}else{
				
				this.v_view = 'v_yellow';
				
			}
			
		},
		
		add_count:function(item){
			
			item.count++;
			
		},
		
	},
	
	computed:{
		
		total:function(){
			
			var total = 0;
			
			for(var i in this.list){
				
				total += this.list[i].price *this.list[i].count;
				
			}
			return total;
		},
		
		
	},
	
	
	component:{
		
		'g_blue':g_blue,
		
		'g_red':g_red,
		
		'g_yellow':g_yellow,
		
		'v_blue':v_blue,
		
		'v_red':v_red,
		
		'v_yellow':v_yellow,
		

	},
	
});





