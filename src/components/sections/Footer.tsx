"use client";
import AttributionsPage from "@/AttributionsPage";
import React from "react";
import Modal from "@/components/components/Modal/Modal";

const Footer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <div className={"h-18 text-center py-2 flex justify-center items-center gap-3 bg-blue-950/20 w-full"}>
    <strong>@Ricardooar</strong>
    <button className={"text-blue-500"} onClick={() => {
      setIsOpen(true);
    }}>Attributions
    </button>

    {isOpen && <Modal isOpen setIsOpen={setIsOpen}>
      <AttributionsPage />
    </Modal>}

  </div>;
};

export default Footer;