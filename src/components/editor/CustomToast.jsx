export default function CustomToast() {
  return (
    <div className="absolute bottom-0 end-0">
      <div
        className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
        role="alert"
        tabIndex="-1"
        aria-labelledby="hs-toast-placement-bottom-right-label"
      >
        <div className="p-2 sm:p-4">
          <h3
            id="hs-toast-placement-bottom-right-label"
            className="text-xs text-gray-800 font-semibold sm:text-base dark:text-white"
          >
            {/* Toast */}
            <div
              className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
              role="alert"
              tabIndex="-1"
              aria-labelledby="hs-toast-condensed-label"
            >
              <div className="flex p-4">
                <p
                  id="hs-toast-condensed-label"
                  className="text-sm text-gray-700 dark:text-neutral-400"
                >
                  Your email has been sent
                </p>

                <div className="ms-auto flex items-center space-x-3">
                  <button
                    type="button"
                    className="text-blue-600 decoration-2 hover:underline font-medium text-sm focus:outline-none focus:underline dark:text-blue-500"
                  >
                    Undo
                  </button>
                  <button
                    type="button"
                    className="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white"
                    aria-label="Close"
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
            {/* End of toast */}
          </h3>
        </div>
      </div>
    </div>
  );
}
