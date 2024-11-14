import { useParams } from "react-router-dom";

const Models = () => {
    const { name } = useParams();
  return (
    <div>
      {name}
    </div>
  )
}

export default Models
