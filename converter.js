
//celsius to fahrenheit

function celtofah(){
    var fah=document.getElementById("txt1").value * 9 / 5 + 32;
    document.getElementById("cel1").innerHTML= "Your result is : " + fah;
}

function fahtocel(){
    var cel=(document.getElementById("txt2").value - 32) * 5 / 9 ; 
    document.getElementById("cel2").innerHTML= "Your result is : " +cel;
}

//kilometer to miles

function kiltomi(){
    var mi=document.getElementById("txt3").value * 0.62137; 
    document.getElementById("cel3").innerHTML= "Your result is : " +mi;
}

function mitokil(){
    var kil=document.getElementById("txt4").value / 0.62137; 
    document.getElementById("cel4").innerHTML= "Your result is : " +kil;
}

//inch to cm

function intocm(){
    var cm=document.getElementById("txt5").value / 0.39370; 
    document.getElementById("cel5").innerHTML= "Your result is : " +cm;
}

function cmtoin(){
    var inch=document.getElementById("txt6").value * 0.39370 ; 
    document.getElementById("cel6").innerHTML= "Your result is : " +inch;
}

//dollar to taka

function doltotk(){
    var taka=document.getElementById("txt7").value * 80  ; 
    document.getElementById("cel7").innerHTML= "Your result is : " +taka;
}

function tktodol(){
    var dol=document.getElementById("txt8").value /80 ; 
    document.getElementById("cel8").innerHTML= "Your result is : " +dol + "$";
}

//cm to meter

function cmtome(){
    var me=document.getElementById("txt9").value / 100 ; 
    document.getElementById("cel9").innerHTML= "Your result is : " +me;
}

function metocm(){
    var cm=document.getElementById("txt10").value / 0.01 ; 
    document.getElementById("cel10").innerHTML= "Your result is : " +cm;
}

//kg to gram

function kgtogr(){
    var gr=document.getElementById("txt11").value / 0.001  ; 
    document.getElementById("cel11").innerHTML= "Your result is : " +gr;
}


function grtokg(){
    var kg=document.getElementById("txt12").value / 1000 ; 
    document.getElementById("cel12").innerHTML= "Your result is : " +kg;
}

//degree to radius

function degtorad(){
    var rad=document.getElementById("txt13").value / 57.296 ; 
    document.getElementById("cel13").innerHTML= "Your result is : " +rad;
}


function radtodeg(){
    var deg=document.getElementById("txt14").value * 57.296; 
    document.getElementById("cel14").innerHTML=deg;
}

//min to hr

function mintohr(){
    var hr=document.getElementById("txt15").value * 0.01667; 
    document.getElementById("cel15").innerHTML= "Your result is : " +hr;
}


function hrtomin(){
    var min=document.getElementById("txt16").value * 60 ; 
    document.getElementById("cel16").innerHTML= "Your result is : " +min;
}

//min to sec

function mintosec(){
    var sec=document.getElementById("txt17").value / 0.01667 ; 
    document.getElementById("cel17").innerHTML= "Your result is : " +sec;
}


function sectomin(){
    var min=document.getElementById("txt18").value * 0.01667 ; 
    document.getElementById("cel18").innerHTML= "Your result is : " +min;
}

