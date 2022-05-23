// import Dialog  from './Dialog'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



export default function Doctor() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
  };


  let medicine = {
    name: yup.string().required('enter name'),
    price: yup.string().required('please enter price'),
    quantity: yup.string().required('please enter quantity'),
    expiry: yup.string().required('please enter expiry'),
  }


  let schema = yup.object().shape(medicine);

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      quantity: '',
      expiry: '',
      Delete: ''
    },
    validationSchema: schema,
    onSubmit: (value, { resetForm }) => {
      handleSubmitdata(value)
      resetForm();
    }
  })

  const handleSubmitdata = (value) => {
    let localdata = JSON.parse(localStorage.getItem("medicine"))

    let data = {
      id: Math.floor(Math.random() * 1000),
      ...value
    }

    if (localdata === null) {
      localStorage.setItem("medicine", JSON.stringify([data]))
    } else {
      localdata.push(data)
      localStorage.setItem("medicine", JSON.stringify(localdata))
    } 

    setOpen(false);
    loadData()

  }

  const columns = [
    { field: 'name', headerName: 'Name', width: 70 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'city', headerName: ' City', width: 130 },
    { field: 'state', headerName: 'State', width: 130 },
    {
      field: "Delete",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Delete
          </Button>
        );
      }
    }
  ];




  const loadData = () => {
    let localData = JSON.parse(localStorage.getItem("medicine"))

    if (localData !== null) {
      setData(localData)
    }
  }


  useEffect(
    () => {
      loadData()
    },
    [])

  return (


    <Box>
      <Container>
        <div>
          <Button variant="outlined" onClick={handleClickOpen} >
            Add Doctordata
          </Button>
          {
            data !== null ?
              <div style={{ height: 400, width: '100%', }}>
                <DataGrid
                  rows={data}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                />
              </div>
              : <p>empty table</p>
          }
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Medicine</DialogTitle>
            <Formik value={formik}>
              <Form onSubmit={formik.handleSubmit}>
                <DialogContent>

                  <TextField
                    margin="dense"
                    id="name"
                    label="Name"
                    type="name"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.name}
                    helperText={formik.errors.name}
                    error={formik.errors.name ? true : false}
                  />
                  <TextField
                    margin="dense"
                    id="date"
                    label="Date"
                    // type="date"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.price}
                    helperText={formik.errors.price}
                    error={formik.errors.price ? true : false}
                  />
                  <TextField
                    margin="dense"
                    id="city"
                    label="City"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.quantity}
                    helperText={formik.errors.quantity}
                    error={formik.errors.quantity ? true : false}

                  />
                  <TextField
                    margin="dense"
                    id="state"
                    label="state"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.expiry}
                    helperText={formik.errors.expiry}
                    error={formik.errors.expiry ? true : false}
                  />
                  <TextField
                    margin="dense"
                    id="Country"
                    label="Country"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.expiry}
                    helperText={formik.errors.expiry}
                    error={formik.errors.expiry ? true : false}
                  />
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Submit</Button>

                  </DialogActions>
                </DialogContent>
              </Form>
            </Formik>
          </Dialog>
        </div>
      </Container>
    </Box>

  )
}