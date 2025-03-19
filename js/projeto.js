class calculator{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }
    
    // ativa metodo de linpar calculadora
    clearValue(){
        this.upperValue.textContent = '0';
        this.resultValue.textContent = '0'
    }

    checkLastDigit(input,upperValue, reg){
        if(!reg.test(input)  && !reg.test(upperValue.substr(upperValue.length - 1))){
            return true;
        }else{
            return false;
        }
    }
     
    refreshValues(total){
      this.upperValue.textContent = total;
      this.resultValue.textContent = total;
    }
    
    //resolve a operação
    resolution(){
       //explode uma estring em  um array
       let upperValueArray = (this.upperValue.textContent).split(" ")
       // resutado 
       let resut = 0;
       
       for(let i = 0; i <= upperValueArray.length; i++){
         let actualitem = upperValueArray[i];
         let resut = 0;
         
         if(actualitem == '+'){
           resut = parseFloat(upperValueArray[i - 1])  +   parseFloat(upperValueArray[i + 1]);
           
         }
    
       }

         if(resut){
             calc.reset = 1;
         }

        //atualizando os totais
         calc.refreshValues(reset);
    
    }

    btnPress(){
       let input = this.textContent;
       let upperValue = calc.upperValue.textContent;

       // verificar se tem só números
       let reg = new RegExp('^\\d+$');

      // se precisar resetar, limpa o display
       if(calc.reset){
        upperValue = '0';
       }

       // limpa a prop de reset
       calc.reset = 0;
        
       if(input == 'AC'){
        calc.clearValue();

       
        }else if(input == "="){
            calc.resolution();

       }else{
         
        // checar se precisa adicionar ou não
        if(calc.checkLastDigit(input, upperValue, reg)){
            return false;
      }

      //adicionar espaços aos operadores
         if(!reg.test(input)){
            input = ` ${input}  `;
         }

       if(upperValue == "0"){
        calc.upperValue.textContent = input; 
       }else{
        calc.upperValue.textContent += input
       }

    }

  }

      

    
}

// start obj

let calc = new calculator;
console.log(calc)


// start btns

let buttons = document.querySelectorAll('.btn');

//map all buttons

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', calc.btnPress)
}
