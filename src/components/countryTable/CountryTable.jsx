
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaBuilding, FaPlus, FaTrashAlt } from "react-icons/fa";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import ToastContainer from "../toast/ToastContainer";
import { HiPencilSquare } from "react-icons/hi2";
import ViewTable from "../toast/ViewTable";

const CountryTable = ({ data, isBlogData }) => {
  console.log('data:',data);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [activeState, setActiveState] = useState(true);
  const [countActive, setCountActive] = useState(0);
  const [countInActive, setCountInActive] = useState(0);

  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [viewData, setViewData] = useState(null);
  const [openViewModal, setOpenViewModal] = useState(false);

  const getData = () => {
    try {
      setCountries(data);
      setFilterData(data);
      const activeCount = data.filter((country) => country.status).length;
      setCountActive(activeCount);  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  useEffect(() => {
    const result = countries.filter((country) => {
      return isBlogData ? country.name?.toLowerCase().includes(search.toLowerCase()) : country.country.toLowerCase().includes(search.toLowerCase());
    });
    
    setFilterData(result);

    // Counting active and inactive states in the filtered data (result)
    const activeCount = result.filter((country) => country.status).length;
    const inactiveCount = result.length - activeCount;

    setCountActive(activeCount);
    setCountInActive(inactiveCount);
  }, [countries, search]);

  const handleAdd = (newData) => {
    setEditData("");
    setFilterData((prevData) => [...prevData, newData]);
    setOpenModal(false);
  };

  useEffect(() => {
    setEditData("");
  }, [editData]);

  const handleEdit = (row) => {
    setOpenModal(true);
    setEditData(row);
  };

  const handleDelete = (row) => {
    if (!row.status) {
      setCountInActive((prevCount) => prevCount - 1);
    } else {
      setCountActive((prevCount) => prevCount - 1);
    }

    const updatedData = filterData.filter(
      (item) => item.country !== row.country
    );
    setFilterData(updatedData);
  };

  const toggleActiveState = (name) => {
    const updatedData = filterData.map((country) => {
      if (country.country === name) {
        return { ...country, status: !country.status };
      }
      return country;
    });

    setFilterData(updatedData);
    const activeCount = updatedData.filter((country) => country.status).length;
    const inactiveCount = updatedData.filter(
      (country) => !country.status
    ).length;

    setCountActive(activeCount);
    setCountInActive(inactiveCount);
  };

  const columns = isBlogData
  ? [
      { name: "Sr. No", cell: (row) => row.id, width: "fit-content" },
      { name: "Blog Name", selector: (row) => row.name, sortable: true },
      { name: "Description", selector: (row) => row.description },
      { name: "Image", selector: (row) => <img src={row.image} alt={row.name} style={{ maxWidth: "100px" }} /> },
      { name: "Created Date", selector: (row) => row.created_at, maxWidth: "130px" },
      { name: "Updated Date", selector: (row) => row.updated_at, maxWidth: "130px" },
      {
        name: "Status",
        selector: (row) => (
          <p className={`${row.status === "published" ? "text-green-500" : "text-red-400"}`} onClick={() => toggleActiveState(row.id)} >
            {row.status === "published" ? "Published" : "Draft"}
          </p>
        ),
        width: "75px",
      },
      {
        name: <div className="px-2">Action</div>,
        cell: (row) => (
          <div>
            <button className="text-xl text-[var(--btnColor)] px-1" onClick={() => handleEdit(row)}><HiPencilSquare /></button>
            <button className="text-xl text-red-600 px-1" onClick={() => handleDelete(row)}>
              <FaTrashAlt />
            </button>
          </div>
        ),
        width: "100px",
      },
    ]
  : [
      { name: "Sr. No", cell: (row) => row.id, width: "fit-content" },
      { name: "Country", selector: (row) => row.country, sortable: true },
      { name: "State Name", selector: (row) => row.state },
      { name: "Created Date", selector: (row) => row.created_at, maxWidth: "130px" },
      { name: "Updated Date", selector: (row) => row.updated_at, maxWidth: "130px" },
      {
        name: "Status",
        selector: (row) => (
          <p className={`${row.status ? "text-green-500" : "text-red-400"}`} onClick={() => toggleActiveState(row.country)} >
            {row.status ? "Active" : "Inactive"}
          </p>
        ),
        width: "75px",
      },
      {
        name: <div className="px-2">Action</div>,
        cell: (row) => (
          <div>
            <button className="text-xl text-[var(--btnColor)] px-1" onClick={() => handleEdit(row)}><HiPencilSquare /></button>
            <button className="text-xl text-red-600 px-1" onClick={() => handleDelete(row)}>
              <FaTrashAlt />
            </button>
          </div>
        ),
        width: "100px",
      },
    ];


  return (
    <>
      <DataTable className="cursor-pointer"
        onRowDoubleClicked={(row) => {
          setOpenViewModal(true);
          setViewData(row);
        }}
        title={isBlogData ? "Blog Data" : "Country Data"}
        columns={columns}
        data={filterData}
        pagination
        fixedHeader
        // fixedHeaderScrollHeight="390px"
        highlightOnHover
        subHeader={!isBlogData}
        subHeaderComponent={
          <div className="flex justify-between items-center w-full flex-wrap gap-5">
            <div className="flex gap-3 flex-wrap">
              <input type="text" className="px-2 rounded-full outline-none border-[1px] border-gray-500 bg-transparent text-white"
                placeholder="Search here..." value={search} onChange={(e) => setSearch(e.target.value)}/>
              <div className="flex items-center gap-2">
                <FaBuilding className="text-teal-500" />
                <div className="text-xs text-center"> {filterData.length} <br /> States </div>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                {activeState ? (
                  <FaToggleOn className="text-pink-600" onClick={() => setActiveState(false)} />
                ) : (
                  <FaToggleOff onClick={() => setActiveState(true)} className="text-gray-500"/>)}
                <div className="text-xs text-center">
                  {activeState ? countActive : countInActive} <br />{activeState ? "Active" : "Inactive"}
                </div>
              </div>
            </div>
            <div className="text-white flex gap-5">
              <button className="flex bg-green-400 px-3 rounded-md py-2 gap-2" onClick={() => setOpenModal(true)} > <FaPlus className="mt-1" /> Add </button>
              <button className="flex bg-[var(--btnColor)] px-3 rounded-md py-2 gap-2">
                Export to Excel <SiMicrosoftexcel className="mt-1" />
              </button>
            </div>
          </div>}
        subHeaderAlign="left"
      />
      {openModal && (<ToastContainer setOpenModal={setOpenModal} addData={handleAdd} editData={editData}/>)}
      {openViewModal && (<ViewTable setOpenViewModal={setOpenViewModal} viewData={viewData} />)}
    </>
  );
};

export default CountryTable;
