import React from "react";
import NavBarItem from "./NavBarItem";

const navbarItems = [
  {
    id: "nos_produits",
    label: "Nos Produits",
    nested: [
      {
        id: "gazoil",
        label: "Gazoil",
        link: "/gazoil",
      },
      {
        id: "fuel_oil",
        label: "Fuel Oil N°2",
        link: "/fuel_oil",
      },
      {
        id: "lubrifiants",
        label: "Lubrifiants",
        link: "/lubrifiants",
      },
    ],
  },
];

export default function Navbarv2() {
  return (
    <div>
      {navbarItems.map((item) => {
        return <NavBarItem key={item.id} {...item} />;
      })}
    </div>
  );
}
