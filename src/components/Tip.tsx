import { tipOptions } from "../data/db";

type TipProps = {
    tip: number,
    setTip: React.Dispatch<React.SetStateAction<number>>
}

const Tip = ({ tip, setTip }: TipProps) => {
    return (
        <div className="mt-5">
            <h3 className="font-black text-2xl">Propina: </h3>

            <form className="mt-5">
                <div className="flex justify-around">
                    {
                        tipOptions.map((tipOtion) =>
                        (
                            <div key={tipOtion.id}>
                                <label htmlFor={tipOtion.id}>{tipOtion.label} </label>
                                <input id={tipOtion.id} type="radio" name="tip" value={tipOtion.value} onChange={e => setTip(+e.target.value)}
                                checked={tipOtion.value === tip} />

                            </div>
                        )
                        )
                    }
                </div>

            </form>
        </div>
    )
}

export default Tip;