import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Image from "next/image";
import { setLocalStorageData } from "../store/feature/cartSlice";
import { placeOrderRequest } from "../api/order";

function checkout() {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart.cartProduct);

  console.log(cartData);

  useEffect(() => {
    calculateTotal();
  }, [cartData]);

  useEffect(()=>{
    dispatch(setLocalStorageData(JSON.parse(localStorage.getItem('cartData'))))
  },[])


  function calculateTotal() {
    let total = cartData.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.price*currentValue.quantity;
    }, 0);

    setTotal(total);
  }


  const placeOrder = async ()=>{
    let data = {
        customer: {
            name: "Ruhul",
            address: "Dhaka",
            phone: "01823098120"
        },

        calculation: {
            price: total,
            vat: 89,
            total: total+89
        },

        items: cartData
    }

    await placeOrderRequest(data)

  }


  return (
    <div className="flex  justify-center my-14">
        
      <div className="shadow-sm border px-[50px] py-[20px]">
      <h2 className="text-[20px] text-center mb-[20px] text-slate-800 font-semibold">Checkout</h2>
        {cartData &&
          cartData.map((data) => (
            <div
              key={data.id}
              className="flex border-b border-gray-400 space-x-5 mb-4"
            >
              <Image
                src={data?.image}
                alt="food-image"
                width={100}
                height={100}
              />

              <div>
                <p>Name: {data.name}</p>
                <p>price: $ {data.price}</p>
                <p>Quantity {data.quantity}</p>
              </div>
            </div>
          ))}
        <button
          className="px-10 py-3 p border border-blue-600 bg-blue-600 text-white"
          onClick={placeOrder}
        >
          Place Order-> {total}
        </button>
      </div>
    </div>
  );
}

export default checkout;
