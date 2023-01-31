price = 0
function getcid(){
    if(eclass.checked){
        return "*"
    } else {
        return $$('class-select').value
    }
}
function cleara(){
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
            var xhr2 = new XMLHttpRequest();
            url = "https://server-09.lankaedu.tk/clearcc";
           // url = "http://localhost:5000/clearcc";
            xhr2.open("POST", url, true);
            xhr2.setRequestHeader("Content-Type", "application/json");
            xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4 && xhr2.status === 200) {
                Swal.fire({
                    title:"successfully Deleted All the Coupens",
                    icon:"success",
                    text:"Please note that this action can not be undone",
                    showConfirmButton: true,
          
                  })
             
            }}
        
            var  data = JSON.stringify({email:logs.email,pass:atob(getCookie("openjs"))})
            encrypted = CryptoJS.AES.encrypt(data, 'fuck').toString()
            var pushload = JSON.stringify({auth:encrypted})
            xhr2.send(pushload)
        }
      })

 
}
function veri(){
    vb = getcid()
    var xhr2 = new XMLHttpRequest();
url = "https://server-09.lankaedu.tk/ccpen";
 //   url = "http://localhost:5000/ccpen";
    xhr2.open("POST", url, true);
    xhr2.setRequestHeader("Content-Type", "application/json");
    xhr2.onreadystatechange = function () {
    if (xhr2.readyState === 4 && xhr2.status === 203) {
        Swal.fire({
            toast:true,
            html: '<h2 class="text-warning fw-bold">COUPEN CODE </h2> \n <input type="number" id="cppy" class="text-primary fw-bolder form-control" style="font-size:70px;" value="'+ xhr2.responseText +'" disabled>',
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey:false,
            width:"450px",
showConfirmButton:true,
confirmButtonText:"Copy"
          }).then((x)=>{
            copyText = $$('cppy')
            navigator.clipboard.writeText(copyText.value);
          })
     
    }}
    that = JSON.stringify({
        cid:vb ,
        text:$$('gitc').value,
        price:price,
        start: $$('fromDate').value,
        end:$$('exDate').value,
        wt:$$('ewallet').checked
    })
    var  data = JSON.stringify({email:logs.email,pass:atob(getCookie("openjs")),ccpen:that})
    encrypted = CryptoJS.AES.encrypt(data, 'fuck').toString()
    var pushload = JSON.stringify({auth:encrypted})
    xhr2.send(pushload)
}