import React from 'react'
import Link from 'next/link'
import styles from '../styles/footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.logoDetails}>
                        <span className={styles.logo_name}><span style={{ color: "#ac0101" }}>Uni</span>Food</span>
                    </div>
                </div>
                <div className={styles.linkBoxes}>
                    <ul className={styles.box}>
                        <li className={styles.link_name}><a >Companhia</a></li>
                        <li><Link href="/"><a >Home</a></Link></li>
                        <li><Link href="/new"><a >Meu carrinho</a></Link></li>
                        <li><Link href="/about"><a >Sobre</a></Link></li>
                        <li><Link href="/"><a >Produtos</a></Link></li>
                    </ul>
                    <ul className={styles.box}>
                        <li className={styles.link_name}><a >Serviços</a></li>
                        <li><Link href="/"><a >Produtos</a></Link></li>
                        <li><Link href="/new"><a >Meu carrinho</a></Link></li>
                        <li><Link href="/new"><a >Sobre</a></Link></li>
                        <li><Link href="/new"><a >Contato</a></Link></li>
                    </ul>
                    <ul className={styles.box}>
                        <li className={styles.link_name}><a >Conta</a></li>
                        <li><Link href="/login"><a >Entrar</a></Link></li>
                        <li><Link href="/register"><a >Inscreva-se gratuitamente</a></Link></li>
                    </ul>
                    <ul className={styles.box}>
                        <li className={styles.link_name}><a >Top Categories</a></li>
                        <li><Link href="/c/61554bfe801949ad7b9be4ff"><a ></a></Link></li>
                        <li><Link href="/c/61554c2753bcf306407cb1bd"><a ></a></Link></li>
                        <li><Link href="/c/61554c43d2a6b15f764aff36"><a ></a></Link></li>
                        <li><Link href="/c/61554c63dfd6a37d71449b5c"><a ></a></Link></li>
                    </ul>
                   
                </div>
            </div>
        </footer>
    )
}

export default Footer
