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

function TemplateInput(Number: number,Tipo:string = "PPS", mensaje: string = 'materia'){
    let REPLACECALC:HTMLElement = <HTMLElement> document.getElementById(`${Tipo}-replace`)
     REPLACECALC.innerHTML = ""

    if (Tipo == "PPS") {
      for(var _i = 0; _i < Number ; _i++){
        let h5: HTMLElement = <HTMLElement> document.createElement("h5")
        h5.innerText = `Materia ${_i+1}`

        let row: HTMLElement = <HTMLElement> document.createElement("div")
        row.classList.add('row')

        let col_sm: HTMLElement = <HTMLElement> document.createElement('div')
        col_sm.classList.add('col-sm')

        let form_group:HTMLElement = <HTMLElement> document.createElement('div')
        form_group.classList.add('form-group')

        let label:HTMLElement = <HTMLElement> document.createElement('label')
        label.innerHTML = '<small>Nota:</small>'

        let input:HTMLElement = <HTMLElement> document.createElement('input')
        input.classList.add('form-control','form-contro-sm')
        input.setAttribute('type','text')
        input.id = `nota-${_i+1}`
        input.setAttribute('placeholder',`Nota ${mensaje} ${_i+1}`)

        form_group.appendChild(label)
        form_group.appendChild(input)
        col_sm.appendChild(form_group)

        let col_sm_creditos: HTMLElement = <HTMLElement> document.createElement('div')
        col_sm_creditos.classList.add('col-sm')

        let form_group_creditos:HTMLElement = <HTMLElement> document.createElement('div')
        form_group_creditos.classList.add('form-group')

        let label_creditos:HTMLElement = <HTMLElement> document.createElement('label')
        label_creditos.innerHTML = '<small>Credito: </small>'

        let input_creditos:HTMLElement = <HTMLElement> document.createElement('input')
        input_creditos.classList.add('form-control','form-contro-sm')
        input_creditos.setAttribute('type','text')
        input_creditos.id = `credito-${_i+1}`
        input_creditos.setAttribute('placeholder',`Creditos ${mensaje} ${_i+1}`)

        form_group_creditos.appendChild(label_creditos)
        form_group_creditos.appendChild(input_creditos)
        col_sm_creditos.appendChild(form_group_creditos)

        REPLACECALC.appendChild(h5)
        row.appendChild(col_sm)
        row.appendChild(col_sm_creditos)

        REPLACECALC.appendChild(row)
      }

    }else{
      for(var _i = 0; _i < Number ; _i++){
        let h5: HTMLElement = <HTMLElement> document.createElement("h5")
        h5.innerText = `Semestre ${_i+1}`

        let row: HTMLElement = <HTMLElement> document.createElement("div")
        row.classList.add('row')

        let col_sm: HTMLElement = <HTMLElement> document.createElement('div')
        col_sm.classList.add('col-sm')

        let form_group:HTMLElement = <HTMLElement> document.createElement('div')
        form_group.classList.add('form-group')

        let label:HTMLElement = <HTMLElement> document.createElement('label')
        label.innerHTML = '<small>Nota:</small>'

        let input:HTMLElement = <HTMLElement> document.createElement('input')
        input.classList.add('form-control','form-contro-sm')
        input.setAttribute('type','text')
        input.id = `nota-${_i+1}`
        input.setAttribute('placeholder',`Nota ${mensaje} ${_i+1}`)

        form_group.appendChild(label)
        form_group.appendChild(input)
        col_sm.appendChild(form_group)

        REPLACECALC.appendChild(h5)
        row.appendChild(col_sm)

        REPLACECALC.appendChild(row)
      }
    }
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



    let buttonReturn:HTMLElement = <HTMLElement> document.createElement("button")
    buttonReturn.classList.add("btn", "btn-danger")
    buttonReturn.innerHTML ="Regresar"
    buttonReturn.style.display = "grid"
    buttonReturn.onclick = () => {
      selector()
    }

    let buttonSend:HTMLElement = <HTMLElement> document.createElement("button")
    buttonSend.classList.add("btn", "btn-success")
    buttonSend.innerHTML ="Enviar"
    buttonSend.onclick = () => {
      ShowCalc(Tipo,Calc(Number,Tipo))
    }

    div_sm_send_second.appendChild(buttonSend)
    div_sm_send_first.appendChild(buttonReturn)
    div_row_send.appendChild(div_sm_send_first)
    div_row_send.appendChild(div_sm_send_first_second)
    div_row_send.appendChild(div_sm_send_second)

    REPLACECALC.appendChild(div_row_send)
}

function TemplateQuestion(Tipo:string = "PPS",Pregunta: string = "Cuántas materias das este semestre", PlaceHolder: string = "Número de materias"){
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

  let input:HTMLInputElement = <HTMLInputElement> document.createElement("input")
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
  buttonSend.onclick = () => {
    Tipo == "PPS" ? TemplateInput(Number(input.value),Tipo) : TemplateInput(Number(input.value),Tipo, 'Semestre')
  }

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

function ShowCalc(Tipo:string = "PPS",Promedio: number){
  let REPLACECALC:HTMLElement = <HTMLElement> document.getElementById(`${Tipo}-replace`)
  REPLACECALC.innerHTML = ""

  let div_row:HTMLElement = <HTMLElement> document.createElement("div")
  div_row.classList.add("row")

  let div_sm:HTMLElement = <HTMLElement> document.createElement("div")
  div_sm.classList.add("col-sm")

  let h5 : HTMLElement = <HTMLElement> document.createElement('h5')
  h5.innerText = "Su nota es: "

  let div : HTMLElement = <HTMLElement> document.createElement('div')
  div.classList.add('bg-info')

  let h4:HTMLElement = <HTMLElement> document.createElement('h4')
  h4.classList.add('text-center','text-white')
  h4.innerText = String(Promedio)

  div_sm.appendChild(h5)
  div.appendChild(h4)
  div_sm.appendChild(div)
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


  let buttonReturn:HTMLElement = <HTMLElement> document.createElement("button")
  buttonReturn.classList.add("btn", "btn-danger")
  buttonReturn.innerHTML ="Regresar"
  buttonReturn.style.display = "grid"
  buttonReturn.onclick = () => {
    selector()
  }

  div_sm_send_first.appendChild(buttonReturn)
  div_row_send.appendChild(div_sm_send_first)
  div_row_send.appendChild(div_sm_send_first_second)
  div_row_send.appendChild(div_sm_send_second)

  REPLACECALC.appendChild(div_row)
  REPLACECALC.appendChild(div_row_send)
}

function Calc(Numero: number, Tipo: string = "PPS" ):number{
  if(Tipo == "PPS"){
    let sumatoria: number = 0
    let creditos: number = 0
    for(var _j = 0; _j < Numero ; _j++){
      sumatoria = sumatoria + ( Number((<HTMLInputElement> document.getElementById(`nota-${_j+1}`)).value) * Number((<HTMLInputElement> document.getElementById(`credito-${_j+1}`)).value)  )
      creditos = creditos + Number((<HTMLInputElement> document.getElementById(`credito-${_j+1}`)).value)
    }
    return sumatoria/creditos
  }else{
    let sumatoria: number = 0
    for(var _i = 0; _i < Numero ; _i++){
      sumatoria = sumatoria +  Number((<HTMLInputElement> document.getElementById(`nota-${_i+1}`)).value)
    }
      return sumatoria/Numero
  }
}
init()
