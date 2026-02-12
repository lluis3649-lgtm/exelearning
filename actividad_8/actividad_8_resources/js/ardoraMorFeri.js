//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}
randomSort();$("#buttonOk").attr("tabindex", "0");$("#buttonOk").keydown(function(e) {if (e.which != 9) {isCorrect();}});$("#buttonOk").focus(function(e) {removeOk();});$("#buttonOk").blur(function(e) {paintOk();});paintboard();
}
function paintboard(){$("#ardoraWord").text(defs[indexWords]);if (indexAttemps==0){ $("#tableGame").html("")}$("#tableGame").append("<tr id='tr_"+indexAttemps.toString()+"'>");var nl=CWWords(words[indexWords]).length;
for (i=0;i<nl;i++) {$("#tr_"+indexAttemps.toString()).append('<td id="td'+i.toString()+'_'+indexAttemps.toString()+'" class="activeCell"><input id="C'+i.toString()+'_'+indexAttemps.toString()+'" name="C'+i.toString()+'_'+indexAttemps.toString()+'" type="text" class="cell" maxlength="1"/></td>');}
var first=false;while (!first) {if ($("#C" + col.toString()+"_"+row.toString()).length) {first=true;$("#C" + col.toString()+"_" +row.toString()).focus();$("#C"+col.toString()+"_"+row.toString()).css("backgroundColor", colorSele);} else {col++;if (col > 15) {col=0;row++;if (row > 15) {first=true}}}}
for (i=0;i<5;i++) {for (j = 0; j < 3; j++) {if ($("#C" + i.toString() + "_" + j.toString()).length) {$("#C" + i.toString() + "_" + j.toString()).val("");}}}; $(".cell").hover(function(e) {$(this).css("backgroundColor", colorButton);});
$(".cell").mouseout(function(e) {$(this).css("backgroundColor", colorBack);});$(".cell").click(function(e) {var idCell = $(this).attr("id").substring(1);var pos = idCell.indexOf("_");row=parseInt(idCell.substring(pos+1));col=parseInt(idCell.substr(0, pos));silenceAll();});
$(".cell").focus(function(e) {$(this).css("backgroundColor", colorSele);});$(".cell").focusout(function(e) {$(this).css("backgroundColor", colorBack);});$(".cell").keydown(function(e) {er="|^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]*$|";if (e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40 && e.keyCode != 9) {$(this).val(String.fromCharCode(e.keyCode).match(er));}; if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {goCell(e.keyCode);}});
$(".cell").keyup(function(e) {var idCell=$(this).attr("id").substring(1);var position = idCell.indexOf("_");row = parseInt(idCell.substring(position + 1));col = parseInt(idCell.substr(0, position));if (e.keyCode==37 || e.keyCode==38 || e.keyCode==39 || e.keyCode==40) {} else {if (e.which!=9) {this.value = this.value.toUpperCase();if (e.which!=192 && e.which!=222 && e.which!=16) {nextCell();}}};if (e.which==9) {silenceAll();}});$(".hidetd").css("background-color", colorBack);}
function doFocus() {$("#C" + col.toString() + "_" + row.toString()).focus();}
function silenceAll() {if (tiAudio) {$("audio").each(function(ind, e) {$(e)[0].pause();$(e)[0].currentTime = 0;});tiAudio = false;}}
function goCell(toDir) {var newCol=col;var newRow=row;if (toDir==37) {newCol--;};if (toDir==38) {newRow--;};if (toDir==39) {newCol++;};if (toDir==40) {newRow++;};if ($("#C" + newCol.toString() + "_" + newRow.toString()).length) {col=newCol;row=newRow;$("#C" + col.toString() + "_" + row.toString()).focus();}}
function nextCell() {if (writeDir == 0) {if ($("#C" + (col + 1).toString() + "_" + row.toString()).length) {col++;$("#C" + col.toString() + "_" + row.toString()).focus();}} else {if ($("#C" + col.toString() + "_" + (row + 1).toString()).length) {row++;$("#C" + col.toString() + "_" + row.toString()).focus();}}}
function randomSort(){var iWords=[];var iDefs=[];for (i=0;i<words.length; i++) {if (words[i].localeCompare("") != 0) {iWords.push(words[i]);iDefs.push(defs[i]);words[i]="";defs[i]="";}}
for (i=0;i<iWords.length; i++) {var ind=Math.floor(Math.random() * iWords.length);while (words[ind].localeCompare("") != 0) {ind++;if (ind==iWords.length) {ind=0;}};words[ind]=iWords[i];defs[ind]=iDefs[i];}}
function isCorrect() {var correct =false;var nl=CWWords(words[indexWords]).length;var ans="";var v_ans=[];var v_correct=[];for (i=0;i<nl;i++) {ans=ans+$("#C"+i.toString()+"_"+indexAttemps.toString()).val();v_ans.push($("#C"+i.toString()+"_"+indexAttemps.toString()).val());v_correct.push(CWWords(words[indexWords]).substring(i,i+1));}
var l_red=0;for (i=0;i<nl;i++) {var le=v_ans[i];var ti_le=false;for (j=0;j<nl;j++) {if (v_correct[j]==le){ti_le=true;}};if (!ti_le){l_red++;
$("#td"+i.toString()+"_"+indexAttemps.toString()).css("transition","background-color 4s");$("#td"+i.toString()+"_"+indexAttemps.toString()).addClass("red");
}};
var l_green=0;for (i=0;i<nl;i++) {if (v_correct[i]==v_ans[i]){l_green++;v_ans[i]="|";v_correct[i]="~";
$("#td"+i.toString()+"_"+indexAttemps.toString()).css("transition","background-color 4s");$("#td"+i.toString()+"_"+indexAttemps.toString()).addClass("green");
}};
var l_yellow=0;for (i=0;i<nl;i++) {var le=v_ans[i];if (le!="|"){for (j=0;j<nl;j++) {if (v_correct[j]==le){l_yellow++;v_ans[i]="|";le="|";v_correct[j]="~";
$("#td"+i.toString()+"_"+indexAttemps.toString()).css("transition","background-color 4s");$("#td"+i.toString()+"_"+indexAttemps.toString()).addClass("yellow");
}}}};
if (CWWords(words[indexWords]).localeCompare(ans)==0){correct=true;};var idSetTimeout;for (i=0;i<nl;i++){$("#td"+i.toString()+"_"+indexAttemps.toString()).css("width","28px");$("#td"+i.toString()+"_"+indexAttemps.toString()).css("height","33px");$("#td"+i.toString()+"_"+indexAttemps.toString()).removeClass("activeCell");$("#td"+i.toString()+"_"+indexAttemps.toString()).text($("#C"+i.toString()+"_"+indexAttemps.toString()).val());$("#C"+i.toString()+"_"+indexAttemps.toString()).remove();}
var c = $("#ardoraActCanvas"), ctx = c[0].getContext("2d");ctx.canvas.height=$("#ardoraAct").height()+24;if (correct) {score=score+scoreInc;timeAct=timeAct+timeBon;attempts=0;successes++;indexWords++;if (indexWords==words.length){$("#ardoraActCanvas").attr("aria-label", messageOk);showMessage("Ok");$("#buttonOk").remove();}
else{idSetTimeout = setTimeout(function (element) {indexAttemps=0;paintboard();clearTimeout(idSetTimeout);},4000, $(this));}} else {attempts++;score=score-scoreDec;indexAttemps++;
idSetTimeout=setTimeout(function (element) {if (attempts >= attemptsMax) {$("#ardoraActCanvas").attr("aria-label", messageAttempts);$("td").addClass("cell");showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);if (messageError.trim().length>0){showMessage("Error");};paintboard()};clearTimeout(idSetTimeout);},3000, $(this));}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack() {}
function CWWords(input) {return decodeURIComponent(escape(window.atob(input)));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
