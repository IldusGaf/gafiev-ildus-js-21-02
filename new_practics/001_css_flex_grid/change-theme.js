const changeTheme = document.querySelector('.change-theme__checkbox');
const body = document.body;
const sidebar = document.querySelector('.sidebar');
const category = document.querySelectorAll('.category-block__item');
const products = document.querySelectorAll('.product__list-block-item');
const footer = document.querySelector('.footer');

const changeColor = () => {
    if (changeTheme.checked) {
        body.classList.add('body_theme_dark');
        sidebar.classList.add('theme_dark');
        category.forEach((el)=>el.classList.add('theme_dark'));
        products.forEach((el)=>el.classList.add('theme_dark'));
        footer.classList.add('theme_dark');

    } else {
        body.classList.remove('body_theme_dark');
        sidebar.classList.remove('theme_dark');
        category.forEach((el)=>el.classList.remove('theme_dark'));
        products.forEach((el)=>el.classList.remove('theme_dark'));
        footer.classList.remove('theme_dark')
    }

}

changeTheme.addEventListener('click', changeColor)
