import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./main.scss";

import MainSection from "./MainSection";
import Card from "./Card";

const Main = ({ list, stranges, agility, intelligence }) => {
  console.log("list: ", list);
  const [modal, setModal] = useState(false);
  const [selectedСhar, setSelectedChar] = useState(null);

  const toggle = () => setModal(!modal);

  const handleCardClick = (id) => {
    const char = list.find((item) => item.id === id);
    setSelectedChar(char);
    toggle();
  };

  useEffect(() => {
    if (selectedСhar) document.title = `${selectedСhar.localized_name}`;

    setSelectedChar(selectedСhar);
  });

  let str, agi, int;
  if (stranges && agility && intelligence) {
    str = stranges.map(({ id, localized_name }) => (
      <Card
        key={id}
        id={id}
        name={localized_name}
        handleCardClick={handleCardClick}
      />
    ));
    agi = agility.map(({ id, localized_name }) => (
      <Card
        key={id}
        id={id}
        name={localized_name}
        handleCardClick={handleCardClick}
      />
    ));
    int = intelligence.map(({ id, localized_name }) => (
      <Card
        key={id}
        id={id}
        name={localized_name}
        handleCardClick={handleCardClick}
      />
    ));
  }

  return (
    <main className="main">
      <MainSection attr={str} title="Strange" />
      <MainSection attr={agi} title="Agility" />
      <MainSection attr={int} title="Intelligence" />

      {selectedСhar && (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            {selectedСhar.localized_name}
          </ModalHeader>
          <ModalBody>
            Количество ног: {selectedСhar.legs} <br />
            Основной аттрибут:&nbsp;
            {selectedСhar.primary_attr === "agi"
              ? "Ловкость"
              : selectedСhar.primary_attr === "str"
              ? "Сила"
              : "Интелект"}
            <br />
            Роли: {selectedСhar.roles.join(", ")}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Nice!
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </main>
  );
};

export default Main;
