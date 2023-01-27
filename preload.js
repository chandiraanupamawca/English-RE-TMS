// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  if(location.href.includes("docs.google.com/forms/u")){
    var array = document.getElementsByTagName('a')
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
if(el.innerHTML.includes("branding/product")){
  el.innerHTML ='<a class="gb_je gb_uc gb_he" aria-label="Forms" href="https://docs.google.com/forms/?authuser=0" tabindex="0" title="Forms"><img class="gb_yc gb_5d" src="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/forms_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" style="width:40px;height:40px"><span class="gb_4d gb_1c">Aduruthuma Forms </span></a>'
}
      
    }

  }

  if(location.href.includes("docs.google.com/forms/d")){
function save () {
  var array = document.getElementsByTagName('meta')
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
if(el.outerHTML.includes('og:url')){
publishurl = el.outerHTML.split('"')[3]
}
    
  }
  
}

save()

    function again () {
      var array = document.getElementsByTagName('span')
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
if(el.innerText=="Send"){
  el.innerText ="Save to Aduruthuma"
}
if(el.innerText.includes('Collect emails')){
  el.innerHTML ="<h1><b>Successfully Saved to Aduruthuma LMS.<b></h1>"
}   
    }



    }

    setInterval(again,1000)
  }
  console.log("Ghost")
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
