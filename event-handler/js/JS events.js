function tranformUppercase(_val){
    return _val.toUpperCase();
}
// DOM event listener
let e1NamaPengguna = document.getElementById("namaPengguna")
e1NamaPengguna.addEventListener("keyup",function(){
    e1NamaPengguna.value = tranformUppercase(e1NamaPengguna.value)
})

function checkPassword(){
    let e1KataLaluan = document.getElementById("kataLaluan")
    let pass_val = e1KataLaluan.value

    if(pass_val.length > 5){
        alert("Password check...OK!")
    } else{
        alert("Password too short!")
    }
}

//
let e1KL = document.getElementById("kataLaluan")
e1KL.onblur = checkPassword