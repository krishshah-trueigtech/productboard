"use client";
import { useGlobal } from "../../../../common/context";
import Modal from "../../../../common/Modal";
import AuthForm from "../AuthForm";
import AUTH_VIEWS from "../../constants/Auth_Views";

const AuthModal = () => {
  const { state, dispatch } = useGlobal();

  const viewConfig = AUTH_VIEWS[state.view];

  if (!state.isOpen || !viewConfig) return null;

  return (
    <Modal
      isOpen={state.isOpen}
      onClose={() => dispatch({ type: "CLOSE_MODAL" })}
    >
      <div className="p-6 w-[400px] text-primary">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {viewConfig.title}
        </h2>

        <AuthForm
          fields={viewConfig.fields}
          btnLabel={viewConfig.btnLabel}
          onToggle={() => dispatch({ type: viewConfig.toggleView })}
          footerText={viewConfig.footerText}
          footerActionText={viewConfig.footerAction}
          onSubmit={(data) => {
            viewConfig.onSubmit(data);
            dispatch({ type: "CLOSE_MODAL" })
          }}
        />
      </div>
    </Modal>
  );
};

export default AuthModal;
