import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import "./styles/app.scss";

// Notfound
import Notfound from "./components/Notfound";

// Dashboard
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Products = lazy(() => import("./pages/Products"));

// Management
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));

//  Charts
const BarChart = lazy(() => import("./pages/charts/BarChart"));
const PieChart = lazy(() => import("./pages/charts/PieChart"));
const LineChart = lazy(() => import("./pages/charts/LineChart"));

// Apps
const CoupenGenrator = lazy(() => import("./pages/apps/CoupenGenrator"));
const Toss = lazy(() => import("./pages/apps/Toss"));
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* dashboard */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transactions" element={<Transaction />} />
          <Route path="/admin/products" element={<Products />} />

          {/* Management  */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement />} />

          {/* charts  */}
          <Route path="/admin/chart/bar" element={<BarChart />} />
          <Route path="/admin/chart/pie" element={<PieChart />} />
          <Route path="/admin/chart/line" element={<LineChart />} />

          {/* Apps  */}
          <Route path="/admin/apps/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/apps/coupon" element={<CoupenGenrator />} />
          <Route path="/admin/apps/toss" element={<Toss />} />

          {/* notfound */}
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
