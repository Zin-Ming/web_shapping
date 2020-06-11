// JavaScript Document

var tabs = [
	
	{ 
		name: 'glasses01_blue',
		count:'1',
		
		component:{
			
			template:'<div class="glasses_list blue"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses01-blue.png" alt=""></li><li> glasses01_blue </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li></ul><p><i class="fas fa-shopping-cart"></i></p></div>'
			
		},
	},
	
	{ 
		name: 'glasses01_red',
		count:'1',	
		
		component:{
			
			template:'<div class="glasses_list red"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses01-red.png" alt=""></li><li> glasses01_red </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li></ul><p><i class="fas fa-shopping-cart"></i></p></div>'
			
		},
	},
	
	{ 
		name: 'glasses01_yellow',
		count:'1',	
		
		component:{
			
			template:'<div class="glasses_list yellow"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses01-yellow.png" alt=""></li><li> glasses01_yellow </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li></ul><p><i class="fas fa-shopping-cart"></i></p></div>'
			
		},
	}
	
	
];

var various = [
	
	{ 
		name: 'variou_blue',
		count:'1',
		
		component:{
			
			template:'<div class="glasses_list blue"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses02-blue.png" alt=""></li><li> variou_blue </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li></ul><p><i class="fas fa-shopping-cart"></i></p></div>'
			
		},
	},
	
	{ 
		name: 'variou_red',
		count:'1',	
		
		component:{
			
			template:'<div class="glasses_list red"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses02-red.png" alt=""></li><li> variou_red </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li></ul><p><i class="fas fa-shopping-cart"></i></p></div>'
			
		},
	},
	
	{ 
		name: 'variou_yellow',
		count:'1',	
		
		component:{
			
			template:'<div class="glasses_list yellow"><ul><li><img src="http://127.0.0.1:8887/img/shap/glasses02-yellow.png" alt=""></li><li> variou_yellow </li><li>$1000</li><li>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li></ul><p><i class="fas fa-shopping-cart"></i></p></div>'
			
		},
	}
	
];



var glasses01 = new Vue({
	
	el:'#shap',
	
	data:{
		
		show_shap:false,
		show_various_page:false,
		
		various:various,
		varTab:various[0],
		
		tabs:tabs,
		currentTab:tabs[0],
	},
	
	methods:{
		
		show:function()
		{
			this.show_shap = !this.show_shap;
		},	
		
		show_various:function()
		{
			this.show_various_page = !this.show_various_page;
		},	
		
	},
	
});




