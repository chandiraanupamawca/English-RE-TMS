var $$ = function( id ) { return document.getElementById( id ); };
dt = ''
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
  
  
  var uploadTask = storageRef.child('Exams/'+exid+"/"+filename).put(file);
  Swal.fire({
      title: 'Essay Paper is being uploaded',
      icon: 'info',
      html:'<div id="myProgress">' + '<center><small class="text-primary fw-semibold"><i class="bx bx-loader-circle bx-spin" ></i> Please be patient!</small></center><br>'+
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
        console.log('File available at', downloadURL);
        dt = downloadURL
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
'Only pdf file type is allowed. ',
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

if(localStorage.getItem("exid")==null){
    exid = Math.floor(Date.now() / 1000)
} else {
exid = localStorage.getItem("exid")
console.log("existing exid : " + exid)
}

console.log("ExamJS Running")
nn=JSON.parse(localStorage.getItem("allc"))
for (var i = 0; i< Object.keys(nn).length; i++){
  if(nn[Object.keys(nn)[i]]!=null){
    var tid = Object.keys(nn)[i]
    var tnmm = nn[Object.keys(nn)[i]]["topic"]
    var opt = document.createElement('option');
                               opt.value = tid ;
                               opt.innerHTML =  tnmm;
                               $$('class-select').appendChild(opt)
  }

}
if(localStorage.getItem("excid")!=null){
    $$('class-select').value = localStorage.getItem('excid')
console.log("existing cid : " +  $$('class-select').value )

}




function publishexam () {
    topic =  $$("exam-name").value
cidx =  $$("class-select").value
start =  $$("start-time").value
end =  $$("end-time").value
des =  $$("exam-des").value
cname = $$("class-select").options[$$("class-select").selectedIndex].text
dur = $$('exam-duration').value
console.log(topic , cidx , start , end , des ,cname , dur , dt)
if(topic==''||cidx==''||start==''||end==''||des==''||dt==''||dur==''){
    Swal.fire({
        icon: 'error',
        title: 'Form Incomplete',
        text: 'Please fill out all the fileds in Create Essay ',
      })
} else{
 takeoff = []


   firebase.database().ref(   "exams/" + $$("class-select").value + "/"+ exid +"/gen" ).update({
      topic: topic,
   cid: cidx,
   start:start,
    end:end,
    cname:cname,
    dur:dur,
    des:des,
    url : dt,
    type:"Essay"

  })





}
}
if($$("publish-exam")){
$$("publish-exam").onclick= function (){publishexam()}}
$$("cancle-exam").onclick = function cancle_exam() { window.location.href ="exmain.html"}


function vercel (examdata) {
    if (examdata==null){
        console.log("new str")
      
    } else {
        console.log(examdata)

        var gen = examdata["gen"]
        $$("exam-name").value = gen["topic"]
      $$("class-select").value  = gen["cid"]
       $$("start-time").value= gen["start"]
    $$("end-time").value= gen["end"]
     $$("exam-des").value= gen["des"]
  $$('exam-duration').value = gen["dur"]
  $$('pdfer').innerText = "ALREADY UPLOADED (Only Re-Upload if changes are available)"
  $$("class-select").disabled = true
  dt= gen["url"]


  var ans = examdata["ans"]
  console.log(ans)
  for (let i = 1; i < ans.length; i++) {
    
  $('#botn').click()

}
  function xnx (){

    for (let i = 0; i < ans.length; i++) {


        console.log("Adding Ans")
    
        console.log(ans[i])
  $("[name='group-a["+i+"][inlineRadioOptions]']").removeAttr('checked');

        $("input[name='group-a["+i+"][inlineRadioOptions]'][value=" + ans[i] + "]").prop('checked', 'checked');
      }
  }
xnx()

    }
    
}


function reloadc (){
    var path = "exams/" + $$("class-select").value+ "/"+exid
    const preObject = document.getElementById(path);
// Create References
const dbRefObject = firebase.database().ref().child(path);

// Sync object changes
dbRefObject.on('value', snap => vercel(snap.val()));
}

reloadc()
			
