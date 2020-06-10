// JavaScript Document


var list = new Vue({
	
	el:'#shap',
	
	data:{
		
		show_shap:false,
		
		list:[
			
			{
				id: '1',
				name: 'glasses01_blue',
				imgUrl:'http://127.0.0.1:8887/img/shap/glasses01-blue.png',
				price:'1000',
				info:'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
				count:'1',
			},		
			
		],
		
	},
	
	methods:{
		
		show:function()
		{
			this.show_shap = !this.show_shap;
		},
		
		change_color:function(color)
		{
			var colorindex = color;
			
			if(colorindex === 1) {
				
			document.querySelector('.glasses_list').setAttribute('style', 'background-color:#A8D5EA');
				
			}else if(colorindex === 2){
				
				document.querySelector('.glasses_list').setAttribute('style', 'background-color:#EF7E7E');
				
			}else{
				
				document.querySelector('.glasses_list').setAttribute('style', 'background-color:#EDC692');
			}
			
		}
		
	},
	
	
});