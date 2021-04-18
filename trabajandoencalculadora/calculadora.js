
class Window {
  constructor(options = {}) {
    this.width = options.width || 150;
    this.height = options.height || 150;
    this.posX = options.posX || 150;
    this.posY = options.posY || 150;

    //creacion del objeto de la ventana

    this.el = document.createElement('div');
    this.el.style.width = this.width + 'px';
    this.el.style.height = this.height + 'px';
    this.el.style.top = this.posX + 'px';
    this.el.style.left = this.posY + 'px';
    this.el.style.position = 'absolute';
    this.el.style.backgroundColor = 'blue';

    document.body.appendChild(this.el);

  }
//extarer el nombre de la calculadora la clase calculator.PREGUNTAR A MIGUEL
setTitle(title) {
//document.getElementById(id) 
document.getElementsByTagName(title) 
document.getElementsByClassName(Clase)
    this.el.innerText = title;
   // console.log(title);
  }
   type="text/javascript"> alert(document.title); 


}


  

var a = new Window();

//clase calculadora
class Calculator extends Window {
  numero1 = '0';
  constructor(options = {}) {
    super();


    var contenido = document.createElement("div");

    contenido.innerHTML = '<div class="calculadora">\
      <p id="titulo2">Casio</p>\
       <form action="#" name="calculadora" id="calculadora">\
             <p id="display" placeholder="0"></p>\
         <p>\
           <input type="button" class="borrar" value="&larr;"/>\
           <input type="button" class="largo" value="CE" />\
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

    this.el.appendChild(contenido);
    this.display = contenido.querySelector('#display');

    function buttonClick(e) {
      this.innerText += e.target.value;
    }

    contenido.querySelectorAll('.numero').forEach(button =>
      button.onclick = buttonClick.bind(this.display));

    contenido.querySelector('.suma').onclick = (e) => {

      this.numero1 = this.display.innerText;
      this.operador = '+';
      this.display.innerText = '';
    }

    contenido.querySelector('.resta').onclick = (e) => {

      this.numero1 = this.display.innerText;
      this.operador = '-';
      this.display.innerText = '';
    }

    contenido.querySelector('.multip').onclick = (e) => {

      this.numero1 = this.display.innerText;
      this.operador = '*';
      this.display.innerText = '';
    }

    contenido.querySelector('.divi').onclick = (e) => {

      this.numero1 = this.display.innerText;
      this.operador = '/';
      this.display.innerText = '';
    }
    // elimina el ultimo contenido flecha ME HE QUEDADO POR AQUI
    contenido.querySelector('.borrar').onclick = (e) => {
      this.numero1 = this.numero1.toString().slice(0, -1);
     
    }

  
     /*DAR COMA PARA DECIMALES*/
    contenido.querySelectorAll('.darComa').forEach(button => 
      button.onclick = buttonClick.bind(this.display));

    // elimina todo el contenido boton c
    contenido.querySelector('.borrartodo').onclick = (e) => {
      this.numero1 = '';
      this.operador = '';
      this.display.innerText = '';
    }




    contenido.querySelector('.result').onclick = (e) => {
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



var c = new Calculator();
console.log(c);
