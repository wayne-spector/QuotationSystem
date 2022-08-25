    //for材料
    function insertRow(){
        let name = prompt('請輸入材料名稱');
        let texture = prompt('請輸入材質');
        let UnitPrice = Number(prompt('請輸入單價(kg)'));
        let weight = Number(prompt('請輸入個數重量(g)'));
        let PriceperOne = (UnitPrice/1000)*weight;
        var table = document.getElementById("details");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1); 
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = name;
        cell2.innerHTML = texture;
        cell3.innerHTML = UnitPrice;
        cell4.innerHTML = weight;
        cell5.innerHTML = PriceperOne;
        $(cell5).prop('contenteditable', true);
        cell6.innerHTML = "<button value='Delete' onclick='deleteRow(this)' style='width:50px'>刪除</button>";
        row++;
    }
    // $('#materialPrice').innerHTML = document.getElementById("tdid").innerHTML ;
    function deleteRow(r){
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("details").deleteRow(i);
    }
     //合計材料費
   