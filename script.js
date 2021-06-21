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
    transactionsContainer: document.querySelector('#data-table'),

    addTransaction(transaction, index) {
        //criando o tr
        const tr = document.createElement('tr');
        //colocando o html dentro de tr
        tr.innerHTML = DOM.innerHTMLTransaction(transaction); 

        DOM.transactionsContainer.appendChild(tr)
    },

    
    innerHTMLTransaction(transaction) {


        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover Transação"></td>
        `

        return html;
    }
}


//para cada elemento dentro de transações, está rodando uma funcionalidade
transactions.forEach((transaction) => {
    DOM.addTransaction(transaction)
});