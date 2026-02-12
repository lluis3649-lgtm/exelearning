//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=90; timeIni=90; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=1;
var score=0; scoreMax=2; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Excelente trabajo! Sigamos con la siguiente actividad."; messageTime=""; messageError="Parece que hubo un error. Probemos otra vez."; messageErrorG="Parece que hubo un error. Probemos otra vez."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkXzY="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>El clan del oso cavernario</p>","<p>El gato negro</p>"];
var iL=["<div  align='center'><img alt='' src='actividad_6_resources/media/oso.jpg'></div>","<div  align='center'><img alt='' src='actividad_6_resources/media/gn.jpg'></div>"];
var order=["",""]; orderR=["",""];indexR=0; indexL=0;
var cR=["<p>Sueños de robot</p>","<p>El vampiro de Sussex</p>"]; ansRL=["MA==","MQ=="];
var iR=["<div  align='center'><img alt='' src='actividad_6_resources/media/sr.jpg'></div>","<div  align='center'><img alt='' src='actividad_6_resources/media/el.jpg'></div>"];
var auR=[1,2];
