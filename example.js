function loadAndDisplayData() {
    d3.csv('data/purchase_orders.csv')
        .then(data => {
            const orderList = d3.select('#orderList');
            orderList.selectAll('li')
                .data(data)
                .enter()
                .append('li')
                .text(d => `${d.customerName} - Order ID: ${d.orderId} - Purchase Amount: ${d.purchaseAmount}`);
        })
        .catch(error => {
            console.error('Error loading the CSV file:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadAndDisplayData);
