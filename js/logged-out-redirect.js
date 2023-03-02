var getcurrentuser = localStorage.getItem("nm")
console.log(getcurrentuser)
if (getcurrentuser) {
    //
} else {
    location.replace("admin/login.html")
}