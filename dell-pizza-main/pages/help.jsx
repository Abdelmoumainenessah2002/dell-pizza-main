import Head from "next/head";
import { useState } from "react"

const Option = ({ image, title, selectd }) => {
    return <div className="space-y-5">
        <div className={`p-5 h-60 w-60 bg-white shadow-2xl flex items-center justify-center rounded-2xl transition-colors duration-300 ${selectd && "border border-1 border-orange"}`}>
            <img src={image} alt="option-img" />
        </div>
        <h3 className={`text-center transition-colors duration-300 ${selectd && 'text-orange'}`}>{title}</h3>
    </div>
}
export default function Help() {
    const [selectedOptionIndex, setOptionIndex] = useState(1);
    return <>
        <Head>
            <link rel="shortcut icon" href="/assets/png/logo.png" type="image/x-icon" />
            <title>Dell Pizza</title>
        </Head>
        <section className="py-10 px-5 space-y-10">
            <img src="/assets/svg/logo_orange.svg" alt="logo" />
            <div>
                <h1 className="text-3xl">Welcome to DELL-PIZZA Support</h1>
                <p className="text-grey">What can we help you with today?</p>
            </div>
            <div className="flex items-center justify-between w-4/5 mx-auto">
                <button onClick={() => setOptionIndex(1)}>
                    <Option image="/assets/png/help/1.png" title="Customer Support" selectd={selectedOptionIndex === 1} />
                </button>
                <button onClick={() => setOptionIndex(2)}>
                    <Option image="/assets/png/help/2.png" title="Dasher Support" selectd={selectedOptionIndex === 2} />
                </button>
                <button onClick={() => setOptionIndex(3)}>
                    <Option image="/assets/png/help/3.png" title="Merchant Support" selectd={selectedOptionIndex === 3} />
                </button>
            </div>
            <form className="space-y-10">
                <div className="space-y-3">
                    <label htmlFor="id" className="block">Dasher/Merchant ID</label>
                    <input type="text" name="id" id="id" className="p-2 w-72 bg-[#E7E7E7]" />
                </div>
                <div className="space-y-3">
                    <label htmlFor="email" className="block">Email</label>
                    <input type="email" name="email" id="email" className="p-2 w-72 bg-[#E7E7E7]" />
                </div>
                <div className="space-y-3">
                    <label htmlFor="problem" className="block">Tell us about your problem</label>
                    <textarea name="problem" id="problem" className="p-2 w-full h-52 bg-[#E7E7E7]"></textarea>
                </div>
                <div className="text-center">
                    <button className="px-20 py-2 rounded-sm text-white bg-orange">Submit</button>
                </div>
                <p className="text-center text-grey">Thank you, we will contact you soon!</p>
            </form>
        </section>
    </>
}