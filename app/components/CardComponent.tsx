// components/CardStatusDisplay.jsx
import Image from "next/image";

const CardStatusDisplay = () => {
  return (
    <div
      className="
        flex flex-col items-start gap-4 // flex-direction: column; align-items: flex-start; gap: spacing-medium; (assuming spacing-medium is 16px)
        w-[360px] // width: 360px;
        p-8 px-5 // padding: spacing-2xlarge var(--layout-margin, 20px); (assuming spacing-2xlarge is 32px, and layout-margin is 20px)
        bg-white // Assuming a white background for the card information 
        rounded-lg // Optional: Add some  corners if your design has them
        shadow-sm // Optional: Add a subtle 
      "
    >
      {/* Header Section */}
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold text-gray-800">
          {"{{럭키카드 퍼플}}"}
        </h1>
        <a
          href="#"
          className="flex items-center text-sm text-gray-500 hover:underline"
        >
          상세보기
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </a>
      </div>

      {/* Card Image and Details Section */}
      <div className="flex items-start gap-4">
        <div
          className="
          relative w-[84px] h-[55px] "
        >
          <Image
            src="/card.png" // **IMPORTANT: Replace with your actual image path**
            alt="Lucky Card Purple"
            className="p-1"
            height={96}
            width={60.078}
          />
        </div>
        {/* Card Details */}
        <div className="flex flex-col text-sm">
          <div className="flex items-center mb-1">
            <span className="w-20 text-gray-600">배송 상태</span>
            <span className="font-semibold text-purple-700">
              발송준비중
            </span>{" "}
            {/* Use a specific Tailwind purple for better match */}
          </div>
          <div className="flex items-center mb-1">
            <span className="w-20 text-gray-600">신청 일시</span>
            <span className="text-gray-800">2025/05/01</span>
          </div>
          <div className="flex items-start">
            {" "}
            {/* Use items-start for multi-line address */}
            <span className="w-20 text-gray-600">배송 주소</span>
            <span className="text-gray-800">
              서울 영등포구 은행로 25 5층 코나아이
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStatusDisplay;
