import React from "react";

import Filter from "./Filter";
import "./sidebar.scss";
import filterSvg from "../../assets/images/filter-icon.svg";

const Sidebar = ({ filters, onFiltered }) => {
  return (
    <div className="sidebar">
      <img className="sidebar__icon" src={filterSvg} alt="filter" />

      {filters && filters.roles && (
        <>
          <Filter
            onFiltered={onFiltered}
            title="Attack type"
            values={filters.attackTypes}
          />
          <Filter
            title="Attribytes"
            values={filters.attribytes}
            onFiltered={onFiltered}
          />
          <Filter
            title="Roles"
            values={filters.roles}
            onFiltered={onFiltered}
          />
        </>
      )}
    </div>
  );
};

export default Sidebar;
