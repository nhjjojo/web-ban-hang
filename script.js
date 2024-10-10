async function fetchProducts() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/products'); // Địa chỉ API
        if (!response.ok) {
            throw new Error('Mất kết nối với backend');
        }
        const products = await response.json();
        const productList = document.getElementById('product-list');
        productList.innerHTML = ''; // Xóa danh sách cũ
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}`;
            productList.appendChild(li);
        });
    } catch (error) {
        console.error('Lỗi khi lấy sản phẩm:', error);
    }
}

// Gọi hàm fetchProducts khi trang được tải
window.onload = fetchProducts;

