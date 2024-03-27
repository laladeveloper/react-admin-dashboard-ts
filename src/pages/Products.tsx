import { Link } from "react-router-dom";
import AdminSiderbar from "../components/AdminSidebar";
import { FaPlus } from "react-icons/fa";
import { ReactElement, useCallback, useState } from "react";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
import img from "../assets/pizza.jpg"
import img2 from "../assets/royal kabab kofta topping.jpg"


const arr: DataType[] = [
  {
    photo: <img src={img} alt="Pizza" />,
    name: "Kabab Crust Pizza extra cheese",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Pizza" />,
    name: "Royal Kabab Pizza",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pizza" />,
    name: "Royal Kabab Pizza",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Pizza" />,
    name: "Kabab Crust Pizza extra cheese",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Pizza" />,
    name: "Royal Kabab Pizza",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Pizza" />,
    name: "Kabab Crust Pizza extra cheese",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Pizza" />,
    name: "Royal Kabab Pizza",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pizza" />,
    name: "Royal Kabab Pizza",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Pizza" />,
    name: "Kabab Crust Pizza extra cheese",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Pizza" />,
    name: "Royal Kabab Pizza",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Pizza" />,
    name: "Kabab Crust Pizza extra cheese",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Pizza" />,
    name: "Royal Kabab Pizza",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pizza" />,
    name: "Royal Kabab Pizza",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Pizza" />,
    name: "Kabab Crust Pizza extra cheese",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Pizza" />,
    name: "Royal Kabab Pizza",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Pizza" />,
    name: "Kabab Crust Pizza extra cheese",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Pizza" />,
    name: "Royal Kabab Pizza",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Pizza" />,
    name: "Royal Kabab Pizza",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboardProductBox", "Products", true),
    []
  );

  return (
    <div className="adminContainer">
      <AdminSiderbar />
      <main>
        <Table />
      </main>
      <Link to={"/admin/product/new"} className="createProductBtn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
