import logoPrisma from '../assets/img/logo-prisma.svg'
import { Link } from 'react-router-dom'

export default function MenuWrap() {

    return( 
        <header className="menu-wrap">
        <figure className="user">
            <div className="user-avatar">
            
                {/* <img src={logoPrisma} alt="Logo Prisma	"/> */}
                <a href="http://localhost:3000/"><img src={logoPrisma} alt="Logo Prisma	"/></a>
                {/*
                tube que levanta otro servidor como API*/}
                   
            </div>
          
            
        </figure>
        <nav>
            <section className="dicover">
                <h3>Opciones</h3>
                <ul>
                <li>
                    <Link to="/">
                            <i className="bi bi-house" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies">
                            <i className="bi bi-film" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Películas
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-play-circle" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Cines
                        </a>
                    </li>
                    <li>
                        <Link to="/genres">
                            <i className="bi bi-person" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Géneros
                        </Link>
                    </li>
                    <li>
                        <Link to="/maspopulares">
                            <i className="bi bi-bar-chart"></i>
                            - Más populares
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-tags"></i>
                            - Promociones
                        </a>
                    </li>
                    <li>
                        <Link to="/statistics">
                            <i className="bi bi-graph-up"></i>
                            - Estadísticas
                        </Link>
                    </li>
                    <li>
                        <Link to="/Libros">
                            <i className="bi bi-graph-up"></i>
                            - Libros
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    </header>
    )
    
}