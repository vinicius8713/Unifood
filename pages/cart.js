import styles from "../styles/Cart.module.css";
import Button from '@mui/material/Button';
import Image from "next/image";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../components/Modal";

const Cart = () => {

    const cart = useSelector(state => state.entities.carts)

    const [open, setOpen] = useState(false)
    const [cash, setCash] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trTitle}>
                            <th>Produtos</th>
                            <th>Nome</th>
                            <th>Extras</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.products.map(product => (
                            <tr className={styles.tr} key={product._id}>
                                <td>
                                    <div className={styles.imgContainer}>
                                        <Image
                                            src={product.img}
                                            layout="fill"
                                            objectFit="cover"
                                            alt=""
                                        />
                                    </div>
                                </td>
                                <td>
                                    <span className={styles.name}>{product.title}</span>
                                </td>
                                <td>
                                    <span className={styles.extras}>
                                        {product.extraOptions.map(extra => (
                                            <span key={extra._id}>{extra.text}, </span>
                                        ))}
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.price}>R$ {product.price}</span>
                                </td>
                                <td>
                                    <span className={styles.quantity}>{product.quantity}</span>
                                </td>
                                <td>
                                    <span className={styles.total}>R$ {product.price * product.quantity} </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>R$ {cart.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Desconto:</b>R$ 0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>R$ {cart.total}
                    </div>
                    {open ?
                        <div className={styles.add}>
                            <Button size="large" variant="contained" color="bg_color" onClick={() => (setCash(true))}>Pagamento na entrega </Button>
                        </div>
                        :
                        <div className={styles.add}>
                            <Button size="large" variant="contained" color="bg_color" onClick={() => (setOpen(true))}>Confira agora</Button>
                        </div>}
                </div>
            </div>
            {cash && <Modal setCash={setCash} />}
        </div>
    );
};

export default Cart;