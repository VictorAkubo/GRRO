import React from "react";
import OrderNav from "../components/OrderNav";
import CustomersTable from "../components/customers/CustomersTable";

const Customers = () => {
  let sampleData = [
    {
      user: "Victor PAul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },

    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },

    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor Bobo",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
    {
      user: "Victor raul",
      email: "victorugbede89@gmail.com",
      "Profile Picture": "/assets/download.png",
      date: "12 Dec 2024",
      "Phone Number": "0000000000",
    },
  ];
  return (
    <div>
      <OrderNav />
      <CustomersTable data={sampleData} rowsPerPage={7} />;
    </div>
  );
};

export default Customers;
