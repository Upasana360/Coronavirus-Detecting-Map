function updateMap() {
    console.log("Updating Map With Real Time data");
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)//so basically rsp is an object inside which data is present and inside that an array is present
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                recovered = element.recovered;
                dead = element.dead;

                if (cases > 255) {
                    color = "rgb(255,0,0)";
                }
                else {
                    color = `rgb(${cases},0,0)`;
                }

                if (recovered > 255) {
                    color = "rgb(255,255,0)";
                }
                else {
                    color = `rgb(${recovered},0,0)`;
                }

                
                if(dead>255)
                {
                    color="rgb(0, 64, 255)";
                }
                else {
                    color = `rgb(${dead},0,0)`;
                }


                //Mark on the Map
                new mapboxgl.Marker({
                    draggable: false, color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);


            });
        })
}
// let interval=2000;
// setInterval(updateMap,interval);
updateMap();
