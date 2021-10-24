let $textview = document.getElementById('textview')



function insert(num) {
    $textview.value = $textview.value + num;
}

function clean() {
    $textview.value = '';       
}

function back() {
    let exp = $textview.value;
    $textview.value = 
       exp.substring(0, exp.length-1);
}

function equal() {
    let exp = $textview.value;
    if(exp) {
    $textview.value = eval(exp);
    }
}