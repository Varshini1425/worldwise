import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";
// import { useAuth } from "../contexts/FakeAuthContext";
// import { Navigate } from "react-router-dom";
const AppLayout = () => {
  // const { isAuthenticated } = useAuth();
  // if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
