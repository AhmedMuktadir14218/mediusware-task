// import  { useState } from "react";

// const Problem1 = () => {
//   const [show, setShow] = useState("all");
//   const [tasks, setTasks] = useState([]);
//   const [name, setName] = useState("");
//   const [status, setStatus] = useState("");

//   const handleClick = (val) => {
//     setShow(val.toLowerCase());
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newTask = { name, status };
//     setTasks([...tasks, newTask]);
//     setName("");
//     setStatus("");
//   };

//   const sortedTasks = tasks.sort((a, b) => {
//     const order = ["active", "completed"];
//     const aStatus = a.status.toLowerCase();
//     const bStatus = b.status.toLowerCase();

//     if (order.includes(aStatus) && order.includes(bStatus)) {
//       return order.indexOf(aStatus) - order.indexOf(bStatus);
//     }

//     if (order.includes(aStatus)) {
//       return -1;
//     }

//     if (order.includes(bStatus)) {
//       return 1;
//     }

//     return 0;
//   });

//   const filteredTasks =
//     show === "all"
//       ? sortedTasks
//       : sortedTasks.filter((task) => task.status.toLowerCase() === show);

//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
//         <div className="col-6">
//           <form
//             className="row gy-2 gx-3 align-items-center mb-4"
//             onSubmit={handleSubmit}
//           >
//             <div className="col-auto">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="col-auto">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Status"
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//               />
//             </div>
//             <div className="col-auto">
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="col-8">
//           <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${show === "all" && "active"}`}
//                 type="button"
//                 onClick={() => handleClick("all")}
//               >
//                 All
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${show === "active" && "active"}`}
//                 type="button"
//                 onClick={() => handleClick("active")}
//               >
//                 Active
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${show === "completed" && "active"}`}
//                 type="button"
//                 onClick={() => handleClick("completed")}
//               >
//                 Completed
//               </button>
//             </li>
//           </ul>
//           <table className="table table-striped ">
//             <thead>
//               <tr>
//                 <th scope="col">Name</th>
//                 <th scope="col">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTasks.map((task, index) => (
//                 <tr key={index}>
//                   <td>{task.name}</td>
//                   <td>{task.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Problem1;
// import   { useState } from "react";

// const Problem1 = () => {
//   const [data, setData] = useState([]);
//   const [name, setName] = useState("");
//   const [status, setStatus] = useState("active");
//   const [xfilter, setFilter] = useState("all");

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleStatusChange = (e) => {
//     setStatus(e.target.value);
//   };

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newData = [...data, { name, status }];
//     setData(newData);
//     setName("");
//     setStatus("active");
//   };

//   const filteredData = xfilter === "all" ? data : data.filter(item => item.status === xfilter);

//   return (
//     <div className="container">
//       <h4 className="text-center text-uppercase mb-5">Problem-1</h4>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} required />
//         </label>
//         <label>
//           Status:
//           <select value={status} onChange={handleStatusChange}>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//         </label>
//         <button type="submit">Add Data</button>
//       </form>

//       <div>
//         <button onClick={() => handleFilterChange("all")}>All</button>
//         <button onClick={() => handleFilterChange("active")}>Active</button>
//         <button onClick={() => handleFilterChange("inactive")}>Inactive</button>
//       </div>

//       <table className="table mt-3">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Problem1;

import { useState } from "react";

const Problem1 = () => {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [xfilter, setFilter] = useState("all");

  const handleform = (e) => {
    e.preventDefault();
    const formInfo = [...info, { name, status }];
    setInfo(formInfo);
    setName("");
    setStatus("");
    console.log(name, status);
    console.log(info);
  };
  const handleStatus =(e)=>{
    const lowerStatus=e.target.value;
    const newlowerStatus=lowerStatus.toUpperCase();
    setStatus(newlowerStatus)
    console.log(newlowerStatus)
  }
  const handleFilter=(x)=>{
    setFilter(x);
  }
  const fiterData = xfilter === 'all' ? info : info.filter(item=> item.status === xfilter)
  return (
    <div>
      <div>
        <form onSubmit={handleform}>
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <br />
          <label htmlFor="">Status</label>
          <br />
          <input
            type="text"
            value={status}
            onChange={handleStatus}
            placeholder="Status"
            required
          />{" "}
          <br />
          <button type="Submit">ADD DATA</button>
        </form>
      </div>
      <button onClick={()=>handleFilter("all")}>ALL</button>
      <button onClick={()=>handleFilter("ACTIVE")}>Active</button>
      <button onClick={()=>handleFilter("COMPLETE")}>Complete</button>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {fiterData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    
    </div>
  );
};

export default Problem1;
