// JavaScript Document
	

var g_blue = Vue.component('g_blue',{

	template:'<div class="glasses_list blue"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses01-blue.png" alt=""></li><li> Ipsum_blue </li><li>$ 1000 </li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div class="btn_cart" @click="add()">Add cart</div></li></ul></div>',
	
	methods:{
		
		add:function(item , id){
			
			var item = {id:1, name:'Ipsum_blue',price:1000, count:1 ,imgUrl:'http://127.0.0.1:8887/img/shap/glasses01-blue.png'};
			
			var newcount = 1;
			
			for(var i in glasses01.list){
				
				if(glasses01.list[i].id === item.id){
					
					newcount = glasses01.list[i].count+1;
				
				
					var newid = glasses01.list.indexOf(glasses01.list[i]);
				
					glasses01.list.splice(newid ,1);	
				
				}
				
			}
			
			item.count = newcount;
			
			glasses01.list.push(item);
			
		},
		
	},
			
});
	
var g_red = Vue.component('g_red',{
	
	template:'<div class="glasses_list red"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses01-red.png" alt=""></li><li> Ipsum_red </li><li>$ 1000 </li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div class="btn_cart" @click="add()">Add cart</div></li></ul></div>',
	
	methods:{
		
		add:function(item , id){
			
			var item = {id:2, name:'Ipsum_red',price:1000, count:1 ,imgUrl:'http://127.0.0.1:8887/img/shap/glasses01-red.png'};
			
			var newcount = 1;
			
			for(var i in glasses01.list){
				
				if(glasses01.list[i].id === item.id){
					
					newcount = glasses01.list[i].count+1;
				
				
					var newid = glasses01.list.indexOf(glasses01.list[i]);
				
					glasses01.list.splice(newid ,1);	
				
				}
				
			}
			
			item.count = newcount;
			
			glasses01.list.push(item);
			
		},
		
	},
	
			
});
	
var g_yellow = Vue.component('g_yellow',{
	
	template:'<div class="glasses_list yellow"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses01-yellow.png" alt=""></li><li> Ipsum_yellow </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div class="btn_cart" @click="add()">Add cart</div></li></ul></div>',
	
	methods:{
		
		add:function(item , id){
			
			
			var item = {id:3, name:'Ipsum_yellow',price:1000, count:1 ,imgUrl:'http://127.0.0.1:8887/img/shap/glasses01-yellow.png'};
			
			var newcount = 1;
			
			for(var i in glasses01.list){
				
				if(glasses01.list[i].id === item.id){
					
					newcount = glasses01.list[i].count+1;
				
				
					var newid = glasses01.list.indexOf(glasses01.list[i]);
				
					glasses01.list.splice(newid ,1);	
				
				}
				
			}
			
			item.count = newcount;
			
			glasses01.list.push(item);
			
		},
		
	},
	
	
});
	

	
var v_blue = Vue.component('v_blue',{ 
			
	template:'<div class="glasses_list blue"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses02-blue.png" alt=""></li><li> variou_blue </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div class="btn_cart" @click="add()">Add cart</div></li></ul></div>',
	
	methods:{
		
		add:function(item , id){
			
			
			var item = {id:4,name:'variou_blue',price:1000 ,count:1 , imgUrl:'http://127.0.0.1:8887/img/shap/glasses02-blue.png'};
			
			var newcount = 1;
			
			for(var i in glasses01.list){
				
				if(glasses01.list[i].id === item.id ){
					
					newcount = glasses01.list[i].count+1;
				
				
					var newid = glasses01.list.indexOf(glasses01.list[i]);
				
					glasses01.list.splice(newid ,1);	
					
				}
			}
			
			item.count = newcount;
			
			glasses01.list.push(item);
			
		},
		
	},
	
	
});
	
var v_red = Vue.component('v_red',{	
			
	template:'<div class="glasses_list red"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses02-red.png" alt=""></li><li> variou_red </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div class="btn_cart" @click="add()">Add cart</div></li></ul></div>',
	
	methods:{
		
		add:function(item , id){
			
			
			var item = {id:5,name:'variou_red',price:1000 ,count:1 , imgUrl:'http://127.0.0.1:8887/img/shap/glasses02-red.png'};
			
			var newcount = 1;
			
			for(var i in glasses01.list){
				
				if(glasses01.list[i].id === item.id ){
					
					newcount = glasses01.list[i].count+1;
				
				
					var newid = glasses01.list.indexOf(glasses01.list[i]);
				
					glasses01.list.splice(newid ,1);	
					
				}
			}
			
			item.count = newcount;
			
			glasses01.list.push(item);
			
		},
		
	},
	
});
	
var v_yellow = Vue.component('v_yellow',{
			
	template:'<div class="glasses_list yellow"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses02-yellow.png" alt=""></li><li> variou_yellow </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li><li><div  class="btn_cart" @click="add()">Add cart</div></li></ul></div>',
	
	methods:{
		
		add:function(item , id){
			
			
			var item = {id:6,name:'variou_yellow',price:1000 ,count:1 , imgUrl:'http://127.0.0.1:8887/img/shap/glasses02-yellow.png'};
			
			var newcount = 1;
			
			for(var i in glasses01.list){
				
				if(glasses01.list[i].id === item.id ){
					
					newcount = glasses01.list[i].count+1;
				
				
					var newid = glasses01.list.indexOf(glasses01.list[i]);
				
					glasses01.list.splice(newid ,1);	
					
				}
			}
			
			item.count = newcount;
			
			glasses01.list.push(item);
			
		},
		
	},
	
	
});
	


var glasses01 = new Vue({
	
	el:'#shap',
	
	data:{
		
		g_view:'g_blue',
		
		v_view:'v_blue',
		
		show_g_page:false,
		show_v_page:false,
		show_cart_page:false,
		shap_cart_no_data:true,
		
		list:[],
	
	},
	
	methods:{
		
		btn_show_g_page:function(){
			
			this.show_g_page = !this.show_g_page;
		},
		
		
		btn_show_v_page:function(){
			
			this.show_v_page = !this.show_v_page;
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
		
		btn_show_cart_page:function(){
			
			this.show_cart_page = !this.show_cart_page;
			
		},
		
		
		
		add_count:function(item){
			
				item.count++;
			
			
		},
		
		del_count:function(item){
			
			if(item.count > 1){
				
				item.count--;
				
				
			}
		},
		
		del_item(id, item ,count){
			
			var index = this.list.findIndex(item => {
				
				if(item.id === id){
					
					return true;
					
				}
				
			});
			
			this.list.splice(index , 1);
			
		},
		
	},
	
	computed:{
		
		total:function(){
			
			var total = 0;
			
			for(var i in this.list){
				
				total += this.list[i].price *this.list[i].count;
				
			}
			
			if(total === 0){
				
				this.shap_cart_no_data = true;
				
			}else{
				
				this.shap_cart_no_data = false;
				
			}
			
			return total;
			
		},
		
		cart_count:function(){
			
			var cart_count = 0;
			
			for(var i in this.list){
				
				cart_count += this.list[i].count;
				
			}
			
			return cart_count;
			
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





