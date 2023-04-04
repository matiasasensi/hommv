//let cantidad_de_petes = 69;

    //let petes_sumados = parseInt(prompt("cuantos petes sumaste hoy?"));
    //let petes_totales = cantidad_de_petes + petes_sumados; 
    //if (petes_sumados==7){
   // alert("ah pero tantos petes vas a hacer? goloso");}
    //else {alert(petes_totales)}
    var img = document.createElement("img");
    img.src = "./media/espias.gif";
    var src = document.getElementById("myGif");
    
    function clickHandler() {
      document.getElementById("id-of-element").innerHTML = "new text";            

              
              //src.appendChild(img); 
            }
    function clickHandler2() {
              document.getElementById("id-of-element2").innerHTML = "new text";
                      
        
                      
                      src.appendChild(img); 
                    }
    function myFunctionBio() {

                      document.getElementById("myImg").src = "./media/bioquimicos.png";
                      document.getElementById("myText").innerHTML = "Esto es un laboratorio. Permite la construcción de armas químicas Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
                      document.getElementById("myOtherText").innerHTML = "<h1>Farmaceutica</h1>";
                      document.getElementById("myGifito").style.visibility = "visible";
                      document.getElementById("myGif").src = "./media/ferrocarril.gif";

                    }

                    function myFunctionMuelle() {
                      
                      document.getElementById("myImg").src = "./media/166864.png";
                      document.getElementById("myText").innerHTML = "Esto es un muelle";
                      document.getElementById("myOtherText").innerHTML = "<h1>Muelle</h1>";
                      //document.getElementById("myOtherText").className += "classe";
                      document.getElementById("myGifito").style.visibility = "visible";
                      document.getElementById("myGif").src = "./media/espias.gif";
                    }

                    function myFunctionEspia() {
                      
                      document.getElementById("myImg").src = "./media/634784.png";
                      document.getElementById("myText").innerHTML = "Esto es una casa de espias";
                      document.getElementById("myOtherText").innerHTML = "<h1>Casa de Espias</h1>";
                      document.getElementById("myGifito").style.visibility = "visible";
                      document.getElementById("myGif").src = "./media/espias.gif";
                    }
      //if(button == active)
      //set hover