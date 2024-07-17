
const buttons = document.querySelectorAll('.num_btn');
const display = document.querySelector('#input_val');

const C_btn = document.querySelector('#cc');
C_btn.addEventListener('click', clear);

const oparetor = document.querySelectorAll('.operator');
oparetor.addEventListener('click', moveVal);

// const show_out = document.querySelector('#show_out');



function deleteval(){
    const display = document.querySelector('#input_val').value;

    // display.value= display.value.slice(0,-1);

    if(display==''){
        const show_out = document.querySelector('.show_out').innerText;
        document.querySelector('#show_out').innerHTML=show_out.slice(0,-1);
    }else{
        document.querySelector('#input_val').value=display.slice(0,-1);
    }
}



function getVal(input){

    display.value += input
}


function calculate() {
    const show_out = document.querySelector('.show_out').innerText;
    const display = document.querySelector('#input_val').value;
    const final = (show_out+display);
    
    const result = eval(final);

    // if(result != ""){
        document.querySelector('#input_val').value=result;
        document.querySelector('#show_out').innerHTML='';
    // }
    // else{
    //     document.querySelector('#show_out').innerHTML='INVALID';
    //     // document.querySelector('#input_val').value="INVALID INPUT";
    // }
    
  
}


function clear() {
    display.value = '';
    document.querySelector('#show_out').innerHTML='';
}



function moveVal(mv){
    const moveA = (display.value += mv);
    const show_out = document.querySelector('#show_out').innerText;
    const move_show_out = (show_out+moveA)

    document.querySelector('#show_out').innerHTML=move_show_out;
    display.value = '';

}
