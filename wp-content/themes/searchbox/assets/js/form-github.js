var appForm = document.querySelector("#app form");
var listaEl = document.querySelector("#app ul");

var xhttp = new XMLHttpRequest();
var url_base = 'https://api.github.com/';

var lista = [];

appForm.onsubmit = buscarRepo;

function buscarRepo(e){
	e.preventDefault();

	var user = document.getElementById("input_user").value;
	if(user.length === 0) {
		alert("Por favor, preencha este campo");
		return;
	}
	//variavel para procurar por usuario
	//var url = url_base + 'users/' + user + '/repos';
	var url = url_base + 'search/repositories?q=' + user;
	xhttp.open('GET', url);
	xhttp.send();

	xhttp.onreadystatechange = function(){
		if(xhttp.readyState === 4){
			if(xhttp.status === 200){
				var result = JSON.parse(xhttp.responseText);
				//console.log(result);
				//Procurando por usuarios
				// lista = result.map(function(item){
					// return { 
						// name: item.name, 
						// description: item.description, 
						// html_url: item.html_url 
					// };
				// });
				
				lista = result.items.map(function(item){
					return { 
						name: item.name, 
						description: item.description, 
						html_url: item.html_url 
					};
				});
				renderLista();
			}
			else{
				alert('Falha ao buscar repositorios. Tente novamente mais tarde.');
			}
		}
	}
}

function renderLista(){
	listaEl.innerHTML = '';
// Criando tabela de resultados
	for(item of lista){
		var nameEl = document.createElement('strong');
		nameEl.appendChild(document.createTextNode(item.name));

		var descriptionEl = document.createElement('p');
		descriptionEl.appendChild(document.createTextNode(item.description));

		var urlEl = document.createElement('a');
		urlEl.setAttribute('href', item.html_url);
		urlEl.setAttribute('target', '_blank');
		urlEl.appendChild(document.createTextNode(item.html_url));

		var itemEl = document.createElement('li');
		itemEl.appendChild(nameEl);
		itemEl.appendChild(descriptionEl);
		itemEl.appendChild(urlEl);

		listaEl.appendChild(itemEl);
	}
}
