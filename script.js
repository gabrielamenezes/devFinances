const modal = {
    open(){
        //abrir modal
        //adicionar a classe active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },

    close() {
        //fechar modal
        //remover a classe active do modal

        document.querySelector('.modal-overlay').classList.remove('active')
    }
};
const transactions = [{
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021'
},
{
    id: 2,
    description: 'Website',
    amount: -500000,
    date: '23/01/2021'
},
{
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021'
}
];

const Transaction = {
    incomes() {
        // somar as entradas
    },
    expenses() {
        //somar as saídas
    },
    total() {
        //entradas - saídas
    }
};

//Eu preciso sustituir os dados do HMTL com os dados do Javascript
// os dados tem que fazer parte do Javascript, ser dinâmico


const DOM = {
    //transactions container recebe o tbody do HTML
    transactionsContainer: document.querySelector('#data-table'),
    //add transactions é executada, recebendo como parâmetro um dos objetos de transactions
    addTransaction(transaction, index) {
        //criando o tr
        const tr = document.createElement('tr');
        //colocando o html dentro de tr
        //chamando a 2 funcionalidade de DOM passando como parâmetro um dos objetos de transactions (recebido por parâmetro anteriormente)
        tr.innerHTML = DOM.innerHTMLTransaction(transaction); 

        DOM.transactionsContainer.appendChild(tr)
        //FINAL - E por fim, tr é adicionado como filho de TBODY
    },


    innerHTMLTransaction(transaction) {

        //html recebe um html que inclui dentro dele dinamicamente os valores de transaction 
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover Transação"></td>
        `
        //retorna html para o tr.innerHTML, ou seja, o html agora fica dentro do tr 
        return html;
    }
}


//para cada elemento dentro de transações, está rodando uma funcionalidade
transactions.forEach((transaction) => {
    //para todo item(transaction) do array transactions, chame a funcionalidade addTransaction do objeto DOM passando transaction(obj) como parâmetro
    DOM.addTransaction(transaction)
});