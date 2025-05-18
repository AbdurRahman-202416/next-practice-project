// pages/index.tsx
import React from "react";

export default function PaymentForm() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-6">
            <div className="w-full max-w-md border rounded-xl shadow-md p-6 space-y-5">
                <div className="flex justify-between text-left items-center">
                    <button className="text-blue-600">🔍</button>
                    <span className="text-gray-600 text-sm">(결제 가맹점 명칭 분석 다 노출)</span>
                    <button className="text-blue-600">⛶</button>
                </div>

                <div className="text-center">
                    <p className="text-lg font-semibold text-black">
                        -<span className="text-blue-600">(카드 잔액 결제 금액)</span>원
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
                        <span className="text-gray-500">포인트 사용</span>
                        <span>(카드 포인트 결제금액)</span>
                    </div>
                </div>
                <div className="flex bg-indigo-50 px-1 py-1 rounded-md justify-between items-center space-y-2">
                    <div className="text-center space-y-2 text-blue-600 text-sm">
                        <p className="underline">카드 결제정보</p>
                        <p className="underline">카드 문구 확인</p>
                    </div>

                    <div className="text-sm text-gray-500 text-center space-y-1">
                        <p>카페사: <span className="text-black">[카페사명]</span></p>
                        <p>확인 번호: <span className="text-black">[확인 번호]</span></p>
                    </div>

                </div>

                <button className="w-full bg-purple-600 text-white rounded-lg py-3 text-sm font-semibold hover:bg-purple-700">
                    확인
                </button>
            </div>
        </div>
    );
}
