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
                            <i className="bi bi-house" style={{fontSize: "1.2rem", color: "#FAFCFE"}}></i>
                            - Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies">
                        <i class="fa-solid fa-book"style={{fontSize: "1.2rem", color: "#FAFCFE"}}></i>
                            - Libros
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                        <i class="fa-solid fa-feather-pointed" style={{fontSize: "1.2rem", color: "#FAFCFE"}}></i>
                            - Autores
                        </a>
                    </li>
                    <li>
                        <Link to="/genres">
                        <i class="fa-solid fa-tag" style={{fontSize: "1.2rem", color: "#FAFCFE"}}></i>
                            - Generos
                        </Link>
                    </li>
                    <li>
                        <Link to="/maspopulares">
                        <i class="fa-solid fa-heart"></i>
                            - Más populares
                        </Link>
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