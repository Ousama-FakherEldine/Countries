fetch('data.json')
  .then(response => response.json())
  .then(data => {

   let Ousama=document.getElementById("ousama")

      data.forEach(element => {
          
          let new1=document.createElement("option");
          new1.innerHTML=element.name;
    Ousama.appendChild(new1);

      });
  })

