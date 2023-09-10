//Swal.fire({ //Borrar esta parte del codigo
//  icon: 'warning',
//  title: 'El evento aún no comienza!\nVuelve a intentarlo pronto.',
//  text:"\n\n(Como el evento aun no comienza, la ruleta no girara :)",
//  confirmButtonColor: '#3085d6',
 // confirmButtonText: 'Perfecto, gracias!',
//  allowOutsideClick: true}
//)

const ruleta = document.querySelector('#ruleta');

var num = Math.floor((Math.random() * 999999) + 1); 

function actualizar(){location.reload(true);}
//Función para actualizar cada 5 segundos(5000 milisegundos)
setInterval("actualizar()",9999000);

ruleta.addEventListener('click', girar); //Arreglar la palabra "girar"
giros = 0;
function girar(){
  if (giros < 1) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'Turnos: ' + giros;
    document.querySelector('.ID').innerHTML = 'ID: ' + num;     
  }else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false}
    )
    ;
    ( 
    {
   

    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'Tu premio es: ';
         document.querySelector('.contador').innerHTML = 'Turnos: ' + giros;
         document.querySelector('.ID').innerHTML = 'ID: ' + num;        
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'Tus monedas seran multiplicadas ' + premios;
  

}


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     premio("x3");
     break;
     case valor > 45 && valor <= 90:
     premio("x2");
     break;
     case valor > 90 && valor <= 135:
     premio("x9"); 
     break; 
     case valor > 135 && valor <= 180:
     premio("x8");
     break;
     case valor > 180 && valor <= 225:
     premio("x7");
     break; 
     case valor > 225 && valor <= 270:
     premio("x6");
     break;
     case valor > 270 && valor <= 315:
     premio("x5");
     break;
     case valor > 315 && valor <= 360:
     premio("x4"); 
     break;
  }

 }, 5000);

}
}