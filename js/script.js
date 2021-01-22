$(document).ready(function(){
    // NOMINO CONST PER LAVORARE CON QUESTI ELEMENTI 
    const colors = ['blue','orange','grey'];
    const contenitore = $('#container');
    let selezione = $('#selezione');

    // CREO LA CONST PER INSERIRE TUTTI I MIEI OGGETTI IN QEUSTO CASO ICONE 
    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        }
    ];

    // CON MOSTRA RIESCO AD AGGIUNGERE UN COLORE IN BASE AL TIPO SU OGNI ELEMENTO 
    const mostra = icons.map((element) =>{
        const [blue,orange,grey] = colors;
        if(element.type == 'animal'){
            return{
                ...element,
                colore : blue
            }
        }
        else if(element.type == 'vegetable'){
            return{
                ...element,
                colore : orange
            }
        }
        else{
            return{
                ...element,
                colore : grey
            }
        }
    })

    // STAMPO LA ARRAY ICONS CON AGGIUTA DI COLORE E LAVORERO SU DI ESSA 
    stampIcon(mostra,contenitore);
    
    // VISIALIZZO LE ICONS E LE COMANDO TRAMITE UN REMOVE PER RIMUOVERLE DAL DOM E DA CHANGE 
    selezione.change(function(){
        if(selezione.val() == 'all'){
            $('.vegetable').remove();
            $('.animal').remove();
            $('.user').remove();
            stampIcon(mostra,contenitore);
        }
        else if(selezione.val() == 'animali'){
            $('.animal').remove();
            stampIcon(mostra,contenitore);
            $('.vegetable').remove();
            $('.user').remove();
        }
        else if(selezione.val() == 'vegetali'){
            $('.vegetable').remove();
            stampIcon(mostra,contenitore);
            $('.animal').remove();
            $('.user').remove();
        }
        else if(selezione.val() == 'user'){
            $('.user').remove();
            stampIcon(mostra,contenitore);
            $('.vegetable').remove();
            $('.animal').remove();
        }
});

// FUNZIONI 
// funzione stampa 
    function stampIcon (array,container){
        // ciclo per predere tutti gli elementi della array 
        array.forEach((element) =>{
            // eseguo il destructuring per facilitarmi lo stamp degli oggetti 
            const {name,prefix,type,family,colore} = element;

            // appento tramite il seguento comando ogni oggetto al mio container 
            container.append(
                `
                <div class="icons  ${type}">
                    <i class="${family} ${prefix}${name}" style= "color:${colore}"></i>
                    <p>${name}</p>
                </div> 
                
                `
            )
        })
    } 
});