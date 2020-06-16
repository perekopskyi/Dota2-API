import React from "react";

const MainSection = ({ attr, title }) => {
  return (
    <section className="main__section strange">
      <h3 className="main__section--title">{title}</h3>
      <div className="main__section--cards">{attr}</div>
    </section>
  );
};

export default MainSection;
