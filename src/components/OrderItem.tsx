import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";

type OrderItemProps = {
    item: OrderItem,
    deleteItem: (id: OrderItem["id"]) => void
}

const OrderItem = ({ item, deleteItem }: OrderItemProps) => {
    return (
        <div className=" flex justify-between items-center border-t py-5 last-of-type:border-b ">
            <div>
            <p>{item.name} - {formatCurrency(item.price)}</p>
            <p className="font-black">Cantidad: {item.quantity} - Total: {item.quantity * item.price}</p>
           
            </div>
            <button className=" bg-red-600 text-white rounded-full h-8 w-8 hover:bg-red-700" onClick={() => deleteItem(item.id)}>
                X
            </button>
        </div>
    )
}

export default OrderItem;