//ciclo for

//creazione array
let lista = [
    'pane',
    'carne',
    'uova',
    'pesce',
    'piselli',
    'sugo'
];

//collegamento al div in cui deve apparire in html

let shop_list = document.getElementById('shop');

//creazione del ciclo

for(let i=0; i<lista.length; i++){

    //item assume il valore di lista di tutti gli elementi nella array
    
    let item = lista[i];

    //list item è uguale a una serie di li contenenti gli elementi dell'array

    let list_item = `<li>${item}</li>`;


    //infine shop_list si collega con innerhtml a list item, il segno += consente che venga stampata la sequenza

    shop_list.innerHTML += list_item;

    //nb. se io non metto il più vicino a list_item mi stampa solo sugo che è l'ultimo elemento dell'array
}


let lista_due = [
    'cereali',
    'pasta',
    'gelato',
    'seppie',
    'ceci',
    'pesto'
];

let cena = document.getElementById('shop-due');

let a=0;

  while (a<lista_due.length){
      

      let item_due = lista_due[a];


      let list_itemdue = `<li>${item_due}</li>`;

      cena.innerHTML += list_itemdue;

      a++;

 }



