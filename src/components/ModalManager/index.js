"use client";
import { useGlobal } from "../../common/context";
import { MODAL_REGISTRY } from "../Modals";

const ModalManager = () => {
  const { state } = useGlobal();
  if (!state.isOpen || !state.view) return null;
  const ModalComponent = MODAL_REGISTRY[state.view];

  return ModalComponent ? <ModalComponent /> : null;
};
export default ModalManager;

