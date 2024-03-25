import patito from '../../assets/img/patito.jpg'
/* import style from './Estrenos.module.css' */

function PreSales(){
    return (
        <header className="preventa">
            <h2>Preventa</h2>
            <div className='img-pre'>
                <img src={patito} alt="patito"/>
            </div>
        </header>
    )
}

export default PreSales;