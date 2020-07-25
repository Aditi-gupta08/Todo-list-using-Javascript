console.log("Storage length: ", localStorage.length);
var num = 0;
//
//if(localStorage.length==0){
//    var empt = document.getElementById("empt");
//    console.log("done", empt);
//    empt.setAttribute("visibility", "visible" );
//    console.log("done", empt);
//}

for(var i = 0; i < localStorage.length; i++) {
    var keyy = localStorage.key(i);
    var dataa = JSON.parse(localStorage.getItem(keyy));
    
    if(keyy>num)
        num = keyy;
    ShowNode(keyy , dataa );
}





function addNode()
{
//    var empt = document.getElementById("empt");
//    empt.setAttribute("visibility", "hidden" );
    
    ++num;
    var inp = document.getElementById("inp")
    var inpData = inp.value;
    
    var taskObj ={
        "taskName": inpData,
        "checkStatus": false
    };
    
    console.log(taskObj, JSON.stringify(taskObj));
    
    localStorage.setItem(num, JSON.stringify(taskObj));
    inp.value = "";
    ShowNode(num, taskObj);
}



function ShowNode( idd, myObj )
{
    console.log("printnode: ", idd, myObj);
    var node = document.createElement("div");
    node.setAttribute("id", idd ); 
    //node.classList.add("col-10");
    //node.classList.add("col-md-12");
    node.classList.add("row");
    node.classList.add("task");
    node.classList.add("p-0");
    node.classList.add("p-md-2");
    node.classList.add("m-4")
    
    node.innerHTML = "<div class='col-10 col-md-11 d-flex mt-2'>" +
                        "<input type='checkbox' id='checkBox"+ idd +"' class='check mr-2 mt-1' onclick='toggleCheckbox(this)'> " +
                        "<p class='task-info'>" + myObj.taskName + "</p>" +
                      "</div>" +

                      "<div class='col-2 col-md-1 cross'>" +
                        "<span onclick='DeleteOne(this)'> <i class='fa fa-trash' aria-hidden='true'></i> </span>" +
                      "</div>";
    
    document.getElementById("content").appendChild(node);
    
    if( myObj.checkStatus == true)
    {
        var checkBoxId = "checkBox"+idd;
        var checkBox = document.getElementById(checkBoxId);
        checkBox.checked = true;
        
        var prnt = document.getElementById(idd);
        prnt.classList.add("task-done-div");
        console.log("done!");
    }
}



function toggleCheckbox(ths){
    var parent_Id = ths.parentNode.parentNode.id;
    var prnt = document.getElementById(parent_Id);
    console.log("Toggle checkbx: ", parent_Id, prnt);
    
    var taskObj = JSON.parse(localStorage.getItem(parent_Id));
    
    if(ths.checked == true)
    {
        taskObj.checkStatus = true;
        prnt.classList.add("task-done-div");
    }
    else
    {
        taskObj.checkStatus = false;
        prnt.classList.remove("task-done-div");
    }
        
    
    console.log(taskObj);
    localStorage.setItem( parent_Id, JSON.stringify(taskObj));
}



function DeleteOne(ths){
  console.log(ths, ths.parentNode.parentNode);
  var parent_Id = ths.parentNode.parentNode.id;
  var prnt = document.getElementById(parent_Id);
  console.log("Deleting 1 node: ", parent_Id, prnt);
  prnt.remove(); 
  localStorage.removeItem(parent_Id);
}



function deleteAll()
{
    document.getElementById("content").innerHTML = "";
    localStorage.clear();
}