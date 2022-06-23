import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import { Dialog } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import { useHistory } from 'react-router-dom';




function Listappoinment(props) {
    const history = useHistory()

    const [data, setData] = useState([])
    // const [Dopen, setDopen] = useState();
    // const [did, setDid] = useState()

    const loaddata = () => {
        const localdata = JSON.parse(localStorage.getItem("Bookappoinment"));
        // console.log(localdata);
        setData(localdata)
    }

    useEffect(() => {
        loaddata()
    },
        []);


    const handleClose = () => {
        // setDopen(false)
    }

    // const handleClickDopen = (id) => {
    //     setDid(id)
    //     setDopen(true)

    // }

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("Bookappoinment"))

        let filterData = localData.filter((v, i) => v.id !== id);
        console.log(filterData);

        localStorage.setItem("Bookappoinment", JSON.stringify(filterData))
        loaddata()
        // setDopen(false)
    }



    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'email', width: 130 },
        { field: 'phone', headerName: 'phone', width: 130 },
        { field: 'date', headerName: 'date', width: 130 },
        { field: 'department', headerName: 'department', width: 130 },
        { field: 'message', headerName: 'message', width: 130 },
        {
            field: 'delete', headerName: 'Delete', width: 130,
            renderCell: (params) => (
                <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                    <DeleteIcon />
                </IconButton>
            )
        },
        {
            field: 'edit', headerName: 'edit', width: 130,
            renderCell: (params) => (
                <IconButton aria-label="edit" onClick={() => handleEdit(params.id)}>
                    <EditLocationIcon />
                </IconButton>
            )
        },
    ];

    const handleEdit = (id) => {
        history.push("/bookappointment", {"id": id});
        console.log(id);
    }

    




    return (
        <>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <div className="row text-center">
                        <div className="col-6">
                            <NavLink to={"/bookappointment"}>Bookappoinment</NavLink>
                        </div>
                        <div className="col-6">
                            <NavLink to={"/listappointment"}>Listappoinment</NavLink>
                        </div>
                    </div>


                    {/* <div>
                        {
                            data.map((d, i) => {
                                return (
                                    <>
                                        <h2>{d.name}</h2>
                                        <h2>{d.date}</h2>
                                        <h2>{d.phone}</h2>
                                        <h2>{d.department}</h2>
                                        <h2>{d.message}</h2>
                                    </>
                                )
                            })
                        }
                    </div> */}

                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>

                    {/* <Dialog
                        open={Dopen}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Use Google's location service?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                            bookappointment 
                                
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => handleDelete()} autofocus>yes</Button>
                            <Button onClick={handleClose}>
                                No
                            </Button>
                        </DialogActions>
                    </Dialog> */}
                </div>
            </section>
        </>

    );
}

export default Listappoinment;

// import React, { useEffect, useState } from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
// import { DataGrid } from '@mui/x-data-grid';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';


// function Listappoinment(props) {

//   const history = useHistory();

//   const [data , setData]= useState([]);

//   const showData = () => {
//    let listData = JSON.parse(localStorage.getItem("bookappoinment"));

//    if (listData !== null) {
//     setData(listData);
//   }

//   }

//   const handleDelete =(id) =>{
    
//     let dData = JSON.parse(localStorage.getItem("bookappoinment"));


//     let filterdata = dData.filter((d, i) => d.id !== id);

//     localStorage.setItem("bookappoinment" , JSON.stringify(filterdata))

//     showData();
//   }

//   const handleEdit =(id) =>{
//     history.push("/bookappointment", {"id" : id})
//     console.log(id);
//   }

//   useEffect(
//     () =>{
//       showData()
//   },
//   [])


//   const columns = [
//     { field: 'id', headerName: 'Id', width: 70 },
//     { field: 'name', headerName: 'Name', width: 130 },
//     { field: 'email', headerName: 'Email', width: 130 },
//     { field: 'phone', headerName: 'Phone', width: 130 },
//     { field: 'date', headerName: 'Date', width: 130 },
//     { field: 'department', headerName: 'Department', width: 130 },
//     { field: 'message', headerName: 'Message', width: 130 },
//     { field: 'action',
//      headerName: 'Action', 
//      width: 130,
//      renderCell: (params) => {
//       return (
//           <>
//               <Button startIcon={<DeleteIcon />} onClick={() => handleDelete(params.id)}></Button>

//               <IconButton aria-label="edit" onClick={()=>handleEdit(params.id)}><ModeEditIcon /></IconButton>

//           </>
//       )
//   }
    
//     },
  
// ];


//   return (
//     <section id="appointment" className="appointment">
//       <div className="container">
//         <div className="section-title">
//           <h2>Make an Appointment</h2>
//           <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
//             blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
//             Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
//         </div>
//         <div className='appoinmentnav'>
//             <div className='row text-center'>
//               <div className='col-6 mb-5'>
//                 <NavLink activeClassName='title-border' to={"/bookappointment"}>Book Appoinment</NavLink>
//               </div>
//               <div className='col-6 mb-5'>
//                 <NavLink activeClassName='title-border' to={"/listappointment"}>List Appoinment</NavLink>
//               </div>
//             </div>

//           </div>
//         <div style={{ height: 400, width: '100%' }}>
//                 <DataGrid
//                     rows={data}
//                     columns={columns}
//                     pageSize={5}
//                     rowsPerPageOptions={[5]}
//                     checkboxSelection
//                 />
//             </div>
 

//       </div>
//     </section>
//   );
// }

// export default Listappoinment;