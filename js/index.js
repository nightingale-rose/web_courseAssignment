$(document).ready(function(){
	
	var Egypt = "first"
	var Lndia = "first"
	var China = "first"
	
	
	
	//先展示开始界面，其他地图隐藏
	$("#worldMap").hide();
	$("#LndiaMap").hide();
	$("#EgyptMap").hide();
	$(".ChinaMap").hide();
	$(".finishMap").hide();
	// $("#openScreen").hide();
	
	
	//印度地图内介绍隐藏
	
	$(".spicesKnow").hide();
	$(".zitherKnow").hide();
	$(".flaskKnow").hide();
	$(".TajMahalKnow").hide();
	$(".LotusTempleKnow").hide();
	$(".IndiaCateDelhiKnow").hide();
	$(".AmberFortKnow").hide();
	
	//中国地图内介绍隐藏
	$(".qinganKnow").hide();
	$(".qitaKnow").hide();
	$(".tianfengKnow").hide();
	$(".ayuwangKnow").hide();
	
	
	//选择人物
	$("#selectZhenghe").click(function(){
		$("#Lndiagame").css({
			"background":"url(img/郑和印度游戏.png)",
			"background-size":"100% 100%",
		})
		$("#LndiagameOver").css({
			"background":"url(img/郑和印度成功.png)",
			"background-size":"100% 100%",
		})
	})
	
	//中国地图内介绍浮动显示
	$(".qingan").mouseover(function(){
		$(".qinganKnow").show()
	})
	$(".qingan").mouseout(function(){
		$(".qinganKnow").hide()
	})
	
	$(".qita").mouseover(function(){
		$(".qitaKnow").show()
	})
	$(".qita").mouseout(function(){
		$(".qitaKnow").hide()
	})
	
	$(".tianfeng").mouseover(function(){
		$(".tianfengKnow").show()
	})
	$(".tianfeng").mouseout(function(){
		$(".tianfengKnow").hide()
	})
	
	$(".ayuwang").mouseover(function(){
		$(".ayuwangKnow").show()
	})
	$(".ayuwang").mouseout(function(){
		$(".ayuwangKnow").hide()
	})
	
	//印度地图内介绍浮动显示
	$(".spicesImg").mouseover(function(){
		$(".spicesKnow").show()
	})
	$(".spicesImg").mouseout(function(){
		$(".spicesKnow").hide()
	})
	
	$(".zitherImg").mouseover(function(){
		$(".zitherKnow").show()
	})
	$(".zitherImg").mouseout(function(){
		$(".zitherKnow").hide()
	})
	
	$(".flaskImg").mouseover(function(){
		$(".flaskKnow").show()
	})
	$(".flaskImg").mouseout(function(){
		$(".flaskKnow").hide()
	})
	
	$(".TajMahalImg").mouseover(function(){
		$(".TajMahalKnow").show()
	})
	$(".TajMahalImg").mouseout(function(){
		$(".TajMahalKnow").hide()
	})
	
	$(".LotusTempleImg").mouseover(function(){
		$(".LotusTempleKnow").show()
	})
	$(".LotusTempleImg").mouseout(function(){
		$(".LotusTempleKnow").hide()
	})
	
	$(".IndiaCateDelhiImg").mouseover(function(){
		$(".IndiaCateDelhiKnow").show()
	})
	$(".IndiaCateDelhiImg").mouseout(function(){
		$(".IndiaCateDelhiKnow").hide()
	})
	
	$(".AmberFortImg").mouseover(function(){
		$(".AmberFortKnow").show()
	})
	$(".AmberFortImg").mouseout(function(){
		$(".AmberFortKnow").hide()
	})
	
	//选择人物界面隐藏
	$(".selectPerson").hide();
	
	//将图鉴界面隐藏
	$("#atlasBlock").hide();
	
	//印度界面中的图片隐藏
	$("#completeFlask").hide();
	$("#completeSpices").hide();
	$("#completeZither").hide();
	
	$("#Lndiagame").hide()
	$("#LndiagameOver").hide()
	
	//将图鉴中图标隐藏
	
	$("#atlasSpices").hide();
	$("#atlasFlask").hide();
	$("#atlasZither").hide(); //印度
	
	$("#atlasCheese").hide();
	$("#atlasNoodle").hide();
	$("#atlasShoes").hide(); //意大利
	
	//从开始界面过渡到世界地图界面
	$("#playGame").click(function(){
		$(".selectPerson").show(1000)
		$("#worldMap").show();
		$("#openScreen").hide();
	})
	
	//从世界地图界面过渡到印度界面
	$("#Lndia").click(function(){
		if(Lndia == "first"){
			$("#littleBoat").animate({"top":"52vh","left":"28vw"},2000,"linear",function(){
				$("#littleBoat").animate({"top":"54vh","left":"35vw"},1000,"linear",function(){
					$("#littleBoat").animate({"top":"63vh","left":"42vw"},1000,"linear",function(){
						$("#littleBoat").animate({"top":"58vh","left":"49vw"},1000,"linear",function(){
							$("#littleBoat").animate({"top":"63vh","left":"55vw"},1000,"linear");
						});
					});
				});
			});
			setTimeout(function(){
				$("#worldMap").hide();
				$("#LndiaMap").show();
				
			},6000)
			Lndia = "second"
		}else{
			$("#worldMap").hide();
			$("#LndiaMap").show();
		}
		
	})
	//选择人物
	$(".maizhelun").click(function(){
		$(".selectPerson").hide(1000);
	})
	$(".zhenghe").click(function(){
		$(".selectPerson").hide(1000);
	})
	
	//从世界地图界面过渡到埃及界面
	$("#Egypt").click(function(){
		if(Egypt == "first"){
			$("#littleBoat").animate({"top":"24vh","left":"14vw"},1000,"linear",function(){
				$("#littleBoat").animate({"top":"34vh","left":"22vw"},1000,"linear");
			});
			setTimeout(function(){
				$("#worldMap").hide();
				$("#EgyptMap").show();
			},2000)
			Egypt = "second"
		}else{
			$("#worldMap").hide();
			$("#EgyptMap").show();
		}
		
	})
	
	
	//图鉴界面的隐藏和显示
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
	
	var LndiaImg = 0
	$("#flask").click(function(){
		$("#completeFlask").show(1000);
		$("#atlasFlask").show();
		LndiaImg++;
	})
	
	$("#spices").click(function(){
		$("#completeSpices").show(1000);
		$("#atlasSpices").show();
		LndiaImg++;
	})
	
	$("#zither").click(function(){
		$("#completeZither").show(1000);
		$("#atlasZither").show();
		LndiaImg++;
	})
	$(".gameButton").click(function(){ //印度游戏
		if(LndiaImg == 3){
			$("#Lndiagame").show()
		}else if(LndiaImg <3){
			alert("收集完所有物品，才可开始游戏")
		}else{
			alert("游戏已完成 不可重复升级")
		}
	})
	
	//印度退格
	$("#backButtonInLndia").click(function(){
		$("#worldMap").show();
		$("#LndiaMap").hide();
		
	})
	
	//中国退格
	$("#backButtonInChina").click(function(){
		$("#worldMap").show();
		$(".ChinaMap").hide();
	})
	
	
	//进入宁波界面
	$("#China").click(function(){
		if(LndiaImg >= 3){
			if(China == "first"){
				$("#littleBoat").animate({"top":"50vh","left":"60vw"},1000,"linear",function(){
					$("#littleBoat").animate({"top":"70vh","left":"68vw"},1000,"linear",function(){
						$("#littleBoat").animate({"top":"57vh","left":"76vw"},1000,"linear",function(){
							$("#littleBoat").animate({"top":"37vh","left":"82vw"},1500,"linear");
						});
					});
				});
				setTimeout(function(){
					$("#worldMap").hide()
					$(".ChinaMap").show()
				},4500)
				China = "second"
			}else{
				$("#worldMap").hide();
				$(".ChinaMap").show();
			}
		}else{
			alert("收集完所有物品，才可进入下一关")
		}
	})
	
	//结束界面
	$("#huizhan").click(function(){
		$(".ChinaMap").hide()
		$(".finishMap").show()
	})
	$(".finishImg").click(function(){
		$(".finishImg").hide()
	})
	
	//印度界面游戏
	
	$(".zitherLine").hide()
	$(".spicesLine").hide()
	$(".flaskLine").hide()
	var LndiaMark = " "
	var zitherLine = 0
	var spicesLine = 0
	var flaskLine = 0
	$(".gameZitherLeft").click(function(){
		if(LndiaMark == "ZitherRight"){
			$(".zitherLine").show()
			zitherLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "ZitherLeft"
		}
	})
	$(".gameZitherRight").click(function(){
		if(LndiaMark == "ZitherLeft"){
			$(".zitherLine").show()
			zitherLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "ZitherRight"
		}
	})
	$(".gameSpicesLeft").click(function(){
		if(LndiaMark == "SpicesRight"){
			$(".spicesLine").show()
			spicesLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "SpicesLeft"
		}
	})
	$(".gameSpicesRight").click(function(){
		if(LndiaMark == "SpicesLeft"){
			$(".spicesLine").show()
			spicesLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "SpicesRight"
		}
	})
	$(".gameFlaskLeft").click(function(){
		if(LndiaMark == "FlaskRight"){
			$(".flaskLine").show()
			flaskLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "FlaskLeft"
		}
	})
	$(".gameFlaskRight").click(function(){
		if(LndiaMark == "FlaskLeft"){
			$(".flaskLine").show()
			flaskLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "FlaskRight"
		}
	})
	$("#LndiagameOver").click(function(){
		$("#LndiagameOver").hide()
	})
	function judgeLndiaLine(){
		if(flaskLine == 1&&zitherLine == 1&&spicesLine == 1){
			LndiaImg ++
			setTimeout(function(){
				$("#Lndiagame").hide()
				$("#LndiagameOver").show()
				$("#littleBoat").prop(
					"src","./img/船只大.png"
				)
				$(".littleBoatInLndia").prop(
					"src","./img/船只大.png"
				)
				$(".littleBoatInChina").prop(
					"src","./img/船只大.png"
				)
			},1000)
		}
	}
})


