import React from "react";
import "./app-loader.scss";

const AppLoader = () => {
  return (
    <section className="app-loader">
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
export default AppLoader;
