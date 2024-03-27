import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { BiSolidCoin } from "react-icons/bi";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaStopwatch,
} from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {
  RiCouponFill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

const bgColr = "rgba(0,115,255,0.1)";
const AdminSiderbar = () => {
  const location = useLocation();
  
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive &&
        (showModal ? (
          <button id="hamburger" onClick={() => setShowModal(false)}>
            <IoClose />
          </button>
        ) : (
          <button id="hamburger" onClick={() => setShowModal(true)}>
            <HiOutlineMenuAlt3 />
          </button>
        ))}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <Link to="/">
          <h2 style={{ cursor: "pointer" }}>Brother's Fast Food</h2>
        </Link>
        <DivOne location={location} />
        <DivTwo location={location} />
        <DivThree location={location} />
        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close 
          </button>
        )}
      </aside>
    </>
  );
};
const DivOne = ({ location }: { location: Location }) => (
  <div className="list">
    <h5>Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url="/admin/products"
        text="Products"
        Icon={RiShoppingBag3Fill}
        location={location}
      />
      <Li
        url="/admin/customer"
        text="Customers"
        Icon={IoIosPeople}
        location={location}
      />
      <Li
        url="/admin/transactions"
        text="Transactions"
        Icon={AiFillFileText}
        location={location}
      />
    </ul>
  </div>
);
const DivTwo = ({ location }: { location: Location }) => (
  <div className="list">
    <h5>Charts</h5>
    <ul>
      <Li
        url="/admin/chart/bar"
        text="Bar"
        Icon={FaChartBar}
        location={location}
      />
      <Li
        url="/admin/chart/pie"
        text="Pie"
        Icon={FaChartPie}
        location={location}
      />
      <Li
        url="/admin/chart/line"
        text="Line"
        Icon={FaChartLine}
        location={location}
      />
    </ul>
  </div>
);
const DivThree = ({ location }: { location: Location }) => (
  <div className="list">
    <h5>Apps</h5>
    <ul>
      <Li
        url="/admin/apps/stopwatch"
        text="StopWatch"
        Icon={FaStopwatch}
        location={location}
      />
      <Li
        url="/admin/apps/coupon"
        text="Coupen Genrator"
        Icon={RiCouponFill}
        location={location}
      />
      <Li
        url="/admin/apps/toss"
        text="Toss"
        Icon={BiSolidCoin}
        location={location}
      />
    </ul>
  </div>
);

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url) ? bgColr : "white",
      transition: "all 0.4s ease-in-out ",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
        transition: "all 0.9s ease-in-out ",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);
export default AdminSiderbar;
