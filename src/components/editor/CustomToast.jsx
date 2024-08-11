import { createPortal } from "react-dom";

export default function CustomToast() {
  return createPortal(
    <div className="absolute top-0 start-0">
      <div
        className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
        role="alert"
        tabIndex="-1"
        aria-labelledby="hs-toast-placement-top-left-label"
      >
        <div className="p-2 sm:p-4">
          <h3
            id="hs-toast-placement-top-left-label"
            className="text-xs text-gray-800 font-semibold sm:text-base dark:text-white"
          >
            <div
              id="dismiss-toast"
              className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
              role="alert"
              tabIndex="-1"
              aria-labelledby="hs-toast-dismiss-button-label"
            >
              <div className="flex p-4">
                <p
                  id="hs-toast-dismiss-button-label"
                  className="text-sm text-gray-700 dark:text-neutral-400"
                >
                  Your email has been sent
                </p>

                <div className="ms-auto">
                  <button
                    type="button"
                    className="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white"
                    aria-label="Close"
                    data-hs-remove-element="#dismiss-toast"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>,
    document.getElementById("toast")
  );
}
