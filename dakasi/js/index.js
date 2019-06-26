var banner_content = $('#banner_content');
var imgs = $('.picture li');
var squares = $('.square li');
var timeId = null,count=0;
timeId = setInterval(function(){
	count++;
	if(count>=imgs.length)count=0;
	imgChange(count);
},1000);
function imgChange(count){
	for(var i=0;i<imgs.length;i++){
		for(var j=0;j<imgs.length;j++){
			imgs[j].style.display='none';
			squares[j].removeAttribute('class');
		}
		imgs[count].style.display='block';
		squares[count].setAttribute('class','active');
	}
}
	for(var i=0;i<squares.length;i++){
	squares.get(i).id = i;
	squares.get(i).onmouseover = function(){
		// console.log(this.id)
		imgChange(this.id);
	}
}