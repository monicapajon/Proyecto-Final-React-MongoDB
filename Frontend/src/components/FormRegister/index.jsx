import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import { registerRequest } from "../../util/customer";
import toast from "react-hot-toast";

const FormRegister = () => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const handleRegister = async (e) => {
  e.preventDefault();
  const datos = {
    username,
    email,
    password,
    confirmPassword,
    rol: "USER"
  }
  const resp = await registerRequest(datos);
  if (!!resp.response) {
      toast.error(resp.response.data.error);
    } else {
      toast.success("Se registro correctamente!!!");
    }
 }
  return (
    <div>
      <video
        className="w-full h-full object-cover fixed top-0 left-0 z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./src/assets/video/octagon.mp4" type="video/mp4" />
      </video>
      <section >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-black bg-opacity-80 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                <div>
                  <label htmlFor="Username" className="block mb-2 text-sm font-medium  dark:text-white">Your Username</label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="Username"
                    name="Username"
                    id="Username"
                    className="bg-black bg-opacity-50 border border-white text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium  dark:text-white">Your email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-black bg-opacity-50 border border-white text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input  onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-black bg-opacity-50 border border-white text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input   onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-black bg-opacity-50 border border-white text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link id="linkTerms" className="font-medium hover:underline">Terms and Conditions</Link></label>
                  </div>
                </div>
                <input type="submit" id="btn-seeDetail" className="mb-2 inline-block rounded p-2 text-center text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" value={"Register"} />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <Link id="linkLogin" to={"/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default FormRegister