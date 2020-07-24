var num = 0;

function clickk()
{
	var inpData = document.getElementById("inp").value;
  var btn1 = document.getElementById("content");
  var iniData = btn1.innerHTML;
  ++num;
  
  btn1.innerHTML=   iniData +  
                    "<div id='div" +num + "'>" + 
                    "<h6>" + inpData + "</h6> " +
                    "<input type='checkbox' class='ml-3 check'> " + 
                    "<span id='spn" + num + "' class='ml-auto cross' onclick='closee(this.id)'>" + " &times </span> </div>";
}


function closee(idd){
 var prnt = document.getElementById(idd).parentNode.id;
 console.log(prnt);
	var divToDelete = document.getElementById(prnt);
  divToDelete.remove();
}

function clearr()
{
	document.getElementById("content").innerHTML = "";
  num = 0;
}
