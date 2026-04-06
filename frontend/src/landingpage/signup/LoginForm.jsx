import { useState } from 'react';
import { BiLoaderAlt } from "react-icons/bi";
import axiosInstance from '../../../lib/axiosInstance.js'
import toast from 'react-hot-toast';

const LoginForm = () => {


    const [state, setState] = useState("register");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const payload = state === "register" ? formData
                : { email: formData.email, password: formData.password };

            const { data } = await axiosInstance.post(
                `/auth/${state}`,
                payload,
                { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
            );

            toast.success(data?.message || "Login Successfull");

            setTimeout(() => {
                window.location.href = 'https://zerodha-investing-stocks-5gdp.vercel.app' || "http://localhost:5173/";
            }, 1000);

        } catch (error) {
            console.log("Error : ", error);
            toast.error(error.response?.data?.message || error?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-sm text-gray-500"
        >
            <div className="mb-4">
                <p className="text-3xl font-medium text-gray-800">
                    {state === "login" ? "Login now" : "Signup now"}
                </p>
                <p className="text-gray-400 mt-2">
                    Or track your existing application
                </p>
            </div>

            {/* name field */}
            {state === "register" && (
                <div className="w-full relative">
                    <input
                        type="text"
                        name="username"
                        placeholder=" "
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full peer border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 dark:border-dark-border dark:bg-card-bg dark:text-dark-text dark:focus:border-accent dark:focus:ring-accent/50 transition-colors duration-200"
                    />
                    <label
                        htmlFor="name"
                        className="absolute left-4 text-gray-500 pointer-events-none bg-white dark:bg-second-bg px-1
                        transition-all duration-200
                        top-1/2 -translate-y-1/2
                        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                        peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-xs"
                    >
                        Username
                    </label>
                </div>
            )}

            {/* email field */}
            <div className="relative w-full">
                <input
                    type="email"
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInputChange}
                    className="peer w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 dark:border-dark-border dark:bg-card-bg dark:text-dark-text dark:focus:border-accent dark:focus:ring-accent/50"
                />
                <label
                    htmlFor="email"
                    className="absolute left-4 text-gray-500 pointer-events-none bg-white dark:bg-second-bg px-1
                    transition-all duration-200
                    top-1/2 -translate-y-1/2
                    peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                    peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-xs"
                >
                    Email
                </label>
            </div>

            {/* password field */}
            <div className="relative w-full">
                <input
                    type="password"
                    name="password"
                    placeholder=" "
                    value={formData.password}
                    onChange={handleInputChange}
                    className="peer w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 dark:border-dark-border dark:bg-card-bg dark:text-dark-text dark:focus:border-accent dark:focus:ring-accent/50"
                />
                <label
                    htmlFor="password"
                    className="absolute left-4 text-gray-500 pointer-events-none bg-white dark:bg-second-bg px-1
                    transition-all duration-200
                    top-1/2 -translate-y-1/2
                    peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                    peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-xs"
                >
                    Password
                </label>
            </div>

            {/* submit button */}
            <button
                type="submit"
                disabled={loading}
                className={`${loading
                    ? "opacity-90 cursor-not-allowed bg-blue-400"
                    : "bg-blue-500 hover:bg-blue-600"
                    } transition-all text-white font-medium w-full py-3 rounded-lg mt-2
                cursor-pointer active:scale-[0.98]
                dark:bg-accent dark:text-main-bg dark:hover:bg-accent-dull`}
            >
                {loading ? (
                    <div className="flex items-center gap-2 justify-center">
                        <BiLoaderAlt
                            size={16}
                            className="h-5 w-5 animate-spin text-white"
                        />
                        <span>Please wait...</span>
                    </div>
                ) : state === "register" ? (
                    "Create Account"
                ) : (
                    "Login"
                )}
            </button>

            <p className="text-xs text-gray-400 mt-2 text-center">
                By proceeding, you agree to the platform <span className="text-blue-500 cursor-pointer">terms</span> & <span className="text-blue-500 cursor-pointer">privacy policy</span>
            </p>

            {/* toggle login/register */}
            <div className="flex items-center justify-center w-full text-sm mt-4">
                {state === "register" ? (
                    <p>
                        Already have an account?{" "}
                        <span
                            onClick={() => setState("login")}
                            className="text-blue-600 cursor-pointer hover:underline dark:text-accent font-medium"
                        >
                            Login here
                        </span>
                    </p>
                ) : (
                    <p>
                        Looking to open an account?{" "}
                        <span
                            onClick={() => setState("register")}
                            className="text-blue-600 cursor-pointer hover:underline dark:text-accent font-medium"
                        >
                            Click here
                        </span>
                    </p>
                )}
            </div>
        </form>
    )
}

export default LoginForm;