var $$ = function( id ) { return document.getElementById( id ); };
function restrict(){
  function andthen (stsm){
    st.database().ref("status/"+cid).set({
sts:stsm
    }).then((result) => {
     console.log("Done")
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
      telenot("<b>✅ Class Access Update</b>\n"+ classname+ " is now accessable only by paid students" +"\n<b>Tutor Name:</b> "+localStorage.getItem("nm")+"\n<b>Class ID: </b>"+cid)
      Toast.fire({
        icon: 'success',
        title: 'Class is accessable only by paid students'
      })
    })
}
function uppay (dh){
  if(dh==null){
    Swal.fire(
      'Fill the payment information',
      'You need to tell us the amount and payment methods',
      'warning'
    )
  } else{
      andthen("restrict")

  }
}

var path =   "payset/" + cid +"/rs"
const dbRefObject7822 = st.database().ref().child(path);
  
// Sync object changes
dbRefObject7822.once('value', snap => uppay(snap.val()));
}
function automate(){
  function andthen (stsm){
    st.database().ref("status/"+cid).set({
sts:stsm
    }).then((result) => {
     console.log("Done")
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
      telenot("<b>✅ Class Access Update</b>\n"+ classname+ " is now now in Auto Access mode" +"\n<b>Tutor Name:</b> "+localStorage.getItem("nm")+"\n<b>Class ID: </b>"+cid)
      Toast.fire({
        icon: 'success',
        title: 'Class is now in auto access mode'
      })
    })
}
function uppay (dh){
  if(dh==null){
    Swal.fire(
      'Fill the payment information',
      'You need to tell us the amount and payment methods',
      'warning'
    )
  } else{
      andthen("auto"+"``"+dh["opend"]+"``"+dh["closed"])
  }
}

var path =   "payset/" + cid 
const dbRefObject7822 = st.database().ref().child(path);
  
// Sync object changes
dbRefObject7822.once('value', snap => uppay(snap.val()));
}
function moneyl (){
  location.replace("class-settings.html")
}



function resct(d){
    if(d!=null){
  if(d=="restrict"){
    document.getElementById("Opn").checked = false
    document.getElementById("Atom").checked = false
    document.getElementById("Res").checked = true
  } else{
    if(d=="open"){
      document.getElementById("Opn").checked = true
    document.getElementById("Res").checked = false
    document.getElementById("Atom").checked = false
    } else {
      if(d.includes("auto")){
        document.getElementById("Opn").checked = false
      document.getElementById("Res").checked = false
      document.getElementById("Atom").checked = true
      }
    }
   

  }
    }
}
var path =  "status/"+cid+"/sts"
const preObject00231 = document.getElementById(path);
// Create References
const dbRefObject00231 = st.database().ref().child(path);

// Sync object changes
dbRefObject00231.on('value', snap => resct(snap.val()));;

function openac(){
    st.database().ref("status/"+cid).set({
sts:"open"
    }).then((result) => {
     console.log("Done")
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
      telenot("<b>✅ Class Access Update</b>\n"+ classname+ " is now open for every student." +"\n<b>Tutor Name:</b> "+localStorage.getItem("nm")+"\n<b>Class ID: </b>"+cid)
      
      Toast.fire({
        icon: 'success',
        title: 'Class is now open for every student'
      })
    })
}