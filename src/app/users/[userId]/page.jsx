"use client";
//params se puede obtener de params(recibido como prop) o de UseParams
//params meediante propr es para componentes padres de la ruta, es decir el principal, al que te redirecciona el Link. En cambio el Hook useParams es para usarlo desde cualquier parte
import { useParams } from "next/navigation";

function UserPage(params) {
  const param = useParams();
  console.log(param);
  return (
    <div>
      User Page
      <button
        onClick={() => {
          console.log("work!");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default UserPage;
