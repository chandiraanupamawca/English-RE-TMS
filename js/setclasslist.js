var clzdata = JSON.parse(localStorage.getItem("allc"));
    list = ''
	// console.log(clzdata)
	var cids = Object.keys(clzdata)
	for (let c = 0; c < cids.length; c++) {
		const e = cids[c];
		const currentclz = clzdata[e]
		// console.log(currentclz)
        newitem = '<li class="menu-item" href="#" id="' + e + '" onclick="stck(this.id)"><a class="menu-link"><div data-i18n="Without menu">' + currentclz["topic"] + '</div></a></li>'
		list = list + newitem
	}
document.getElementById('ulclz').innerHTML = list

function stck (id3) {
	localStorage.setItem("nclz",id3);
	window.location.href = "class.html"
};