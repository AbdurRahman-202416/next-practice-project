export default function Popup({ ...props }: string | undefined | []) {
  const {
    setSelectedDomain,
    setShowPopup,
    selectedDomain,
    showPopup,
    domains,
  } = props;
  return (
    <div
      className={`
                 absolute bottom-0 inset-x-0 sm:top-1/4 top-60   border-t max-w-sm mx-auto z-80
    bg-gray-100 rounded-t-2xl shadow-xl
    px-6 
    transform-all transition-transform duration-600 ease-in-out
    ${
      showPopup
        ? "translate-y-0 h-auto opacity-100"
        : "translate-y-full h-[1px] opacity-0 pointer-events-none"
    }
  `}
    >
      <h3 className="text-center font-semibold text-base mb-4">
        이메일 도메인 선택
      </h3>
      <ul className="space-y-4">
        {domains?.map((domain: string) => (
          <label
            key={domain}
            onClick={() => {
              setSelectedDomain(domain);
            }}
            className={`flex justify-between px-2 py-2 text-lg items-center border-b border-gray-200 pb-2 cursor-pointer
    ${
      domain === selectedDomain
        ? "bg-green-800 border border-yellow-600 transform scale-[103%] text-gray-100 rounded-sm font-bold"
        : " "
    }
  `}
          >
            {domain}
            <input
              type="checkbox"
              onChange={() => console.log(domain)}
              name="domain"
              checked={domain === selectedDomain}

              className="w-5 h-5 bg-gray-300 rounded"
            />
          </label>
        ))}
      </ul>
      <button
        onClick={() => setShowPopup(false)}
        className="w-full  bg-purple-600 text-white py-3 rounded-md font-medium  "
      >
        확인
      </button>
    </div>
  );
}
