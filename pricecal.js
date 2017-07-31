	var price = document.querySelector('[name=price-input]');
	var quentity = document.querySelector('[name=quentity-input]');
	var total = document.querySelector('.totalprice');

	function calculatePrice(){
		var totalprice,
		currentprice = price.value,
		currentquentity = quentity.value;
		totalprice = currentquentity * currentprice;
		total.innerText =totalprice;
		document.querySelector('.quentity').innerText = currentquentity;
	}
	calculatePrice();
	price.addEventListener('change',calculatePrice);
	quentity.addEventListener('change',calculatePrice);