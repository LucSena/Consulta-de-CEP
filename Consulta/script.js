let input = document.querySelector('input[name="cep"]');
let button = document.querySelector('#btn');
let result = document.querySelector('#lista');
let card = document.querySelector('.card');
let span = document.createElement('span');
//----------------------------------------------------------------------------------------------------

function CEP() {
    let cep = input.value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.erro) {
                span.innerHTML = 'CEP não encontrado';
                card.appendChild(span);
                return;
            }
            span.innerHTML = '';
            let ul = document.createElement('ul');
            ul.setAttribute('class', 'list-group mb-3');
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item');
            let li2 = document.createElement('li');
            li2.setAttribute('class', 'list-group-item');
            let li3 = document.createElement('li');
            li3.setAttribute('class', 'list-group-item');
            let li4 = document.createElement('li');
            li4.setAttribute('class', 'list-group-item');
            let li5 = document.createElement('li');
            li5.setAttribute('class', 'list-group-item');


            let textnode = document.createTextNode(`CEP: ${data.cep}`);
            let textnode2 = document.createTextNode(`Logradouro: ${data.logradouro}`);
            let textnode3 = document.createTextNode(`Complemento: ${data.complemento}`);
            let textnode4 = document.createTextNode(`Bairro: ${data.bairro}`);
            let textnode5 = document.createTextNode(`Localidade: ${data.localidade}`);

            li.appendChild(textnode);
            li2.appendChild(textnode2);
            li3.appendChild(textnode3);
            li4.appendChild(textnode4);
            li5.appendChild(textnode5);

            ul.appendChild(li);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);

            result.appendChild(ul);

        })
        .catch(error => console.log(error));
}


//--------------------------------------------------------------------------------------------------------------
button.onclick = function () {
    let digite = input.value;

    if (digite !== "") {
        CEP();
    } else {

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-danger');
        let msg = document.createTextNode('Você precisa digitar algo para visualizar o resultado');
        span.appendChild(msg);
        card.appendChild(span);

        if (digite.length == 0) {
            card.appendChild(span);
        } else {
            card.removeChild(span);
        }
    }


}


//--------------------------------------------------------------------------------------------------------------




