import { useMemo, useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) => {

        const itemExists = order.find( orderItem => orderItem.id === item.id )

        if(itemExists){
            const orderUpdated = order.map( orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1 } : orderItem )
            
            setOrder(orderUpdated)

            return;
        }

        var newItem : OrderItem = {
            ...item,
            quantity: 1
        } 
        setOrder([...order,newItem]);
    }

    const deleteItem = (id: MenuItem["id"] ) => {
        const orderUpdated = order.filter(orderItem => orderItem.id !== id )

        setOrder(orderUpdated);

    }
    const subTotal = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price) , 0), [order])
    const tipTotal = useMemo(() => subTotal * tip, [tip, order])
    const total = useMemo(() => subTotal + tipTotal, [subTotal, tipTotal])

    const saveOrder = () => {
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        setOrder,
        tip,
        setTip,
        addItem,
        deleteItem,
        subTotal,
        tipTotal,
        total,
        saveOrder
    }
}