let text = "";
for (i = 0; i < 3; i++){

    fetch("http://api.icndb.com/jokes/random/3")
    .then(res=> res.json())
    .then((result) => {
        
        let text = result.value[1].joke;
        let p = document.createElement("p");
        p.innerHTML = text;
        document.getElementById("demo").appendChild(p);

})


}