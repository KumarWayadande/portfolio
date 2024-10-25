import { useContext, useEffect , useState} from "react";
import Heading from "./Heading";
import { NavbarContext } from "../../store/NavbarContext";
import { useNavigate } from "react-router-dom";
export default function LoginLandingPage() {
  const { onOAuthClick, currentUser } = useContext(NavbarContext);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser && localStorage.getItem("token")){
      navigate("/");
    }
    else{
      navigate("/login")
    }
  }, [currentUser]);


  async function handleClick() {
    setBtnDisabled(true);
    if (await onOAuthClick() !== "Not logged in") {
      console.log("Here come in ");
      navigate("/");
    } else {
      setBtnDisabled(false);
      navigate("/login");
    }
  }
  return (
    <div className="flex flex-col justify-center text-center">
      <div className="my-16 px-20 text-center">
        <Heading heading="To make the world recognize you, one must get logged in first" />
      </div>
      <div className=""></div>
      <div className="mx-auto mb-8">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Yes! Its easy
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                If you have a google account, go ahead...
              </p>
            </div>

            <div className="mt-5">
              <div className="grid gap-y-4">
                <button
                  onClick={handleClick}
                  type="submit"
                  disabled={btnDisabled}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#1fbcaa] text-white hover:bg-[#178a7d] focus:outline-none focus:bg-[#1fbcaa] disabled:opacity-50 disabled:pointer-events-none"
                >
                  {btnDisabled ? 'Wait processing...' : 'Login with Google'}
                </button>
                {/* <CustomButton label="Login with Google" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
