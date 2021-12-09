$(document).ready(function(){
	
	//先展示开始界面，其他地图隐藏
	$("#worldMap").hide();
	$("#LndiaMap").hide();
	
	//将图鉴界面隐藏
	$("#atlasBlock").hide();
	
	//印度界面中的目标图片隐藏
	$("#completeFlask").hide();
	$("#completeSpices").hide();
	$("#completeZither").hide();
	
	//将图鉴中印度的图标隐藏
	$("#atlasSpices").hide();
	$("#atlasFlask").hide();
	$("#atlasZither").hide();
	
	//从开始界面过渡到世界地图界面
	$("#playGame").click(function(){
		$("#worldMap").show();
		$("#openScreen").hide();
	})
	
	//从世界地图界面过渡到印度地图界面
	$("#Lndia").click(function(){
		$(".littleBoat").css({
			"animation-name":"toLndia",
			"animation-duration":"7s",
			"top": "34vh",
			"left": "19vw",
		})
		setTimeout(function(){
			$("#worldMap").hide();
			$("#LndiaMap").show();
			$(".littleBoat").css({
				"animation-name":"LndiaBoat",
				"top": "80.65vh",
				"left": "38.8vw",
				"animation-duration":"3s",
			});
		},7000)
		
		
	})
	
	//图鉴界面界面的隐藏和显示
	var isShowAtlas = false;
	$("#atlas").click(function(){
		if(isShowAtlas == false){
			$("#atlasBlock").show(1000);
			isShowAtlas = true;
		}else{
			$("#atlasBlock").hide(1000);
			isShowAtlas = false;
		}
		
	})
	
	//点击印度地图界面三个图标事件
	$("#flask").click(function(){
		$("#completeFlask").show(1000);
		$("#atlasFlask").show();
	})
	
	$("#spices").click(function(){
		$("#completeSpices").show(1000);
		$("#atlasSpices").show();
	})
	
	$("#zither").click(function(){
		$("#completeZither").show(1000);
		$("#atlasZither").show();
	})
	
})
