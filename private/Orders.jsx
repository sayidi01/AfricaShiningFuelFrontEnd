import React, { useCallback, useEffect, useState } from "react";
import { Table , Button} from "antd";
import { axiosInstance } from "../src/api";
import UserContext from "../context/userContext";
import { useContext } from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { toast } from "react-hot-toast";
function Orders() {
  const { data } = useContext(UserContext);
    const [orders, setOrders] = useState([])
  useEffect(() => {
    axiosInstance
      .get("/orders")
      .then(({data}) => {
        console.log(data.data);
        setOrders(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const DeleteOrder = useCallback(() => {
    axiosInstance
    .delete(`/orders/${orderId}`)
    .then(({data}) => {
      console.log(data.data)
      toast.success("Delete Order Successfully ")  
    })
    .catch((err) => {
        console.log(err)
        toast.error("order is not suppressed")
    })
  },[])

  const columns = [
    {
      title: "customer_id",
      dataIndex: "customer_id",
      width: 150,
      
    },
    {
      title: "Products",
      dataIndex: "Products",
      width: 150,
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      width: 150,
    },
    {
        title: "order_date",
        dataIndex:"order_date",
        width: 150,
    },
    {
        title: " Total Price",
        dataIndex:"TotalPrice",
        width: 150,
    },
    {
        title: "Ville",
        dataIndex:"ville",
        width: 150,
    },
    {
        title: "delivery Type",
        dataIndex:"deliveryType",
        width: 150,
    },
    {
        title: "Prenom",
        dataIndex:"prenom",
        width: 150,
    },
    {
        title: "Nom",
        dataIndex:"nom",
        width: 150,
    },
    {
        title: "Code Postal",
        dataIndex: "codePostal",
        width: 150,
    },
    {
        title: "Tèlèphone",
        dataIndex: "telephone",
        width: 150,
    },
    {
        title: "Adresse",
        dataIndex: "adresse",
        width: 150,
    },
     {
      title: "Action",
     
      render: (text, record) => (
        <Button
        type="primary"
        danger
        icon={<DeleteOutlined />}
        onClick={() => DeleteOrder(record.id)} 
      />
      ),
    },

  ];

 
  return (
    <div>
      <Table columns={columns} dataSource={orders}   rowKey="key" />
    </div>
  );
}

export default Orders;
