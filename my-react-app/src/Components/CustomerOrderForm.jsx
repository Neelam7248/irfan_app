import React, { useState } from 'react';
import CustomerForm from './Customer';
import ProductSelector from './ProductSelector';

function CustomerOrder() {
  const [products, setProducts] = useState([]);
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const [productSelections, setProductSelections] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCustomerChange = (field, value) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  const handleProductSelect = selectedProducts => {
    setProductSelections(selectedProducts);
    setProducts(selectedProducts); // Optional: Sync product list if needed
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      ...customerData,
      items: productSelections,
    };

    try {
      const response = await fetch('/api/customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        alert('❌ ' + result.message);
      } else {
        alert('✅ Order placed successfully!');
        setSubmitted(true);

        // 🟢 Update frontend stock dynamically
        setProducts(prevProducts =>
          prevProducts.map(product => {
            const match = productSelections.find(
              selection => selection.productId === product._id
            );
            return match
              ? {
                  ...product,
                  stock: product.stock - match.quantity,
                }
              : product;
          })
        );
      }
    } catch (error) {
      console.error('Submit Error:', error);
      alert('🚨 Server Error: Order not placed');
    }
  };

  if (submitted) {
    return <h3>🎉 Thank you! Your order has been received.</h3>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>👤 Customer Info</h2>
      <CustomerForm
        formData={customerData}
        onFieldChange={handleCustomerChange}
      />

      <h2>🛍️ Select Products</h2>
      <ProductSelector onSelect={handleProductSelect} />

      <button
        type="submit"
        disabled={productSelections.length === 0}
        style={{ marginTop: '20px' }}
      >
        🧾 Place Order
      </button>
    </form>
  );
}

export default CustomerOrder;
