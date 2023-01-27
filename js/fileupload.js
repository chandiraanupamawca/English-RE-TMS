

var $$ = function( id ) { return document.getElementById( id ); };

function setp(){
  if($$('material-type').value=='video'){
    $$('file-upload').accept = 'video'
  }

}


function getf(){
console.log("selected")
selfilepath = $$('file-upload').files[0].path
}

// Verify Input
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
function fiveri (){
    if ($$('matname').value==''){
        Swal.fire(
            'Form Incomplete',
            'Please fill out all the file name',
            'error'
          )
    } else {
        if ($$('material-type').value=='Select Material Type'){
            Swal.fire(
                'Form Incomplete',
                'Please select the type',
                'error'
              )
        } else {
    
            if ($$('link-type').value=='Select Link Type'){
                Swal.fire(
                    'Form Incomplete',
                    'Please select link type',
                    'error'
                  )
            } else {
        
                if ($$('available-from').value==''){
                    Swal.fire(
                        'Form Incomplete',
                        'Please select from date',
                        'error'
                      )
                } else {
                    if ($$('available-till').value==''){
                        Swal.fire(
                            'Form Incomplete',
                            'Please select till date',
                            'error'
                          )
                    } else {
                
                        if ($$('file-upload').value==''&&$$('link-type').value=='internal'){
                            Swal.fire(
                                'Form Incomplete',
                                'Please select the file',
                                'error'
                              )
                        } else {
                
                            if (!(validURL($$('url-upload').value))&&$$('link-type').value=='external'){
                                Swal.fire(
                                    'Form Incomplete',
                                    'Please fill a valid url',
                                    'error'
                                  )
                            } else {
                               
if(moment($$('available-till').value).format('x')-moment($$('available-from').value).format('x')>-2&&moment($$('available-from').value).format('x')>moment().format('x')){
  if ($$('link-type').value=='external'&&$$('material-type').value=='document'){


    st.database().ref(   "files/" + cid +"/file"+ moment().format('x')).set({
      topic :$$('matname').value,
      size:0,
      type:$$('material-type').value,
      from:$$('available-from').value,
      till:$$('available-till').value,
      url:CryptoJS.AES.encrypt($$('url-upload').value,authtk).toString(),
      fname:$$('matname').value,
      safe:$$('media-player').value
  })
  Swal.fire(
    'File Updated',
    'URL has been successfully uploaded!',
    'success'
    ).then((result) => {
      location.reload();
    })
  } else {
    if ($$('link-type').value=='external'&&$$('material-type').value=='video'){
      st.database().ref(   "files/" + cid +"/file"+ moment().format('x')).set({
        topic :$$('matname').value,
        size:0,
        type:$$('material-type').value,
        from:$$('available-from').value,
        till:$$('available-till').value,
        url:CryptoJS.AES.encrypt($$('url-upload').value,authtk).toString(),
        fname:$$('matname').value,
        safe:$$('media-player').value
    })
    Swal.fire(
      'File Updated',
  'URL has been successfully uploaded!',
      'success'
      ).then((result) => {
        location.reload();
      })
    } 
  }



  if ($$('file-upload').value!=''&&$$('link-type').value=='internal'&&$$('material-type').value=='document'){
    selfilepath = $$('file-upload').files[0].path
    fsave();
   } else {
    if ($$('file-upload').value!=''&&$$('link-type').value=='internal'&&$$('material-type').value=='video'){
      selfilepath = $$('file-upload').files[0].path
      let timerInterval
      Swal.fire({
        title: '<b>It takes around 5 minutes to process your video</b>',
        html: 'I will close in <b></b> milliseconds.',
        timer: 300000,
        allowOutsideClick: false,
allowEscapeKey:false,
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
            'Video processing failed',
            'Please try again',
            'error'
          )
        }
      })
      try {
        uploader() 
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: error
        })
      }



     }
   }
 
} else{
  Swal.fire(
    'Date error',
    'Please fill a valid file alive range',
    'error'
  )
}
                                
                           
                            } 
                        }
                    }
                    
                }
            }
        }

    }
};

//file upload mechanisam
 function fsave() { 
    var file = $$('file-upload').files[0];
    var Type = file.type;
    var Size = file.size/1000000;
    console.log(Type);
  filename = file.name;

    if(Size<25){
if (Type="application/pdf") {


    console.log (filename.substring(filename.lastIndexOf('.')+1))

      console.log();
      // Create a root reference
      var storageRef = uploaderjs.storage().ref();
  
      // Create a reference to 'mountains.jpg'
 
      
      // While the file names are the same, the references point to different files

      // Uploading Section 
  
  
  var uploadTask = storageRef.child('Class Materials/'+localStorage.getItem('nclz')+"/"+filename).put(file);
  Swal.fire({
      title: '<strong>File is being uploaded</strong>',
      icon: 'info',
      html:'<div id="myProgress">' + '<center><small class="text-primary fw-semibold"><i class="bx bx-loader-circle"></i> Please be patient!</small></center><br>'+
     ' <div class="w3-green" id="myBar">10%</div>' +'</div>' ,
     showCancelButton: false,
     showCloseButton: false,
     showConfirmButton: false,
     allowOutsideClick: false
    })
  
  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on('state_changed', 
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // Progress
  
  document.getElementById("myBar").style.width = progress + "%"
  document.getElementById("myBar").innerText = Math.round(progress)+"%";
  
  
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case uploaderjs.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case uploaderjs.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Upload faild! Please try again'
      })
      // Handle unsuccessful uploads
    }, 
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        telenot("<b>" + localStorage.getItem("ctpic")+"</b> :: "+"<b>Class Material Uploaded!</b> File Name:"+ filename +" Size: " + Size + "Link: "+ downloadURL)
        console.log('File available at', downloadURL);
        st.database().ref(   "files/" + cid +"/file"+ moment().format('x')).set({
          topic :$$('matname').value,
          size:Size,
          type:$$('material-type').value,
          from:$$('available-from').value,
          till:$$('available-till').value,
          url:CryptoJS.AES.encrypt(downloadURL,authtk).toString(),
          fname:filename,
          safe:$$('media-player').value
      })
      Swal.fire(
        'File Uploaded',
        filename+' has been successfully uploaded!',
        'success'
        ).then((result) => {
          location.reload();
        })
        
    
      });
    }
  );
     }  else {
      Swal.fire(
'Unsupported File',
'Only pdf files are allowed. ',
'error'
)
     }} else {

        Swal.fire(
            'BIG File',
            'Only PDF files less than 25 MB allowd',
            'error'
            )
     }
    
    
    
    }


    function editfi (mm){
console.log(mm)

 function ilb (ado){
  console.log(ado)
var exto = ado["topic"]
var safev = ado["safe"]
var fromz = ado["from"]
var expz = ado["till"]
function getsafe(){
  if($$("btnradio1").checked){
    return "Y"
  } else {
    return "N"
  }
}
 Swal.fire({
    title: 'Edit File',
    html:
    '  <label for="edtitle"><b>Material Topic</b></label>'+
      '<input id="edtitle" type="text" class="form-control"> ' +
      '<br>  <label for="css"><b>Require Media Player</b></label><br>' +
      ' <div class="btn-group" style="width:90%" role="group" aria-label="Basic radio toggle button group"> <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" > <label class="btn btn-outline-primary" for="btnradio1">Yes</label> <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" > <label class="btn btn-outline-primary" for="btnradio3">No</label> </div><br>'+
      '<br>  <label for="pubti"><b>Re-Publish Time: </b></label>'+
      '<input id="pubti" type="datetime-local" class="form-control" value='+fromz+'>'+
      '<br>  <label for="endti"><b>Re-Expire Time: </b></label>'+
      '<input id="endti" type="datetime-local" class="form-control" value='+expz+'> '

      
      ,
      showCancelButton:true,
      showCloseButton:true,
    focusConfirm: false,
    
    preConfirm: () => {
      return [
        document.getElementById('edtitle').value,
        document.getElementById('btnradio1').value,
        document.getElementById('btnradio3').value,
        document.getElementById('pubti').value,
        document.getElementById('endti').value,


      ]
    }
  }).then((result)=>{
   if(result.isConfirmed){
    st.database().ref( "files/" + cid +"/"+mm).update({
      topic: document.getElementById('edtitle').value,
      safe:getsafe(),
      from:document.getElementById('pubti').value,
      till:document.getElementById('endti').value
    }).then((res)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'File settings updated',
        showConfirmButton: false,
        timer: 1500
      })
    })

    console.log({
      topic: document.getElementById('edtitle').value,
      safe:getsafe(),
      from:document.getElementById('pubti').value,
      till:document.getElementById('endti').value
    })
   } else {
    console.log("dismissed")
   }
  })
  document.getElementById('edtitle').value=exto
  if (safev=='Y'){
    $$('btnradio1').click()
         
             } else {
               $$('btnradio3').click()
   
         
             }

}

var path =    "files/" + cid +"/"+mm
const preObject75277z = document.getElementById(path);
// Create References
const dbRefObject75277z = st.database().ref().child(path);

// Sync object changes
dbRefObject75277z.once('value', snap => ilb(snap.val()));

    }
    // Table Update

    function delf (idf){
      Swal.fire({
			  title: 'Are you sure?',
			  text: "You won't be able to revert this! File ID: "+idf ,
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
			
  
			  if (result.isConfirmed) {
          let timerInterval
          Swal.fire({
            title: 'Deleting the file..',
            html: 'Connecting with file storage in <b></b> milliseconds.',
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
          })
      if (idf.includes("file")){
      
        var storageRef = uploaderjs.storage().ref();
      var desertRef = storageRef.child('Class Materials/'+localStorage.getItem('nclz')+"/"+ffh[idf]["fname"]);
      var tempo = ffh[idf]["fname"]
      desertRef.delete().then(() => {
        st.database().ref(   "files/" + cid +"/"+idf).set({})
    
        Swal.fire(
          'File Deleted',
          tempo+' has been successfully deleted!',
          'success'
          )
      }).catch((error) => {
        st.database().ref(   "files/" + cid +"/"+idf).set({})

        console.log(error)
        Swal.fire(
          'File Deleted',
       'File has been successfully deleted!',
          'success'
          )
      })
    }}})
  
  }

function matf(a){
  ffh=a
  console.log(a)
  var tl = document.getElementById("filest").rows.length;
  for (let i = 0; i < tl-1; i++) {
    document.getElementById("filest").deleteRow(-1);}
    filest = $$('filest')
    if (a==null){
      var row = filest.insertRow(-1);
      var cell1 = row.insertCell(0);
      cell1.innerHTML = "<b>NO Materials Uploaded<b>"
    } else{
      for (let i = 0; i < Object.keys(ffh).length ; i++) {

        var row2 = filest.insertRow(-1);
        $$('abcd').innerText=document.getElementById("filest").rows.length-1;
        var cell11 = row2.insertCell(0);
        var cell22 = row2.insertCell(1);
        var cell33 = row2.insertCell(2);
        var cell44 = row2.insertCell(3);
        var cell55 = row2.insertCell(4);
        var cell66 = row2.insertCell(5);
        var cell77 = row2.insertCell(6);
        var cell88 = row2.insertCell(7);
        cell11.innerHTML =  "<b>"+ffh[Object.keys(ffh)[i]]["topic"] +"</b>"
        if (Object.keys(ffh)[i].includes("file")){
        cell22.innerHTML = ffh[Object.keys(ffh)[i]]["type"];}
        if(ffh[Object.keys(ffh)[i]]["size"]!=null){
    
        cell33.innerHTML = (ffh[Object.keys(ffh)[i]]["size"]).toFixed(2)  + "mb"}
        cell44.innerHTML= moment( ffh[Object.keys(ffh)[i]]["from"]).format("YYYY-MM-DD hh:mm a")
        cell55.innerHTML= moment( ffh[Object.keys(ffh)[i]]["till"]).format("YYYY-MM-DD hh:mm a")
        extc = CryptoJS.AES.decrypt(ffh[Object.keys(ffh)[i]]["url"],authtk)
        cell66.innerHTML='<button type="button" id="'+Object.keys(ffh)[i]+'" onclick="editfi(this.id)" class="btn btn-sm rounded-pill btn-dark"><span class="tf-icons bx bxs-edit-alt"></span>&nbsp; Edit</button>'
        cell77.innerHTML= '  <a onclick=window.open('+"'"+extc.toString(CryptoJS.enc.Utf8)+"'"+")"+' > '+'<button type="button" class="btn btn-sm rounded-pill btn-primary"><span><i class="bx bx-play"></i></span>&nbsp; View</button> '
        cell88.innerHTML='<button type="button" id="'+Object.keys(ffh)[i]+'" onclick="delf(this.id)" class="btn btn-sm rounded-pill btn-danger"><span class="tf-icons bx bx-log-out"></span>&nbsp; Delete</button>'

        console.log("Addedmat")
          $$("recnom").innerText =   parseInt( $$("recnom").innerText)+1 ;
        
    }
    }

}


    var path =    "files/" + cid 
const preObject75277 = document.getElementById(path);
// Create References
const dbRefObject75277 = st.database().ref().child(path);

// Sync object changes
dbRefObject75277.on('value', snap => matf(snap.val()));