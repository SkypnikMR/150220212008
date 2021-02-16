import classes from './Service.module.css'



const Service = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.services1}>
                    <div className={classes.services1Text}><p>Услуг</p></div>
                </div>
                <div className={classes.services2}>

                    <div className={classes.services2Content}>
                        <div className={classes.services2ContentBlock1}><p className={classes.green}>Ручное бронирование</p><p><span>11</span></p></div>
                        <div className={classes.services2ContentBlock2}><p className={classes.blueLong}>Пакетные туры</p><p><span>3</span></p></div>
                        <div className={classes.services2ContentBlock3}><p className={classes.blueShirt}>Отель</p><p><span>1</span></p></div>
                    </div>
                </div>
                <div className={classes.all}><p>Всего</p><p>15</p></div>
            </div>
        </div>
    )
}

export default Service;