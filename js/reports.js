
var $$ = function( id ) { return document.getElementById( id ); };
// atd tbl search
function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("atdl");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
function dl (gg,h){

    var doc = new jsPDF()
   
    var pageSize = doc.internal.pageSize;
    var pageHeight = pageSize.height
    var pageWidth = pageSize.width
    var img = new Image()
    img.src = 'images/LMS-Logo.png'
    doc.addImage(img, 'png', 120,8, 75, 30)
    doc.setFontSize(20);
  
    doc.setTextColor(38, 70, 83);
    doc.setFont("arial","bold")
    doc.text("ATTENDANCE"  , 13, 19);
    doc.text("__________________"  , 13, 21);
    doc.setFont("arial","normal")
    doc.setTextColor(40);
    var jh =  h;;
    doc.setFontSize(10);
  
    doc.text("Started at :"+ jh  , 13,28 );
    doc.text("Topic :"+ gg  , 13, 33);
    doc.setTextColor(40);
    doc.autoTable({ html: '#atdl', startY:40 })
    doc.autoTable({
      startY: doc.autoTable() + 70,
    
      margin: { horizontal: 10 },
      styles: { overflow: "linebreak" },
      bodyStyles: { valign: "top" },
      columnStyles: { email: { cellWidth: "wrap" } },
      theme: "striped",
      showHead: "everyPage",
      didDrawPage: function (data) {
    
        // Header
        
        // Footer
        var str = "Page " + doc.internal.getNumberOfPages();
    
        doc.setFontSize(10);
    
        // jsPDF 1.4+ uses getWidth, <1.4 uses .width
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        doc.text(str, data.settings.margin.left, pageHeight - 10);
      }
    });
    
    doc.save(gg+' | Attendance Report'+'.pdf')
  
  }
// full get
function atdfull(yyyya){
    tuuid = yyyya.split("@@@")[0]
    tttopic = decodeURIComponent( yyyya.split("@@@")[1])
    ttts = decodeURIComponent( yyyya.split("@@@")[2])
    $$("layout-menu").style.display="none";
    $$('layout-navbar').style.display="none"
    let timerInterval
    Swal.fire({
      title: 'Ferching records..',
      html: 'Connecting with zoom in <b></b> milliseconds.',
      timer: 10000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
    var xhr445232 = new XMLHttpRequest();
    var url2 = baseurl+"/v2/report/meetings/"+encodeURIComponent(tuuid)+"/participants?page_size=300";
    xhr445232.open("GET", url2, true);
    xhr445232.setRequestHeader("Content-Type", "application/json");
    xhr445232.setRequestHeader("Authorization","Bearer " +tkna );
    xhr445232.onreadystatechange = function () {
        if (xhr445232.readyState === 4 && xhr445232.status === 200) {
    console.log(JSON.parse(xhr445232.response))
  oo = JSON.parse(xhr445232.response);
  $$("layout-menu").style.display="none";
    Swal.fire({
      title: '<img src="images/LMS-Logo.png" width="20%" alt="LMSLOGO"> <br> Attendance Reports / <b>' + tttopic+"</b>",
  
      grow:'fullscreen',
      html:
        '<div id=""pri"> <input type="text" class="form-control" width="100%" id="myInput" onkeyup="search()" placeholder="Search for names.." title="Type in a name"><br> <div class="col-md-12"> <div  class="table-wrap">  <table id="atdl" class="table" > <tbody> <tr> <th>Student ID</th> <th>Student Name</th> <th>Join Time</th> <th>Leave Time</th> <th>Duration</th> </tr> </tbody> </table><br>'+'  <button class="btn btn-dark" onclick="dl('+"'"+tttopic+"'"+","+"'"+ttts+"'"+')"> Download </button>'+' </div> </div></div>',
    
      focusConfirm: false,
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: true
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDismissed) {
        $$("layout-menu").style.display="block";
        $$('layout-navbar').style.display="block"
      }
    })
  
        for (let i = 0; i < Object.keys(oo["participants"]).length ; i++) {
  var table33 = $$("atdl")
  if (oo["participants"][i]["name"].includes("RE")){
            var row2 = table33.insertRow(-1);
            var cell1 = row2.insertCell(0);
            var cell2 = row2.insertCell(1);
            var cell3 = row2.insertCell(2);
            var cell4 = row2.insertCell(3);
            var cell5 = row2.insertCell(4);
  cell1.innerHTML =  oo["participants"][i]["name"].split(" ")[0]
          cell2.innerHTML = oo["participants"][i]["name"].replace(oo["participants"][i]["name"].split(" ")[0],"").trim()
          cell3.innerHTML =  moment(oo["participants"][0]["join_time"]).format("YYYY-MM-DD hh:mm a")
          cell4.innerHTML =  moment(oo["participants"][0]["leave_time"]).format("YYYY-MM-DD hh:mm a")
          cell5.innerHTML =  moment().startOf('day').seconds(oo["participants"][0]["duration"]).format('H:mm:ss'); 
          
          }}
  
  
    
        }
      if (xhr445232.readyState === 4 && xhr445232.status === 404){
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Data Missing'
        })
        $$("layout-menu").style.display="block";
        $$('layout-navbar').style.display="block"
          }
      
      }
        var data = JSON.stringify();
        xhr445232.send(data);

}


function getall (x,y){
    var tl = document.getElementById("repott").rows.length;
  for (let i = 0; i < tl-1; i++) {
    document.getElementById("repott").deleteRow(-1);}
    let timerInterval
    Swal.fire({
      title: 'Fetching Meetings..',
      html: 'Connecting with zoom in <b></b> milliseconds.',
      timer: 10000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })

var xhr00001 = new XMLHttpRequest();

var url2 = baseurl+"/v2/report/users/"+encodeURIComponent(userid)+"/meetings?page_size="+300+"&from="+x+"&to="+y;
xhr00001.open("GET", url2, true);
xhr00001.setRequestHeader("Content-Type", "application/json");

xhr00001.setRequestHeader("Authorization","Bearer " +tkna );
xhr00001.onreadystatechange = function () {
    table=  $$("repott")
    xyz = JSON.parse( localStorage.getItem("allc"));
    if (xhr00001.readyState === 4 && xhr00001.status === 200) {
        rr=JSON.parse(xhr00001.response);
        console.log(JSON.parse(xhr00001.response))
        for (let f = 0; f < Object.keys(JSON.parse( localStorage.getItem("allc"))).length ; f++) {
          if(xyz[Object.keys(JSON.parse( localStorage.getItem("allc")))[f]]!=null){
            var row2 = table.insertRow(-1);
            var cell11 = row2.insertCell(0);
            cell11.innerHTML=   "<b>"+ xyz[Object.keys(JSON.parse( localStorage.getItem("allc")))[f]]["topic"] +"</b>"
            ttpic = xyz[Object.keys(JSON.parse( localStorage.getItem("allc")))[f]]["topic"];
            var temp11 = 0
                for (let i = 0; i < Object.keys(rr["meetings"]).length ; i++) {
                
   
                    if(rr["meetings"][Object.keys(rr["meetings"])[i]]["topic"]!=null){
                if(rr["meetings"][Object.keys(rr["meetings"])[i]]["topic"].includes(ttpic)){
            
                    
                    if (rr["meetings"][Object.keys(rr["meetings"])[i]]!=null&&rr["meetings"][Object.keys(rr["meetings"])[i]]["source"].includes("English RE")){
                     
                        var row2 = table.insertRow(-1);
                     temp11 = temp11+1;
                     var row2 = table.insertRow(-1);
                     var cell11 = row2.insertCell(0);
                        var cell22 = row2.insertCell(1);
                        var cell33 = row2.insertCell(2);
                        var cell44 = row2.insertCell(3);
                        var cell55 = row2.insertCell(4);
                   
                        cell11.innerHTML =  rr["meetings"][Object.keys(rr["meetings"])[i]]["topic"]
                        cell22.innerHTML =   moment(rr["meetings"][Object.keys(rr["meetings"])[i]]["start_time"]).format("YYYY-MM-DD hh:mm a")
                        cell33.innerHTML =  rr["meetings"][Object.keys(rr["meetings"])[i]]["duration"]+"min"
                        cell44.innerHTML =  rr["meetings"][Object.keys(rr["meetings"])[i]]["participants_count"]-1
                        cell55.innerHTML =  '<button type="button" id='+rr["meetings"][Object.keys(rr["meetings"])[i]]["uuid"]+"@@@"+encodeURIComponent( rr["meetings"][Object.keys(rr["meetings"])[i]]["topic"])+"@@@"+encodeURIComponent(moment(rr["meetings"][Object.keys(rr["meetings"])[i]]["start_time"]).format("YYYY-MM-DD hh:mm a"))+' onclick="atdfull(this.id);" class="btn btn-sm rounded-pill btn-primary"><span><i class="bx bx-play"></i></span>&nbsp; View</button> '
                    }
                    } else {
                     if (i==Object.keys(rr["meetings"]).length-1){
                        if (temp11==0){
                            var row2 = table.insertRow(-1);
                            var cell11 = row2.insertCell(0);
                            var cell22 = row2.insertCell(1);
                            var cell33 = row2.insertCell(2);
                            var cell44 = row2.insertCell(3);
                            var cell55 = row2.insertCell(4);
                            cell11.innerHTML =  "No records found!"
                        }
                     }
                    }
                }
                }
              }
        }




function ver (a) {
    const Toast = Swal.mixin({
toast: true,
position: 'bottom-end',
showConfirmButton: false,
timer: 3000,
timerProgressBar: true,
didOpen: (toast) => {
  toast.addEventListener('mouseenter', Swal.stopTimer)
  toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})

Toast.fire({
icon: 'success',
title: a
})
  }

  

        var path = "login/connection/unix"
      const preObject = document.getElementById(path);
  // Create References
  const dbRefObject = firebase.database().ref().child(path);
  
  // Sync object changes
  dbRefObject.on('value', snap => ver(snap.val()));


    }}
    var data = JSON.stringify();
    console.log('con')
    xhr00001.send(data);}