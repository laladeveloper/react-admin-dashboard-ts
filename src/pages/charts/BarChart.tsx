import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const BarCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data1={[200, 444, 343, 556, 778, 455, 990]}
            data2={[300, 144, 433, 655, 237, 755, 190]}
            title1="Products"
            title2="Users"
            bgcolor1={`hsl(260,50%,30%)`}
            bgcolor2={`hsl(360,90%,90%)`}
          />
          <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section>
          <BarChart
            horizental={true}
            data1={[
              200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909,
            ]}
            data2={[]}
            title1="Products"
            title2=""
            bgcolor1={`hsl(180, 40%, 50%)`}
            bgcolor2=""
            labels={months}
          />
          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
