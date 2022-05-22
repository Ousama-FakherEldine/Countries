fetch("https://restcountries.com/v3.1/all")
    .then(x=>x.json())
    .then(data=>{
        var Ousama2=document.getElementById("ousama2")
        data.forEach(element => {
            let new2=document.createElement("option");
            new2.innerHTML=element.name.official;
            Ousama2.appendChild(new2);
        });
    })

    function update(){
       var index = document.getElementById("ousama2").selectedIndex;
    
fetch("https://restcountries.com/v3.1/all")
    .then(x=>x.json())
    .then(data=>{
        let new3=document.createElement("img");
        new3.src=data[index].flags.png;
        flags.appendChild(new3);
        
        let new4=document.createElement("div");
        new4.innerHTML=data[index].capital;
        test.appendChild(new4);
    })
}

    