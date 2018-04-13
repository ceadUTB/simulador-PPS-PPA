"use strict";
var REPLACEDATA = document.getElementById("replace");
function init() {
    selector();
}
function selector() {
    REPLACEDATA.innerHTML = "";
    var card = document.createElement("div");
    card.classList.add("card", "card-width");
    card.id = "SELECTOR";
    var cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.innerHTML = "Selecciona la opci\u00F3n que deseas:";
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    var buttonPPS = document.createElement("button");
    buttonPPS.classList.add("btn", "btn-block", "btn-outline-primary");
    buttonPPS.id = "PPS";
    buttonPPS.onclick = function () {
        TemplateCalc();
    };
    buttonPPS.innerText = "Promedio Ponderado Semestral";
    var buttonPPA = document.createElement("button");
    buttonPPA.classList.add("btn", "btn-block", "btn-outline-info");
    buttonPPA.id = "PPA";
    buttonPPA.onclick = function () {
        TemplateCalc("PPA", "ACUMULATIVO");
    };
    buttonPPA.innerText = "Promedio Ponderado Acumulativo";
    cardBody.appendChild(buttonPPS);
    cardBody.appendChild(buttonPPA);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    REPLACEDATA.appendChild(card);
}
function TemplateInput(Number) {
    return "<h5> Materia " + Number + "</h5>\n            <div class=\"row\">\n              <div class=\"col-sm\">\n                <div class=\"form-group\">\n                  <label for=\"\"><small>Nota</small></label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" id=\"nota-" + Number + "\" placeholder=\"Nota materia " + Number + "\">\n                </div>\n              </div>\n              <div class=\"col-sm\">\n                <div class=\"form-group\">\n                  <label for=\"\"><small>Creditos</small> </label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" id=\"creditos-" + Number + "\" placeholder=\"Creditos materia " + Number + "\">\n                </div>\n              </div>\n            </div>";
}
function TemplateQuestion(Tipo, Pregunta, PlaceHolder) {
    if (Tipo === void 0) { Tipo = "PPS"; }
    if (Pregunta === void 0) { Pregunta = "Cuántas materias das este semestre"; }
    if (PlaceHolder === void 0) { PlaceHolder = "Número de materias"; }
    console.log("Hello");
    var REPLACECALC = document.getElementById(Tipo + "-replace");
    REPLACECALC.innerHTML = "";
    var div_row = document.createElement("div");
    div_row.classList.add("row");
    var div_sm = document.createElement("div");
    div_sm.classList.add("col-sm");
    var div_form_group = document.createElement("div");
    div_form_group.classList.add("form-group");
    var label = document.createElement("label");
    label.innerText = "\u00BF" + Pregunta + "?";
    var input = document.createElement("input");
    input.classList.add("form-control", "form-control-sm");
    input.setAttribute("type", "text");
    input.setAttribute("type", "numero");
    input.setAttribute("placeholder", "" + PlaceHolder);
    input.id = "NUMERO";
    div_form_group.appendChild(label);
    div_form_group.appendChild(input);
    div_sm.appendChild(div_form_group);
    div_row.appendChild(div_sm);
    var div_row_send = document.createElement("div");
    div_row_send.classList.add("row");
    var div_sm_send_first = document.createElement("div");
    div_sm_send_first.classList.add("col-sm");
    div_sm_send_first.style.display = "grid";
    var div_sm_send_first_second = document.createElement("div");
    div_sm_send_first_second.classList.add("col-sm");
    var div_sm_send_second = document.createElement("div");
    div_sm_send_second.classList.add("col-sm");
    div_sm_send_second.style.display = "grid";
    var buttonSend = document.createElement("button");
    buttonSend.classList.add("btn", "btn-success");
    buttonSend.id = Tipo + "-send";
    buttonSend.innerHTML = "Enviar";
    var buttonReturn = document.createElement("button");
    buttonReturn.classList.add("btn", "btn-danger");
    buttonReturn.innerHTML = "Regresar";
    buttonReturn.style.display = "grid";
    buttonReturn.onclick = function () {
        selector();
    };
    div_sm_send_second.appendChild(buttonSend);
    div_sm_send_first.appendChild(buttonReturn);
    div_row_send.appendChild(div_sm_send_first);
    div_row_send.appendChild(div_sm_send_first_second);
    div_row_send.appendChild(div_sm_send_second);
    REPLACECALC.appendChild(div_row);
    REPLACECALC.appendChild(div_row_send);
}
function TemplateCalc(Tipo, Title) {
    if (Tipo === void 0) { Tipo = "PPS"; }
    if (Title === void 0) { Title = "SEMESTRAL"; }
    REPLACEDATA.innerHTML = "";
    var card = document.createElement("div");
    card.classList.add("card", "card-width");
    card.id = Tipo + "Calc";
    var cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.innerHTML = "PROMEDIO PONDERADO " + Title;
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.id = Tipo + "-replace";
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    REPLACEDATA.appendChild(card);
    if (Tipo == "PPS") {
        TemplateQuestion();
    }
    else {
        TemplateQuestion("PPA", "Cuántos semestres has cursado", "Número de semestres");
    }
}
init();
//# sourceMappingURL=index.js.map