import React, { useCallback, useEffect, useState } from "react";
import { Table, Button, Input } from "antd";
import { axiosInstance } from "../src/api";
import { DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-hot-toast";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/orders")
      .then(({ data }) => {
        const mappedData = data.data.map((order) => ({
          ...order,
          key: order._id,
        }));
        setOrders(mappedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const DeleteOrder = useCallback((orderId) => {
    axiosInstance
      .delete(`/orders/${orderId}`)
      .then(({ data }) => {
        console.log(data.data);
        toast.success("Delete Order Successfully ");
      })
      .catch((err) => {
        console.log(err);
        toast.error("order is not suppressed");
      });
  }, []);

  const columns = [
    {
      key: "customer_id",
      title: "customer_id",
      dataIndex: "customer_id",
      width: 150,
    },
    {
      key: "Products",
      title: "Products",
      dataIndex: "Products",
      width: 150,
    },
    {
      key: "Quantity",
      title: "Quantity",
      dataIndex: "Quantity",
      width: 150,
    },
    {
      key: "order_date",
      title: "order_date",
      dataIndex: "order_date",
      width: 150,
    },
    {
      key: " Total Price",
      title: " Total Price",
      dataIndex: "TotalPrice",
      width: 150,
    },
    {
      key: "Ville",
      title: "Ville",
      dataIndex: "ville",
      width: 150,
    },
    {
      key: "delivery Type",
      title: "delivery Type",
      dataIndex: "deliveryType",
      width: 150,
    },
    {
      key: "Prenom",
      title: "Prenom",
      dataIndex: "prenom",
      width: 150,
    },
    {
      key: "Nom",
      title: "Nom",
      dataIndex: "nom",
      width: 150,
    },
    {
      key: "Code Postal",
      title: "Code Postal",
      dataIndex: "codePostal",
      width: 150,
    },
    {
      key: "Tèlèphone",
      title: "Tèlèphone",
      dataIndex: "telephone",
      width: 150,
    },
    {
      key: "Adresse",
      title: "Adresse",
      dataIndex: "adresse",
      width: 150,
    },
    {
      key: "Action",
      title: "Action",

      render: (text, record) => {
        return (
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => DeleteOrder(record._id)}
          />
        );
      },
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={orders} rowKey="key" />
    </div>
  );
}

export default Orders;
