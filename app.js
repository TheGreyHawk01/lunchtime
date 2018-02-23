var btn = document.getElementById("btn").value;
var text = document.getElementById("text").value;
var imagesrc = document.getElementById("imgsrc").value;
var dankburger = {name: "Dank Burger", adjective: "Incredible", verb: "Da Wae", imgsrc:}
var spaghet = {name: "Moms Spaghet", adjective: "Moist", verb: "Somebody Touched", imgsrc:}
var meme = {name: "Ugandan Memes", adjective: "Dank", verb: "Heccing", imgsrc:}
var souls = {name: "Your Soul", adjective: "Slurpalicious", verb: "Random", imgsrc:}
var fries = {name: "Fries", adjective: "Delicious", verb: "Salty", imgsrc:}
btn.addEventListener("onclick", function(){
    var x = Math.random(dankburger, spaghet, meme, souls, fries)
    document.getElementById("text").innerHTML = Math.floor((Math.random() * 5) + 0)
})    

