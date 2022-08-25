window.jsPDF = window.jspdf.jsPDF;
function Savepg(){
    // document.getElementsByTagName('button').style.display = none;
    var alert = window.prompt('請輸入檔案名稱(例：20220814-1)');
    var doc = new jsPDF();
    html2canvas(document.body, {
      onrendered: function(canvas) {
        var image = canvas.toDataURL("image/png");
        doc.addImage(image, 'JPEG', 0, 0, canvas.width, canvas.height);
        doc.save(alert);
      }
    });
  
}

var closeCL = document.getElementById('CLmodal');
document.getElementById('CLmodalClose').onclick = function(){
  closeCL.style.display="none";
}


var NewCL = document.getElementById('NewCL');
function newCL(){
  NewCL.style.display = "block";
}





    
  //-----------------------------------------------------------
  //彈窗
//var modala = document.getElementById("myModal");
var CLmodal = document.getElementById("CLmodal");
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];


// When the user clicks the button, open the modal 
// btn1.onclick = function() {
//   modala.style.display = "block";
// }
function openClient(){
    CLmodal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
// span1.onclick = function() {
//   CLmodal.style.display = "none";
// }
// span1.onclick = function(){
//     modala.style.display = "none"
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (  event.target == CLmodal) {
    //modala.style.display = "none";
    CLmodal.style.display = "none";
  }
}


  //------------------------------------------------------------
 
//客戶搜尋

var dataSet;
// var t = $('#myDataTable').DataTable();
try {
  dataSet = JSON.parse(localStorage.getItem('dataSet')) || [];
} catch (err) {
  dataSet = [];
}

var t = $('#myDataTable').DataTable({
  // "data": [],
  "columns": [{
    "title": "客戶編號"
  }, {
    "title": "客戶名稱"
  }, {
    "title": "電話號碼"
  },{
    "title": "傳真號碼"
  },{
    "title": "客戶聯絡人"
  },{
    "title": "收款類別"
  },{
    "title": "動作"
  }],
  "bStateSave": true,
  "stateSave": true,
  "bPaginate": true, 
  "bLengthChange": true,
  "bFilter": true,
  "bInfo": true,
  "bAutoWidth": false,
  "language" :{
  "emptyTable":"無資料",
  "info":"第 _START_ 筆 至 _END_ 共 _TOTAL_ 筆",
  "infoEmpty":"Showing 0 to 0 of 0 entries",
  "infoFiltered":"(filtered from _MAX_ total entries)",
  "infoPostFix":"",
  "thousands":",",
  "lengthMenu":"每頁 _MENU_ 筆資料",
  "loadingRecords": "Loading...",
  "processing":"",
  "search":"搜尋：",
  "zeroRecords":"沒有符合的資料",
  "paginate": {
    "first":"第一頁",
    "last":"最後一頁",
    "next":"下一頁",
    "previous":"上一頁"
    }
  }
});

for (var i = 0; i < dataSet.length; i++) {
  t.row.add(dataSet[i]).draw();
}

    

    
    
    
    

$('#addRow').on('click', function () {
var data = [
  $('#txtid').val().toString(), 
  $('#txtname').val().toString(),
  $('#txttel').val().toString(),
  $('#txtfax').val().toString(),
  $('#txtcontact').val().toString(),
  $('#txtpay').val().toString(),""];
      t.row.add(data).draw();
      dataSet.push(data);
      localStorage.setItem('dataSet', JSON.stringify(dataSet));
    window.alert('客戶新增成功！');
});
$('#myDataTable tbody').on('click', 'tr', function () {
  if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
  } else {
      t.$('tr.selected').removeClass('selected');
      $(this).addClass('selected');
      var CLid = $(this).find('td:nth-child(1)').html();     
      var CLname = $(this).find('td:nth-child(2)').html();
      var CLnumber = $(this).find('td:nth-child(3)').html(); 
      var CLfax = $(this).find('td:nth-child(4)').html(); 
      var CLcontact = $(this).find('td:nth-child(5)').html(); 
      document.getElementById("CLname").innerHTML=CLname;
      document.getElementById("CLid").innerHTML=CLid;
      document.getElementById("CLnumber").innerHTML=CLnumber;
      document.getElementById("CLfax").innerHTML=CLfax;
      document.getElementById("CLcontact").innerHTML=CLcontact;
  }
});

$('#delbtn').click(function () {
  var row = $(this).closest('tr');
  var index = $("tbody").children().index(row);
  t.row('.selected').remove().draw();
  dataSet.splice(index, 1);
  localStorage.setItem('dataSet', JSON.stringify(dataSet));
});







// $(document).on('click', '.delete', function() {
//   var row = $(this).closest('tr');
//   var index = $("tbody").children().index(row);
//   oTable.row(row).remove().draw();
//   dataSet.splice(index, 1);
//   localStorage.setItem('dataSet', JSON.stringify(dataSet));
// });

//---------------------------------------------------------------





  //Print the page
  function Printpg(){
    window.print()
  }




 function deletelocalS(){
    localStorage.clear();
    window.location.reload();
 }
 

 







 
  


