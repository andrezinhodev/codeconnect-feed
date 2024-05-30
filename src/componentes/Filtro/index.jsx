import './styles.css'

export default function Filtro() {
    return(
        <section className="container-filtro">
            <ul>
                <li>Programação <button>x</button>
                </li>

                <li>React <button>x</button>
                </li>
                
                <li>Fron-End <button>x</button>
                </li>
            </ul>

            <button>Limpar Tudo</button>
        </section>
    )
}