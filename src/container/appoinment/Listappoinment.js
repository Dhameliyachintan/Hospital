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



function Listappoinment(props) {
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false);

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
        setOpen(false)
    }

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("Bookappoinment"))

        let filterData = localData.filter((v, i) => v.id !== id);
        console.log(filterData);
        console.log(id);
        
        localStorage.setItem("Bookappoinment", JSON.stringify(filterData))
        loaddata()
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
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
    ];




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

                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Use Google's location service?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Disagree</Button>
                            <Button onClick={handleClose} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </section>
        </>

    );
}

export default Listappoinment;