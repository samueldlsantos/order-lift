import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import OrderItem from "./components/OrderItem";
import OrderTotals from "./components/OrderTotals";
import Tip from "./components/Tip";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrders"


function App() {

  const {order, tip, setTip,addItem, deleteItem, subTotal, tipTotal, total, saveOrder} = useOrder();
  return (
    <>

      <Header />
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className=" text-center font-black text-2xl">Menu</h2>
          <div className=" space-y-5 mt-10">

            {menuItems.length > 0 ?
              menuItems.map((item) => 
              <MenuItem key={item.id} item={item} addItem={addItem} />) :
              <h2 className="mt-10 text-center font-bold text-red-700">No hay elementos en el menu</h2>}
          </div>

        </div>
        <div className="p-5">
          <h2 className=" text-center font-black text-2xl">Consumo</h2>
          <div className="border border-dashed border-slate-300 p-5 rounded-lg mt-10 ">

            {order.length > 0 ?
            <>
              { 
              order.map((item) => 
              (<OrderItem key={item.id} item={item} deleteItem={deleteItem}/>) ) }
              <Tip tip={tip} setTip={setTip}/>
              <OrderTotals subTotal={subTotal} tipTotal={tipTotal} total={total} saveOrder={saveOrder}/>
            </>
              :
              <h2 className="mt-10 text-center font-bold text-red-700">No hay elementos en la orden</h2>}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
