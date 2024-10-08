const orderDetails = {
    orderNumber: "ORD-123456",
    status: "In Transit",
    estimatedDelivery: "June 15, 2023",
    currentLocation: "Distribution Center, New York",
    shippingAddress: "123 Main St, Anytown, USA 12345",
    orderDate: "June 10, 2023",
    shippingMethod: "Express Shipping",
    timeline: [
      { status: "Order Placed", date: "June 10, 2023", time: "10:30 AM", completed: true, icon: 'fa-check-circle', color: 'text-green-500' },
      { status: "Processing", date: "June 11, 2023", time: "2:45 PM", completed: true, icon: 'fa-check-circle', color: 'text-green-500' },
      { status: "Shipped", date: "June 12, 2023", time: "9:15 AM", completed: true, icon: 'fa-truck', color: 'text-blue-500' },
      { status: "In Transit", date: "June 13, 2023", time: "11:20 AM", completed: false, icon: 'fa-shipping-fast', color: 'text-yellow-500' },
      { status: "Out for Delivery", date: "", time: "", completed: false, icon: 'fa-truck', color: 'text-gray-500' },
      { status: "Delivered", date: "", time: "", completed: false, icon: 'fa-box', color: 'text-gray-500' },
    ],
    items: [
      { name: "Wireless Headphones", quantity: 1, price: "$129.99" },
      { name: "Smartphone Case", quantity: 2, price: "$24.99" },
    ]
  }

  // Populate order details
  document.getElementById('orderNumber').textContent = orderDetails.orderNumber;
  document.getElementById('status').textContent = orderDetails.status;
  document.getElementById('estimatedDelivery').textContent = orderDetails.estimatedDelivery;
  document.getElementById('currentLocation').textContent = orderDetails.currentLocation;
  document.getElementById('shippingAddress').textContent = orderDetails.shippingAddress;
  document.getElementById('orderDate').textContent = orderDetails.orderDate;
  document.getElementById('shippingMethod').textContent = orderDetails.shippingMethod;

  // Populate timeline
  const timelineContainer = document.getElementById('timeline');
  orderDetails.timeline.forEach(item => {
    const row = document.createElement('tr');
    row.classList.add('border-b');
    row.innerHTML = `
      <td class="py-2 px-4 flex items-center">
        <i class="fas ${item.icon} ${item.color}"></i>
        <span class="ml-2">${item.status}</span>
      </td>
      <td class="py-2 px-4">${item.date || '-'}</td>
      <td class="py-2 px-4">${item.time || '-'}</td>
    `;
    timelineContainer.appendChild(row);
  });

  // Populate items
  const itemsContainer = document.getElementById('items');
  orderDetails.items.forEach(item => {
    const row = document.createElement('tr');
    row.classList.add('border-b');
    row.innerHTML = `
      <td class="py-2 px-4">${item.name}</td>
      <td class="py-2 px-4">${item.quantity}</td>
      <td class="py-2 px-4">${item.price}</td>
    `;
    itemsContainer.appendChild(row);
  });