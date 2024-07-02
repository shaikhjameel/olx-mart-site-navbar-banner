/*<!-- search bar script-->*/

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
	searchForm.classList.toggle('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');


}
/*<!-- end  search bar script-->*/






/*<!-- cart script-->*/

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
	shoppingCart.classList.toggle('active');
	searchForm.classList.toggle('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}

/*<!-- end  cart script-->*/





// *<!-- login form script-->*/

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
	loginForm.classList.toggle('active');
	shoppingCart.classList.remove('active');
	searchForm.classList.remove('active');
	navbar.classList.remove('active');


}

/*<!-- end  login form script-->*/


// / *<!-- media queries navbar script-->*/

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
	navbar.classList.toggle('active');
	loginForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	searchForm.classList.remove('active');
	
}

/*<!-- end  media queries script-->*/


/*<!-- login search manu script-->*/

window.onscroll = () =>
{
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}


/*<!-- end login search manu script-->*/
