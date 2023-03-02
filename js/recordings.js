var $$ = function( id ) { return document.getElementById( id ); };
mergeray = ''

exlist=[]
const btmt = Swal.mixin({
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


function mm(){

}
setTimeout(mm,1000)

//merge new
function hello5 (ab){
  nn=JSON.parse(localStorage.getItem("allc"))
  console.log(ab)
  if(!($$(ab).checked)){
    firebase.database().ref(   "merge/" + cid+ "/"+ ab ).set({})
    firebase.database().ref(   "merge-son/" + ab).set({})


  } else{
    function mess (dc){
      if(dc==null){
function mess2(cvc){
  if (cvc==null||cvc==cid){
    
    firebase.database().ref(   "merge/" + cid+ "/"+ ab ).update({
      topic:nn[ab]["topic"]})
      firebase.database().ref(   "merge-son/" + ab).update({
       cid:cid}) 
  } else{
    Swal.fire(
      'Unable to merge',
      'Please clear the merges related to the class '+ nn[ab]["topic"],
      'error'
    )
  }
}

        var path = "merge-son/" +  ab + "/cid"
        const dbRefObject7822 = firebase.database().ref().child(path);
          
        // Sync object changes
        dbRefObject7822.on('value', snap => mess2(snap.val()));


      } else{
        Swal.fire(
          'Unable to merge',
          'Please clear the merges related to the class '+ nn[ab]["topic"],
          'error'
        )
      }
      }
      var path = "merge/" +  ab
          const dbRefObject7822 = firebase.database().ref().child(path);
            
          // Sync object changes
          dbRefObject7822.on('value', snap => mess(snap.val()));

 
  
    }

     
 

}



//atd down|
tmpl =0
function dl (){

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
  var jh =  moment(localStorage.getItem("lasts")).format("YYYY-MM-DD hh:mm a");;
  doc.setFontSize(10);

  doc.text("Started at :"+ jh  , 13,28 );
  doc.text("Topic :"+ localStorage.getItem("lastt")  , 13, 33);
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
  
  doc.save(localStorage.getItem("lastt")+' | Attendance Report'+'.pdf')

}
//prev atd tbl search
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

//Sample Registrant
function registrant (regmid){
  console.log(regmid)
  Swal.fire({
    title: 'Are you sure?',
    text: "This link is valid for every occurance of the class meetings unless you regenerate the Meeting ID! Share it carefully.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Understood!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Fill the student details',
        html: "Don't include ., #, $, /, [, or ]" +    "<br>"+
            "<br>" + "<label class='card-subtitle'>Student Name</label>"+
            '<input id="regname" role="input" tabindex="0" class="form-control">' +  
            "<br>" +  "<label class='card-subtitle'>Student ID (Don't Include the suffix. Ex: 0000)</label>"+ "<br>" +'<input id="regid" role="input" tabindex="0" class="form-control">' ,
        showCancelButton: true,
        showConfirmButton: true
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          if($$("regname").value==''||$$("regid").value==''){
            Swal.fire(
              'Form Incomplete',
              'Please fill out all the input filed',
              'error'
            )
          } else{
            studentn = $$("regname").value;
            studenti =  $$("regid").value;
            let timerInterval
Swal.fire({
  title: 'Registering '+$$("regname").value,
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
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    Swal.fire(
      'Request Timed Out',
      'Internal Error',
      'error'
    )
  }
})
var xhr556481 = new XMLHttpRequest();
var url2 = baseurl+"/v2/meetings/"+regmid+"/registrants";
xhr556481.open("POST", url2, true);
xhr556481.setRequestHeader("Content-Type", "application/json");

xhr556481.setRequestHeader("Authorization","Bearer " +tkna );
xhr556481.onreadystatechange = function () {
    if (xhr556481.readyState === 4 && xhr556481.status === 201) {
console.log(JSON.parse(xhr556481.response))
//copy link
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
    const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
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
  title: 'Copied to clipboard'
})

    
  }, function(err) {
    Swal.fire(
  'Failed to Copy',
  err,
  'error'
)
  });
}
telenot("<b>" + localStorage.getItem("ctpic")+"</b> :: "+"<b>Invite Link Generated!</b> "+"Link: "+JSON.parse(xhr556481.response)["join_url"])
Swal.fire({
  title: 'Invite Link Generated!',
  icon: 'info',
  html:
    '<input type="text" class="form-control" disabled="disabled" id="link" value="'+JSON.parse(xhr556481.response)["join_url"]+'">  <button id="coppy"  class="btn btn-primary">Copy Link</button>',
  showCloseButton: true,
  showCancelButton: false,
  focusConfirm: false,
  showConfirmButton: false,
})

$$("coppy").onclick=function(){
  copyTextToClipboard(JSON.parse(xhr556481.response)["join_url"])
}


    }}
    var data = JSON.stringify({
      "first_name": "RE"+studenti,
      "last_name": studentn,
      "email": studenti+"@englishre.xyz",
      "state": "Sri Lanka",
      "comments": "FREE CARD",
      "job_title": "Student",
      "org": "English RE",
      "language": "en-US",
      "auto_approve": true
    });
    xhr556481.send(data);

          }
        }})
    }
  })
}



//set topic

fff = 0;

function popupzm (){
    Swal.fire({
        title: 'Type new meeting topic',
        html: "Don't include ., #, $, /, [, ] or |" +
            "<br>" +
            '<input id="mname" role="input" tabindex="0" class="form-control">' ,
            toast:true,
        showCancelButton: true,
        showConfirmButton: true
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            if ($$('mname').value==''){
                Swal.fire('Form Incomplete', 'Topic can not be empty!', 'error')
            } else {
                inputmt =  $$('mname').value;
                fff = 4;
                let timerInterval
firebase.database().ref(   "meeting-topics/" + cid ).set({
  topic :inputmt.replace("|","")
})
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
  title: 'Meeting Topic Updated Successfully'
})        
                
            };
       
        } else if (result.isDismissed) {
        console.log('No Changes were saved', '', 'info')
        }
      })
}
 
function listrec (mmid){
    var xhr888241 = new XMLHttpRequest();
var url2 = baseurl+"/v2/meetings/"+mmid+"/recordings";
xhr888241.open("GET", url2, true);
xhr888241.setRequestHeader("Content-Type", "application/json");

xhr888241.setRequestHeader("Authorization","Bearer " +tkna );
xhr888241.onreadystatechange = function () {
    if (xhr888241.readyState === 4 && xhr888241.status === 404) {
        reclist = JSON.parse(xhr888241.response);
console.log(JSON.parse(xhr888241.response))
var table22 = document.getElementById("clssrecd");
var row = table22.insertRow(-1);
var cell1 = row.insertCell(0);
cell1.innerHTML= "<b>No recordings for ID: </b>" + mmid
    }else{

 
        function firerec (au) {
       
            if(au==null&&JSON.parse(xhr888241.response)["recording_files"]!=null){
                    firebase.database().ref(   "recordings/" + cid + "/" +encodeURIComponent(JSON.parse(xhr888241.response)["uuid"])+"/files").set(JSON.parse(xhr888241.response)["recording_files"]);
              
                        firebase.database().ref(   "recordings/" + cid + "/" + encodeURIComponent( JSON.parse(xhr888241.response)["uuid"])+"/topic").set({
                            title : JSON.parse(xhr888241.response)["topic"]
                        })
                    
            }
            
        }
        if (xhr888241.readyState === 4 && xhr888241.status === 200) {
            var path =   "recordings/" + cid + "/" + encodeURIComponent( JSON.parse(xhr888241.response)["uuid"])
const preObject752 = document.getElementById(path);
// Create References
const dbRefObject752 = firebase.database().ref().child(path);

// Sync object changes
dbRefObject752.on('value', snap => firerec(snap.val()));
        }
    }} 
    var data = JSON.stringify();
    xhr888241.send(data);
    
}

//rec
function getrec (recid){
    var xhr987654 = new XMLHttpRequest();
var url2 = baseurl+"/v2/past_meetings/"+recid;
xhr987654.open("GET", url2, true);
xhr987654.setRequestHeader("Content-Type", "application/json");

xhr987654.setRequestHeader("Authorization","Bearer " +tkna );
xhr987654.onreadystatechange = function () {
    if (xhr987654.readyState === 4 && xhr987654.status === 200) {
        xy=JSON.parse(xhr987654.response);
console.log(JSON.parse(xhr987654.response));
localStorage.setItem("lastu",xy["uuid"]);
localStorage.setItem("lastt",xy["topic"]);
localStorage.setItem("lasts",xy["start_time"]);
localStorage.setItem(encodeURIComponent(xy["uuid"]),xy["topic"]);
localStorage.setItem(xy["uuid"],moment(xy["start_time"]).format("YYYY-MM-DD hh:mm a"))
listrec(recid);
var ptpc = parseInt(xy["participants_count"])-1
                $$("psts").innerHTML="  <strong>Meeting Topic:</strong> "+xy["topic"]+" <br> <strong>Meeting Participants: </strong>"+  ptpc+"<br> <strong>Meeting Duration:</strong> "+ xy["total_minutes"] +" minutes<br> <strong>Start Time:</strong> "+moment(xy["start_time"]).format("YYYY-MM-DD hh:mm a")+" <br> <strong>End Time:</strong> "+moment(xy["end_time"]).format("YYYY-MM-DD hh:mm a")+"<br><br>"+'<button onclick="lptp();" type="button" class="btn btn rounded-pill btn-primary"><span class="tf-icons bx bxs-user-circle"></span>&nbsp; Get Participants</button>'+"<br> <br>"

    }}
    var data = JSON.stringify();
    xhr987654.send(data);
}
function getzmid (ar){
    if (ar!=null){
        
getrec(ar);
midzoom=ar;
$$("stt").innerHTML = ' <button id="sett"  class="btn rounded-pill btn-icon btn-dark "> <i class="bx bx-pencil" ></i></button>'
$$("link2").innerHTML = "<button onclick='registrant("+ar+");' class='btn btn-dark'><span><i class='bx bx-link' ></i></span> Get Link</button>"
$$("123").innerHTML = " <button  onclick='mergef()' class='btn btn-dark'><span><i class='bx bx-edit' ></i></span> Merge Class</button>"
$$("sett").onclick= function (){popupzm();}
    }
} 
function fetchr (){
var path =   "zoomid/" + cid + "/id"
const preObject577 = document.getElementById(path);
// Create References
const dbRefObject577 = firebase.database().ref().child(path);

// Sync object changes
dbRefObject577.on('value', snap => getzmid(snap.val()));};


function tpc (gg) {
if (gg!=null){
    if (fff==4){
        Swal.fire({
            
            position: 'top-end',
            icon: 'success',
            title: "Updated as "+gg,
            showConfirmButton: false,
            timer: 1500
          })
          $$("mttt").innerText = gg;
    } else {
        $$("mttt").innerText = gg;
    }
}
};

var path =   "meeting-topics/" + cid+"/topic";
const preObject577 = document.getElementById(path);
// Create References
const dbRefObject577 = firebase.database().ref().child(path);

// Sync object changes
dbRefObject577.on('value', snap => tpc(snap.val()));


//delete rec
function remr (eid) {
    ssd = eid
console.log(eid)
iii = eid.split("@")[0]
kkk = eid.split("@")[1].split("^")[0]
idd = decodeURIComponent( eid.split("@")[1].split("^")[1])
var xhr88527 = new XMLHttpRequest();
if(bb[Object.keys(bb)[iii]]["files"][kkk]==null){
  kkk = 1
}
var url2 = baseurl+"/v2/meetings/"+bb[Object.keys(bb)[iii]]["files"][kkk]["meeting_id"]+"/recordings/"+ idd;
xhr88527.open("DELETE", url2, true);
xhr88527.setRequestHeader("Content-Type", "application/json");

xhr88527.setRequestHeader("Authorization","Bearer " +tkna );
xhr88527.onreadystatechange = function () {
    if (xhr88527.readyState === 4 && xhr88527.status === 204) {
console.log(xhr88527.response)
       firebase.database().ref( "recordings/"+cid+"/"+encodeURIComponent( bb[Object.keys(bb)[iii]]["files"][kkk]["meeting_id"])+"/files/"+kkk).set({});

      
      Swal.fire(
        'Deleted!',
        'Cloud recording has been deleted.',
        'success'
      )
    }
    if (xhr88527.readyState === 4 && xhr88527.status === 404) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
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
            title: 'Already Deleted'
          })
        console.log(xhr88527.response)
               firebase.database().ref( "recordings/"+cid+"/"+encodeURIComponent(bb[Object.keys(bb)[iii]]["files"][kkk]["meeting_id"])+"/files/"+kkk).set({});
        
            }




} 
    
    var data = JSON.stringify();
    xhr88527.send(data);
    
}



function del1 (tns) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            let timerInterval
            Swal.fire({
              title: 'Deleting the recording..',
              html: 'Connecting with zoom in <b></b> milliseconds.',
              timer: 6000,
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
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
            })
 remr(tns);
        }
      })
}
function pullrec(rd){
  var i = rd.split("@")[0]
  var k = rd.split("@")[1]
  var mlove = bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]
  console.log(i,k)
  st.database().ref( "strecordings/" + cid + "/"+mlove["id"]).set({}).then((result) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: bb[Object.keys(bb)[i]]["topic"]["title"]+ ' recording settings reset',
      showConfirmButton: false,
      timer: 1500
    }).then((result) => {
      location.reload()
    })
  
  })
  
}

function pushrec (rd) {
  function othen(){
    var i = rd.split("@")[0]
    var k = rd.split("@")[1]
    var mlove = bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]
    console.log(i,k)
  
    console.log(mlove["id"])
  st.database().ref( "strecordings/" + cid + "/"+mlove["id"]).set({
    liveon:liveoon,
    livetill:liveoff,
      title:bb[Object.keys(bb)[i]]["topic"]["title"],
      start:mlove["recording_start"],
      end:mlove["recording_end"],
      size:parseInt(mlove["file_size"]).toFixed(2),
      data:CryptoJS.AES.encrypt(mlove["play_url"],authtk).toString(),
      media:$$('rec-security').value,
      times:$$('rec-play-times').value
    
  }).then((result) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: bb[Object.keys(bb)[i]]["topic"]["title"]+ ' recording settings updated',
      showConfirmButton: false,
      timer: 1500
    })
  })
   }

  Swal.fire({
    showCancelButton:true,
    showCloseButton:true,
    icon: 'info',
    title: 'Set recording settings',
    html: " <label for='reportrange' class='form-label'>Visibility Duration</label> <div id='reportrange' class='form-control' style='background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%'> <i class='fa fa-calendar'></i>&nbsp; <span></span> <i class='fa fa-caret-down'></i></div><div><div class='mb-3 col-md-12'></div><div class='mb-3 col-md-12'> <label for='rec-play-times' class='form-label'>Number of times a recording can be played</label> <input class='form-control' value='2' type='number' id='rec-play-times' name='rec-play-times' autofocus=''> </div> <div class='mb-3 col-md-12'> <label for='lastName' class='form-label'>Recording Security</label> <select class='select2 form-select' name='rec-security' id='rec-security'> <option value='N'>Secured Browser Play (Medium Security)</option> <option value='Y'>Media Player (Full Security)</option> </select> </div>"
  }).then((result) => {
    if (result.isConfirmed) {
othen()
    }})
  $(function() {
						
    var start =moment() ;
    var end = moment().add(4, 'days');
  
    function cb(start, end) {
      liveoon = start.format('YYYY-MM-DD')
      liveoff = end.format('YYYY-MM-DD')
      $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
console.log(start.format('YYYY-MM-DD'),end.format('YYYY-MM-DD'));
  console.log(start,end)
  
    }
  
    $('#reportrange').daterangepicker({
      minDate:moment(),
      startDate: start,
      endDate: end,
      ranges: {
        'Next 2 Days': [moment(),moment().add(2, 'days')],
         'Next 3 Days': [ moment(),moment().add(3, 'days')],
         'Next 4 Days': [ moment(),moment().add(4, 'days')],
         'Next 7 days': [ moment(),moment().add(7, 'days')],
         'Next 14 Days': [ moment(),moment().add(14, 'days')]
      }
    }, cb);
  console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    cb(start, end);
  
  });
  


}


// Tables
function recordingss(dt){
    var tl = document.getElementById("clssrecd").rows.length;
    for (let i = 0; i < tl-1; i++) {
      document.getElementById("clssrecd").deleteRow(-1);
      $$("recnom").innerText=0;
      tmpl =0
  }

if (dt!=null){

    var table22 = document.getElementById("clssrecd");
    bb = dt
    for (let i = 0; i < Object.keys(bb).length ; i++) {
   
if (bb[Object.keys(bb)[i]]["files"]!=null){
  count1= 0;
    var row = table22.insertRow(-1);
    var cell1 = row.insertCell(0);
      cell1.innerHTML = ' <b>' + bb[Object.keys(bb)[i]]["topic"]["title"]+'</b>';
    
      for (let k = 0; k < Object.keys(bb[Object.keys(bb)[i]]["files"]).length ; k++) {
        if(bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]!=null){
        if(bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]["recording_start"]!=null){
        tmpl =tmpl
        $$("recnom").innerText =   tmpl ;}
          var row2 = table22.insertRow(-1);
          var cell11 = row2.insertCell(0);
          var cell22 = row2.insertCell(1);
          var cell33 = row2.insertCell(2);
          var cell44 = row2.insertCell(3);
          var cell55 = row2.insertCell(4);
          var cell66 = row2.insertCell(5);
          var cell77 = row2.insertCell(6);
          cell11.innerHTML =  moment(bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]["recording_start"]).format("YYYY-MM-DD hh:mm a");
          cell22.innerHTML = moment(bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]["recording_end"]).format("YYYY-MM-DD hh:mm a");
          cell33.innerHTML = (parseInt(bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]["file_size"])/1000000).toFixed(2) + "mb"
          if(exlist.includes(bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]["id"])){
            cell44.innerHTML= ' <td>  <button onclick="pullrec(this.id)" type="button" id="'+i+"@"+k+'" class="btn btn-sm rounded-pill btn-primary"> <span><i class="bx bx-reset"></i></span>&nbsp; Reset </button>'
            cell77.innerHTML= ' <td>  <button type="button" id="'+i+"@"+k+"^"+bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]["id"]+'" onclick="del1(this.id);" class="btn btn-sm rounded-pill btn-danger disabled"> <span><i class="bx bx-x" ></i></span>&nbsp; Delete </button>'

          } else{
          cell44.innerHTML= ' <td>  <button onclick="pushrec(this.id)" type="button" id="'+i+"@"+k+'" class="btn btn-sm rounded-pill btn-primary"> <span><i class="bx bx-cloud-upload" ></i></span>&nbsp; Publish </button>'
          cell77.innerHTML= ' <td>  <button type="button" id="'+i+"@"+k+"^"+bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]["id"]+'" onclick="del1(this.id);" class="btn btn-sm rounded-pill btn-danger"> <span><i class="bx bx-x" ></i></span>&nbsp; Delete </button>'


          }
          cell55.innerHTML= '  <a onclick=window.open('+"'"+bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]["play_url"]+"'"+")"+' > <button type="button" href="#"'+'class="btn btn-sm rounded-pill btn-secondary"><span class="tf-icons bx bx-play"></span>&nbsp; Play</button></a> '
          cell66.innerHTML= '  <a onclick=location.replace('+"'"+bb[Object.keys(bb)[i]]["files"][Object.keys(bb[Object.keys(bb)[i]]["files"])[k]]["download_url"]+"'"+")"+' > <button type="button" href="#"'+'class="btn btn-sm rounded-pill btn-warning"><i class="bx bxs-download"></i></span>&nbsp; Save</button></a> '
          console.log("Added")
   
      
          
      }}
    
    
    }
  
    }
}
}
function evenafter (){
var path =   "recordings/" + cid + "/"
const preObject752 = document.getElementById(path);
// Create References
const dbRefObject752 = firebase.database().ref().child(path);

// Sync object changes
dbRefObject752.on('value', snap => recordingss(snap.val()));}

function befire (el){
if(el!=null){
exlist = Object.keys(el)
}
evenafter()
}

var path2 =   "strecordings/" + cid + "/"
const preObject75211 = document.getElementById(path2);
// Create References
const dbRefObject75211 = st.database().ref().child(path2);
// Sync object changes
dbRefObject75211.on('value', snap => befire(snap.val()));


//latest ptp list

function lptp (){
  Swal.fire({
    title: 'Fetching data',
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
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire(
        'Request Timed Out',
        'Internal Error',
        'error'
      )
    }
  })



  var xhr445232 = new XMLHttpRequest();
  var url2 = baseurl+"/v2/report/meetings/"+midzoom+"/participants?page_size=300";
  xhr445232.open("GET", url2, true);
  xhr445232.setRequestHeader("Content-Type", "application/json");
  xhr445232.setRequestHeader("Authorization","Bearer " +tkna );
  xhr445232.onreadystatechange = function () {
      if (xhr445232.readyState === 4 && xhr445232.status === 200) {
  console.log(JSON.parse(xhr445232.response))
oo = JSON.parse(xhr445232.response);
$$("layout-menu").style.display="none";
  Swal.fire({
    title: '<img src="images/LMS-Logo.png" width="20%" alt="LMSLOGO"> <br> Attendance Reports / <b>' + localStorage.getItem("lastt")+"</b>",

    grow:'fullscreen',
    html:
      '<div id=""pri"> <input type="text" class="form-control" width="100%" id="myInput" onkeyup="search()" placeholder="Search for names.." title="Type in a name"><br> <div class="col-md-12"> <div  class="table-wrap">  <table id="atdl" class="table" > <tbody> <tr> <th>Student ID</th> <th>Student Name</th> <th>Join Time</th> <th>Leave Time</th> <th>Duration</th> </tr> </tbody> </table><br>'+'  <button class="btn btn-dark" onclick="dl()"> Download </button>'+' </div> </div></div>',
  
    focusConfirm: false,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isDismissed) {
      $$("layout-menu").style.display="block";
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


  
      } else{
        if(xhr445232.readyState === 4 && xhr445232.status === 404){
          Swal.fire(
            'Nothing to Display',
            'probably this meeting had only the host',
            'question'
          )
        }
      }
    
    }
      var data = JSON.stringify();
      xhr445232.send(data);



}

function mergef (){
  Swal.fire({
    title: "Merge Class",
    icon:"info",
    html:
      '<div class="hellocen"><h3>Select the classes</h3> <table id="myTable" width="90%" class="float-center"> <tr> <td style="display:none;"> <label for="checkbox65"> <input name="checkbox" class="form-check-input" type="checkbox" /> None </label> </td> </tr> <tr><td> </td></tr> </table></div>',
  
    focusConfirm: true,
    showCancelButton: false,
    confirmButtonText: "Done",
    cancelButtonColor:'8070d4',
    showDenyButton: false,
    showConfirmButton:true,
    showCloseButton: true,
    denyButtonText: 'Clear All',
    denyButtonColor: '#EE4B2B'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
  

    if (result.isDenied) {
      console.log("running")
      firebase.database().ref(   "merge/" + localStorage.getItem("nclz") ).set({ })
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        allowOutsideClick: false,
        allowEscapeKey:false,
        text:"Existing Merges Cleared",
        title: 'Unmerged',
        showConfirmButton: false,
        timer: 2000
      }).then((result) => {
      location.reload();
      })

    } else{
      btmt.fire({
        icon:"success",
        title:"Changes Updated"
      })
    }


  })



 
  nn=JSON.parse(localStorage.getItem("allc"))


 
  for (var i = 0; i< Object.keys(nn).length; i++){
if (localStorage.getItem("nclz")!=Object.keys(nn)[i]){
 if(nn[ Object.keys(nn)[i]]!=null){
  mgcid = Object.keys(nn)[i];
  mgv= nn[ Object.keys(nn)[i]]["topic"];
  var row =  document.getElementById("myTable").insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  if(ggf==null){
    cell1.innerHTML = '<input id='+mgcid+' onchange="hello5(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> '
    cell2.innerHTML = '<label  for="checkbox1" class="form-control float-center">'+ mgv +'</label>'
  } else{
  if(!(Object.keys(ggf).includes(mgcid))){
  cell1.innerHTML = '<input id='+mgcid+' onchange="hello5(this.id)" name="checkbox1" class="form-check-input" type="checkbox"> '
  cell2.innerHTML = '<label  for="checkbox1" class="form-control float-center">'+ mgv +'</label>'} else{
    cell1.innerHTML = '<input id='+mgcid+' onchange="hello5(this.id)" name="checkbox2"   for="flexCheckChecked" class="form-check-input" type="checkbox" checked> '
    cell2.innerHTML = '<label  for="checkbox1" class="form-control float-center">'+ mgv +'</label>'
  }

}
 }
   }}
  



}


// Merge
function second (){
function pushm (gf) {
  ggf = gf;
  if(ggf!=null){
    for (i = 0; i < Object.keys(ggf).length; i++) {
      mergeray = mergeray + " | "+("000" + Object.keys(ggf)[i]).slice(-4)}
  } else{
    mergeray = ''
  }

  console.log(gf)
if (gf==null){
  $$("mginf").innerText="UNMERGED"
} else{
 
    $$("mginf").innerText= "MERGED-HOST"
  
}
}

 var upath = "merge/"+ cid
const preObject99634 = document.getElementById(upath);
// Create References
const dbRefObject99634 = firebase.database().ref().child(upath);

// Sync object changes
dbRefObject99634.on('value', snap => pushm(snap.val()));}

function otherpush (outp){
  if(outp==null){
    second()
  } else{
  nn=JSON.parse(localStorage.getItem("allc"))
  tcnm = nn[outp]["topic"]
  $$("mginf").innerText="Managed under the merge of "+tcnm
  $$("mginf").className="badge bg-label-danger rounded-pill"
 
  function gout (){
    $$("start11").outerHTML ='<button id="start11" onclick="openmeet()" class="btn btn-dark "disabled><span><i class="bx bx-camera-movie" ></i></span> Start</button>'
  $$("123").innerHTML='<span id="123"> <button onclick="mergef()" class="btn btn-dark" disabled><span><i class="bx bx-edit"></i></span> Merge Class</button></span>'}
  
 setInterval(gout,1000)
}
}

var upath33 = "merge-son/"+ cid +"/cid"
const preObject9963411 = document.getElementById(upath33);
// Create References
const dbRefObject9963411 = firebase.database().ref().child(upath33);

// Sync object changes
dbRefObject9963411.on('value', snap => otherpush(snap.val()));