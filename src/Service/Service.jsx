import classes from './Service.module.css'



const Service = (props) => {
    return <div className={classes.wrapper}>
          
        <div className={classes.content}>
        <hr/>
            <div className={classes.services1}>
            
                <p>Услуг</p>
            </div>
            <div className={classes.services2}>
                <p>Ручное бронирование <span>11</span></p>
            </div>
            <div className={classes.services3}>
                <p>Пакетные туры <span>3</span></p>
            </div>
            <div className={classes.services4}>
                <p>Отели <span>1</span></p>
               
            </div>
            <div className={classes.services5}>
               <p>Всего <span>15</span></p>
            </div>
        </div>
    </div>
}

export default Service;