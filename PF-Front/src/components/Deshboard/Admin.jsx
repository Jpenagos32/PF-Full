import React from 'react'

const Admin = ({ userData }) => {
  return (
    <div>
    
      <h2>My Account</h2>
      <h2>soy un admin</h2>
      {userData ? (
        <div>
          <p>Email: {userData.user_email}</p>
          <p>First Name: {userData.user_first_name}</p>
          <p>Last Name: {userData.user_last_name}</p>
          <p>Phone: {userData.phone}</p>
          <p>Billing Address: {userData.billing.billing_address}</p>
          <p>City: {userData.billing.city}</p>
          <p>Country: {userData.billing.country}</p>
          <p>Zip Code: {userData.billing.zip_code}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </div>
  )
}

export default Admin;