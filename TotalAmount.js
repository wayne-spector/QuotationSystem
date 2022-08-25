function calculate(){
    $(function() {
    $("#total").html(sumColumn(5)); 
    });
function sumColumn(index) {
    var total = 0;
    $("#details td:nth-child(" + index + ")").each(function() {
    total += parseFloat($(this).text(), 10)|| 0;
    });  
    console.log(total);

  return total;
}
$(function() {
    $("#lastprojPrice").html(sumColumn1(3)); 
    });
function sumColumn1(index1) {
    var total1 = 0;
    $("#projectList td:nth-child(" + index1 + ")").each(function() {
    total1 += parseFloat($(this).text(), 20)|| 0;
    });  
    console.log(total1);
    
  return total1;
}
var materialP = parseInt($("#total").html());
var projectP = parseInt($("#lastprojPrice").html());
var FreightP = parseInt($("#Freight").html());
var gasFee = parseInt($("#gasFee").html());
var TotalFee =parseInt(materialP+projectP+FreightP+gasFee); 
$("#AllAmount").html(TotalFee);
console.log(TotalFee);
}