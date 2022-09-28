const DATA = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Obesidade grave",
      obesity: "III",
    },
  ];

const IMCTABLE = document.querySelector('#imc-table');
const ALTURA = document.querySelector('#altura');
const PESO = document.querySelector('#peso');
const CALCULAR = document.querySelector('#calc-btn')

function createTable(DATA) {
DATA.forEach((item) => {
    const DIV = document.createElement('div')
    DIV.classList.add('table-data')

    const classification = document.createElement('p');
    classification.innerText = item.classification;

    const info = document.createElement('p');
    info.innerText = item.info;

    const obesity = document.createElement('p');
    obesity.innerText = item.obesity;

    DIV.appendChild(classification);
    DIV.appendChild(info);
    DIV.appendChild(obesity);

    IMCTABLE.appendChild(DIV);
});
}

function validacao(text) {
    return text.replace(/[^0-9,]/g,'')
}

[ALTURA, PESO].forEach((elemento) => {
    elemento.addEventListener('input', (e) => {
        const VALOR = validacao(e.target.value);

        e.target.value = VALOR;
    })
})

  createTable(DATA);