function ListaDeTareas(){  
this.datosTareas=[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
]
   this.agregar=function(nuevanota){
    this.datosTareas.push(nuevanota);
  }
  
}
// *******************************************************************
// function tareas(userId,id,title){
//     this.userId=userId;
//     this.id=id;
//     this.title=title;
//     this.completed= false;
// }
// *******************************************************************
var html = "";
for(var i=0;i<datosTareas.length;i++){
  var dato= datosTareas[i];
  var listar= "<li>"+dato.title+"</li>";
  html += listar;
}
var mostrar= document.getElementById("mostrar");
mostrar.innerHTML=html;
// *********************************************************************
// var mostrarLista="";
// function listar(){
//      document.getElementById("nombre").value = obj.nombre;
           
//     }
// document.getElementById("lista").innerHTML=mostrarLista; 
// }
//cada vez que escriba en el input, le doy click en añadir y se imprima
var btnAgregar = document.getElementById("btnAgregar");
btnAgregar.onclick = function (){
  var nuevaTarea = document.getElementById("nuevaTarea").value;

  document.getElementById("nuevaTarea").value = "";
}