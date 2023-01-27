var $$ = function( id ) { return document.getElementById( id ); };
 pn = localStorage.getItem("em")
$$('rest').onclick = function (){
    dp = null
    $$('imgc').src = "assets/clz.jpg"
    
}
function writeMeeting(topic,year,time,bio,link,section) {
  xrand = $$('class-select').value
    firebase.database().ref("byname/"+topic).set({
        pn:localStorage.getItem("em"),
        cid:xrand
    })
firebase.database().ref("classes/"+xrand+"/info").set({
topic: topic,
time:time,
year:year,
bio:bio
})
var ref = "/teachers/" +pn + "/" + "class/" + xrand 
firebase.database().ref(ref).set({
topic: topic,
time:time,
year:year,
bio:bio
})

st.database().ref("classes/"+xrand+"/info").update({
topic: topic,
time:time,
year:year,
bio:bio,
section:section,
link:link,
pic:dp

}).then((result) => {
  telenot("<b>✅ Class Information Updated</b>"+"\n\n<b>Class ID:</b> "+$$('class-select').value+"\n<b>Class Year:</b> "+topic+"\n<b>Class Time:</b> "+time+"\n<b>Class Year:</b> "+year+"\n<b>Class Type:</b> "+bio+"\n<b>Class Section:</b> "+section+"\n<b>Class Group Link:</b> "+link+"\n<b>Class Picture:</b> "+dp)
    Swal.fire({
position: 'top-end',
icon: 'success',
allowOutsideClick: false,
allowEscapeKey:false,
text: topic + " has been successfully updated",
title: 'Classroom Updated',
showConfirmButton: false,
timer: 2000
}).then((result) => {

})
console.log(result)

});

}
$$('save').onclick = function() {
   var tp =  $$('class-topic').value 
   var tm =   $$('class-schedule').value 
   var sc =   $$('class-section').value 
   var yr =   $$('exam-year').value 
   var ty =  $$('class-type').value 
   var lk =  $$('group-link').value 

   if(tp==''||tm==''|sc==''||yr==''||ty==''){
    Swal.fire(
        'Form Incomplete',
        'Please Fill the required fileds',
        'warning'
      )
   } else{
writeMeeting(tp,yr,tm,ty,lk,sc)
   }

   
  
}

function fsave() { 
   file = fileInput.files[0];
    var Type = file.type;
    var Size = file.size/1000000;
    console.log(Type);
    if(Size<8){
  if (Type.includes("image")) {
  
    var filename = file.name;
  
    console.log (filename.substring(filename.lastIndexOf('.')+1))
  
      console.log();
      // Create a root reference
      var storageRef = fi.storage().ref();
  
      // Create a reference to 'mountains.jpg'
  
      
      // While the file names are the same, the references point to different files
  
      // Uploading Section 
  
      var newMetadata = {
        cacheControl: 'public,max-age=31534000',
      }

  var uploadTask =  storageRef.child('Cover Potos/'+$$('class-select').value+"/"+Math.floor(Math.random() * 100)+"."+filename.substring(filename.lastIndexOf('.')+1)).put(file,newMetadata);
  Swal.fire({
      title: '<strong>File is being uploaded</strong>',
      icon: 'info',
      html:'<div id="myProgress">' + '<center><small class="text-primary fw-semibold"><i class="bx bx-loader-circle"></i> Please be patient!</small></center><br>'+
     ' <div class="w3-blue" id="myBar">10%</div>' +'</div>' ,
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
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
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
     dp = downloadURL
      Swal.fire(
        'File Uploaded',
        filename+' has been successfully uploaded!',
        'success'
        )
        
    
      });
    }
  );
     }  else {
      Swal.fire(
  'Unsupported File',
  'Only image file type is allowed. ',
  'error'
  )
     }} else {
  
        Swal.fire(
            'BIG File',
            'Only image files less than 25 MB allowd',
            'error'
            )
     }
    
    
    
    }

li = JSON.parse(localStorage.getItem("allc"))

for (let i = 0; i < Object.keys(li).length; i++) {
if(li[Object.keys(li)[i]]!=null){
  var option = document.createElement("option");
  option.text = li[Object.keys(li)[i]]["topic"]
  option.value = Object.keys(li)[i]
  $$("class-select").add(option);
}
   
    
}
$$("class-select").value=localStorage.getItem("nclz")
const fileInput = document.getElementById('upload');
fileInput.onchange = () => {
    if (fileInput.files[0]) {

        fsave();

        const selectedFile = fileInput.files[0];
  console.log(selectedFile);
  $$('imgc').src = window.URL.createObjectURL(selectedFile);

      }

  
}

function payupd () {
  console.log("seting... payments")
  if( $$("fee").value!=''&&$$("onpay").value!=''&&$$("opend").value!=''&&$$("closed").value!=''){
    if(parseInt($$("closed").value)-parseInt($$("opend").value)>2){
    st.database().ref( "payset/" + $$('class-select').value).set({
      rs:   $$("fee").value,
      onpay:   $$("onpay").value,
      opend: $$("opend").value,
      closed:  $$("closed").value
    }).then((rs)=>{
      swal.fire({
        title:"Successfully Updated",
        text:"We just updated your class fees payment info",
        icon:"success"
      })
      telenot("<b>✅ Payment Settings Updated for the Class " + JSON.parse(localStorage.getItem("allc"))[$$('class-select').value]["topic"]+"</b>"+"\n\n<b>Payment Information</b>"+"\nFee: "+$$("fee").value+"\nPayment Methods: "+$$("onpay").options[$$("onpay").selectedIndex].text+"\nAuto Open Access Date: "+$$("opend").value+" of Every Month"+"\nAuto Restricted Access Date: "+$$("closed").value+" of Every Month"+"\n\n<b>Class Information</b>"+"\nClass ID: "+$$('class-select').value+"\nClass Year: "+JSON.parse(localStorage.getItem("allc"))[$$('class-select').value]["year"]+"\nClass Time: "+JSON.parse(localStorage.getItem("allc"))[$$('class-select').value]["time"]+"\nClass Type: "+JSON.parse(localStorage.getItem("allc"))[$$('class-select').value]["bio"])
    })

  } else {
    swal.fire({
      title:"Form Errors",
      text:"The minimum payment tier should be more than 4 days",
      icon:"warning"
    })

  }} else {
    swal.fire({
      title:"Incomplete Form",
      text:"Please fill all the fields",
      icon:"warning"
    })
  }
}

function load (d){
    function getlink (){
        if(d["link"]==null){
            $$('group-link').placeholder = "No link"
        } else {
            $$('group-link').value = d["link"]
        }
    }
    console.log(d)
    x = d
    $$('class-topic').value = d["topic"]
    $$('class-schedule').value = d["time"]
    $$('class-section').value = d["section"]
    $$('exam-year').value = d["year"]
    $$('class-type').value = d["bio"]
    if(d["pic"]!=null){
        $$('imgc').src = d["pic"]
        dp= d["pic"]
    }else{
        $$('imgc').src = "assets/clz.jpg"
      }
getlink()   
}


var path2= "classes/"+$$('class-select').value+"/info"
const dbRefObject22 = st.database().ref().child(path2);
// Sync object changes
dbRefObject22.on('value', snap => load(snap.val()));



function payload (bz) {

if(bz!=null){
  $$("fee").value=bz["rs"]
  $$("onpay").value=bz["onpay"]
  $$("opend").value=parseInt(bz["opend"])

  $$("closed").value=parseInt(bz["closed"])
} else {
  $$("fee").value=''
  $$("onpay").value=''
  $$("opend").value=''
  $$("closed").value=''
}
}

function paylisten () {
  var path =   "payset/" + $$('class-select').value
const dbRefObject7822 = st.database().ref().child(path);
  
// Sync object changes
dbRefObject7822.on('value', snap => payload(snap.val()));
}paylisten ()

function news(val){

    var path2= "classes/"+$$('class-select').value+"/info"
const dbRefObject22 = st.database().ref().child(path2);
// Sync object changes
dbRefObject22.on('value', snap => load(snap.val()));

paylisten()
vdf()
}