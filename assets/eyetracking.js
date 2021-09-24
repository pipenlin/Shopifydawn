
webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport
  
  	if (yprediction < 50){
      	$(window).scrollTop($(window).scrollTop() - 5);
  	}
  	if (yprediction > (window.innerHeight - 50)){
		$(window).scrollTop($(window).scrollTop() + 5);
    }
                         
    //var currentElement = document.elementFromPoint(xprediction,yprediction);

	//currentElement.click();
    $("#webgazerVideoContainer").css('display','none');    
    //console.log(elapsedTime); //elapsed time is based on time since begin was called
    //console.log("X:" +xprediction +" Y:" +  yprediction);
    if (x > 150 && X <200 && Y > 500 && Y< 600) console.log("X:" +xprediction +" Y:" +  yprediction); 
    //console.log(elapsedTime)
}).begin();

