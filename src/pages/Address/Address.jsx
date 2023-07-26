import { AddressList } from "../../component/Addresses/AddressList";
import "./Address.css";

export function Address() {
  return (
    <>
      <div className="address-container">
        <div className="text-center">
          <h1>Address</h1>
        </div>
        <div className="address-wrapper">
          <AddressList isAddressPage />
        </div>
      </div>
    </>
  );
}
