function toggler() {
	document.body.classList.toggle("dark-mode");	   
}

function draw()
{
	const plot = document.getElementById("plot") ;
	const ctx = plot.getContext("2d");	
	ctx.fillRect(50, 50, 50, 50) ;
}

function d()
{
	const dspl = document.getElementById("display") ;
	ctx = dspl.getContext("2d") ;	
  w=disp.width;
  h=disp.height;
  s= w/8;
  x=w/2 + s;
  y= h/2 +s;
  ctx.fillRect(x, y, s, s) ; // x y width height
}

    
