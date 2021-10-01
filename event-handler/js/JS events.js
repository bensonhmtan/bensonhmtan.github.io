function tranformUppercase(_val){
    return _val.toUpperCase();
}

let e1NamaPengguna = document.getElementById("namaPengguna")
e1NamaPengguna.addEventListener("keyup",function(){
    e1NamaPengguna.value = tranformUppercase(e1NamaPengguna.value)
})