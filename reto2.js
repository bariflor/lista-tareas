  var datosTareas=[
  {

    "title": "delectus aut autem"

  },
  {
    
    "title": "quis ut nam facilis et officia qui"
    
  },
  {
    
    "title": "fugiat veniam minus"
    
  },
  {
    
    "title": "et porro tempora"
  }, 
  {
    
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum"
    
  },
  {
    
    "title": "qui ullam ratione quibusdam voluptatem quia omnis"
    
  },
  {
    
    "title": "illo expedita consequatur quia in"
    
  },
  {
    
    "title": "quo adipisci enim quam ut ab"
  },
  {
   
    "title": "molestiae perspiciatis ipsa"
    
  },
  {
    "title": "illo est ratione doloremque quia maiores aut"
    
  }
];
// *******************************************************************
function tareas(title){
    this.title=title;
}
// *******************************************************************
var html = "";
 for (var i =0; i<datosTareas.length;i++){
 	var dato_1 = datosTareas[i];
 	//alert (dato_1);
 	var s = "<li>" +  dato_1.title +"</li>";
 	html += s;
 }
var mostrar = document.getElementById("mostrar");
mostrar.innerHTML=html;// insrtando el contenido de la VAR html
// ************************************************************************
var body=document.body;
function agregaTarea(){
  var inputRecuperar=document.getElementById("agregar").value;// recupera la "nota nueva" del input
  var datos = new tareas(inputRecuperar);
  datosTareas.push(datos);// agrega a mi array el dato que le ingrese por input
  for(var i=datosTareas.length-1;i<datosTareas.length;i++){//inicia desde el ultimo elemento y recorre
    var ul=document.createElement("ul");
    var li=document.createElement("li");
   // var nuevoImpresion=document.getElementById("nuevaTarea");
    li.innerHTML=datosTareas[i].title;
    ul.appendChild(li);
    body.appendChild(ul);
  }
}
// ************************************************************************

