import './modal.css';

export type ModalParams = {
  (): void,
  show: boolean
};

export const Modal = (params: ModalParams) => {
  const showHideClassName = params.show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button" onClick={params}>
          Close
        </button>
      </section>
    </div>
  );
};