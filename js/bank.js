var $$ = function( id ) { return document.getElementById( id ); };

$$("bank").onclick = function (){
    console.log("running")
   var bank =  $$("bank-list").value
   var accname =  $$("bnk-acc-name").value
   var accno =  $$("bnk-acc-number").value
   var branch =  $$("bnk-acc-branch").value

   if(bank=!'Select Bank'||accname==''||accno==''||branch==''){
    Swal.fire(
        'Form Incomplete',
        'Please fill all the fields before submission',
        'warning'
      )
   } else {
    firebase.database().ref( "bank/" + pn).set({
        bank : $$("bank-list").value,
        accname : accname,
        accno: accno,
        branch : branch
    }).then((result) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bank Settings Updated',
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            location.reload()
          })

    })
   }
}

function bank (d){
    x =d
    console.log(d)
 $$("bank-list").value = d["bank"]
  $$("bnk-acc-name").value =  d["accname"]
     $$("bnk-acc-number").value = d["accno"]
 $$("bnk-acc-branch").value = d["branch"]
 
}

var path =   "/bank/" + pn
const preObject00235 = document.getElementById(path);
// Create References
const dbRefObject00235 = firebase.database().ref().child(path);

// Sync object changes
dbRefObject00235.on('value', snap => bank(snap.val()))