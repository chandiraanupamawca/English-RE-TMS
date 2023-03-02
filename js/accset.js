var $$ = function( id ) { return document.getElementById( id ); };
baseurl = "https://zoom.englishre.xyz"


function authinfo(s){




if(s!=null){
    var option = document.createElement("option");
    var option2 = document.createElement("option");
option.text = s["main"]["name"]
option2.text = s["rec"]["name"]

option.value = s["main"]["id"]
option2.value = s["rec"]["id"]
$$("rec-auth-acc1").add(option);
$$("rec-auth-acc2").add(option2);
    $$("accid").value=s["accid"]
var ex = atob(s["auth"])
console.log(s,ex)
$$("accauthi").value=ex.split(":")[0]
sec = ex.split(":")[1];
var str2 = sec.slice(0, -5) + '*****';
$$("accauths").value=str2
} else {

}


}
var path2= "zoomauth/"+pn
const dbRefObject22 = firebase.database().ref().child(path2);
// Sync object changes
dbRefObject22.on('value', snap => authinfo(snap.val()));




function loadl(){
        if($$("accauths").value.includes("****")){
var  secret = sec
        } else {
            var  secret = $$("accauths").value  
        }
    bsix = btoa($$("accauthi").value+":"+secret)
    var xhr533 = new XMLHttpRequest();
    var url2 = baseurl +"/oauth/token?grant_type=account_credentials&account_id="+$$("accid").value;
    xhr533.open("POST", url2, true);
    xhr533.setRequestHeader("Content-Type", "application/json");
    
    xhr533.setRequestHeader("Authorization","Basic " +bsix);
    xhr533.onreadystatechange = function () {
        if (xhr533.readyState === 4 && xhr533.status === 200) {
            tkna = JSON.parse(xhr533.responseText)["access_token"]
            firebase.database().ref( "zoomauth/temp/" + pn).set({tk:tkna , tm:Math.floor(new Date().getTime() / 1000)})
            var xhr5331 = new XMLHttpRequest();
            var url2 = baseurl+"/v2/users";
            xhr5331.open("GET", url2, true);
            xhr5331.setRequestHeader("Content-Type", "application/json");
            
            xhr5331.setRequestHeader("Authorization","Bearer " +tkna);
            xhr5331.onreadystatechange = function () {
                if (xhr5331.readyState === 4 && xhr5331.status === 200) {
            localStorage.setItem("acclist",xhr5331.response)
        console.log(xhr5331.response)
        list = JSON.parse(localStorage.getItem("acclist"))["users"]
        function removeOptions(selectElement) {
            var i, L = selectElement.options.length - 1;
            for(i = L; i >= 0; i--) {
               selectElement.remove(i);
            }
         }
         $$("accauthi").disabled = true
         $$("accauths").disabled = true
         $$("accid").disabled = true
         removeOptions($$("rec-auth-acc1"))
         removeOptions($$("rec-auth-acc2"))
    var option = document.createElement("option");
    option.text = "Set Later";
option.value = 0
$$("rec-auth-acc2").add(option);
for (let i = 0; i < list.length; i++) {
    var option = document.createElement("option");
    var option2 = document.createElement("option");
option.text = list[i]["first_name"]+" "+list[i]["last_name"];
option2.text = list[i]["first_name"]+" "+list[i]["last_name"];

option.value = list[i]["id"]
option2.value = list[i]["id"]
$$("rec-auth-acc1").add(option);
$$("rec-auth-acc2").add(option2);
$$("rec-auth-acc1").disabled = false
$$("rec-auth-acc2").disabled = false
}

        }}
            var data = JSON.stringify();
            xhr5331.send(data);
} else if (xhr533.readyState === 4 && xhr533.status === 401){
    Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        text: 'Invalid Client ID or Client Secret',
      })
}

} 
xhr533.send();

}

$$("acl").onclick = function(){loadl()}

function testauth(){

}

$$("submit").onclick = function(){
    if($$("accauthi").disabled){
        if($$("accauths").value.includes("****")){
var  secret = sec
        } else {
            var  secret = $$("accauths").value  
        }
        firebase.database().ref("zoomauth/"+pn).update({
            accid:$$("accid").value,
            auth:bsix
        })
        firebase.database().ref("zoomauth/"+pn+"/main").update({
            id:$$("rec-auth-acc1").value,
            name:$$("rec-auth-acc1").options[$$("rec-auth-acc1").selectedIndex].text
        })
        firebase.database().ref("zoomauth/"+pn+"/rec").update({
            id:$$("rec-auth-acc2").value,
            name:$$("rec-auth-acc2").options[$$("rec-auth-acc2").selectedIndex].text
        }).then((result) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Zoom Settings Updated',
                showConfirmButton: false,
                timer: 1500
              }).then((result) => {
                location.reload()
              })

        })
    } else{
        Swal.fire(
            'No zoom Account Selected',
            'Please refresh account list and select the required zoom account',
            'warning'
          )
    }
}
