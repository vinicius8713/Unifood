import React, { useState } from 'react'
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, getOrderByName } from '../redux/orders';
import { cartReseted } from '../redux/carts';
import { useRouter } from 'next/router';
import axios from "axios"



function Modal({ setCash }) {

    const dispatch = useDispatch()
    const router = useRouter()
    const [customer, setCustomer] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const cart = useSelector(state => state.entities.carts)

    const handleClose = () => {
        setCash(false)
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        if (cart.orderQuantity) {
            const data = { customer, address, phone, total: cart.total, method: 0 }
            handleClose()
            const response = await axios.post('http://localhost:3000/api/orders', data)
            dispatch(cartReseted())
            router.push(`/orders/${response.data.response._id}`)
        }
        handleClose()
    }

    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle style={{ fontWeight: "bold", fontSize: "2rem", paddingBottom: "0rem" }}>Pagamento na entrega</DialogTitle>
            <form onSubmit={handleSubmit} >
                <DialogContent style={{ paddingTop: "0.5rem" }}>
                    <DialogContentText style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1rem", marginBottom: "0.5rem" }}>
                    Você vai pagar R$12  depois da entrega
                    </DialogContentText>
                    <TextField inputProps={{ minLength: 3 }} autoFocus required color="bg_color" margin="dense" value={customer} onChange={(evt) => (setCustomer(evt.target.value))} label=" Nome Comleto" type="text" fullWidth variant="standard" style={{ marginBottom: "0.5rem" }} />
                    <TextField inputProps={{ minLength: 3 }} autoFocus required color="bg_color" margin="dense" value={address} onChange={(evt) => (setAddress(evt.target.value))} label="Endereço" type="text" fullWidth variant="standard" style={{ marginBottom: "0.5rem" }} />
                    <TextField inputProps={{ minLength: 3 }} autoFocus required color="bg_color" margin="dense" value={phone} onChange={(evt) => (setPhone(evt.target.value))} label="Número de telefone" type="text" fullWidth variant="standard" style={{ marginBottom: "0.5rem" }} />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="bg_color" onClick={handleClose} style={{ textTransform: "none", }}>Cancelar</Button>
                    <Button disabled={address.length < 3 || customer.length < 3 || phone.length < 3} variant="contained" color="bg_color" type="submit" style={{ textTransform: "none" }}>Salvar</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default Modal
