function calculateDistances(lat,lon){
    let dpulze = haversine(lat,lon,2.922561,101.650965)
    let sunway = haversine(lat,lon,3.073065,101.607787)
    let klcc = haversine(lat,lon,3.158761,101.714524)

    return [dpulze,sunway,klcc]
}

let e1Locate = document.getElementById("locate")
e1Locate.addEventListener("click", function(){
    if(navigator.geolocation){

    } else {
        alert("Geolocation is not supported!")
    }
})