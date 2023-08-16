import { useContext } from "react";
import { ShopingContext } from "../../context/Context";

function CartItems({ id, quatity }) {
  const { prod, removeitemfromcart } = useContext(ShopingContext);
  const item = prod.find((obj) => obj.id === id);

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item?.image}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{item?.title}</a>
            </h3>
            <p className="ml-4">${item?.price * quatity}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item?.category}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Quantity x {quatity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => removeitemfromcart(id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItems;
