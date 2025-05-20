import React from "react";

export default function AboutComponenet() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md border rounded-xl shadow-md p-6 space-y-8">
        <div className="flex justify-between text-left ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="text-gray-600 flex gap-4 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
          (결제 가맹점 명칭 분석 다 노출)
        </h1>
        <div className="text-center">
          <p className="text-lg font-semibold flex gap-4 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
              />
            </svg>
            -
            <span className="font-bold text-black text-left">
              결제 내역 상세
            </span>
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <h2 className="font-bold text-black">결제정보</h2>
          <div className="flex justify-between">
            <span className="text-gray-500">거래일시</span>
            <span>(YYYY/MM/DD HH:MM)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">거래형태</span>
            <span>(결제)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">카드 문구 문안</span>
            <span>(카드 문 건확인)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">승인코드</span>
            <span>(카페 승인코드 이하)</span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <h2 className="font-bold text-black">결제 내역 상세</h2>
          <div className="flex justify-between">
            <span className="text-gray-500">결제 금액 상세</span>
            <span>(결제 모금 항목)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">쿠폰/혜택/포인트</span>
            <span>(쿠폰 혜택 포인트)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-purple-900">포인트 사용</span>
            <span className="text-purple-900">(카드 포인트 결제금액)</span>
          </div>
        </div>
        <div className="flex bg-indigo-50 px-1 py-1 rounded-md justify-between items-center space-y-2">
          <div className="text-center space-y-2  text-sm">
            <p className=" ">카드 결제정보</p>
            <p className="">카드 문구 확인</p>
          </div>

          <div className="text-sm text-gray-500 text-center space-y-1">
            <p className="text-purple-900">카페사: [카페사명]</p>
            <p className="text-purple-900">확인 번호[확인 번호]</p>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white rounded-lg py-3 text-sm font-semibold hover:bg-purple-700">
          확인
        </button>
      </div>
    </div>
  );
}
