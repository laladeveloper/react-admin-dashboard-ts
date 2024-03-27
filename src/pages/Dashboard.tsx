import { BiBell, BiMaleFemale, BiSearch } from "react-icons/bi";
import AdminSiderbar from "../components/AdminSidebar";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import DashboardTable from "../components/DashboardTable";

const userImg =
  "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSiderbar />

      <main className="dashboard">
        <div className="bar">
          <BiSearch />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for users, data, docs"
          />
          <BiBell />
          <img src={userImg} alt="" />
        </div>
        <section className="widgetContainer">
          <WidgetItem
            heading="Revenue"
            percentage={70}
            value={7800}
            color="#03fcf0"
            amount={true}
          />
          <WidgetItem
            heading="Users"
            percentage={-20}
            value={50}
            color="#fc03fc"
          />
          <WidgetItem
            heading="Products"
            percentage={25}
            value={10}
            color="#03a1fc"
          />
        </section>
        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data2={[300, 144, 433, 655, 237, 755, 190]}
              data1={[200, 444, 343, 556, 778, 455, 990]}
              title1="Revenue"
              title2="Transaction"
              bgcolor1="rgb(0,115,255)"
              bgcolor2="rgba(53,162,235,0.8)"
              horizental={false}
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            {data.categories.map((i) => (
              <CategoryItem
                key={i.heading}
                heading={i.heading}
                value={i.value}
                color={`hsl(${i.value * 4}, ${i.value}%, 50%)`}
              />
            ))}
          </div>
        </section>
        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio </h2>
            {/* graph here  */}
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          <DashboardTable data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

// widget item
interface widgetProps {
  heading: string;
  value: number;
  percentage: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percentage,
  amount,
  color,
}: widgetProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading} </p>
      <h4>{amount ? `Rs.${value}` : value} </h4>

      {percentage > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percentage}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />
          {percentage}%
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background:
          percentage >= 0
            ? `conic-gradient(${color} ${
                (percentage / 100) * 360
              }deg,rgb(255,255,255) 0)`
            : `conic-gradient(rgb(255,255,255) ${
                360 - (Math.abs(percentage) / 100) * 360
              }deg,${color} 0deg)`,
      }}
    >
      <span style={{ color }}>{percentage}%</span>
    </div>
  </article>
);

// category item
interface CategoryItemProps {
  heading: string;
  value: number;
  color: string;
}
const CategoryItem = ({ color, heading, value }: CategoryItemProps) => (
  <div className="categoryItem">
    <h5>{heading} </h5>
    <div className="">
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);
export default Dashboard;
