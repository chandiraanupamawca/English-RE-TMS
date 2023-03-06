function refen(){
      enload(allpaydata)
      console.log("Reloaded for "+ $$('enlist').value)

}

function manen (result,xz,password){
      if (result.isConfirmed) {
            Swal.fire({
                  title: 'Enrolling new student!',
                  html: 'Updating Database in <b></b> milliseconds.',
                  timer: 3000,
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
                const email = xz["pn"]+"@englishre.xyz"; // Replace with the user's email address
                const url = "https://server-09.englishre.xyz/getuserid"; // Replace with the server URL
                const xhr = new XMLHttpRequest();
                xhr.open("POST", url);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = () => {
                      if (xhr.status === 200) {
                            uid = xhr.responseText
                            st.database().ref("enroll/"+uid+"/"+cid+"/"+$$('enlist').value).update({
                              pay:"ok",
                        ts:Math.floor(Date.now() / 1000),
                        md:"Teacher",
                        fee:clzfeeam.toString(),
                        cid:cid,
                        cname:classname,
                        mid:$$('enlist').value,
                        sid:password,
                        stname:xz["fn"]+" "+xz["ln"],
                        tname:localStorage.nm,
                        uid:uid
                        
                        }).then((mm)=>{
                        firebase.database().ref("pay/"+cid+"/"+password+"/"+$$('enlist').value).update({
                              pay:"ok",
                        ts:Math.floor(Date.now() / 1000),
                        md:"Teacher",
                        fee:clzfeeam.toString(),
                        cid:cid,
                        cname:classname,
                        mid:$$('enlist').value,
                        sid:password,
                        stname:xz["fn"]+" "+xz["ln"],
                        tname:localStorage.nm,
                        uid:uid
                        }).then((mm)=>{
                        
                        Swal.fire(
                              'Enrolled!',
                              "A new payment for the Student ID: <b>"+ "RE"+("000" + password ).slice(-4) + "</b> has been done for the month of <b>"+ $$('enlist').value+"</b>" ,
                              'success'
                            )
                            telenot(  "✅ A new payment for the Student ID: <b>"+ "RE"+("000" + password ).slice(-4) + "</b> has been done for the month of <b>"+ $$('enlist').value+"</b>"+"\nBy "+localStorage.nm)
                        })})
                          
                          .catch((error) => {
                            console.log('Error fetching user data:', error);
                            alert('Error fetching user data:', error)
                          });
                        } else {
                              Swal.fire({
                                    icon: 'error',
                                    title: 'An Error Occured!',
                                    text: xhr.statusText
                              })
                        }
                  };
                  xhr.onerror = () => {
                        console.error(xhr.statusText);
                  };
                  xhr.send(JSON.stringify({ email }));
      }
}
async function enrollstx () {
      const { value: password } = await Swal.fire({
            title: 'Enter the student ID',
            showCancelButton:true,
            input: 'number',
            inputLabel: 'Student ID without RE & leading zeros',
            inputPlaceholder: '0000',
            inputAttributes: {
              maxlength: 4,
              autocapitalize: 'off',
              autocorrect: 'off'
            }
          })
          
          if (password) {
            function vi(xz){
if(xz!=null){
                  console.log(xz)
                  if(xz["dp"]!=null&&xz["dp"]!="none"){
                  Swal.fire({
                 title:"Verify the student",
                        html:
                         '<img style="height:100px" class="rounded" src="'+xz["dp"]+'"><br>'+
                         '<span style="font-size:30px" class="text-primary fw-bold">'+xz["fn"]+" "+xz["ln"]+' </span><br><br>'+
                         '<div style="text-align:left"><span class="text-primary fw-bold">Phone Number: </span>'+
                         '<span >'+xz["pn"]+'<span><br>'+
                         '<span class="text-primary fw-bold">Study Year: </span>'+
                         '<span >'+xz["yr"]+'<span><br>'+
                         '<span class="text-primary fw-bold">WhatsApp Number: </span>'+
                         '<span >'+xz["wa"]+'<span><br>'+
                         '<span class="text-primary fw-bold">Address: </span>'+
                         '<span >'+xz["ad"]+'<span><br>'+
                         '<span class="text-primary fw-bold">Birthday: </span>'+
                         '<span >'+xz["bd"]+'<span><br>'+
                         '<span class="text-primary fw-bold">Email: </span>'+
                         '<span >'+xz["em"]+'<span><br></div>'
                         
                         
                         ,
                         confirmButtonText:"Yes, Enroll!",
                         showCancelButton:true,
                        footer: '<a href="tel:0787134053">Want more info?</a>'
                      }).then((result) => {
                      
                        manen(result,xz,password)
                      }) 
            } else {
                  Swal.fire({
                        title:"Verify the student",
                 icon: "info",
                        html:
                         '<span style="font-size:30px" class="text-primary fw-bold">'+xz["fn"]+" "+xz["ln"]+' </span><br><br>'+
                         '<div style="text-align:left"><span class="text-primary fw-bold">Phone Number: </span>'+
                         '<span >'+xz["pn"]+'<span><br>'+
                         '<span class="text-primary fw-bold">Study Year: </span>'+
                         '<span >'+xz["yr"]+'<span><br>'+
                         '<span class="text-primary fw-bold">WhatsApp Number: </span>'+
                         '<span >'+xz["wa"]+'<span><br>'+
                         '<span class="text-primary fw-bold">Address: </span>'+
                         '<span >'+xz["ad"]+'<span><br>'+
                         '<span class="text-primary fw-bold">Birthday: </span>'+
                         '<span >'+xz["bd"]+'<span><br>'+
                         '<span class="text-primary fw-bold">Email: </span>'+
                         '<span >'+xz["em"]+'<span><br></div>'
                         
                         
                         ,
                         confirmButtonText:"Yes, Enroll!",
                         showCancelButton:true,
                        footer: '<a href="tel:0787134053">Want more info?</a>'
                      }).then((result) => {
                        let timerInterval

                        manen(result,xz,password)
                      }) 
            }
            
            }else{
                  Swal.fire(
                        'Invalid ID',
                        'Please re-check the id & submit again',
                        'error'
                      )
            }
      
      }
            
            path = "students/"+password+"/"
            const dbRefObjectas = firebase.database().ref().child(path);
                  
            // Sync object changes
            dbRefObjectas.once('value', snap => vi(snap.val()));
          }
}

totalin = 0
function deletes  (zx){
      cid = zx.split("|||")[0]
      uid= zx.split("|||")[1]
      mid= zx.split("|||")[2]
      sid= zx.split("|||")[3]
      Swal.fire({
            title: 'Are you sure?',
            html: "All the payment records of the Student ID: <b>"+ "RE"+("000" + sid ).slice(-4) + "</b> will be deleted permanently deleted for the class id "+ cid +": "+ classname+" by this action.",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove!'
          }).then((result) => {
            if (result.isConfirmed) {

                  st.database().ref("enroll/"+uid+"/"+cid+"/").set({}).then((m)=>{
                        firebase.database().ref("pay/"+cid+"/"+sid+"/").set({}).then((m)=>{
                              Swal.fire(
                                    'Student Removed!',
                                    "Student ID: <b>"+ "RE"+("000" + sid ).slice(-4) + "</b> has been permanently removed from the class id <b>"+ cid +": "+ classname+"</b>" ,
                                    'success'
                                  )
                                  telenot(  "⚠️ Student ID: <b>"+ "RE"+("000" + sid ).slice(-4) + "</b> has been permanently removed from the class id <b>"+ cid +": "+ classname+"</b>"+"\nBy "+localStorage.nm)
                        })
                  })
            }})
}
function regain (zx){
      cid = zx.split("|||")[0]
      uid= zx.split("|||")[1]
      mid= zx.split("|||")[2]
      sid= zx.split("|||")[3]

      Swal.fire({
            title: 'Are you sure?',
            html: "A new payment for the Student ID: <b>"+ "RE"+("000" + sid ).slice(-4) + "</b> will be done for the month of <b>"+ $$('enlist').value,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Enroll!'
          }).then((result) => {
            if (result.isConfirmed) {
                  st.database().ref("enroll/"+uid+"/"+cid+"/"+$$('enlist').value).update({
                        pay:"ok",
ts:Math.floor(Date.now() / 1000),
md:"Teacher",
fee:clzfeeam.toString()
                  }).then((mm)=>{
              firebase.database().ref("pay/"+cid+"/"+sid+"/"+$$('enlist').value).update({
pay:"ok",
ts:Math.floor(Date.now() / 1000),
md:"Teacher",
fee:clzfeeam.toString()
              }).then((mm)=>{
                  
                  Swal.fire(
                        'Enrolled!',
                        "A new payment for the Student ID: <b>"+ "RE"+("000" + sid ).slice(-4) + "</b> has been done for the month of <b>"+ $$('enlist').value+"</b>" ,
                        'success'
                      )
                      telenot(  "✅ A new payment for the Student ID: <b>"+ "RE"+("000" + sid ).slice(-4) + "</b> has been done for the month of <b>"+ $$('enlist').value+"</b>"+"\nBy "+localStorage.nm)
              })})



            }
          })
}

function expires (zx){
      cid = zx.split("|||")[0]
      uid= zx.split("|||")[1]
      mid= zx.split("|||")[2]
      sid= zx.split("|||")[3]

      Swal.fire({
            title: 'Are you sure?',
            html: "The payment of the Student ID: <b>"+ "RE"+("000" + sid ).slice(-4) + "</b> done for the month of <b>"+ $$('enlist').value +"</b> will be rejected by this action",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Expire it!'
          }).then((result) => {
            if (result.isConfirmed) {
                  st.database().ref("enroll/"+uid+"/"+cid+"/"+$$('enlist').value).update({
                        pay:"no"
                                      }).then((mm)=>{
                                          firebase.database().ref("pay/"+cid+"/"+sid+"/"+$$('enlist').value).update({
                                                pay:"no"
                                                              }).then((mm)=>{
                                                                  Swal.fire(
                                                                        'Expired!',
                                                                        "The payment of the Student ID: <b>"+ "RE"+("000" + sid ).slice(-4) + "</b> done for the month of <b>"+ $$('enlist').value +"</b> has been rejected successfully",
                                                                        'success'
                                                                      )
                      telenot(   "🔴 The payment of the Student ID: <b>"+ "RE"+("000" + sid ).slice(-4) + "</b> done for the month of <b>"+ $$('enlist').value +"</b> has been rejected successfully"+"\nBy "+localStorage.nm)

                                                              })
                                      })

          
            }
          })
}

function views (zx){
      cid = zx.split("|||")[0]
      uid= zx.split("|||")[1]
      mid= zx.split("|||")[2]
      sid= zx.split("|||")[3]
console.log(cid,uid,sid,mid)
function vi(xz){
      console.log(xz)
      if(xz["dp"]!=null&&xz["dp"]!="none"){
      Swal.fire({
     
            html:
             '<img style="height:100px" class="rounded" src="'+xz["dp"]+'"><br>'+
             '<span style="font-size:30px" class="text-primary fw-bold">'+xz["fn"]+" "+xz["ln"]+' </span><br><br>'+
             '<div style="text-align:left"><span class="text-primary fw-bold">Phone Number: </span>'+
             '<span >'+xz["pn"]+'<span><br>'+
             '<span class="text-primary fw-bold">Study Year: </span>'+
             '<span >'+xz["yr"]+'<span><br>'+
             '<span class="text-primary fw-bold">WhatsApp Number: </span>'+
             '<span >'+xz["wa"]+'<span><br>'+
             '<span class="text-primary fw-bold">Address: </span>'+
             '<span >'+xz["ad"]+'<span><br>'+
             '<span class="text-primary fw-bold">Birthday: </span>'+
             '<span >'+xz["bd"]+'<span><br>'+
             '<span class="text-primary fw-bold">Email: </span>'+
             '<span >'+xz["em"]+'<span><br></div>'
             
             
             ,
            footer: '<a href="tel:0787134053">Want more info?</a>'
          })
} else {
      Swal.fire({
     icon: "info",
            html:
             '<span style="font-size:30px" class="text-primary fw-bold">'+xz["fn"]+" "+xz["ln"]+' </span><br><br>'+
             '<div style="text-align:left"><span class="text-primary fw-bold">Phone Number: </span>'+
             '<span >'+xz["pn"]+'<span><br>'+
             '<span class="text-primary fw-bold">Study Year: </span>'+
             '<span >'+xz["yr"]+'<span><br>'+
             '<span class="text-primary fw-bold">WhatsApp Number: </span>'+
             '<span >'+xz["wa"]+'<span><br>'+
             '<span class="text-primary fw-bold">Address: </span>'+
             '<span >'+xz["ad"]+'<span><br>'+
             '<span class="text-primary fw-bold">Birthday: </span>'+
             '<span >'+xz["bd"]+'<span><br>'+
             '<span class="text-primary fw-bold">Email: </span>'+
             '<span >'+xz["em"]+'<span><br></div>'
             
             
             ,
            footer: '<a href="tel:0787134053">Want more info?</a>'
          })   
}

}

path = "students/"+sid+"/"
const dbRefObjectas = firebase.database().ref().child(path);
      
// Sync object changes
dbRefObjectas.once('value', snap => vi(snap.val()));

}
function enload (dt){
   

      allpaydata = dt
totalin = 0

      if(dt!=null){
      var tl = document.getElementById("enst").rows.length;
      for (let i = 0; i < tl-1; i++) {
        document.getElementById("enst").deleteRow(-1);}
        enst = $$('enst')
        function timeConverter(UNIX_timestamp){
              var a = new Date(UNIX_timestamp * 1000);
              var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
              var year = a.getFullYear();
              var month = months[a.getMonth()];
              var date = a.getDate();
              var hour = a.getHours();
              var min = a.getMinutes();
              var sec = a.getSeconds();
              var time = date + ' ' + month  + ' ' + hour + ':' + min  ;
              return time;
            }
  function getst(inp) {
        if(inp=='ok'){
              return "ENROLLED"
        } else {
              return "EXPIRED"
        }
  }
  
  arr = Object.keys(dt)
  mn = $$('enlist').value
  $$('stenc').innerText = arr.length
  localStorage.setItem("count"+cid,arr.length)
  
  
  
  // Sync object changes
        for (let x = 0; x < arr.length; x++) {
          const y = arr[x];
          const e = dt[y][mn]
  console.log(e)
  if(e!=null){
        
        var row2 = enst.insertRow(-1);
        var cell11 = row2.insertCell(0);
        var cell22 = row2.insertCell(1);
        var cell33 = row2.insertCell(2);
        var cell44 = row2.insertCell(3);
        var cell55 = row2.insertCell(4);
        var cell66 = row2.insertCell(5);
        var cell77 = row2.insertCell(6);
        var cell88 = row2.insertCell(7);
  
  
  
        cell11.innerHTML = "<b>"+e["stname"]+"</b>"
        cell22.innerHTML =  "RE"+("000" + e["sid"] ).slice(-4)
        cell33.innerHTML = '<span id="ttt" class="badge bg-label-primary rounded-pill">' + e["md"]+'</span>'
        cell44.innerHTML  =  timeConverter(e["ts"])
        if(e["pay"]=='ok'){
        cell55.innerHTML = '<span id="ttt" class="badge bg-label-success rounded-pill">' +getst(e["pay"])+'</span>'
        cell77.innerHTML = '	<button type="button" id="'+cid+"|||"+e["uid"]+"|||"+mn+"|||"+e["sid"]+'" onclick="expires(this.id)" class="btn btn-sm rounded-pill btn-dark">	<span><i class="bx bx-time-five"></i></span>&nbsp; Expire	</button>'

      } else{
              cell55.innerHTML = '<span id="ttt" class="badge bg-label-danger rounded-pill">' +getst(e["pay"])+'</span>'
        cell77.innerHTML = '	<button type="button" id="'+cid+"|||"+e["uid"]+"|||"+mn+"|||"+e["sid"]+'" onclick="regain(this.id)" class="btn btn-sm rounded-pill btn-dark">	<span><i class="bx bx-exit"></i></span>&nbsp; Enroll	</button>'

        }
        cell66.innerHTML = '	<button type="button" id="'+cid+"|||"+e["uid"]+"|||"+mn+"|||"+e["sid"]+'" onclick="views(this.id)" class="btn btn-sm rounded-pill btn-primary">	<span><i class="bx bx-play"></i></span>&nbsp;Info	</button>'
        cell88.innerHTML = '	<button type="button" id="'+cid+"|||"+e["uid"]+"|||"+mn+"|||"+e["sid"]+'" onclick="deletes(this.id)" class="btn btn-sm rounded-pill btn-danger">	<span><i class="bx bx-time-five"></i></span>&nbsp; Remove	</button>'
        if(e["pay"]=='ok'){
  if(e["md"]=='slips'){
      totalin =parseInt(totalin)+parseInt( e["fee"])
      $$('approx').innerText = totalin

  } else {
      if((e["fee"]).toString().includes(".")){
            totalin = parseInt(totalin) + parseInt(clzfeeam)
            $$('approx').innerText = totalin
      }
  }}
  $$('approx').innerText = totalin
  }
        }}
     
        tablex.remove();
    
        tablex = TableExport(document.getElementById("enst"));
   
         document.getElementsByClassName('button-default txt')[0].className = 'btn btn-sm btn-primary'
         document.getElementsByClassName('button-default xlsx')[0].className = 'btn btn-sm btn-primary'
        document.getElementsByClassName('button-default csv')[0].style.marginLeft = "10px";
        document.getElementsByClassName('button-default csv')[0].style.marginRight = "10px";
        document.getElementsByClassName('button-default csv')[0].className = 'btn btn-sm btn-primary'
  }

function getdee (amt){
      console.log(amt)
clzfeeam = parseInt(amt)
      var path = "pay/"+cid
      const preObjectzxzxz = document.getElementById(path);
      // Create References
      const dbRefObjectzxzxz = firebase.database().ref().child(path);
      
      // Sync object changes
      dbRefObjectzxzxz.on('value', snap => enload(snap.val()));
}

var path = "payset/"+cid+"/rs"
const preObjectzxzxx = document.getElementById(path);
// Create References
const dbRefObjectzxzxx = st.database().ref().child(path);
dbRefObjectzxzxx.once('value', snap => getdee(snap.val()))

