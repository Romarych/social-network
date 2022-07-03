import React, { FC } from "react";
import preloader from '../../../assets/images/spinner.svg'
import s from "./Preloader.module.css"

let Preloader: FC = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader