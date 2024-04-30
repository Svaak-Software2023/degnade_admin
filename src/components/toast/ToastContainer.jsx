/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./style.css";

const ToastContainer = ({ addData, setOpenModal, editData }) => {
  const [formData, setFormData] = useState({id: "", country: "", state: "",
    created_at: "", updated_at: "", status: "" });

    useEffect(() => {
        if(editData){
            setFormData(editData)
        }
    },[editData])
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = formData.status === "True";
    const newData = {
      id: parseInt(formData.id),
      country: formData.country,
      state: formData.state,
      created_at: formatDate(formData.created_at),
      updated_at: formatDate(formData.updated_at),
      status: status,
    };
    
    addData(newData); 
    alert("Successfully Added!");
    setFormData({
      id: "",
      country: "",
      state: "",
      created_at: "",
      updated_at: "",
      status: "",
    });
    setOpenModal(false);
  };
  
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && setOpenModal) {
        setOpenModal(false);
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [setOpenModal]);

  return (
    <>
      <div className="toast_modal_wrapper" onClick={()=>{setOpenModal(false)}}></div>
      <div className="toast_modal_container">
        <form className="flex flex-col justify-center min-w-80 toast_form" onSubmit={handleSubmit}>
          <h1 className="underline font-bold text-center"> Add Data </h1>
          <div className="flex flex-col">
            <label htmlFor="id"> Enter Serial No. : </label>
            <input type="number" id="id" value={formData.id} onChange={handleChange} required/> 
          </div>
          <div className="flex flex-col">
            <label htmlFor="country"> Enter Country Name : </label>
            <input type="text" id="country" value={formData.country} onChange={handleChange} required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state"> Enter State Name : </label>
            <input type="text" id="state" value={formData.state} onChange={handleChange} required />
          </div>
          <div className="flex flex-col mx-auto">
            <label htmlFor="created_at"> Enter Created Date : </label>
            <input type="date" id="created_at" className="w-fit" value={formData.created_at} onChange={handleChange} required/>
          </div>
          <div className="flex flex-col mx-auto">
            <label htmlFor="updated_at"> Enter Updated Date : </label>
            <input type="date" id="updated_at" className="w-fit" value={formData.updated_at} onChange={handleChange} required/>
          </div>
          <div className="flex py-4 mx-auto text-md gap-4">
            <p htmlFor="status" > Status : </p>
            <select id="status" value={formData.status} onChange={handleChange} required>
              <option value="">select</option>
              <option value="True">True</option>
              <option value="False">False</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ToastContainer;
