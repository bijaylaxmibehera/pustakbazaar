import React, { useState,useContext } from "react";
import { v4 as uuid } from "uuid";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from "../../";
import "./Address.css";
import { AddressCard } from "./AddressCard";
import { AddressForm } from "./AddressForm";

export function AddressList({isAddressPage, selectedAddress, setSelectedAddress}) {
    const [isFormDisplayed, setIsFormDisplayed] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editableAddress, setEditableAddress] = useState(null);

    const { addresses,dataDispatch}=useContext(DataContext);

    const addressSelectHandler = (e) => {
        setSelectedAddress(addresses.find(({ id }) => id === e.target.value));
      };
    
      const newAddressFormSubmitHandler = (address) => {
        dataDispatch({
          type: "ADD_ADDRESS",
          payload: { ...address, id: uuid() },
        });
        toast.success("New Address Added");
      };
    
      const addressDeleteHandler = (addressId) => {
        dataDispatch({ type: "DELETE_ADDRESS", payload: addressId });
        toast.error("Address Deleted");
      };
    
      const addressEditHandler = (address) => {
        dataDispatch({ type: "EDIT_ADDRESS", payload: address });
        toast.success("Address Updated");
      };
    

  return (
    <>
      <div className="address-list">
      {addresses.length > 0 && !isAddressPage && (
        <h3>Choose a delivery address</h3>
      )}
      {!isEditing &&
        addresses.map((address) => {
          return (
            <AddressCard
              key={address.id}
              address={address}
              isAddressPage={isAddressPage}
              selectedAddress={selectedAddress}
              addressSelectHandler={addressSelectHandler}
              setEditableAddress={setEditableAddress}
              setIsEditing={setIsEditing}
              addressDeleteHandler={addressDeleteHandler}
            />
          );
        })}
      {isEditing && (
        <AddressForm
          onFormEdit={addressEditHandler}
          setIsEditing={setIsEditing}
          editableAddress={editableAddress}
          isEditingForm
        />
      )}
      {!isFormDisplayed && !isEditing && (
        <button
          className="add-new-address btn secondary"
          onClick={() => setIsFormDisplayed(true)}
        >
          Add New Address
        </button>
      )}
      {isFormDisplayed && (
        <AddressForm
          setIsFormDisplayed={setIsFormDisplayed}
          onFormSubmit={newAddressFormSubmitHandler}
        />
      )}
    </div>
    </>
  );
}
