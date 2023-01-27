function telenot (text){
    var xhr2 = new XMLHttpRequest();
    var url2 ="https://api.telegram.org/bot5977867332:AAFz8bGw2pTuGZlgwYMaFA2UKAO451dL6pY/sendMessage";
    xhr2.open("POST", url2, true);
    xhr2.setRequestHeader("Content-Type", "application/json");
    
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
    console.log(JSON.parse(xhr2.response))
    
        }}
        var data = JSON.stringify({ chat_id: -1001682384010,parse_mode:"HTML", text });
        xhr2.send(data);
  }