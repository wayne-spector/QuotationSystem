//for工程
   
    
var n = 1;
function insertRow2(){
    let name1 = prompt('請輸入工程名稱');
    let projectPrice = Number(prompt('請輸入工程費用'));
    var table1 = document.getElementById("projectList");
    var row1 = table1.insertRow(-1);
    var cellf = row1.insertCell(0);
    var cellsec = row1.insertCell(1);
    var cellthi = row1.insertCell(2);
    var cellfou = row1.insertCell(3);
    cellf.innerHTML = n++;
    cellsec.innerHTML = name1;
    cellthi.innerHTML = projectPrice;
    cellfou.innerHTML = "<button onclick='deleteRow1(this)'>刪除</button>"
}
function deleteRow1(z){
    var x = z.parentNode.parentNode.rowIndex;
    document.getElementById("projectList").deleteRow(x);
}




// function calculate(){
    
// }
