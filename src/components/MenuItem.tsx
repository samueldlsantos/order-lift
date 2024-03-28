import { formatCurrency } from "../helpers";
import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}
const MenuItem = ({ item, addItem }: MenuItemProps) => {

    const { name, price } = item;

    return (
        <button 
        className=" px-5 py-5 flex justify-between border-2 w-full text-black border-teal-700 hover:bg-teal-700"
        onClick={() => addItem(item)}>
        
            <p>{name}</p>
            <p className=" font-black">{formatCurrency(price)}</p>
        </button>
    )
}

export default MenuItem;