import React from 'react';
import {Link} from "react-router-dom";
import styles from "./BaseLayout.module.css";

export const BaseLayout = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <header><Link className={styles.header__link} to="/">The best movie list EVER (really, this is`t a joke)</Link></header>
            <main>
                {children}
            </main>
            <footer>Footer data</footer>
        </div>
    )
}