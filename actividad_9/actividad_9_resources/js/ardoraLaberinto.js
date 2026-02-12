//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}
document.addEventListener("touchstart", touchHandler, true);document.addEventListener("touchmove", touchHandler, true);document.addEventListener("touchend", touchHandler, true);document.addEventListener("touchcancel", touchHandler, true);
$(".is_sel").css("background", "radial-gradient(ellipse at center, " + colorBack + ", " + colorButton + ")");$(".is_sel").hover(function(){
$(this).css("background", "radial-gradient(ellipse at center, " + colorBack + ", " + colorSele + ")");}, function() {$(this).css("background","radial-gradient(ellipse at center, "+colorBack+", "+colorButton+")");});
$(".not_sel").css("background", "radial-gradient(ellipse at center, " + colorBack + ", " + colorSele + ")");$(".not_sel").hover(function(){
$(this).css("background", "radial-gradient(ellipse at center, " + colorBack + ", " + colorButton + ")");}, function() {$(this).css("background", "radial-gradient(ellipse at center, " + colorBack + ", " + colorSele + ")");});
$(".cell").on('touchstart click', function(e) {$(this).toggleClass("not_sel is_sel");
isCorrect($(this).attr("id"));
e.preventDefault();});
$(".cell").attr("tabindex","0");$(".cell").focus(function(e){$(this).css("border-color","#FF8000");});
$(".cell").blur(function(e){$(this).css("border-color","#000000");});$(".cell").keydown(function(e){if (e.which!=9){$(this).css("background", "radial-gradient(ellipse at center, " + colorBack + ", " + colorButton + ")"); $(this).click();
if (!$(this).hasClass("correct_cell")){$(this).css("background", "radial-gradient(ellipse at center, " + colorBack + ", " + colorSele + ")");}
}});
}
function touchHandler(event) {var touch = event.changedTouches[0];var simulatedEvent = document.createEvent("MouseEvent");simulatedEvent.initMouseEvent({touchstart: "mousedown",touchmove: "mousemove",touchend: "mouseup"}[event.type], true, true, window, 1,
touch.screenX, touch.screenY,touch.clientX, touch.clientY, false,false, false, false, 0, null);touch.target.dispatchEvent(simulatedEvent);event.preventDefault();};
function randomSort(){
}
function isCorrect(id_cell) {var correct=false;var res=id_cell.split("_");var c1 = res[1].toString() + "ard" + res[2].toString();var c2 = LaberintoWords(posgame[indexGame]).toString();c2 = c2.substring(0,c2.length);
if (c1==c2) {correct=true;}if (correct) {$("#"+id_cell).removeClass("cell is_sel").addClass("correct_cell");
$(".correct_cell").css("background", "radial-gradient(ellipse at center, " + colorBack + ", " + colorButton + ") !important");
$(".correct_cell").hover(function() {$(this).css("background", "radial-gradient(ellipse at center, " + colorBack + ", " + colorButton + ")");});
score=score+scoreInc;timeAct=timeAct+timeBon;successes++;indexGame++;if (indexGame>posgame.length-1){$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();}} else {
attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");} $("#"+id_cell).removeClass("is_sel").addClass("not_sel");}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function LaberintoWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
