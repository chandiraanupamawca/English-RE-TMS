var $$ = function( id ) { return document.getElementById( id ); };
before = []
function ref (){
console.log("redraw")
    table1.draw()
}


$$('dpc').onclick = function (){
if(table1.column( 0 ).visible()){
    table1.column( 0 ).visible( false );} else{
        table1.column( 0 ).visible( true );
    }
}
$$('sid').onclick = function (){
    if(table1.column( 1 ).visible()){
    table1.column( 1 ).visible( false );} else{
        table1.column( 1).visible( true );
    }
}
$$('gnc').onclick = function (){
    if(table1.column( 4 ).visible()){
    table1.column( 4 ).visible( false );} else{
        table1.column( 4 ).visible( true );
    }
}
$$('stc').onclick = function (){
    if(table1.column( 5 ).visible()){
    table1.column( 5 ).visible( false );} else{
        table1.column( 5 ).visible( true );
    }
}

$$('yrc').onclick = function (){
    if(table1.column( 6 ).visible()){
    table1.column( 6 ).visible( false );} else{
        table1.column( 6 ).visible( true );
    }
}
$$('pnc').onclick = function (){
    if(table1.column( 7 ).visible()){
    table1.column( 7 ).visible( false );} else{
        table1.column( 7 ).visible( true );
    }
}

$$('wac').onclick = function (){
    if(table1.column( 8 ).visible()){
    table1.column( 8 ).visible( false );} else{
        table1.column( 8 ).visible( true );
    }
}
$$('emc').onclick = function (){
    if(table1.column( 9 ).visible()){
    table1.column( 9 ).visible( false );} else{
        table1.column( 9 ).visible( true );
    }
}
$$('adc').onclick = function (){
    if(table1.column( 10 ).visible()){
    table1.column( 10 ).visible( false );} else{
        table1.column( 10 ).visible( true );
    }
}
$$('bdc').onclick = function (){
    if(table1.column( 11 ).visible()){
    table1.column( 11 ).visible( false );} else{
        table1.column( 11 ).visible( true );
    }
}
$$('stsc').onclick = function (){
    if(table1.column( 12 ).visible()){
    table1.column( 12 ).visible( false );} else{
        table1.column( 12 ).visible( true );
    }
}


$$('mys').addEventListener('input', function (evt) {
    table1.search($$('mys').value).draw() ;
});

function addu (){

function add (){
    var tl = document.getElementById("tt").rows.length;
    for (let i = 0; i < tl-1; i++) {
   //   document.getElementById("tt").deleteRow(-1);
    }

    for (let s = 0; s < before.length; s++) {
        table = $$("tt")
        var row2 = table.insertRow(-1);
        var cell1 = row2.insertCell(0);
        var cell2 = row2.insertCell(1);
        var cell3 = row2.insertCell(2);
        var cell4 = row2.insertCell(3);
        var cell5 = row2.insertCell(4);
        var cell6 = row2.insertCell(5);
        var cell7 = row2.insertCell(6);
        var cell8 = row2.insertCell(7);
        var cell9 = row2.insertCell(8);
        var cell10 = row2.insertCell(9);
        var cell11 = row2.insertCell(10);
        var cell12 = row2.insertCell(11);
        var cell13 = row2.insertCell(12);
        var cell14 = row2.insertCell(13);
if(listu[before[s]]["dp"]!=null&&listu[before[s]]["dp"]!='none'){
src = listu[before[s]]["dp"]
}
 else {
    src = "https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
cell1.innerHTML = '<li style="padding: 0px;"> <img src="'+src+'" alt="Avatar" class="rounded-circle" style="width: 75%; border: solid 1px;"> </li>'
        cell2.innerHTML = "<b>"+"RE"+("000" + before[s]).slice(-4)+"<b>"
        cell3.innerHTML = "<b>"+listu[before[s]]["fn"]+"<b>"
        cell4.innerHTML = "<b>"+listu[before[s]]["ln"]+"<b>"
        cell5.innerHTML = capitalizeFirstLetter(listu[before[s]]["gn"])
        cell6.innerHTML = listu[before[s]]["st"]
        cell7.innerHTML = listu[before[s]]["yr"]
        cell8.innerHTML = listu[before[s]]["pn"]
        cell9.innerHTML = listu[before[s]]["wa"]
        cell10.innerHTML = listu[before[s]]["em"]
        cell11.innerHTML = listu[before[s]]["ad"]
        cell12.innerHTML = listu[before[s]]["bd"]
        cell14.innerHTML = "hi"
        if (listu[before[s]]["ds"]!='y'){
        cell13.innerHTML = '	<span class="badge bg-label-success me-1">Active</span>'

        } else{
        cell13.innerHTML = '	<span class="badge bg-label-warning me-1">Inactive</span>'

        }
       
  if(s==before.length-1){

function dt (){
    $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
        var yr = data[6]; 

     if($$('yearf').value!=0){
        if (  yr==$$('yearf').value ) {
            console.log(yr,true)
            return true;
        } else{
        return false;}} else{
            return true;
        }


    })
    $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
        var st = data[5]; 

     if($$('stf').value!=0){
        if (  st==$$('stf').value ) {
            return true;
        } else{
        return false;}} else{
            return true;
        }


    })

    $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
        var ac = data[12]; 

     if($$('sts').value!=0){
        if (  ac.includes($$('sts').value)) {
            return true;
        } else{
        return false;}} else{
            return true;
        }


    })

   table1 = $('#tt').DataTable( {
        scrollY:        "100%",
        scrollX:        true,
        width: "900px",
        scrollCollapse: true,
        paging:         true,
        fixedColumns:   {
            leftColumns: 3
         }
    })
    

    document.getElementById("tt_wrapper").style.width="96%"
    $$("tt_filter").style.display = 'none'
    tt_length.innerHTML = '<label class="form-control">Show Entries</label><select name="tt_length" aria-controls="tt" class="form-select"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select><br>'
    
}

setTimeout(dt,700)

  }
 
    }
}

    function users (dt) {
listu = dt
add()
                  
                    }

    var path = "students"
    const dbRefObject7822 = firebase.database().ref().child(path); 
    // Sync object changes
    dbRefObject7822.on('value', snap => users(snap.val()));
    console.log(before)
  
}




clzids = Object.keys(JSON.parse(localStorage.getItem("allc")))

if (clzids!=null){
    for (let index = 0; index < clzids.length; index++) {
        const id = clzids[index];
function list (li){
    
if(li!=null){
   
    for (let i = 0; i < Object.keys(li).length; i++) {
        if(before.includes(Object.keys(li)[i])){
            console.log("already")
        } else {
            before.push(Object.keys(li)[i])
        }
        
     }
}
}

function end () {
  if  (index==(clzids.length)-1){
    addu()
  }
}
end()

        var path = "pay/"+id
        const dbRefObject7822 = firebase.database().ref().child(path); 
        // Sync object changes
        dbRefObject7822.on('value', snap => list(snap.val()));   

       
    }
}
