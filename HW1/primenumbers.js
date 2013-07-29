#!/usb/bin/env node

var isPrime=function(n,arr){
    var hoes=1;
    var pi;
    var residu;

    for(pi=0;pi<arr.length;pi++){
        residu=n%(arr[pi]);
        if( arr[pi] < n){
            if(residu==0){
                hoes=0;
                return hoes;
            }
        }
    }
    return hoes;
};


var allprimes = function(){

    var num=3;
    var nprimes=0;
    var hoes;
    var arr=new Array();
    arr.push(2);
    nprimes++;
    
    while(nprimes<101){

        hoes=isPrime(num,arr);
        
        if(hoes == 1){
            nprimes++;
            arr.push(num);
            //console.log(arr);
        }
        num++;
    }
    return arr;
};

var vec= new Array();
vec=allprimes();

//console.log(hoes,vec);
//vec=all
var fs=require('fs');
var outfile="hundredprimes.txt";
fs.writeFileSync(outfile,vec);
