import React, { useState, useEffect } from 'react';

function ProductSelector({ onSelect }) {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data=>{ console.log('Fetched products:', data);
        setProducts(data)});
     ;
   
  }, []);

  const handleQuantity = (id, qty) => {
    setSelected(prev => ({ ...prev, [id]: Number(qty) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = Object.entries(selected)
      .filter(([_, qty]) => qty > 0)
      .map(([productId, quantity]) => ({ productId, quantity }));

    onSelect(items);
  };

  return (
    <div>
      {products.map(p => (
        <div key={p._id} style={{ marginBottom: '10px' }}>
          <span>{p.name} (${p.price}) — Stock: {p.stock}</span>
          <input
            type="number"
            min="0"
            value={selected[p._id] || 0}
            onChange={(e) => handleQuantity(p._id, e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>✔️ Confirm Selection</button>
    {Object.entries(selected)
  .filter(([_, qty]) => qty > 0)
  .map(([productId, quantity]) => {
    const product = products.find(p => p._id === productId);
    return (
      <div key={productId} style={{ marginTop: '5px' }}>
        ✅ {product?.name || 'Unknown'} x {quantity}
      </div>
    );
  })}

    </div>
  );
}

export default ProductSelector;
