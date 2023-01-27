var $$ = function( id ) { return document.getElementById( id ); };
 var nn=JSON.parse(localStorage.getItem("allc"))
for (var i = 0; i< Object.keys(nn).length; i++){
    if(nn[Object.keys(nn)[i]]!=null){
        var tid = Object.keys(nn)[i]
        var tnmm = nn[Object.keys(nn)[i]]["topic"]
        var opt = document.createElement('option');
                                   opt.value = tid ;
                                   opt.innerHTML =  tnmm;
                                   $$('class-select').appendChild(opt);
    }

}

function vercel(woo){
    Swal.close()
    $$('actual').innerHTML =    document.getElementsByClassName('thatz')[0].outerHTML
if(woo!=null){
   
    $(".thatz")[1].style.display = ''
    
     var keys = Object.keys(woo)
     for (let i = 0; i < keys.length; i++) {
        console.log("adding new ex")
        const z = keys[i];
        const e = woo[z]
        console.log(e)
        clzcd = $$("tia")
        clone = clzcd.cloneNode(true);
         cos = e["gen"]
         console.log(cos)
         $(".thatz")[1].appendChild(clone);
    k = i+2
    document.getElementsByClassName("tia")[k].style.display = ''
    document.getElementsByClassName("extitle")[k].innerText = cos["topic"]
    document.getElementsByClassName("exclz")[k].innerText = cos["cname"]
    document.getElementsByClassName("exstart")[k].innerText =moment( cos["start"]).local().format("YYYY/MM/DD hh:mm")
    document.getElementsByClassName("exend")[k].innerText =moment( cos["end"]).local().format("YYYY/MM/DD hh:mm")
    document.getElementsByClassName("exdur")[k].innerText = cos["dur"]+ " mins"
    document.getElementsByClassName("extype")[k].innerText = cos["type"]
    document.getElementsByClassName("exdes")[k].innerText = cos["des"] 
    document.getElementsByClassName("exid")[k].innerText = z
    document.getElementsByClassName("exopen")[k].scc = cos["url"]
    document.getElementsByClassName("exopen")[k].onclick = function(){window.open(this.scc,'targetWindow','toolbar=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=900,height=600')}
    document.getElementsByClassName("exedit")[k].z = z
    document.getElementsByClassName("exedit")[k].cid = cos["cid"]
    document.getElementsByClassName("exedit")[k].onclick = function(){localStorage.setItem("exid",this.z)
    localStorage.setItem("excid",this.cid)
    location.replace('create-mcq.html')
}
document.getElementsByClassName("exdel")[k].cid = cos["cid"]
document.getElementsByClassName("exdel")[k].z = z
document.getElementsByClassName("exdel")[k].topic =  cos["topic"]
document.getElementsByClassName("exdel")[k].onclick = function (){
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
            firebase.database().ref("exams/" +this.cid +"/"+this.z).set({}).then((x)=>{
                Swal.fire(
                    'Deleted!',
                 this.topic +' has been deleted.',
                    'success'
                  )
            })
        }
      })
}

document.getElementsByClassName("exdown")[k].cid = cos["cid"]
document.getElementsByClassName("exdown")[k].z = z
document.getElementsByClassName("exdown")[k].topic =  cos["topic"]
document.getElementsByClassName("exdown")[k].onclick = function (){
    Swal.fire({
        title: 'Are you sure to Pull Down',
        text: "You can re-publish anytime by publish option",
        icon: 'warning',
       
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Pull Down!'
      }).then((result) => {
        if (result.isConfirmed) {
            firebase.database().ref("exams/" +this.cid +"/"+this.z+"/gen").update({
                pub:"Pulled Down!"
            }).then((x)=>{
                st.database().ref("exams/" +this.cid +"/"+this.z).set({}).then((x)=>{
                    Swal.fire(
                        'Unpublished!',
                     this.topic +' has been unpublished.',
                        'success'
                      )
                })
            })
     
        }
      })
}
if(cos["pub"]==undefined){
    document.getElementsByClassName("pubtime")[k].innerText = "UNPUBLISHED"

} else  {
    document.getElementsByClassName("pubtime")[k].innerText = cos["pub"] 

}
document.getElementsByClassName("expub")[k].cos = JSON.stringify(cos)
document.getElementsByClassName("expub")[k].onclick = function (){
var cos  = JSON.parse(this.cos)

    Swal.fire({
        title: 'The changes you made will be published!',
        text: "The exam will be live on the time that you've set in the exam settings & automatically expired on expiry time.",
        icon: 'warning',
       
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Publish it!'
      }).then((result) => {
        if (result.isConfirmed) {
            firebase.database().ref("exams/" + cos["cid"] +"/"+z + "/gen").update({
                pub:moment().format("YYYY-MM-DD hh:mm:ss a")
            }).then((x)=>{
             
                console.log(  cos["url"])
                cos["url"] =   CryptoJS.AES.encrypt(cos["url"], "p0jV622@$irJ").toString();
                console.log(  cos["url"])
                st.database().ref("exams/" + cos["cid"] +"/"+z).set(cos).then((x)=>{
                    Swal.fire(
                        'Published!',
                        cos ["topic"]+' has been successfully published.',
                        'success'
                      )
                })
              
            })
        }
      })
}
cos = null
     }
} else {
    Swal.fire({
        title: "<b >"+ "<span class='text-primary'>No exams found !</span>"+"<b>",
        text: "Get Started by adding MCQ & Essay Exams. Plus Enjoy fully custamizable settings to improve your examination experience with quality exam reports and On-Screen Markings",
        imageUrl: 'assets/img/illustrations/girl-doing-yoga-light.png',
        imageAlt: 'A tall image',
        showConfirmButton: false,
        showDenyButton:true,
        toast:true,
        denyButtonText: `Try It on Aduruthuma Premium!👑`,
        showCloseButton: true
      })
}
    }
    
function weget (){
    var path = "exams/" + $$("class-select").value
    const dbRefObjectzs = firebase.database().ref().child(path);
    
    // Sync object changes
    dbRefObjectzs.on('value', snap => vercel(snap.val()));
}
weget()