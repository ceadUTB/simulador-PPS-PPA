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
function TemplateInput(Number, Tipo, mensaje) {
    if (Tipo === void 0) { Tipo = "PPS"; }
    if (mensaje === void 0) { mensaje = 'materia'; }
    var REPLACECALC = document.getElementById(Tipo + "-replace");
    REPLACECALC.innerHTML = "";
    var div_alert_info = document.createElement("div");
    div_alert_info.classList.add("alert", "alert-info");
    div_alert_info.setAttribute("role", "alert");
    div_alert_info.innerHTML = "Para ingresar números decimales usar el punto<b>.</b>";
    var div_alert = document.createElement("div");
    div_alert.classList.add("visibility-hidden", "alert", "alert-danger");
    div_alert.setAttribute("role", "alert");
    div_alert.innerText = "Las notas deben estar entre el rango de 0.5 a 5";
    REPLACECALC.appendChild(div_alert_info);
    REPLACECALC.appendChild(div_alert);
    if (Tipo == "PPS") {
        for (var _i = 0; _i < Number; _i++) {
            var h5 = document.createElement("h5");
            h5.innerText = "Materia " + (_i + 1);
            var row = document.createElement("div");
            row.classList.add('row');
            var col_sm = document.createElement('div');
            col_sm.classList.add('col-sm');
            var form_group = document.createElement('div');
            form_group.classList.add('form-group');
            var label = document.createElement('label');
            label.innerHTML = '<small>Nota:</small>';
            var input = document.createElement('input');
            input.classList.add('form-control', 'form-contro-sm');
            input.setAttribute('type', 'text');
            input.setAttribute('min', '0.5');
            input.setAttribute('max', '5');
            input.id = "nota-" + (_i + 1);
            input.setAttribute('placeholder', "Nota " + mensaje + " " + (_i + 1));
            form_group.appendChild(label);
            form_group.appendChild(input);
            col_sm.appendChild(form_group);
            var col_sm_creditos = document.createElement('div');
            col_sm_creditos.classList.add('col-sm');
            var form_group_creditos = document.createElement('div');
            form_group_creditos.classList.add('form-group');
            var label_creditos = document.createElement('label');
            label_creditos.innerHTML = '<small>Credito: </small>';
            var input_creditos = document.createElement('input');
            input_creditos.classList.add('form-control', 'form-contro-sm');
            input_creditos.setAttribute('type', 'text');
            input_creditos.id = "credito-" + (_i + 1);
            input_creditos.setAttribute('placeholder', "Creditos " + mensaje + " " + (_i + 1));
            form_group_creditos.appendChild(label_creditos);
            form_group_creditos.appendChild(input_creditos);
            col_sm_creditos.appendChild(form_group_creditos);
            REPLACECALC.appendChild(h5);
            row.appendChild(col_sm);
            row.appendChild(col_sm_creditos);
            REPLACECALC.appendChild(row);
        }
    }
    else {
        for (var _i = 0; _i < Number; _i++) {
            var h5 = document.createElement("h5");
            h5.innerText = "Semestre " + (_i + 1);
            var row = document.createElement("div");
            row.classList.add('row');
            var col_sm = document.createElement('div');
            col_sm.classList.add('col-sm');
            var form_group = document.createElement('div');
            form_group.classList.add('form-group');
            var label = document.createElement('label');
            label.innerHTML = '<small>Nota:</small>';
            var input = document.createElement('input');
            input.classList.add('form-control', 'form-contro-sm');
            input.setAttribute('type', 'text');
            input.id = "nota-" + (_i + 1);
            input.setAttribute('placeholder', "Nota " + mensaje + " " + (_i + 1));
            form_group.appendChild(label);
            form_group.appendChild(input);
            col_sm.appendChild(form_group);
            REPLACECALC.appendChild(h5);
            row.appendChild(col_sm);
            REPLACECALC.appendChild(row);
        }
    }
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
    var buttonReturn = document.createElement("button");
    buttonReturn.classList.add("btn", "btn-danger");
    buttonReturn.innerHTML = "Regresar";
    buttonReturn.style.display = "grid";
    buttonReturn.onclick = function () {
        selector();
    };
    var buttonSend = document.createElement("button");
    buttonSend.classList.add("btn", "btn-success");
    buttonSend.innerHTML = "Enviar";
    buttonSend.onclick = function () {
        if (Calc(Number, Tipo) != 0) {
            ShowCalc(Tipo, Calc(Number, Tipo));
        }
        else {
            div_alert.classList.remove("visibility-hidden");
        }
    };
    div_sm_send_second.appendChild(buttonSend);
    div_sm_send_first.appendChild(buttonReturn);
    div_row_send.appendChild(div_sm_send_first);
    div_row_send.appendChild(div_sm_send_first_second);
    div_row_send.appendChild(div_sm_send_second);
    REPLACECALC.appendChild(div_row_send);
}
function TemplateQuestion(Tipo, Pregunta, PlaceHolder) {
    if (Tipo === void 0) { Tipo = "PPS"; }
    if (Pregunta === void 0) { Pregunta = "Cuántas materias das este semestre"; }
    if (PlaceHolder === void 0) { PlaceHolder = "Número de materias"; }
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
    buttonSend.onclick = function () {
        Tipo == "PPS" ? TemplateInput(Number(input.value), Tipo) : TemplateInput(Number(input.value), Tipo, 'Semestre');
    };
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
function ShowCalc(Tipo, Promedio) {
    if (Tipo === void 0) { Tipo = "PPS"; }
    var REPLACECALC = document.getElementById(Tipo + "-replace");
    REPLACECALC.innerHTML = "";
    var div_row = document.createElement("div");
    div_row.classList.add("row");
    var div_sm = document.createElement("div");
    div_sm.classList.add("col-sm");
    var h5 = document.createElement('h5');
    h5.innerText = "Su promedio (" + Tipo + ") es:";
    var div = document.createElement('div');
    div.classList.add('bg-info');
    var h4 = document.createElement('h4');
    h4.classList.add('text-center', 'text-white');
    h4.innerText = String(Promedio);
    div_sm.appendChild(h5);
    div.appendChild(h4);
    div_sm.appendChild(div);
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
    var buttonReturn = document.createElement("button");
    buttonReturn.classList.add("btn", "btn-danger");
    buttonReturn.innerHTML = "Regresar";
    buttonReturn.style.display = "grid";
    buttonReturn.onclick = function () {
        selector();
    };
    div_sm_send_first.appendChild(buttonReturn);
    div_row_send.appendChild(div_sm_send_first);
    div_row_send.appendChild(div_sm_send_first_second);
    div_row_send.appendChild(div_sm_send_second);
    REPLACECALC.appendChild(div_row);
    REPLACECALC.appendChild(div_row_send);
}
function Calc(Numero, Tipo) {
    if (Tipo === void 0) { Tipo = "PPS"; }
    if (Tipo == "PPS") {
        var sumatoria = 0;
        var creditos = 0;
        for (var _j = 0; _j < Numero; _j++) {
            if (Number(document.getElementById("nota-" + (_j + 1)).value) >= 0.5 && Number(document.getElementById("nota-" + (_j + 1)).value) <= 5) {
                sumatoria = sumatoria + (Number(document.getElementById("nota-" + (_j + 1)).value) * Number(document.getElementById("credito-" + (_j + 1)).value));
                creditos = creditos + Number(document.getElementById("credito-" + (_j + 1)).value);
            }
            else {
                return 0;
            }
        }
        return sumatoria / creditos;
    }
    else {
        var sumatoria = 0;
        for (var _i = 0; _i < Numero; _i++) {
            if (Number(document.getElementById("nota-" + (_i + 1)).value) >= 0.5 && Number(document.getElementById("nota-" + (_i + 1)).value) <= 5) {
                sumatoria = sumatoria + Number(document.getElementById("nota-" + (_i + 1)).value);
            }
            else {
                return 0;
            }
        }
        return sumatoria / Numero;
    }
}
init();
//# sourceMappingURL=index.js.map