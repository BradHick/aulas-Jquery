
  var umaPropaganda = function() {
    var propagandas = ["O que vc acha de comprar uma moto?",
                      "O que vc acha de comprar um Iphne (no valor de uma casa)",
                      "O que vc acha de comprar um carro",
                      "O que vc acha de comprar um pen drive"
                    ];
    var posicaoPropaganda = Math.floor(propagandas.length * Math.random());
    var textoPropaganda = propagandas[posicaoPropaganda];
    var tr = $("<tr>").addClass("propaganda").append($("<td>"));
    tr.find("td").attr("colspan", 6).text(textoPropaganda);
    return tr;
  }

	var atualizaDados = function(){//atualização feita para todos os carrinhos da página
    var carrinhos = $(".carrinho");
    carrinhos.each(function(){
     var carrinho = $(this);
     var items = carrinho.find(".item-total:visible");
  		var total = 0;
  		for(var i=0; i < items.length; i++) {
  				var conteudo = $(items[i]).text();
  				var preco = parseFloat(conteudo);
  				total += preco;
  		}
  		carrinho.find(".valor-total").text(total);
  		carrinho.find(".quantidade-de-itens").text(items.length);
    });

	}

	var removeItem = function(event){
		event.preventDefault(); //evita que a página tete ir pra algum luga

		var self = $(this);
		self.closest("tr").hide();
		atualizaDados();


	}

  var undo = function(){
    var carrinho = $(this).closest(".carrinho");
    carrinho.find("tr:visible").removeClass("recuperado");
    var trs = carrinho.find("tr:hidden");
    trs.addClass("recuperado");
    trs.show();
    atualizaDados();
  }

var darDestaque  =function() {
  $(this).addClass("hovering")
}

var tiraDestaque  =function() {
  $(this).removeClass("hovering")
}


$("tbody tr").hover(darDestaque, tiraDestaque);


	var aposInicializado = function() {
		atualizaDados();
    $(".undo").click(undo);
		$(".remove-item").click(removeItem);

    $(".carrinho").each(function() {
      $(this).find("tr:nth-child(3n)").each(function(){
        umaPropaganda().insertAfter($(this));
      });

    });

	};

  $(aposInicializado);
