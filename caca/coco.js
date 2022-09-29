


let saludo= ()=>{
    return("Hola")
}
let nombre =(nombre)=>{
  
  return (nombre);
}


let palabra = (palabra) =>{
   
    return (palabra)
    
};

let junto =(saludo,palabra,nombre)=>{

 console.log(saludo+" "+palabra+" "+nombre);
 
}

junto(saludo(),palabra("hernan"),nombre("escudero"))

junto.coco = console.log("jajaj");

junto.caca = (a,b)=>{
    console.log(a+b);
};

junto.caca(1,2)
