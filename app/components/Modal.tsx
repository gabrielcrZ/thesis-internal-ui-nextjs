import React from "react";

const Modal = (props: any) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
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
          <h3 className="font-bold text-lg">{props.title}</h3>
          <p className="py-4">
            {props.children}
          </p>
          <div className="modal-action">
            <form method="post">
              <button className="btn">Edit Order</button>
            </form>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
