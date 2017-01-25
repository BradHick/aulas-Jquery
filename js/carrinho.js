

	var atualizaDados = function(){
		var items = $(".item-total");
		var total = 0;
		for(var i=0; i < items.length; i++) {
				var conteudo = $(items[i]).text();
				var preco = parseFloat(conteudo);
				total += preco;
		}
		$("#valor-total").text(total);
		$("#quantidade-de-itens").text(items.length);
	}

	var removeItem = function(event){
		event.preventDefault(); //evita que a página tete ir pra algum luga

		var self = $(this);
		self.closest("tr").remove();
		atualizaDados();


	}

	var aposInicializado = function() {
		atualizaDados();
		$(".remove-item").click(removeItem);
	};

  $(aposInicializado);
