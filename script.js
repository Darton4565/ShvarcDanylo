function searchProducts() {
    var searchInput = document.getElementById('keyword').value.toLowerCase();
    var products = document.querySelectorAll('#content .product_gallery');
    
    products.forEach(function(product) {
        var name = product.getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (name.includes(searchInput)) {
            product.style.display = ''; // Показати продукт
        } else {
            product.style.display = 'none'; // Сховати продукт
        }
    });
}

// Додаємо обробник події 'keyup' до текстового поля пошуку
document.getElementById('keyword').addEventListener('keyup', searchProducts);