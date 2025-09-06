import React from 'react';

function CustomerForm({ formData, onFieldChange }) {
  return (
    <>
      <input
        name="name"
        value={formData.name}
        onChange={(e) => onFieldChange('name', e.target.value)}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={(e) => onFieldChange('email', e.target.value)}
        placeholder="Email"
        type="email"
        required
      />
      <input
        name="address"
        value={formData.address}
        onChange={(e) => onFieldChange('address', e.target.value)}
        placeholder="Address"
        required
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={(e) => onFieldChange('phone', e.target.value)}
        placeholder="Phone"
        type="tel"
        required
      />
    </>
  );
}

export default CustomerForm;
