let nam = document.getElementById('nav--user');
let tes = document.getElementById('ext');
let ses = document.getElementById('btn5');


// nam = prompt ("¿Cómo te llamas?", "");

ses.addEventListener('click', function(){
    nam.innerText =`_ ${tes.value}_`;
});

// ( function (){
// }) ();

function play1(){
    const http = new XMLHttpRequest();
    const url = 'http://127.0.0.1:5500/Master/Calculator/index.html';
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

        document.getElementById('app0').innerHTML = this.responseText;  
        }
    }
    http.open("GET", url, true);
    http.send();
}

function play2(){
    const http = new XMLHttpRequest();
    const url = 'http://127.0.0.1:5500/Master/Chat/index.html';
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

        document.getElementById('app0').innerHTML = this.responseText;  
        }
    }
    http.open("GET", url, true);
    http.send();
}

 
//
//
/*
 function peticion1(){
    const http = new XMLHttpRequest();
    const url = 'http://127.0.0.1:5500/htm/otro/index.html';
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

        document.getElementById('uno').innerHTML = this.responseText;  
        }
    }
    http.open("GET", url, true);
    http.send();
}

document.getElementById("gett1").addEventListener('click', function(){
    peticion1();
});
*/
