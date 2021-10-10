let body = document.body;
let header = document.querySelector('.header');
let sideBar = document.querySelector('.sidebar');
let categoryBlocks = document.querySelectorAll('.category-item__block');
let categoryLinks = document.querySelectorAll('.category-item__link');
let productBlocks = document.querySelectorAll('.product-list__block');
let productButtons = document.querySelectorAll('.product-list__caption-button');
let productLinks = document.querySelectorAll('.product-list__caption-link');
let footer = document.querySelector('.footer');
let footerTexts = document.querySelectorAll('.footer__text');
let footerLink = document.querySelector('.footer__link');
let changer = document.querySelector('.theme-change');
let changerCheck = changer.firstElementChild;

changer.addEventListener('click', changeTheme);

function changeTheme() {
    if (changerCheck.checked) {
        body.classList.add('body_theme_dark');
        header.classList.add('header_theme_dark');
        sideBar.classList.add('theme_dark');
        footer.classList.add('footer_theme_dark');
        footerLink.classList.add('footer__link_theme_dark');

        categoryBlocks.forEach( (item) => item.classList.add('category-item__block_theme_dark') );
		categoryLinks.forEach( (item) => item.classList.add('category-item__link-theme_dark') );
        productBlocks.forEach( (item) => item.classList.add('theme_dark') );
		productButtons.forEach( (item) => item.classList.add('product-list__caption-button-theme_dark') );
        productLinks.forEach( (item) => item.classList.add('product-list__caption-link-theme_dark') );
        footerTexts.forEach( (item) => item.classList.add('footer_text_theme_dark') );
    } else {
        body.classList.remove('body_theme_dark');
        header.classList.remove('header_theme_dark');
        sideBar.classList.remove('theme_dark');
        footer.classList.remove('footer_theme_dark');
        footerLink.classList.remove('footer__link_theme_dark');

        categoryBlocks.forEach( (item) => item.classList.remove('category-item__block_theme_dark') );
        categoryLinks.forEach( (item) => item.classList.remove('category-item__link-theme_dark') );
		productBlocks.forEach( (item) => item.classList.remove('theme_dark') );
		productButtons.forEach( (item) => item.classList.remove('product-list__caption-button-theme_dark') );
        productLinks.forEach( (item) => item.classList.remove('product-list__caption-link-theme_dark') );
        footerTexts.forEach( (item) => item.classList.remove('footer_text_theme_dark') );
    }
}
