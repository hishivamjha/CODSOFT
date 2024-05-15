let input=document.querySelector('#textInput');
let buttons = document.querySelectorAll('button');

let str = "";

function calculate(){
    let buttonValue=this.innerText;
    if(buttonValue === '='){
        str=eval(str);
        input.value=str;
    }
    else if(buttonValue === 'C'){
        str ="";
        input.value=str;
    }
    else if(buttonValue === 'DEL'){
        str = str.substring(0,str.length-1);
        input.value=str;
    }
    else{
        str += buttonValue;
        input.value=str;

    }

}

buttons.forEach(buttonInput =>{
    buttonInput.addEventListener('click',calculate)
})
// buttons.forEach(buttonInput =>{
//     buttonInput.addEventListener('click',function(){
//         let buttonValue=this.innerText;
//         if(buttonValue === '='){
//             str=eval(str);
//             input.value=str;
//         }
//         else if(buttonValue === 'C'){
//             str ="";
//             input.value=str;
//         }
//         else if(buttonValue === 'DEL'){
//             str = str.substring(0,str.length-1);
//             input.value=str;
//         }
//         else{
//             str += buttonValue;
//             input.value=str;

//         }
//     })
// })
