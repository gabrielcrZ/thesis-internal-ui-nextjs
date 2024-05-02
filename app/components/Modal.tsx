import React from "react";

const Modal = (props: any) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn btn-info btn-sm text-content"
        onClick={() =>
          (
            document.getElementById("my_modal_1") as HTMLDialogElement
          ).showModal()
        }
      >
        {props.btnName}
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-info underline">{props.title}</h3>
          <div className="pt-4">
          {props.children}
          </div>
          <div className="modal-action">
            <form method="post">
              <button className="btn text-info">{props.submitBtn}</button>
            </form>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn text-info">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
