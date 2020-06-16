import React from "react";

const Filter = ({ title, values, onFiltered }) => {
  const lables = values.map((value, index) => (
    <div
      key={title + index}
      className="filter__checkbox"
      // onClick={() => onFiltered(value)}
    >
      <input
        id={`filter-${title + index}`}
        type="checkbox"
        defaultChecked
        onChange={(e) => onFiltered(value, e.target.checked)}
      />
      <label htmlFor={`filter-${title + index}`}>
        <figure>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="15" height="15" fill="white" />
            <rect
              x="0.5"
              y="0.5"
              width="14"
              height="14"
              stroke="#B32F18"
              strokeOpacity="0.6"
            />
          </svg>
        </figure>
        <p>
          {value === "agi"
            ? "Agility"
            : value === "str"
            ? "Strange"
            : value === "int"
            ? "Intelligence"
            : value}
        </p>
      </label>
    </div>
  ));

  return (
    <section className="filter">
      <h3 className="filter__title">{title}</h3>
      {lables}
    </section>
  );
};

export default Filter;
