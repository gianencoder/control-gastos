import { Gasto } from "./Gasto"

export const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{gastos.lenght ? 'Gastos' : 'No hay gastos'}</h2>
            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                />
            ))}
        </div>
    )
}
