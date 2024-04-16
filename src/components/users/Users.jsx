"use client";
import { useEffect } from "react";

const Users = () => {
  useEffect(() => {
    alert("Hola");
  }, []);

  return (
    <div>
      <p>Usersss</p>
    </div>
  );
};
export default Users;
