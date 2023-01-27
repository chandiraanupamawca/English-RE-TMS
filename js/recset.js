var $$ = function( id ) { return document.getElementById( id ); };

function recset (){
    if($$('auto-rec-update').value!=''&&$$('rec-auto-date').value!=''&&$$('rec-security').value!=''&&$$('rec-play-times').value!=''){
        console.log("updating")
        firebase.database().ref("recset/"+$$('class-select').value+"/").set({
            auto:$$('auto-rec-update').value,
            days:$$('rec-auto-date').value,
            sec:$$('rec-security').value,
            times:$$('rec-play-times').value
        }).then((x)=>{
            Swal.fire(
                'Recording Settings Updated',
                'Auto updated recordings can be further edited in the class settings => Class Recordings.',
                'success'
              )    
        })
    } else {
        Swal.fire(
            'Form Incomplete',
            'Please fill recording auto complete infomation',
            'warning'
          )
    }
   
}

function recse(dval){
    if(dval!=null){
        $$('auto-rec-update').value = dval["auto"]
        $$('rec-auto-date').value = dval["days"]
        $$('rec-security').value = dval["sec"]
        $$('rec-play-times').value = dval["times"]
    } else{
        $$('auto-rec-update').value = ''
        $$('rec-auto-date').value = ''
        $$('rec-security').value = ''
        $$('rec-play-times').value = ''
    }
}

function vdf (){
    var path = "recset/"+$$('class-select').value+"/"
const preObject89 = document.getElementById(path);
// Create References
const dbRefObject89 = firebase.database().ref().child(path);

// Sync object changes
dbRefObject89.on('value', snap => recse(snap.val()));
}
vdf()