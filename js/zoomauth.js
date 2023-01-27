
pn = localStorage.getItem("em")
baseurl = "https://zoom.us"
function cn(){
  var xhr55 = new XMLHttpRequest();
var url ="https://server-01.lankaedu.tk/tk";
xhr55.open("POST", url, true);
xhr55.setRequestHeader("Content-Type", "application/json");
xhr55.onreadystatechange = function () {
    if (xhr55.readyState === 4 && xhr55.status === 200) {
getu(xhr55.responseText)
    }}
    var data = JSON.stringify({pn:localStorage.getItem("em")});
    xhr55.send(data);
}
//Auth
function getu (tk){
    console.log(tk)
    tkna=tk;
    var xhr533 = new XMLHttpRequest();
    var url2 =baseurl + "/v2/users";
    xhr533.open("GET", url2, true);
    xhr533.setRequestHeader("Content-Type", "application/json");
    
    xhr533.setRequestHeader("Authorization","Bearer " +tkna);
    xhr533.onreadystatechange = function () {
        if (xhr533.readyState === 4 && xhr533.status === 200) {
    ii=JSON.parse(xhr533.response);
    usid=userid;

if ( location.href.includes("class")){
  fetchr ();
}
if ( location.href.includes("reports")){
  getall (moment().subtract(29, 'days').format('YYYY-MM-DD'),moment().format('YYYY-MM-DD'));
}

    if(location.href.includes("class")==true){
document.getElementById("sss").innerHTML="    <button id='start11' onclick='openmeet()' class='btn btn-dark '><span><i class='bx bx-camera-movie' ></i></span> Start</button><span id='123'> <button  onclick='mergef()' class='btn btn-dark disabled'><span><i class='bx bx-edit' ></i></span> Merge Class</button></span>  <span id='link2'><button class='btn btn-secondary'><span><i class='bx bx-link' ></i></span> Get Link</button></span>"}
if(location.href.includes("/index")==true){
  document.getElementById("ss").innerHTML='<button  href="javascript:;" id="zumin" onclick="zzz()"  class="btn btn-sm btn-outline-primary">Start Personal Meeting Room</button>'

}

        } else{
          if (xhr533.readyState === 4 && xhr533.status === 401) {
            cn()
          }
        }
      
      };
        var data = JSON.stringify();
        xhr533.send(data);
}
function acc (d) {

   
  


    console.log(d)
    if(d!=null){
    if(d["temp"][pn]=="null"){
        cn();
    } else{
      xx = d["temp"][pn]
      if(xx!=null){
      console.log(xx["tm"])
      if(3500>(Math.floor(new Date().getTime() / 1000)-xx["tm"])){
      getu(xx["tk"])} else {
        cn();
      }
      } else{
        cn();
      }
    }
  userid = d[pn]["main"]["id"]
  zoomname =   d[pn]["main"]["name"]
  }
}



// Start Button Functions
var path =   "/zoomauth/" 
const preObject0023 = document.getElementById(path);
// Create References
const dbRefObject0023 = firebase.database().ref().child(path);

// Sync object changes
dbRefObject0023.on('value', snap => acc(snap.val()));;


//Out variable
//  account id - accid
//userid - usid
// acc tkn - tkna
//pmi