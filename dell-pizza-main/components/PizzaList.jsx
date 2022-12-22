import { useState } from 'react';
import Pizza from './Pizza';
import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

const ProductDetailsCard = ({ setProductDetails, product, setProducts }) => {
    const [number, setNumber] = useState(0);
    const [saved, setSaved] = useState(false);
    const [size, setSize] = useState("L");
    const [deliveryType, setDeliveryType] = useState("simple");
    return <div onClick={(event) => event.stopPropagation()} className="w-3/4 bg-white z-50 p-5 rounded-2xl flex gap-x-5 text-left">
        <div className="space-y-5 w-[65%]">
            <img src={product?.image} alt="pizza-img" className="rounded-2xl w-full h-1/2" />
            <div className='space-y-1'>
                <h1 className="text-3xl">{product?.title}</h1>
                <p className='flex items-center space-x-2 text-grey'>
                    <span className="inline-block">
                        <img src="/assets/svg/logo_blue.svg" alt="" />
                    </span>
                    <div className="w-1 h-1 bg-grey rounded-full"></div>
                    <span>Halal Pizza</span>
                    <div className="w-1 h-1 bg-grey rounded-full"></div>
                    <span>3.7</span>
                    <AiFillStar className="text-grey" />
                    <span>173 ratings</span>
                    <div className="w-1 h-1 bg-grey rounded-full"></div>
                    <span>0.4 mi</span>
                    <div className="w-1 h-1 bg-grey rounded-full"></div>
                    <span>$$</span>
                </p>
                <p className='flex items-center space-x-2 text-grey'>
                    <span className='flex items-center space-x-1'>
                        <AiOutlineClockCircle />
                        <span className='text-green-700'>Open Now</span>
                    </span>
                    <div className="w-1 h-1 bg-grey rounded-full"></div>
                    <span>Closes at 2:44 AM</span>
                </p>
                <div className='w-full flex items-center justify-between p-1'>
                    <div className='w-1/2 border border-1 border-grey rounded-md p-1 flex items-center justify-between'>
                        <div className='py-1 px-5 text-center bg-[#D7F5F5] rounded-md'>
                            <p className='text-[#00838A]'>{product?.fee} $</p>
                            <p className='text-grey'>Delivery fee</p>
                        </div>
                        <div className='h-14 w-[0.07rem] bg-grey'></div>
                        <div className='py-1 px-5 text-center rounded-md'>
                            <p>{product?.delivery}min</p>
                            <p className='text-grey'>Delivery Time</p>
                        </div>
                    </div>
                    <div onClick={() => setSaved(!saved)} className='px-2 py-1 space-x-2 bg-[#E7E7E7] rounded-md cursor-pointer'>
                        {saved ? <BsSuitHeartFill className='inline' /> : <BsSuitHeart className='inline' />}
                        <span>Save</span>
                    </div>
                </div>
            </div>

        </div>
        <div className='space-y-5 w-[40%]'>
            <form className='flex flex-col justify-between w-full h-[85%]'>
                <dir className='space-y-7'>

                    <div className='space-y-3'>
                        <label htmlFor="number" className='block text-xl'>Number</label>
                        <input type="number" name="number" id="number" value={number} min={1} className='w-1/3 border border-1 p-1 border-[#727171] rounded-sm' onChange={(object) => {
                            const num = parseInt(object.target.value);
                            setNumber(num <= 0 ? 1 : num);
                        }} />
                    </div>
                    <div className='space-y-3 w-full'>
                        <label htmlFor="size" className='block text-xl'>Size</label>
                        <input type="text" name="size" id="size" value={size} hidden />
                        <div className="flex items-center justify-between w-full rounded-sm border border-1 border-[#727171] p-[2px] space-x-1">
                            <button onClick={() => setSize("L")} type="button" className={`w-full roudned-sm ${size === 'L' && "text-[#00838A] bg-[#D7F5F5]"}`}>L</button>
                            <div className='w-[1px] h-5 bg-[#727171]'></div>
                            <button onClick={() => setSize("XL")} type="button" className={`w-full roudned-sm ${size === 'XL' && "text-[#00838A] bg-[#D7F5F5]"}`}>XL</button>
                            <div className='w-[1px] h-5 bg-[#727171]'></div>
                            <button onClick={() => setSize("XXL")} type="button" className={`w-full roudned-sm ${size === 'XXL' && "text-[#00838A] bg-[#D7F5F5]"}`}>XXL</button>
                            <div className='w-[1px] h-5 bg-[#727171]'></div>
                            <button onClick={() => setSize("XXXL")} type="button" className={`w-full roudned-sm ${size === 'XXXL' && "text-[#00838A] bg-[#D7F5F5]"}`}>XXXL</button>
                        </div>
                    </div>
                    <div className='space-y-3 w-full'>
                        <label htmlFor="delivery-type" className='block text-xl'>Delivery Type</label>
                        <input type="text" name="delivery-type" id="delivery-type" value={deliveryType} hidden />
                        <div className="flex items-center justify-between w-1/2 rounded-sm border border-1 border-[#727171] p-[2px] space-x-1">
                            <button onClick={() => setDeliveryType("simple")} type="button" className={`w-full roudned-sm ${deliveryType === 'simple' && "text-[#00838A] bg-[#D7F5F5]"}`}>Simple</button>
                            <div className='w-[1px] h-5 bg-[#727171]'></div>
                            <button onClick={() => setDeliveryType("fast")} type="button" className={`w-full roudned-sm ${deliveryType === 'fast' && "text-[#00838A] bg-[#D7F5F5]"}`}>Fast</button>
                        </div>
                    </div>
                </dir>
                <div className='flex justify-between text-xl'>
                    <h2>Total price</h2>
                    <h2 className='text-[#767676]'>{(product?.price * size.length + ((deliveryType === "simple") ? product?.delivery : product?.delivery * 2)) * (isNaN(number) ? 0 : number)} DZD</h2>
                </div>
                <button type="button" className='w-full py-4 bg-[#FF3008] text-white rounded-md text-xl' onClick={() =>{
                    product['total_price'] = (product?.price * size.length + ((deliveryType === "simple") ? product?.delivery : product?.delivery * 2)) * (isNaN(number) ? 0 : number);
                    setProducts((prev) => [...prev, product]);
                    setProductDetails(null);
                }}>Add to your Cart</button>
            </form>
        </div>
    </div>
}

const PizzaList = ({ title, pizza_list, setProducts }) => {
    const [productDetails, setProductDetails] = useState(null);
    return <>
        {productDetails !== null && <section onClick={() => setProductDetails(null)} className="absolute z-40 left-0 top-0 w-full h-full bg-opacity-50 bg-dark-black flex items-start justify-center py-32   ">
            <ProductDetailsCard setProductDetails={setProductDetails} product={productDetails} setProducts={setProducts}/>
        </section>}
        <div className="text-left space-y-5">
            <h1 className="text-3xl">{title}</h1>
            <div className="w-full grid grid-cols-3 gap-[5%]">
                {pizza_list.map((pizza, index) => <Pizza key={String(index)} onClick={() => {
                    if (productDetails === null){
                        setProductDetails(pizza);
                        window.scrollTo({top: 100})
                    }
                }} image={pizza?.image} title={pizza?.title} delivery={pizza?.delivery} fee={pizza?.fee} />)}
            </div>
        </div>
    </>
};

export default PizzaList;