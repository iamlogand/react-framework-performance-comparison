import { Link } from "react-router-dom";
import Calculator from "../../components/Calculator";

const Page = () => {
  return (
    <main>
      <h2>Page 1F</h2>
      <Link to="/1">Go Back</Link>
    
      <h3>Calculator</h3>
      <Calculator />
    </main>
  )
}

export default Page;