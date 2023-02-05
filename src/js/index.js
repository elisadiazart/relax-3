// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { DESTINY_ITEMS } from './constants';

const buttons = document.getElementById('buttons')
const text = document.getElementById('destiny-title')

let counterName= 0
let counterNumber= 0

const setName = () => {
    text.textContent = `${DESTINY_ITEMS.names[counterName]} se merece `
    if(counterName > DESTINY_ITEMS.names.length -2){
         counterName=0
    }
    else if(counterName < 0) {
        counterName = DESTINY_ITEMS.names.length -2
    }else counterName++
}

const setNumber = () => {
    text.textContent += DESTINY_ITEMS.numbers[counterNumber]
    console.log(counterNumber)
    if(counterNumber > DESTINY_ITEMS.numbers.length -2){
         counterNumber=0
    }
    else if(counterNumber < 0) {
        counterNumber = DESTINY_ITEMS.numbers.length -2
    }else counterNumber++
}



buttons.addEventListener('click', e => {
    text.textContent = ''
    if(e.target.dataset.item === 'name')setName()
    else if (e.target.dataset.item === 'number') setNumber()
})

console.log(DESTINY_ITEMS.numbers)
