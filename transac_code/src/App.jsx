import Navbar from "./components/Navbar";
import { addUserOperation } from "./utils/operations";
import { useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(false)

  const onAddUser = async () =>{ 
    try {
      setLoading(true)
      await addUserOperation()
      alert("UserAdded")
    } catch (error) {
      throw(error)
    }
    setLoading(false)
   }

  return (
    <div className="">
      <Navbar />
      <button onClick = {onAddUser}>
        {loading ? "Loading..." : "Upload"}
      </button>
    </div>
  );
};

export default App;
