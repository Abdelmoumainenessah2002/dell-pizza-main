import Header from "../components/Header";
import { FaMapMarkerAlt, FaArrowCircleRight } from "react-icons/fa";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import PizzaList from "../components/PizzaList";
import pizza_data from '../data/pizza.json';
import Head from "next/head";

const SearchBar = () => {
  return (
    <form className="bg-white p-2 rounded-3xl flex items-center w-1/4 mx-auto">
      <FaMapMarkerAlt className="text-grey w-7 h-7" />
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Enter devivery address"
        className="flex-1 outline-none px-1"
      />
      <button>
        <FaArrowCircleRight className="text-orange w-7 h-7" />
      </button>
    </form>
  );
};

const Option = ({ image, title, description, button_title, url }) => {
  return (
    <div className="w-1/4 space-y-2">
      <img src={image} alt="option_img" className="w-3/4 mx-auto" />
      <h2 className="text-2xl">{title}</h2>
      <p className="text-base">{description}</p>
      <a
        href={url}
        target="_blank"
        className="text-orange py-2 px-3 rounded-lg active:bg-gray"
      >
        {button_title}
      </a>
    </div>
  );
};

const Property = ({ title, description, image,url,button_title, reverse }) => {
  return (
    <div
      className={`p-10 w-full flex ${reverse ? "flex-row-reverse" : "flex-row"
        } items-center justify-between`}
    >
      <div className="space-y-5 w-1/2">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-base">{description}</p>
        <a href={url} target="_blank" className="px-5 py-2 rounded-3xl bg-[#FF3008] text-white block w-fit">
          {button_title}
        </a>
      </div>
      <img src={image} alt="img" className={`w-3/4 ${reverse && "mr-10"}`} />
    </div>
  );
};

export default function Home() {
  const [isSignedIn, setSignedIn] = useState(false);
  const [showSignInCard, setShowSignInCard] = useState(false);
  const [showSignUpCard, setShowSignUpCard] = useState(false);
  const [products, setProducts] = useState([]);

  return <>
    <Head>
      <link rel="shortcut icon" href="/assets/png/logo.png" type="image/x-icon" />
      <title>Dell Pizza</title>
    </Head>
    <section className="relative">
      <div className="fixed top-0 h-1/3 w-full -z-10 max-h-screen ">
        <img
          src="/assets/png/home_background.png"
          alt="backgound"
          className="w-full"
        />
      </div>
      <section className="overflow-x-hidden overflow-auto">
        <Header
          isSignedIn={isSignedIn}
          setSignedIn={setSignedIn}
          showSignInCard={showSignInCard}
          showSignUpCard={showSignUpCard}
          setShowSignInCard={setShowSignInCard}
          setShowSignUpCard={setShowSignUpCard}
          products={products}
          setProducts={setProducts}
        />
        <h1 className="text-6xl text-center text-white leading-[4rem]">
          <span className="block">Pizza and more,</span>
          <span className="block">delivered to your door</span>
        </h1>
        <div className="text-center mt-14">
          <SearchBar />
          <button
            className="block mt-1 text-white underline underline-offset-4 mx-auto"
            onClick={() => setShowSignInCard(true)}
          >
            Sign in for saved address
          </button>
        </div>
        <section className="mt-32 space-y-32 bg-white w-full pt-20 text-center">
          {isSignedIn && <div className="w-3/4 mx-auto space-y-10">
            {pizza_data.map((pizza_list, index) => <PizzaList key={String(index)} title={pizza_list.title} pizza_list={pizza_list.pizza} setProducts={setProducts} />)}
          </div>}
          <div className="flex items-center justify-between w-3/4 mx-auto">
            <Option
              image="/assets/png/become_dasher.png"
              title="Become a Dasher"
              description="As a delivery driver, you'll make reliable money—working anytime, anywhere."
              button_title="Start earning"
              url="https://www.quora.com/Is-it-easier-to-become-a-Dasher-for-DoorDash-than-a-driver-for-UberEats"
            />
            <Option
              image="/assets/png/become_partner.png"
              title="Become a Partner"
              description="Grow your business and reach new customers by partnering with us."
              button_title="Sign up your Store"
              url="https://cloud.google.com/partners/become-a-partner"
            />
            <Option
              image="/assets/png/try_app.png"
              title="Try the App"
              description="Experience the best your neighborhood has to offer, all in one app."
              button_title="Get the app"
              url="https://play.google.com/store/apps/details?id=com.yum.pizzahut"
            />
          </div>
          <div className="relative text-left">
            <Property
              image="/assets/png/pizza.png"
              title={
                <>
                  <span className="block">It’s all here.</span>
                  <span className="block">All in one app.</span>
                </>
              }
              description={
                <>
                  <span className="block">
                    Discover local, on-demand delivery or Pickup from
                  </span>
                  <span className="block">
                    restaurants, nearby grocery and convenience
                  </span>
                  <span className="block">stores, and more.</span>
                </>
              }
              button_title="Get the app"
              url="https://play.google.com/store/apps/details?id=com.yum.pizzahut"
            />
            <div className="w-full bg-[#FF3008] bg-opacity-10">
              <Property
                image="/assets/png/dasher.png"
                title={
                  <>
                    <span>Every Flavor Welcome</span>
                  </>
                }
                description={
                  <>
                    <span className="block">
                      Discover local, on-demand delivery or Pickup from
                    </span>
                    <span className="block">
                      restaurants, nearby grocery and convenience
                    </span>
                    <span className="block">stores, and more.</span>
                  </>
                }
                button_title="Become a dasher"
                url="https://cloud.google.com/partners/become-a-partner"
                reverse={true}
              />
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </section>
  </>;
}

