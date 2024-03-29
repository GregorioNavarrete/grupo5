import patito from '../../assets/img/patito.jpg'
/* import style from './Estrenos.module.css' */

function PreSales(){
    return (
        <header className="preventa">
         <br /><br />
            <h2 className='home'>Bienvenido Administrador</h2>
          <br />  <br />
            <div className='div-pre'>
                <img className='img-pre' src={patito} alt="patito"/>
            </div>
        </header>
    )
}

export default PreSales;