let REPLACEDATA: HTMLElement = <HTMLElement> document.getElementById("replace");


function init(){
  selector()
}

function selector(){
  REPLACEDATA.innerHTML = ""
  let card:HTMLElement = <HTMLElement> document.createElement("div")
  card.classList.add("card","card-width")
  card.id = `SELECTOR`

  let cardHeader:HTMLElement = <HTMLElement> document.createElement("div")
  cardHeader.classList.add("card-header")
  cardHeader.innerHTML = `Selecciona la opción que deseas:`

  let cardBody:HTMLElement = <HTMLElement> document.createElement("div")
  cardBody.classList.add("card-body")

  let buttonPPS:HTMLElement = <HTMLElement> document.createElement("button")
  buttonPPS.classList.add("btn","btn-block","btn-outline-primary")
  buttonPPS.id="PPS"
  buttonPPS.onclick = ()=>{
    TemplateCalc()
  }
  buttonPPS.innerText = "Promedio Ponderado Semestral"

  let buttonPPA:HTMLElement = <HTMLElement> document.createElement("button")
  buttonPPA.classList.add("btn","btn-block","btn-outline-info")
  buttonPPA.id="PPA"
  buttonPPA.onclick = ()=>{
    TemplateCalc("PPA","ACUMULATIVO")
  }
  buttonPPA.innerText = "Promedio Ponderado Acumulativo"

  cardBody.appendChild(buttonPPS)
  cardBody.appendChild(buttonPPA)

  card.appendChild(cardHeader)
  card.appendChild(cardBody)

  REPLACEDATA.appendChild(card)
}

function TemplateInput(Number: number){
    return `<h5> Materia ${Number}</h5>
            <div class="row">
              <div class="col-sm">
                <div class="form-group">
                  <label for=""><small>Nota</small></label>
                  <input type="text" class="form-control form-control-sm" id="nota-${Number}" placeholder="Nota materia ${Number}">
                </div>
              </div>
              <div class="col-sm">
                <div class="form-group">
                  <label for=""><small>Creditos</small> </label>
                  <input type="text" class="form-control form-control-sm" id="creditos-${Number}" placeholder="Creditos materia ${Number}">
                </div>
              </div>
            </div>`
}

function TemplateQuestion(Tipo:string = "PPS",Pregunta: string = "Cuántas materias das este semestre", PlaceHolder: string = "Número de materias"){
  console.log("Hello")
  let REPLACECALC:HTMLElement = <HTMLElement> document.getElementById(`${Tipo}-replace`)
  REPLACECALC.innerHTML = ""

  let div_row:HTMLElement = <HTMLElement> document.createElement("div")
  div_row.classList.add("row")

  let div_sm:HTMLElement = <HTMLElement> document.createElement("div")
  div_sm.classList.add("col-sm")

  let div_form_group:HTMLElement = <HTMLElement> document.createElement("div")
  div_form_group.classList.add("form-group")

  let label:HTMLElement = <HTMLElement> document.createElement("label")
  label.innerText = `¿${Pregunta}?`

  let input:HTMLElement = <HTMLElement> document.createElement("input")
  input.classList.add("form-control","form-control-sm")
  input.setAttribute("type","text")
  input.setAttribute("type","numero")
  input.setAttribute("placeholder",`${PlaceHolder}`)
  input.id = "NUMERO"

  div_form_group.appendChild(label)
  div_form_group.appendChild(input)
  div_sm.appendChild(div_form_group)
  div_row.appendChild(div_sm)


  let div_row_send:HTMLElement = <HTMLElement> document.createElement("div")
  div_row_send.classList.add("row")

  let div_sm_send_first:HTMLElement = <HTMLElement> document.createElement("div")
  div_sm_send_first.classList.add("col-sm")
  div_sm_send_first.style.display = "grid"

  let div_sm_send_first_second:HTMLElement = <HTMLElement> document.createElement("div")
  div_sm_send_first_second.classList.add("col-sm")

  let div_sm_send_second:HTMLElement = <HTMLElement> document.createElement("div")
  div_sm_send_second.classList.add("col-sm")
  div_sm_send_second.style.display = "grid"

  let buttonSend:HTMLElement = <HTMLElement> document.createElement("button")
  buttonSend.classList.add("btn", "btn-success")
  buttonSend.id = `${Tipo}-send`
  buttonSend.innerHTML ="Enviar"

  let buttonReturn:HTMLElement = <HTMLElement> document.createElement("button")
  buttonReturn.classList.add("btn", "btn-danger")
  buttonReturn.innerHTML ="Regresar"
  buttonReturn.style.display = "grid"
  buttonReturn.onclick = () => {
    selector()
  }

  div_sm_send_second.appendChild(buttonSend)
  div_sm_send_first.appendChild(buttonReturn)
  div_row_send.appendChild(div_sm_send_first)
  div_row_send.appendChild(div_sm_send_first_second)
  div_row_send.appendChild(div_sm_send_second)

  REPLACECALC.appendChild(div_row)
  REPLACECALC.appendChild(div_row_send)
}

function TemplateCalc(Tipo: string = "PPS", Title:string ="SEMESTRAL"){
  REPLACEDATA.innerHTML =""
  let card:HTMLElement = <HTMLElement> document.createElement("div")
  card.classList.add("card","card-width")
  card.id = `${Tipo}Calc`

  let cardHeader:HTMLElement = <HTMLElement> document.createElement("div")
  cardHeader.classList.add("card-header")
  cardHeader.innerHTML = `PROMEDIO PONDERADO ${Title}`

  let cardBody:HTMLElement = <HTMLElement> document.createElement("div")
  cardBody.classList.add("card-body")
  cardBody.id = `${Tipo}-replace`

  card.appendChild(cardHeader)
  card.appendChild(cardBody)

  REPLACEDATA.appendChild(card)

  if(Tipo == "PPS"){
    TemplateQuestion()
  }else{
    TemplateQuestion("PPA", "Cuántos semestres has cursado", "Número de semestres")
  }

}

init()
