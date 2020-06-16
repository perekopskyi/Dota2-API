import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main";
import Loader from "./components/Loader";
import { loadAllCharacters } from "./redux/ac";

type Hero = {
  attack_type: string;
  id: number;
  legs: number;
  localized_name: string;
  name: string;
  primary_attr: string;
  roles: Array<string>;
};

type Filters = {
  attribytes: string[];
  attackTypes: string[];
  roles: string[];
};

function unique(list: Array<Hero>): object {
  let result: Array<string> = [];

  for (let hero of list) {
    hero.roles.forEach((role) => {
      if (!result.includes(role)) {
        result.push(role);
      }
    });
  }

  return result;
}

function App(props: any) {
  console.log("App props: ", props);

  const { loading, error, heroes } = props;

  const [filters, setFilters] = useState({
    attribytes: ["agi", "str", "int"],
    attackTypes: ["Melee", "Ranged"],
    roles: [
      "Carry",
      "Escape",
      "Nuker",
      "Initiator",
      "Durable",
      "Disabler",
      "Jungler",
      "Support",
      "Pusher",
    ],
  });

  const onFiltered = (value: string, checked: string) => {
    console.log(value, checked);

    function getProp(object: any, checked: string | null = null) {
      console.log("object: ", object);
      for (let prop in object) {
        if (typeof object[prop] === "object") {
          getProp(object[prop]);
        } else {
          if (object[prop] === value) {
            checked ? (object[prop] = value) : (object[prop] = null);
          }
        }
      }
    }
    getProp(filters, checked);
    console.log("filters: ", filters);
  };

  useEffect(() => {
    const data = props.loadAllCharacters();
    console.log("--data", data);
  }, []);

  if (loading) return <Loader />;

  const stranges = heroes.filter(
    (item: any) => item.primary_attr === filters.attribytes[1]
  );
  const agility = heroes.filter(
    (item: any) => item.primary_attr === filters.attribytes[0]
  );
  const intelligence = heroes.filter(
    (item: any) => item.primary_attr === filters.attribytes[2]
  );

  return (
    <div className="App">
      <Header />
      <div className="App__container">
        <Sidebar filters={filters} onFiltered={onFiltered} />
        <Main
          list={heroes}
          stranges={stranges}
          agility={agility}
          intelligence={intelligence}
        />
      </div>
    </div>
  );
}

// Redux
const getVisibleHeroes = (heroes: Array<Hero>, filter: string) => {
  switch (filter) {
    case "SHOW_STR":
      return heroes.filter((hero: Hero) => hero.primary_attr === "str");
    case "SHOW_AGI":
      return heroes.filter((hero: Hero) => hero.primary_attr === "agi");
    case "SHOW_INT":
      return heroes.filter((hero: Hero) => hero.primary_attr === "int");
    default:
      return heroes;
  }
};

const mapStateToProps = (state: any) => {
  console.log("mapStateToProps: ", state);
  const {
    heroesReduser: { loading, error, heroes },
    filters,
  } = state;

  return {
    loading,
    error,
    heroes: getVisibleHeroes(heroes, state.visibilityFilter),
  };
};

export default connect(mapStateToProps, { loadAllCharacters })(App);
