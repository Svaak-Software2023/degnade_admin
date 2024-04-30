/* eslint-disable react/prop-types */

const ViewTable = ({ setOpenViewModal, viewData }) => {
    console.log(viewData)
  const { id, country, state, created_at, updated_at, status } = viewData;

  return (
    <>
      <div className="toast_modal_wrapper" onClick={() => setOpenViewModal(false)}></div>
      <div className="toast_modal_container">
        <div className="flex flex-col gap-4 viewTable_Div">
            <h1 className="mx-auto font-bold underline text-2xl text-gray-400"> View Data </h1>
          <p>Serial No :- <span >{id}</span></p>
          <p>Country Name :- <span>{country}</span></p>
          <p>State :- <span>{state}</span></p>
          <p>Created Date :- <span>{created_at}</span></p>
          <p>Update Date :- <span>{updated_at}</span></p>
          <p>Status :- <span>{status ? "Active" : "Inactive"}</span></p>
        </div>
      </div>
    </>
  );
};

export default ViewTable;
