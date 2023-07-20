
function sum(tam,eng,mat,sci,soc,name)
{
	document.write("name="+name+"<br>");
	let total=tam+eng+mat+sci+soc;
	let average=(total/5);
	document.write("total="+total+"<br>")
	return "average="+average+"<br>";
	
}

var a=sum(95,62,88,90,85,"kaniarasi")
{
	document.write(a+"<br>"+"<br>");
}


var b=sum(70,56,70,56,90,"rajkumar")
{
	document.write(b+"<br>"+"<br>");
}