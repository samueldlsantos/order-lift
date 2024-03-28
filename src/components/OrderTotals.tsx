import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    subTotal: number,
    tipTotal: number,
    total: number,
    saveOrder: () => void
}

const OrderTotals = ({ subTotal, tipTotal, total, saveOrder }: OrderTotalsProps) => {
    return (
        <div className="mt-5">
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propinas</h2>

                <p>Subtotal a pagar:
                    <span className="font-bold">{formatCurrency(subTotal)}</span>
                </p>
                <p>Propina:
                    <span className="font-bold">{formatCurrency(tipTotal)}</span>
                </p>
                <p>Total a pagar:
                    <span className="font-bold">{formatCurrency(total)}</span>
                </p>
            </div>
            <button className=" bg-black text-white w-full p-3 mt-10 uppercase font-bold" onClick={saveOrder}>
                Guardar orden
            </button>
        </div>
    )
}

export default OrderTotals;