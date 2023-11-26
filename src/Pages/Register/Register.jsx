import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import swal from "sweetalert";
import useAxios from "../../Hooks/useAxios";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [required, setRequired] = useState("");
  const [passVal, setPassVal] = useState("");
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const axios2 = useAxios();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const image = e.target;
    const role = form.get("role");
    const salary = form.get("salary");
    const designation = form.get("designation");
    const bankAccountNo = form.get("bankAccountNo");
    const password = form.get("password");
    console.log({
      name,
      email,
      image,
      password,
      role,
      salary,
      designation,
      bankAccountNo,
    });
    if (!role) {
      return setRequired("This field required");
    }
    setRequired("");
    if (password.length < 6) {
      setPassVal("Password at least 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPassVal("Must one uppercase characters");
      return;
    }
    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
      setPassVal("Must one special characters");
      return;
    }
    setPassVal("");
    const res = await axios.post(image_hosting_api, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data.data.display_url);
    let photo = null;
    if (res.data.data.display_url) {
      photo = res.data.data.display_url;
    }
    const toastId = toast.loading("Logging in ...");

    createUser(email, password)
      .then((result) => {
        const user = { email: result.user.email };
        axios2
          .post(`/auth/access-token`, user)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            return swal(error.code);
          });
        updateUser(name, photo).then(() => {
          // Profile updated!
          toast.success("Successfully Registered!", { id: toastId });
          navigate("/");
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message, { id: toastId });
      });
  };

  return (
    <div className="bg-transparent ">
      <Helmet>
        <title>Register - TechFirm IT</title>
      </Helmet>
      <div className="max-w-5xl mx-auto p-10 mt-20">
        <div className="bg-white  rounded shadow p-10  border border-gray-200">
          <div>
            <h1 className="text-3xl text-dark-01  font-semibold text-center mb-2">
              Register - TechFirm IT
            </h1>
            <p className="text-center text-gray-600  mb-3">
              Already have an account?{"  "}
              <Link className="text-blue-01 ml-2" to={"/login"}>
                Go Login!
              </Link>
            </p>
            <form onSubmit={handleRegister} className="mt-8">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="mb-4">
                  <div>
                    <label
                      className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                  </div>
                  <div>
                    <input
                      className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                </div>{" "}
                <div className="mb-4">
                  <div>
                    <label
                      className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                  </div>
                  <div>
                    <input
                      className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="mb-4">
                  <div>
                    <label
                      className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                      htmlFor="role"
                    >
                      Role:{" "}
                      <span className="font-light text-red-600 text-base">
                        {required}
                      </span>
                    </label>
                  </div>
                  <div>
                    <select
                      className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full"
                      name="role"
                      id="role"
                    >
                      <option value="" disabled selected hidden>
                        Select your role...
                      </option>
                      <option value="Employee">Employee</option>
                      <option value="HR">HR</option>
                    </select>
                  </div>
                </div>{" "}
                <div className="mb-4">
                  <div>
                    <label
                      className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                      htmlFor="designation"
                    >
                      Designation:
                    </label>
                  </div>
                  <div>
                    <input
                      className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full"
                      type="designation"
                      name="designation"
                      id="designation"
                      placeholder="Designation"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="mb-4">
                  <div>
                    <label
                      className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                      htmlFor="bankAccountNo"
                    >
                      Bank:
                    </label>
                  </div>
                  <div>
                    <input
                      className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full"
                      type="text"
                      name="bankAccountNo"
                      id="bankAccountNo"
                      placeholder="Bank account no..."
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div>
                    <label
                      className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                      htmlFor="salary"
                    >
                      Salary:
                    </label>
                  </div>
                  <div>
                    <div className="relative">
                      <input
                        className="pl-8 pr-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full"
                        type="number"
                        name="salary"
                        id="salary"
                        placeholder="Salary"
                        required
                      />
                      <span className="absolute top-2 left-3 text-lg text-dark-02">
                        $
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <label
                    className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                    htmlFor="image"
                  >
                    Image:
                  </label>
                </div>
                <div>
                  <input
                    className=" p-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="image"
                    id="image"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <label
                    className="text-lg font-medium text-dark-01 opacity-80 mb-1 block"
                    htmlFor="password"
                  >
                    Password:
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full mb-2"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    id="password"
                    required
                  />
                  <span
                    className="text-lg absolute top-3 right-4 text-stone-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <span className="font-light text-red-600 text-base">
                  {passVal}
                </span>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full mt-6 mb-10 py-2.5 text-white text-lg font-medium  bg-gradient-to-r from-blue-02 to-blue-01 hover:bg-transparent duration-500  rounded active:scale-95"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
