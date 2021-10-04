function calculateDistances(lat,lon){
    let dpulze = haversine(lat,lon,2.922561,101.650965)
    let pyramid = haversine(lat,lon,3.073065,101.607787)
    let klcc = haversine(lat,lon,3.158761,101.714524)

    return [dpulze,pyramid,klcc]
}

let e1Locate = document.getElementById("locate")
e1Locate.addEventListener("click", function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let e1Lat = document.getElementById("lat")
            let e1Long = document.getElementById("long")
            let e1Dpulze = document.getElementById("depulze")
            let e1Klcc = document.getElementById("klcc")
            let e1Sunway = document.getElementById("sunway")

            let userLat = position.coords.latitude
            let userLong = position.coords.longitude

            let distances = calculateDistances(userLat, userLong)

            e1Lat.innerHTML = "Your latitude: "+ userLat
            e1Long.innerHTML = "Your longitude: "+ userLong
            e1Dpulze.innerHTML = "Distance to Dpulze, Cyberjaya is " + distances [0] + "km"
            e1Klcc.innerHTML = "Distance to KLCC is " + distances [2] + "km"
            e1Sunway.innerHTML = "Distance to Sunway Pyramid is " + distances [1] + "km"

        })
    } else {
        alert("Geolocation is not supported!")
    }
})