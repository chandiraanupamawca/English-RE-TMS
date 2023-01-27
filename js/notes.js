no="";
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min  ;
    return time;
  }

var $$ = function( id ) { return document.getElementById( id ); };
function getTimeStamp(input) {
    var parts = input.trim().split(' ');
    var date = parts[0].split('-');
	var time = (parts[1] ? parts[1] : '00:00:00').split(':');

	// NOTE:: Month: 0 = January - 11 = December.
	var d = new Date(date[0],date[1]-1,date[2],time[0],time[1],time[2]);
	return d.getTime() / 1000;
}

function notes (ab) {

    if (ab==null){
        no = "yes"
        document.getElementById("nbody").innerText="Create a one by clicking the pencil icon 👈"
        $$("nsts").innerHTML='  <span  id="nsts" class="badge bg-label-warning rounded-pill" style="font-size: 10px;">'+ "NO NOTES AVAILABLE " +'</span>';
    } else {
        if (no=="yes"){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: ab["topic"]+' has been saved',
                showConfirmButton: false,
                timer: 1500
              }).then((result) => {
                location.reload();
              })
              
        } else{
$$("nhead").innerText=ab["topic"];
$$("nbody").innerHTML=ab["html"];
console.log(parseInt(ab["time"]))
console.log(Math.floor(Date.now() / 1000))
if (Math.floor(Date.now() / 1000)<parseInt(ab["time"])){
    $$("nsts").innerHTML='  <span  id="nsts" class="badge bg-label-warning rounded-pill" style="font-size: 13px;">'+ "Will be published at " +  timeConverter(parseInt(ab["time"]))+'</span>';
} else {
    $$("nsts").innerHTML='  <span  id="nsts" class="badge bg-label-success rounded-pill" style="font-size: 13px;">'+ "Live since " +  timeConverter(parseInt(ab["time"]))+'</span>';
}


        }
    }
};

function updn(){
    if($$("nthead").value==''){
        Swal.fire(
            'Form Incomplete',
            'Please fill out the Note Topic',
            'error'
          )
    } else{
        if($$("example").value==''){
            Swal.fire(
                'Form Incomplete',
                'Please fill out the effective date',
                'error'
              )

    } else{
        if(document.getElementsByClassName("ql-editor")[0].className=='ql-editor ql-blank'){
            Swal.fire(
                'Form Incomplete',
                'Please fill out the content',
                'error'
              )

    } else{
        if($$("example").value==''){
            Swal.fire(
                'Form Incomplete',
                'Please fill out the effective date',
                'error'
              )} else {

                if($$("ntime").value==''){
                    Swal.fire(
                        'Form Incomplete',
                        'Please fill out the effective time',
                        'error'
                      )} else {
                        st.database().ref( "notes/" + cid).set({
                            topic: $$("nthead").value,
                        date:$$("example").value,
                        time:getTimeStamp($$("example").value+ " " +$$("ntime").value+":00") ,
                        html:document.getElementsByClassName("ql-editor")[0].innerHTML
                          })


                      };
              }
     
    }

    } 
    
    ;
}};

var path =   "notes/" + cid
const preObject74569 = document.getElementById(path);
// Create References
const dbRefObject74569 = st.database().ref().child(path);

// Sync object changes
dbRefObject74569.on('value', snap => notes(snap.val()));


document.getElementById("nedit").onclick=function(){
    no = "yes"
    $$("nsts").innerText="Pending Changes"
    if(document.getElementById("nedit").className=="badge badge-center rounded-pill bg-primary border-label-primary p-3 me-2"){
      document.getElementById("nedit").className="badge badge-center rounded-pill bg-danger border-label-danger p-3 me-2"
      document.getElementById("nedit").innerHTML='<i  class="bx bx-x fs-6"></i>'
      document.getElementById("nbody").innerText='FIll the following information'
      document.getElementById("nhead").innerText='New Note'
    
    } else {
    location.reload();
    }
    
        document.getElementById("nnn").innerHTML="<div style='width: 100% ;' class='card mb-4'> <div class='card-header d-flex justify-content-between align-items-center'> <h5 class='mb-0'>New Notice</h5> <small class='text-muted float-end'>Existing Note will be deleted</small> </div> <div class='card-body'> <div class='mb-3'> <label class='form-label' for='basic-default-company'>Note Heading</label> <input type='text' class='form-control' id='nthead' placeholder='Sample Topic'> </div> <div class='mb-3'> <label class='form-label' for='basic-default-phone'>Effective from date</label> <input id='example' class='form-control' placeholder='Open date picker' type='text' /> </div>  <div class='mb-3'> <label class='form-label' for='basic-default-company'>Effective Time</label> <input type='time' class='form-control' id='ntime' placeholder='Click to pick a time'> </div>  <div class='mb-3'> <label class='form-label' for='basic-default-message' >Message</label> <div style='height:300px ;' id='editor2'></div> </div> <button id='upn' class='btn btn-primary'>Update</button> <button id='nclr' class='btn btn-danger'>Clear All</button>  </div> </div>"
        document.getElementById("upn").onclick=function(){console.log("running")
        updn();
    }
    $$("nclr").onclick=function(){
        st.database().ref("notes/" + cid).set({});
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'All notes deleted',
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            location.reload();
          })
    };
          
              var quill = new Quill('#editor2', {
                theme: 'snow'
              });
              const d = new Date();
          const myDatePicker = MCDatepicker.create({ 
    el: '#example' ,
    dateFormat: 'YYYY-MM-DD',
    selectedDate: d, // today
    })
      };

    