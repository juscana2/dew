
class Window {
  constructor(options = {}) {
    this.width = options.width || 150;
    this.height = options.height || 150;
    this.posX = options.posX || 150;
    this.posY = options.posY || 150;

    //creacion del objeto de la ventana

    this.el = document.createElement('div');
    this.title = document.createElement('div');
    this.contenido = document.createElement('div');
    
    this.el.style.width = this.width + 'px';
    this.el.style.height = this.height + 'px';
    this.el.style.top = this.posX + 'px';
    this.el.style.left = this.posY + 'px';
    this.el.style.position = 'absolute';
    this.el.style.backgroundColor = 'blue';

    document.body.appendChild(this.el);
    this.el.appendChild(this.title);
    this.el.appendChild(this.contenido);
   
   

  }
//extarer el nombre de la calculadora la clase calculator.PREGUNTAR A MIGUEL
setTitle(title) {
    this.title.innerText = title;
    //console.log(title);
  }
  
  /*setContent(element) {
    return this.window.appendChild(element);
}*/

}

//
//MOVE A WINDOWS option 1


const el =document.querySelector(".Calculator");

document.addEventListener("mousedown", mousedown);

function mousedown(e){
  window.addEventListener("mousemove",mousemove);
  window.addEventListener("mouseup" , mouseup );

  let posX = e.clientX;
  let posY = e.clientY;



  function mousemove(e){
    let newX = posX - e.clientX;
    let newY = posY - e.clientY;

    const rect = this.getBoundingClientRect();
    el.style.left = rect.left - newX + "px";
    el.style.top = rect.top - newY + "px";

    posX = e.clientX;
    posY = e.clientY;



  }

  function mouseup(){
    window.removeEventListener('mousemove' , mousemove);
    window.removeEventListener('mouseup' , mouseup);


  }

}



//

/*extarer el setConten me falta Miguel
var w = new Window();
var nuevoContenido = document.createElement('div');
nuevoContenido.innerHTML = "Contenido";
w.setContent(nuevoContenido);*/

//var a = new Window();

//clase calculadora
class Calculator extends Window {
  numero1 = '0';
  constructor(options = {}) {
    super(options);


  //  var contenido = document.createElement("div");

    this.contenido.innerHTML = '<div class="calculadora">\
      <p id="titulo2">Casio</p>\
       <form action="#" name="calculadora" id="calculadora">\
             <p id="display" placeholder="0"></p>\
         <p>\
           <input type="button" class="borrar" value="&larr;"/>\
           <input type="button" class="borrartodo" value="C" />\
         </p>\
         <p>\
           <input type="button" class="numero" value="7" />\
           <input type="button" class="numero" value="8" />\
           <input type="button" class="numero" value="9" />\
           <input type="button" class="divi"   value="/" />\
         </p>\
         <p>\
           <input type="button" class="numero" value="4" />\
           <input type="button" class="numero" value="5" />\
           <input type="button" class="numero" value="6" />\
           <input type="button" class="multip"  value="*" />\
         </p>\
         <p>\
           <input type="button" class="numero" value="1" />\
           <input type="button" class="numero" value="2" />\
           <input type="button" class="numero" value="3" />\
           <input type="button" class="resta"  value="-" />\
          </p>\
         <p>\
           <input type="button" class="numero" value="0" />\
           <input type="button" class="darComa" value="." />\
           <input type="button" class="suma"   value="+"/>\
           <input type="button" class="result" value="=" />\
         </p>\
       </form>\
     </div>';

    
    this.display =this.contenido.querySelector('#display');

    function buttonClick(e) {
      this.innerText += e.target.value;
    }

   this.contenido.querySelectorAll('.numero').forEach(button =>
      button.onclick = buttonClick.bind(this.display));

   this.contenido.querySelector('.suma').onclick = (e) => {

      this.numero1 = this.display.innerText;
      this.operador = '+';
      this.display.innerText = '';
    }

   this.contenido.querySelector('.resta').onclick = (e) => {

      this.numero1 = this.display.innerText;
      this.operador = '-';
      this.display.innerText = '';
    }

   this.contenido.querySelector('.multip').onclick = (e) => {

      this.numero1 = this.display.innerText;
      this.operador = '*';
      this.display.innerText = '';
    }

   this.contenido.querySelector('.divi').onclick = (e) => {

      this.numero1 = this.display.innerText;
      this.operador = '/';
      this.display.innerText = '';
    }
    // elimina el ultimothis.contenido flecha ME HE QUEDADO POR AQUI
   this.contenido.querySelector('.borrar').onclick = (e) => {
      this.numero1 = '';
      //this.numero1 = this.numero1.toString().slice(0, -1);
     
    }

  
     /*DAR COMA PARA DECIMALES*/
   this.contenido.querySelectorAll('.darComa').forEach(button => 
      button.onclick = buttonClick.bind(this.display));

    // elimina todo elthis.contenido boton c
   this.contenido.querySelector('.borrartodo').onclick = (e) => {
      this.numero1 = '';
      this.operador = '';
      this.display.innerText = '';
    }


   this.contenido.querySelector('.result').onclick = (e) => {
      var numero2 = this.display.innerText;
      if (this.operador == '+') {
        this.display.innerText = Number(this.numero1) + Number(numero2);
      }
      if (this.operador == '*') {
        this.display.innerText = this.numero1 * numero2;
      }
      if (this.operador == '-') {
        this.display.innerText = this.numero1 - numero2;
      }
      if (this.operador == '/') {
        this.display.innerText = this.numero1 / numero2;
      }

    }

  }

}




var c = new Calculator({posX:325,width:255});
console.log(c);
