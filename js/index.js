$(document).ready(function(){
	$("#worldMap").hide();
	$("#atlasWindow").hide();
	
	$("#playGame").click(function(){
		$("#worldMap").show();
		$("#openScreen").hide();
	})
	$("#atlasImg").click(function(){
		$("#atlasWindow").show();
	})
	
	$("#playGame").mouseover(function(){
		$("#playGame").css({"width":"14vw","height":"6vh"});
	})
	$("#playGame").mouseout(function(){
		$("#playGame").css({"width":"13vw","height":"5vh"});
	})
	
	
	
	$("#Italy").mouseover(function(){
		$("#Italy").css("width","13vw");
		$("#Italy").css("height","17vh");
		$("#pigeon").css("width","6.5vw");
		$("#pigeon").css("height","10vh");
	});
	$("#Italy").mouseout(function(){
		$("#Italy").css("width","12vw");
		$("#Italy").css("height","16vh");
		$("#pigeon").css("width","5.5vw");
		$("#pigeon").css("height","9vh");
	});
	
	$("#Egypt").mouseover(function(){
		$("#Egypt").css("width","8.5vw");
		$("#Egypt").css("height","19vh");
	});
	$("#Egypt").mouseout(function(){
		$("#Egypt").css("width","7.5vw");
		$("#Egypt").css("height","18vh");
	});

	$("#Lndia").mouseover(function(){
		$("#Lndia").css("width","10.5vw");
		$("#Lndia").css("height","21vh");
	});
	$("#Lndia").mouseout(function(){
		$("#Lndia").css("width","9.5vw");
		$("#Lndia").css("height","20vh");
	});
	
	$("#China").mouseover(function(){
		$("#China").css("width","8.5vw");
		$("#China").css("height","14vh");
	});
	$("#China").mouseout(function(){
		$("#China").css("width","7.5vw");
		$("#China").css("height","13vh");
	});
	
	$("#atlasImg").mouseover(function(){
		$("#atlasImg").css("width","11.5vw");
		$("#atlasImg").css("height","23.5vh");
	});
	$("#atlasImg").mouseout(function(){
		$("#atlasImg").css("width","11vw");
		$("#atlasImg").css("height","23vh");
	});
})