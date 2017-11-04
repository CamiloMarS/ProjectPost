// creacion de elementos
	var titulo = document.createElement('input');
		titulo.setAttribute("class","form-control");
		titulo.setAttribute("type","text");
		titulo.setAttribute("placeholder","Ingresar título del post");
	var description = document.createElement('textarea');
		description.style = "max-width:100%; min-heigth:80px;";
		description.setAttribute("placeholder", "Agregar descripción del post...");
		description.setAttribute("class","form-control");
	var imagen = document.createElement('input');
		imagen.setAttribute("type","text");
		imagen.setAttribute("class","form-control");
		imagen.setAttribute("placeholder","Pegar url de la imagen");
	var contenido = document.createElement('textarea');
		contenido.style = "max-width:100%; min-heigth:80px;";
		contenido.setAttribute("placeholder", "Escribir aquí contenido");
        contenido.setAttribute("class","form-control");
////////--------------------
function Post(){	
	this.create = function(){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');		
       
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "<center>Nuevo Post</center>";//titulo
        var s =  document.getElementById('dialogboxbody');
        //  agregar los controles para el formulario
		
            s.appendChild(titulo);
		    s.appendChild(description);
		    s.appendChild(imagen);
		    s.appendChild(contenido);
        // Botones para agregar el post o cancelar
        document.getElementById('dialogboxfoot').innerHTML = '<center><button class="btn btn-success" onclick="newPost.publish()">Crear</button> <button class="btn btn-warning" onclick="newPost.close()">Cancelar</button></center>';
    }
 //publish post
	this.publish = function(){
		var div = document.createElement('div');
		var h2 = document.createElement('h2');
			h2.style="color:white;text-shadow:1px 1px 0px; text-align:center;";
			h2.innerHTML = titulo.value;
		var im = document.createElement('img');
			im.setAttribute("src", imagen.value);
			im.style="width:100%; heigth:200px;";
		var des = document.createElement('p');
		    des.innerHTML = description.value;
			des.style="color:whitesmoke; font-size:20px;margin-left:4px;";
		var content = document.getElementById('AquiPost');
			div.appendChild(h2);
			div.appendChild(im);
			div.appendChild(des);
			div.style = "background-color: rgba(81, 61, 221, 0.5); border-color:green; border-width:6px;";
		content.appendChild(div);
		
		//una vez creado y agregado ce cierra
		newPost.close();
	}
  
	
	//close window y cancelar post
  this.close =function(){
		  document.getElementById('dialogbox').style.display = "none";
    	  document.getElementById('dialogoverlay').style.display = "none";
	  	  titulo.value=null;
	      description.value=null;
	      imagen.value=null;
	      contenido.value=null;	  	
	}
}

//new object
var newPost = new Post();
var n = document.getElementById('push2');
	n.setAttribute("onclick","newPost.create()");