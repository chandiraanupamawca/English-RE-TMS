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
      title: 'MCQ Paper is being uploaded',
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
                             $$('class-select').appendChild(opt);
}}
if(localStorage.getItem("excid")!=null){
    $$('class-select').value = localStorage.getItem('excid')
console.log("existing cid : " +  $$('class-select').value )

}




function gotah () {
    topic =  $$("exam-name").value
apq =  $$("apq").value
cidx =  $$("class-select").value
start =  $$("start-time").value
end =  $$("end-time").value
des =  $$("exam-des").value
cname = $$("class-select").options[$$("class-select").selectedIndex].text
dur = $$('exam-duration').value
console.log(topic , apq, cidx , start , end , des ,cname , dur , dt)
if(topic==''||apq==''||cidx==''||start==''||end==''||des==''||dt==''||dur==''&&Object.keys(getFormData($('#mcqan'))).length>0){
    Swal.fire({
        icon: 'error',
        title: 'Form Incomplete',
        text: 'Please fill out all the fileds in Create MCQ & MCQ Answers!',
      })
} else{
 takeoff = []
var nm = Object.keys(getFormData($('#mcqan')))
    for (let i = 0; i < nm.length; i++) {
        const e = nm[i];
        var elm = getFormData($('#mcqan'))[e]
        takeoff.push(elm)
     
    }

   firebase.database().ref(   "exams/" + $$("class-select").value + "/"+ exid +"/gen" ).update({
      topic: topic,
   cid: cidx,
   start:start,
    end:end,
    cname:cname,
    dur:dur,
    des:des,
    url : dt,
    apq: apq,
    type:"MCQ",
    length: takeoff.length

  }).then ((x)=>{
    firebase.database().ref(   "exams/" + $$("class-select").value + "/"+ exid +"/ans" ).set(takeoff).then(    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'MCQ Paper has been saved',
        showConfirmButton: false,
        timer: 1500
      }).then((x)=>{
        localStorage.setItem("exid",exid)
    localStorage.setItem("excid",$$("class-select").value)
        location.reload()
      }
        
      )
      )
  })





}
}
if($$("publish-exam")){
$$("publish-exam").onclick= function (){gotah()}}


function vercel (anushka) {
    if (anushka==null){
        console.log("new mcq")
      
    } else {
        console.log(anushka)

        var gen = anushka["gen"]
        $$("exam-name").value = gen["topic"]
        $$("apq").value= gen["apq"]
      $$("class-select").value  = gen["cid"]
       $$("start-time").value= gen["start"]
    $$("end-time").value= gen["end"]
     $$("exam-des").value= gen["des"]
  $$('exam-duration').value = gen["dur"]
  $$('pdfer').innerText = "ALREADY UPLOADED (Only Re-Upload if changes are available)"
  $$("class-select").disabled = true
  dt= gen["url"]


  var ans = anushka["ans"]
  console.log(ans)
  for (let i = 1; i < ans.length; i++) {
    
  $('#botn').click()

}
  function xnx (){

    for (let i = 0; i < ans.length; i++) {


        console.log("addinh ans")
    
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
			
