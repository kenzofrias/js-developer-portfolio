
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement

        const isOpen = acordeon.classList.contains('open')
        //CONTAINS CHECA SE HÁ A CLASSE 'OPEN' DENTRO DA LISTA DE CLASSES DO ACORDEON (DEVOLVE PARA A CONSTANTE TRUE OU FALSE)

        if(isOpen){
            acordeon.classList.remove('open')
        }else{
            acordeon.classList.add('open')
        }
    })
})