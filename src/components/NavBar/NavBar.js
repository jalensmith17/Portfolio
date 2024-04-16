import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

export default function NavBar() {
    return (
        <div className={styles.Nav}>
            <div className={styles.innerNav}>
                <img className={styles.logo} src="https://i.imgur.com/0w4BqIR.png" />
                <ul className={styles.ul}>
                    <Link to="/" className={`${styles.navItem} ${styles.home}`}>
                        <li className={styles.listItem}>
                            <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/126/126496.png" alt="Home" />
                        </li>
                    </Link>                                        
                        <Link to="/" className={`${styles.navItem} ${styles.login}`}>
                            <li className={styles.listItem}>
                                <img className={styles.logSignup} src="https://cdn-icons-png.flaticon.com/128/10405/10405578.png" alt="Log/Signup" />
                            </li>
                        </Link>
                        <>
                                <Link to={`/`} className={styles.navItem}>
                                    <li className={styles.listItem}>
                                        <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/126/126486.png" alt="Profile" />
                                    </li>
                                </Link>
                            <Link to="/" className={styles.navItem}>
                                <li className={styles.listItem}>
                                    <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/126/126472.png" alt="Settings" />
                                </li>
                            </Link>
                            <Link to="/" className={`${styles.navItem} ${styles.home}`}>
                                <li className={styles.listItem}>
                                    <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/471/471664.png" alt="Support" />
                                </li>
                            </Link>
                            <a className={styles.navItem}>
                                <li className={styles.listItem}>
                                    <img className={styles.btnLogo} src="https://cdn-icons-png.flaticon.com/128/10015/10015437.png" alt="Logout" />
                                </li>
                            </a>
                        </>
                </ul>
            </div>
        </div>
    );
}