import Image from "next/image";
import { useDispatch } from "react-redux";
import { setCartProduct } from "../../store/feature/cartSlice";

function FoodCard({ foodData }) {
  const dispatch = useDispatch();

  const addToCart = (data) => {
    console.log(data);
    let cartData = {
      ...data,
      quantity: 1,
    };
    dispatch(setCartProduct(cartData));
  };

  if (!foodData)
    return <h1 className="text-2xl text-bold">No Data available</h1>;

  return (
    <div className="shadow rounded-[10px] text-[12px]">
      <div className="w-full h-[16.875rem] md:h-[15.5rem] lg:h-[22.875rem] relative">
        <Image src={foodData?.image} alt="pizza" fill />
      </div>
      <div className="flex items-center justify-between my-[1rem] px-[12.5px]">
        <p>{foodData?.name}</p>
        <p>$ {foodData?.price}</p>
      </div>

      <div className="flex items-center justify-between px-[12.5px] pb-[12.5px]">
        <div className="flex items-center space-x-[12px]">
          <div className="flex items-center bg-[#F7F8FA] py-[4px] px-[6px] space-x-[6px] rounded-[5px]">
            <Image
              src="/assets/icons/star.svg"
              alt="star"
              width={12}
              height={12}
            />
            <span>4.7</span>
          </div>
          <div className="flex items-center bg-[#F7F8FA] p-[4px] space-x-[6px] rounded-[5px]">
            <span>50-79 min</span>
          </div>
        </div>
        <div>
          <button
            className="bg-[#F3BA00] p-[.2rem]"
            onClick={() => addToCart(foodData)}
          >
            <Image
              src="/assets/icons/btn-icon.svg"
              alt="btn-icon"
              width={11}
              height={11}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
