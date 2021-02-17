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
                        <div className={classes.services2ContentBlock1}>
                            <div className={classes.green}><p>Ручное бронирование</p></div>
                            <div className={classes.numbers}><p>11</p></div>
                        </div>
                        <div className={classes.services2ContentBlock2}>
                            <div className={classes.blueLong}><p>Пакетные туры</p></div>
                            <div className={classes.numbers}><p>3</p></div>
                        </div>
                        <div className={classes.services2ContentBlock3}>
                            <div className={classes.blueShirt}><p>Отели</p></div>
                            <div className={classes.numbers}><p>1</p></div>
                        </div>
                    </div>
                </div>
                <div className={classes.all}><p>Всего</p><p>15</p></div>
            </div>
        </div>
    )
}

export default Service;