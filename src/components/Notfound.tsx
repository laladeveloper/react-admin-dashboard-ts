import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
    <div className="posCenter">

      <h1>Notfound</h1>
      <Link to="/" className="green"> Move to Home</Link>
    </div>
    </>
  );
};

export default Notfound;
