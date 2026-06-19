var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    /*
    <div class="lista-produto-single">
         <h3>RedBull</h3>
         <h3 class="price-produto"><span>R$20,00</span></h3>
    </div>
    */

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map(function(val){
        soma+=parseFloat(val.valor);

        listaProdutos.innerHTML+=`
        <div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
        <button name="excluir" class="excluir-produto">Excluir</button>
   </div>
        `;
    })
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$'+soma;

    
});

document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    items = [];
    
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML= "R$0";
})

document.querySelector('.lista-produtos')
.addEventListener('click', (e) => {
    if (e.target.classList.contains('excluir-produto')) {

        let botoes = document.querySelectorAll('.excluir-produto');

        for (let i = 0; i < botoes.length; i++) {

            if (botoes[i] === e.target) {

                items.splice(i, 1); // remove do array

                renderizar(); // atualiza tela

                break;
            }
        }
    }
});

function renderizar() {

    let listaProdutos = document.querySelector('.lista-produtos');
    listaProdutos.innerHTML = "";

    let soma = 0;

    items.forEach((val) => {
        soma += parseFloat(val.valor);

        listaProdutos.innerHTML += `
        <div class="lista-produto-single">
            <h3>${val.nome}</h3>
            <h3 class="price-produto"><span>R$${val.valor}</span></h3>
            <button class="excluir-produto">Excluir</button>
        </div>
        `;
    });

    document.querySelector('.soma-produto h1').innerHTML = 'R$' + soma.toFixed(2);
}
