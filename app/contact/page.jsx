'use client';

import { useState, useEffect } from 'react';
import {
    ArrowsPointingOutIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/solid';

export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDomain, setSelectedDomain] = useState('직접입력');
    const [formData, setFormData] = useState({
        name: '',
        phoneStart: '',
        phoneMid: '',
        emailId: '',
    });

    const isFormValid =
        formData.name &&
        formData.phoneStart.length === 3 &&
        formData.phoneMid.length === 1 &&
        formData.emailId &&
        selectedDomain;

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        const fullEmail =
            selectedDomain === '직접입력'
                ? formData.emailId
                : `${formData.emailId}@${selectedDomain}`;
        const dataToSubmit = {
            name: formData.name,
            phone: `${formData.phoneStart}-${formData.phoneMid}-****`,
            email: fullEmail,
        };
        console.log('Submitted Data:', dataToSubmit);
        alert(JSON.stringify(dataToSubmit, null, 2));
    };

    const domains = ['직접입력', 'gmail.com', 'naver.com', 'daum.net', 'nate.com'];

    return (
        <div className="min-h-screen border bg-white px-4 pt-6 pb-10 font-sans text-black relative max-w-sm mx-auto block ">
            {/* Top Icons */}
            <div className="flex justify-between items-center mb-6">
                <ArrowsPointingOutIcon className="w-5 h-5 text-gray-400" />
                <ArrowsPointingOutIcon className="w-5 h-5 text-gray-400" />
            </div>

            {/* Header */}
            <h2 className="text-sm text-purple-600 font-semibold mb-1">
                카드 신청인 정보를
            </h2>
            <h1 className="text-xl font-bold mb-6">입력해주세요.</h1>

            {/* Name */}
            <label className="text-sm font-medium block mb-1">이름</label>
            <input
                type="text"
                placeholder="이름 입력"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-5"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
            />

            {/* Phone Number */}
            <label className="text-sm font-medium block mb-1">휴대폰번호</label>
            <div className="flex items-center gap-1 mb-5">
                <input
                    type="text"
                    maxLength={6}
                    className="w-16 border basis-1/2 border-gray-300 rounded-md px-3 py-2 text-sm text-center"
                    placeholder="010"
                    value={formData.phoneStart}
                    onChange={(e) => handleChange('phoneStart', e.target.value)}
                />
                <label className="text-sm font-medium block mb-1">-</label>
                <input
                    type="text"
                    maxLength={1}
                    className="w-10 basis-1/6 border border-gray-300 rounded-md px-2 py-2 text-sm text-center"
                    placeholder="0"
                    value={formData.phoneMid}
                    onChange={(e) => handleChange('phoneMid', e.target.value)}
                />
                <div className="border basis-1/4 border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100 text-gray-400 text-center">
                    ••••
                </div>
            </div>

            {/* Email */}
            <label className="text-sm font-medium block mb-1">이메일</label>
            <div className="flex items-center gap-2 mb-2">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                    placeholder="이메일 입력"
                    value={formData.emailId}
                    onChange={(e) => handleChange('emailId', e.target.value)}
                />
                <span className="text-gray-500 text-sm">@</span>
                <button
                    onClick={() => setShowPopup(true)}
                    className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 text-sm w-36"
                >
                    {selectedDomain}
                    <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-500" />
                </button>
            </div>

            <p className="text-xs text-gray-500 mb-6 leading-snug">
                이메일 주소는 카드 신청 결과 안내 및 본인 인증용으로 사용됩니다.
            </p>

            <button
                className={`w-full py-3 rounded-md text-sm font-medium transition ${isFormValid
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                onClick={handleSubmit}
                disabled={!isFormValid}
            >
                다음단계로 입력하기
            </button>

            {/* Popup */}
            {showPopup && (
                <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-xl px-6 pt-5 pb-8 z-50 transition-transform duration-300 ease-out translate-y-0 max-w-sm mx-auto">
                    <h3 className="text-center font-semibold text-base mb-4">
                        이메일 도메인 선택
                    </h3>
                    <ul className="space-y-4">
                        {domains.map((domain) => (
                            <li
                                key={domain}
                                onClick={() => {
                                    setSelectedDomain(domain);
                                    setShowPopup(false);
                                }}
                                className="flex justify-between items-center border-b border-gray-200 pb-2 cursor-pointer"
                            >
                                <span>{domain}</span>
                                <div className="w-5 h-5 bg-gray-300 rounded" />
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => setShowPopup(false)}
                        className="w-full mt-6 bg-purple-600 text-white py-3 rounded-md font-medium"
                    >
                        확인
                    </button>
                </div>
            )}
        </div>
    );
}
