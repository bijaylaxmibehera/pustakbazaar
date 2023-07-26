import React from "react";
import "./Address.css";
export function AddressCard({
  address,
  isAddressPage,
  selectedAddress,
  addressSelectHandler,
  addressDeleteHandler,
  setEditableAddress,
  setIsEditing,
}) {
  const { id, name, phone, city, state, pin, addressText } = address;
  return (
    <div className="address-card">
      {!isAddressPage && (
        <input
          type="radio"
          id={id}
          value={id}
          checked={selectedAddress?.id === id}
          onChange={addressSelectHandler}
          className="choose-addr"
        />
      )}
      <label htmlFor={id} className="address-label">
        <div className="address-details">
          <h4>{name}</h4>
          <p>{addressText}</p>
          <p>
            {city}-{pin}
          </p>
          <p>{state}</p>
          <p>
            <b>Phone:</b> {phone}
          </p>
        </div>
        {isAddressPage && (
          <div className="address-manage-btn-group">
            <button
              className="btn secondary edit_btn"
              onClick={() => {
                setEditableAddress(address);
                setIsEditing(true);
              }}
            >
              EDIT
            </button>
            <button
              className="btn danger delete_btn"
              onClick={() => addressDeleteHandler(id)}
            >
              DELETE
            </button>
          </div>
        )}
      </label>
    </div>
  );
}
