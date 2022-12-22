import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";

const SignInButton = ({ onClick = () => { } }) => {
  return (
    <button
      onClick={onClick}
      className="text-white transition-colors duration-500 hover:text-gray"
    >
      Sign In
    </button>
  );
};
const SignUpButton = ({ onClick = () => { } }) => {
  return (
    <button
      onClick={onClick}
      className="text-black bg-white px-2 py-1 rounded-lg transition-colors duration-500 hover:bg-gray"
    >
      Sign Up
    </button>
  );
};

const ProfilePhoto = ({ photo, setSignedIn }) => {
  const [selected, setSelected] = useState(false);
  return (
    <button onClick={() => setSelected(!selected)} className="w-10 h-10 rounded-full overflow-hidden">
      <img src={photo} alt="profile_photo" className="h-full" />
      {selected && <button className="absolute w-32 h-10 rounded-md bg-white shadow-md top-24 right-5" onClick={() => setSignedIn(false)}>Logout</button>}
    </button>
  );
};
const CartButton = ({ products, setProducts }) => {
  const [selected, setSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(0);
    products.forEach((product) => setTotalPrice((prev) => prev + product.total_price));
  }, [products]);
  return (
    <button className="bg-white text-orange p-2 rounded-lg flex items-center space-x-4 transition-colors duration-500 hover:bg-gray" onClick={() => setSelected(!selected)}>
      <FaShoppingCart className="w-6 h-5" />
      <span className="text-lg">{products.length}</span>
      {selected && <div className="absolute text-black w-52 h-32 p-2 rounded-md bg-white shadow-md top-24 right-20 flex flex-col justify-between">
        <div className="overflow-y-scroll h-full">
          {products.map((product, index) => <div key={String(index)} className="w-full flex items-center justify-between">
            <p>{product.title}</p>
            <p>{product.total_price}</p>
          </div>)}
        </div>
        <div className="px-4 flex items-center justify-between">
          <p>Total : {totalPrice}</p>
          <button className="text-orange" onClick={() => setProducts([])}>Pay</button>
        </div>
      </div>}
    </button>
  );
};
const SignInCard = ({ setShowSignInCard, setShowSignUpCard, setSignedIn }) => {
  return (
    <section onClick={() => setShowSignInCard(false)} className="absolute z-30 top-0 w-full h-full bg-opacity-40 bg-dark-black flex items-start justify-center">
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[40%] mt-52 p-5 space-y-10 rounded-xl bg-gray bg-opacity-100 text-dark-black"
      >
        <h1 className="text-2xl">
          Sign in or Sign up
        </h1>
        <div className="flex items-center w-[40%] mx-auto h-10 bg-[#C7C7C7] rounded-3xl text-center text-base cursor-pointer">
          <div className="flex items-center justify-center h-full w-[60%] rounded-3xl bg-dark-black text-white cursor-pointer">
            <h3>SignIn</h3>
          </div>
          <span
            onClick={() => {
              setShowSignInCard(false);
              setShowSignUpCard(true);
            }}
            className="ml-3"
          >
            SignUp
          </span>
        </div>
        <form className="w-full space-y-5" onSubmit={(event) => {
          event.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value
          fetch('/api/db/sign_in', {
            method: 'POST',
            body: JSON.stringify({
              email: email,
              password: password,
            })
          }).then((response) => {
            // if the user is successfully signed in 
            // then we update `isSignedIn` to true
            if (response.status === 200) {
              setShowSignInCard(false);
              setSignedIn(true);
            }
          });
        }}>
          <div>
            <label htmlFor="email">Email </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              minLength={15}
              className="p-2 h-12 w-full bg-grey bg-opacity-10"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="password">Password</label>
              <label htmlFor="password" className="text-grey opacity-60">
                At least 6 characters
              </label>
            </div>
            <input
              required
              type="password"
              name="password"
              id="password"
              minLength={6}
              className="p-2 h-12 w-full bg-grey bg-opacity-10"
            />
          </div>
          <button className="h-12 w-full bg-[#FF3008] text-white rounded-3xl">
            Sign In
          </button>
        </form>
        <p className="text-center">
          By tapping “Sign Up” you agree to DoorDash’s{" "}
          <u className="cursor-pointer">Terms and Conditions</u> and{" "}
          <u className="cursor-pointer">Privacy Policy.</u>
        </p>
      </div>
    </section>
  );
};

const SignUpCard = ({ setShowSignInCard, setShowSignUpCard }) => {
  return (
    <section onClick={() => setShowSignUpCard(false)} className="absolute z-30 top-0 w-full h-full bg-opacity-50 bg-dark-black flex items-start justify-center">
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[40%] mt-52 p-5 space-y-10 rounded-xl bg-gray bg-opacity-100 text-dark-black"
      >
        <h1 className="text-2xl">
          Sign in or Sign up
        </h1>
        <div className="flex flex-row-reverse items-center w-[40%] mx-auto h-10 bg-[#C7C7C7] rounded-3xl text-center text-base cursor-pointer">
          <div className="flex items-center justify-center h-full w-[60%] rounded-3xl bg-dark-black text-white cursor-pointer">
            <h3>SignUp</h3>
          </div>
          <span
            onClick={() => {
              setShowSignInCard(true);
              setShowSignUpCard(false);
            }}
            className="mr-3"
          >
            SignIn
          </span>
        </div>
        <form className="w-full space-y-10" method="POST" action="/api/db/sign_up">
          <div className="flex items-center justify-between gap-x-5">
            <div>
              <label htmlFor="first_name">First Name</label>
              <input
                required
                type="text"
                name="first_name"
                id="first_name"
                className="p-2 h-12 w-full bg-grey bg-opacity-10"
              />
            </div>
            <div>
              <label htmlFor="last_name">Last Name</label>
              <input
                required
                type="text"
                name="last_name"
                id="last_name"
                className="p-2 h-12 w-full bg-grey bg-opacity-10"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              minLength={15}
              className="p-2 h-12 w-full bg-grey bg-opacity-10"
            />
          </div>
          <div className="flex items-center justify-between gap-x-5">
            <div className="w-1/3">
              <label htmlFor="country">Country</label>
              <input
                disabled
                type="text"
                name="country"
                id="country"
                value="+123 (DZ)"
                className="p-2 h-12 w-full bg-grey bg-opacity-10 text-grey"
              />
            </div>
            <div className="w-3/4">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                required
                type="text"
                name="mobile"
                id="mobile"
                className="p-2 h-12 w-full bg-grey bg-opacity-10"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="password">Password</label>
              <label htmlFor="password" className="text-grey opacity-60">
                At least 6 characters
              </label>
            </div>
            <input
              required
              type="password"
              name="password"
              id="password"
              minLength={6}
              className="p-2 h-12 w-full bg-grey bg-opacity-10"
            />
          </div>
          <button className="h-12 w-full bg-[#FF3008] text-white rounded-3xl">
            Sign Up
          </button>
        </form>
        <p className="text-center">
          By tapping “Sign Up” you agree to DoorDash’s{" "}
          <u className="cursor-pointer">Terms and Conditions</u> and{" "}
          <u className="cursor-pointer">Privacy Policy.</u>
        </p>
      </div>
    </section>
  );
};

const Header = ({
  isSignedIn,
  showSignInCard,
  showSignUpCard,
  setShowSignInCard,
  setShowSignUpCard,
  setSignedIn,
  products,
  setProducts,
}) => {
  return (
    <>
      <div className="w-full py-2 px-4 flex flex-col items-center">
        <img src="/assets/svg/logo.svg" alt="logo" className="w-60" />
        <div className="w-full h-10 space-x-5 text-sm flex flex-row items-center justify-end">
          {!isSignedIn ? (
            <>
              <SignInButton onClick={() => setShowSignInCard(true)} />
              <SignUpButton onClick={() => setShowSignUpCard(true)} />
            </>
          ) : (
            <>
              <CartButton products={products} setProducts={setProducts} />
              <ProfilePhoto setSignedIn={setSignedIn} photo="/assets/jpg/profile.jpg" />
            </>
          )}
        </div>
      </div>
      {showSignInCard && (
        <SignInCard
          setShowSignInCard={setShowSignInCard}
          setShowSignUpCard={setShowSignUpCard}
          setSignedIn={setSignedIn}
        />
      )}
      {showSignUpCard && (
        <SignUpCard
          setShowSignInCard={setShowSignInCard}
          setShowSignUpCard={setShowSignUpCard}
        />
      )}
    </>
  );
};

Header.propTypes = {
  isSignedIn: PropTypes.bool,
};
export default Header;
