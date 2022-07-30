import './modal.css';

export type ModalParams = {
  handleClose: () => void,
  show: boolean
};

export const Modal = (params: ModalParams) => {
  const showHideClassName = params.show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <a href="#" className="close" onClick={params.handleClose}></a>
      </section>
    </div>
  );
};