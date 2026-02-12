//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
randOrder();paintQuestion();
if (tiAval){parent.iniciaActividade()}
}
function randOrder(){if (tiRandOrder){var rA=[];for (var i = 0; i < ans.length; i++) {rA.push(i);}
while (rA.length > 0) {var randN=Math.floor(Math.random() * rA.length);r_order.push(rA[randN]);rA.splice(randN, 1);}}
else{for (var i=0; i<ans.length; i++) {r_order.push(i);}}; indexTag=r_order[iT];}
function paintQuestion(){randomSort();$("#imaForTag").remove();$("#videoForTag").remove();document.getElementById("ardoraTag").innerHTML=tags[indexTag];
var inH='<ul>';for (i = 0; i < actualAnswers.length; i++) {
inH=inH+'<li class="checkbox-grid" tabindex="0"><input id="check'+i.toString()+'" type="checkbox" name="check'+i.toString()+'" value="check'+i.toString()+'"><label for="check'+i.toString()+'">'+testWords(actualAnswers[i]).substr(1)+'</label></li>';
}inH=inH+"</ul>";document.getElementById("ardoraChecks").innerHTML=inH;
$(".checkbox-grid").keydown(function(e){if (e.which != 9){$(this).find("input").click();}});
if (ima[indexTag].length>0){$("#ardoraChecks").css("width","235");
var newDiv = $('<div id="imaForTag" tabindex="0"></div>);');newDiv.css({height:"200px",width:"400px",position:"relative",padding: "0px",margin: "0px",float:"right"});
newDiv.html("<img alt='"+alt[indexTag]+"' src="+dirMedia+"thumb_"+ima[indexTag]+" height='auto' width='auto'>");
$("#ardoraAct").append(newDiv);$("#imaForTag").css({cursor:"pointer"});
$("#imaForTag img").css({maxWidth:"100%",maxHeight:"100%",display:"block"});
$("#imaForTag").keydown(function(e) {if (e.which != 9){$("#imaForTag").mousedown();}});
$("#imaForTag").mousedown(function (e) {var newDivBig = $('<div id="imaForTagBig"  tabindex="0"><span class="background-image" role="img" aria-label="'+alt[indexTag]+'"></span></div>);');
newDivBig.css({height:"100%",width:"100%",position:"fixed",padding:"0px",margin:"0px",
backgroundColor: "rgba(255,253,253,0.5)",top:"0",left:"0",display:"flex",alignItems: "center",justifyContent:"center",zindex: 500});
newDivBig.html("<img id='imaBig' alt='" + alt[indexTag] + "' src=" + dirMedia + "thumb_" + ima[indexTag] + " height='auto' width='auto'>");
$("body").append(newDivBig);
if (info[indexTag].localeCompare("") != 0) {$("#imaForTagBig").append('<button id="ifbut" tabindex="0">🛈</button>');$("#imaForTagBig").append('<div id="infoText" class="infoText">' + info[indexTag] + '</div>');
document.getElementById("ifbut").addEventListener("click", toggleInfoText);document.getElementById("ifbut").addEventListener("keydown", function(e) {if (e.key !== "Tab") {e.preventDefault();toggleInfoText();}});
$("#ifbut").mousedown(function(e) {e.stopPropagation();});
function toggleInfoText(event) {if (event) {event.stopPropagation();};var textDiv=document.getElementById("infoText");var infoButton=document.getElementById("ifbut");if (textDiv.style.display === "none" || textDiv.style.display==="") {textDiv.style.display="block";
infoButton.style.bottom='calc(5px + ' + textDiv.offsetHeight + 'px)';} else {textDiv.style.display = "none";infoButton.style.bottom="0px";}}}
$("#imaForTagBig img").css({maxWidth: "90vw",maxHeight: "90vh",margin: "5px",display: "block"});$("#imaBig").css({backgroundColor:"white",display:"inline-block",position: "relative"});
newDivBig.mousedown(function (e) {$("#imaForTagBig").remove();});
$("#imaForTagBig").focus();$("#imaForTagBig").keydown(function(e){if (e.which == 27) {newDivBig.mousedown();}});});
}
if ((mp4[indexTag].length>0)||(ogv[indexTag].length>0)){$("#ardoraChecks").css("width","425px");var newDiv=$('<div id="videoForTag"></div>);');
newDiv.css({height: "200px",width: "200px",position: "relative",padding: "0px",margin: "0px",float: "right",clear: "right"});var src_mp4="";var src_ogv="";
if (mp4[indexTag].length > 0){src_mp4= " <source src='"+ dirMedia+mp4[indexTag]+"' type='video/mp4'>"}
if (ogv[indexTag].length > 0){src_ogv= " <source src='"+ dirMedia+ogv[indexTag]+"' type='video/ogg'>"}
newDiv.html("<video width='200' controls>"+src_mp4+src_ogv+"</video>");$("#ardoraAct").append(newDiv);$("#videoForTag").css({cursor: "pointer"});}
if ((ima[indexTag].length==0)&&(mp4[indexTag].length==0)&&(ogv[indexTag].length==0)){$("#ardoraChecks").css("width", "650px");}
var audioDiv="audio"+ indexTag.toString();if (document.getElementById(audioDiv)==null) {$("#ardoraTag").css("cursor", "auto");$("#ardoraTag").unbind("mousedown");} else {
$("#ardoraTag").css("cursor", "pointer");$("#ardoraTag").mousedown(function (e) {$("#audio" + indexTag.toString()).get(0).play();});}$("#ardoraTag").mousedown(function (e) {});
 var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight})
}
function randomSort(){
while (actualAnswers.length>0){actualAnswers.splice(0,1);}var randArray=[].concat(ans[indexTag]);
while (randArray.length>0){var randN=Math.floor(Math.random()*randArray.length);actualAnswers.push(randArray[randN]);randArray.splice(randN,1);}
}
function paintButtonTime(){if (tiTime || tiAttempts || tiScore || tiSuccesses ){clearInterval(timeInterval);}
var canvas = document.getElementById("ardoraActCanvas"); var contexto = canvas.getContext("2d");contexto.globalAlpha = 0.10;contexto.fillStyle = colorButton; contexto.fillRect(0,0,canvas.width,canvas.height);
contexto.font="14px " + fMenssage; var metricsW = contexto.measureText(textButtonTime).width; var x=(canvas.width / 2)-(metricsW / 2); var y=(canvas.height / 2); contexto.beginPath();
contexto.globalAlpha = 1; contexto.lineWidth = 2; contexto.fillStyle = colorBack; var xAnim=canvas.width/2; var wAnim=0;
interval = setInterval(function () { contexto.strokeStyle = colorText; roundedRect(contexto,xAnim,y-20,wAnim,30,5,colorBack);xAnim-=1;wAnim+=2;
if (wAnim>metricsW+30){clearInterval(interval); contexto.shadowColor = "black"; contexto.shadowBlur = 20; contexto.shadowOffsetX = 10; contexto.shadowOffsetY = 10;contexto.stroke();contexto.beginPath();
contexto.textAlign = "left"; contexto.fillStyle = colorText; contexto.fillText(textButtonTime,x,y);contexto.lineWidth = 5;contexto.stroke();}},1);
$("#ardoraActCanvas").mousedown(function(e){ if (tiTime || tiAttempts || tiScore || tiSuccesses ){ timeInterval=setInterval("paintTab()",1000); $("#ardoraActCanvas").css("cursor", "default"); $("#ardoraActCanvas").unbind("mousedown"); }});}
function isCorrect(){$.each($("audio"), function () {$(this).get(0).pause();}); var correct=true;
for (i = 0; i < actualAnswers.length ; i++) {if ($("#check"+i.toString()).is(":checked")){
if (testWords(actualAnswers[i]).substr(0,1).localeCompare("0")==0){correct=false};}else{if (testWords(actualAnswers[i]).substr(0,1).localeCompare("1")==0){correct=false};}}
if (correct) {successes++;score=score+scoreInc;timeAct=timeAct+timeBon;if (successes==ans.length){showMessage("Ok");$("#buttonOk").remove();}else{iT++;indexTag=r_order[iT];paintQuestion();}
} else {attempts++;score=score-scoreDec;if (err[indexTag].length>0){messageError=err[indexTag];}else{messageError=messageErrorG;}
if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ for (i = 0; i < actualAnswers.length; i++) {if (testWords(actualAnswers[i]).substr(0, 1).localeCompare("0") == 0) {$("#check" + i.toString()).prop("checked", false);}
if (testWords(actualAnswers[i]).substr(0, 1).localeCompare("1") == 0) {$("#check" + i.toString()).prop("checked", true);}}
}
function paintBack(){}
function testWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
