function History() {
  return (
    <>
      <div className="mb-1 p-1">
        <h1 className="text-2xl font-bold text-white mb-2">History</h1>
        <p className="text-gray-400 text-sm">All places you draw</p>
      </div>

      {/* Wrapper Container with scrollable feature */}
      <div
        className="p-3 max-h-[800px] overflow-y-auto
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-track]:bg-neutral-700
      [&::-webkit-scrollbar-thumb]:bg-indigo-500"
      >
        {/* Card 1 */}
        <div className="flex flex-row items-center mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-md w-full max-w-2xl overflow-hidden border border-gray-700">
          <img
            className="ml-4 object-cover h-24 w-24 rounded-xl"
            src="https://picsum.photos/125"
            alt="Noteworthy technology acquisitions 2021"
          />
          <div className="flex flex-col justify-between p-4 leading-normal flex-grow">
            <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy Technology
              <br />
              <span className="ml-2 mb-2 text-sm font-extralight text-gray-500 dark:text-gray-400 tracking-wide">
                <span className="font-semibold">+15 km </span>
                from actual location
              </span>
            </h5>
            <div className="flex w-full gap-2 mt-2">
              <button
                type="button"
                className="flex-1 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Navigate
              </button>
              <button
                type="button"
                className="flex-1 text-white border border-gray-600 hover:text-white bg-gray-800 hover:bg-gray-700 transition duration-150 focus:ring-2 focus:ring-gray-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Claim
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-row items-center mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-md w-full max-w-2xl overflow-hidden border border-gray-700">
          <img
            className="ml-4 object-cover h-24 w-24 rounded-xl"
            src="https://picsum.photos/125"
            alt="Noteworthy technology acquisitions 2021"
          />
          <div className="flex flex-col justify-between p-4 leading-normal flex-grow">
            <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy Technology
              <br />
              <span className="ml-2 mb-2 text-sm font-extralight text-gray-500 dark:text-gray-400 tracking-wide">
                <span className="font-semibold">+15 km </span>
                from actual location
              </span>
            </h5>
            <div className="flex w-full gap-2 mt-2">
              <button
                type="button"
                className="flex-1 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Navigate
              </button>
              <button
                type="button"
                className="flex-1 text-white border border-gray-600 hover:text-white bg-gray-800 hover:bg-gray-700 transition duration-150 focus:ring-2 focus:ring-gray-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Claim
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-row items-center mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-md w-full max-w-2xl overflow-hidden border border-gray-700">
          <img
            className="ml-4 object-cover h-24 w-24 rounded-xl"
            src="https://picsum.photos/125"
            alt="Noteworthy technology acquisitions 2021"
          />
          <div className="flex flex-col justify-between p-4 leading-normal flex-grow">
            <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy Technology
              <br />
              <span className="ml-2 mb-2 text-sm font-extralight text-gray-500 dark:text-gray-400 tracking-wide">
                <span className="font-semibold">+15 km </span>
                from actual location
              </span>
            </h5>
            <div className="flex w-full gap-2 mt-2">
              <button
                type="button"
                className="flex-1 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Navigate
              </button>
              <button
                type="button"
                className="flex-1 text-white border border-gray-600 hover:text-white bg-gray-800 hover:bg-gray-700 transition duration-150 focus:ring-2 focus:ring-gray-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Claim
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-row items-center mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-md w-full max-w-2xl overflow-hidden border border-gray-700">
          <img
            className="ml-4 object-cover h-24 w-24 rounded-xl"
            src="https://picsum.photos/125"
            alt="Noteworthy technology acquisitions 2021"
          />
          <div className="flex flex-col justify-between p-4 leading-normal flex-grow">
            <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy Technology
              <br />
              <span className="ml-2 mb-2 text-sm font-extralight text-gray-500 dark:text-gray-400 tracking-wide">
                <span className="font-semibold">+15 km </span>
                from actual location
              </span>
            </h5>
            <div className="flex w-full gap-2 mt-2">
              <button
                type="button"
                className="flex-1 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Navigate
              </button>
              <button
                type="button"
                className="flex-1 text-white border border-gray-600 hover:text-white bg-gray-800 hover:bg-gray-700 transition duration-150 focus:ring-2 focus:ring-gray-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Claim
              </button>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex flex-row items-center mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-md w-full max-w-2xl overflow-hidden border border-gray-700">
          <img
            className="ml-4 object-cover h-24 w-24 rounded-xl"
            src="https://picsum.photos/125"
            alt="Noteworthy technology acquisitions 2021"
          />
          <div className="flex flex-col justify-between p-4 leading-normal flex-grow">
            <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy Technology
              <br />
              <span className="ml-2 mb-2 text-sm font-extralight text-gray-500 dark:text-gray-400 tracking-wide">
                <span className="font-semibold">+15 km </span>
                from actual location
              </span>
            </h5>
            <div className="flex w-full gap-2 mt-2">
              <button
                type="button"
                className="flex-1 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Navigate
              </button>
              <button
                type="button"
                className="flex-1 text-white border border-gray-600 hover:text-white bg-gray-800 hover:bg-gray-700 transition duration-150 focus:ring-2 focus:ring-gray-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Claim
              </button>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex flex-row items-center mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-md w-full max-w-2xl overflow-hidden border border-gray-700">
          <img
            className="ml-4 object-cover h-24 w-24 rounded-xl"
            src="https://picsum.photos/125"
            alt="Noteworthy technology acquisitions 2021"
          />
          <div className="flex flex-col justify-between p-4 leading-normal flex-grow">
            <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy Technology
              <br />
              <span className="ml-2 mb-2 text-sm font-extralight text-gray-500 dark:text-gray-400 tracking-wide">
                <span className="font-semibold">+15 km </span>
                from actual location
              </span>
            </h5>
            <div className="flex w-full gap-2 mt-2">
              <button
                type="button"
                className="flex-1 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Navigate
              </button>
              <button
                type="button"
                className="flex-1 text-white border border-gray-600 hover:text-white bg-gray-800 hover:bg-gray-700 transition duration-150 focus:ring-2 focus:ring-gray-500 font-medium rounded-full text-xs px-4 py-2 text-center"
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
