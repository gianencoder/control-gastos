import { formatearFecha } from "../helpers";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'


import icono_ahorro from '../img/icono_ahorro.svg'
import icono_casa from '../img/icono_casa.svg'
import icono_comida from '../img/icono_comida.svg'
import icono_salud from '../img/icono_salud.svg'
import icono_gastos from '../img/icono_gastos.svg'
import icono_suscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro: icono_ahorro,
    comida: icono_comida,
    casa: icono_casa,
    gastos: icono_gastos,
    salud: icono_salud,
    suscripciones: icono_suscripciones
}


export const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {

    const { categoria, nombre, cantidad, id, fecha, fechaActualizacion } = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>)
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => eliminarGasto(id)}
                destructive={true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>)

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img src={diccionarioIconos[categoria]} alt="Icono del gasto" />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{categoria}</p>
                            <p className='nombre-gasto'>{nombre}</p>
                            <p className='fecha-gasto'>Agregado el: {' '}<span>{formatearFecha(fecha)}</span></p>{fechaActualizacion && <span className="aviso">Modificado el {formatearFecha(fechaActualizacion)}</span>}
                        </div>
                    </div>
                    <p className="cantidad-gasto">${cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
