//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
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
var timeOnMessage=5; messageOk="¡Felicidades! Lo lograste. Ahora vamos con todo por la siguiente actividad"; messageTime=""; messageError="¡Ups! Hubo un error, vamos a intentarlo otra vez."; messageErrorG="¡Ups! Hubo un error, vamos a intentarlo otra vez."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var xCell=["TA==","Tw==","Uw==","IA==","Rw==","w4k=","Tg==","RQ==","Ug==","Tw==","Uw==","IA==","TA==","SQ==","VA==","RQ==","Ug==","QQ==","Ug==","SQ==","Tw==","Uw==","IA==","Uw==","Tw==","Tg==","IA==","Qw==","QQ==","VA==","RQ==","Rw==","Tw==","Ug==","w40=","QQ==","Uw==","IA==","UQ==","VQ==","RQ==","IA==","Uw==","RQ==","IA==","VQ==","Uw==","QQ==","Tg==","IA==","UA==","QQ==","Ug==","QQ==","IA==","Qw==","TA==","QQ==","Uw==","SQ==","Rg==","SQ==","Qw==","QQ==","Ug==","IA==","TA==","QQ==","Uw==","IA==","Tw==","Qg==","Ug==","QQ==","Uw==","IA==","Uw==","RQ==","Rw==","w5o=","Tg==","IA==","Uw==","VQ==","IA==","Rg==","Tw==","Ug==","TQ==","QQ==","IA==","RA==","RQ==","IA==","RQ==","WA==","UA==","Ug==","RQ==","Uw==","SQ==","w5M=","Tg==","IA==","WQ==","IA==","Uw==","VQ==","Uw==","IA==","Qw==","QQ==","Ug==","QQ==","Qw==","VA==","RQ==","Ug==","w40=","Uw==","VA==","SQ==","Qw==","QQ==","Uw==","Lg==","TA==","Tw==","Uw==","IA==","VA==","Ug==","RQ==","Uw==","IA==","Rw==","w4k=","Tg==","RQ==","Ug==","Tw==","Uw==","IA==","UA==","Ug==","SQ==","Tg==","Qw==","SQ==","UA==","QQ==","TA==","RQ==","Uw==","IA==","Uw==","Tw==","Tg==","Og=="];
var que=["Cuenta hechos reales o imaginarios mediante un narrador.","Expresa sentimientos, emociones o estados de ánimo del autor o del hablante lírico.","Está hecho para ser representado en un escenario por actores."];
var yCell=["R8OJTkVSTyBOQVJSQVRJVk8=","R8OJTkVSTyBMw41SSUNP","R8OJTkVSTyBEUkFNw4FUSUNP"];
var pos=[["5","6","7","8","9","2","4","26","18","17","19","29","15","14","0","10"],["32","137","49","16","34","21","12","1","35","53","20","28","25"],["79","0","81","31","65","33","23","92","73","36","89","0","30","60","56","71"]];
var upos=[["","","","","","","","","","","","","","","",""],["","","","","","","","","","","","",""],["","","","","","","","","","","","","","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var colCount=20;
var showE=false;
var typeD=0;var tiCor=false;
var colDef=0; col=1; row=1; inQue=0; colorError="#FF0000";
var wordsGame="YWN0aXZpZGFkXzQ="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
