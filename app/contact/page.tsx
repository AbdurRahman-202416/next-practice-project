"use client";

import { useState } from "react";
import {
  ArrowsPointingOutIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import useUserStore from "../Store/store";

type FormData = {
  id: number;
  firstName: string;
  email: string;
  phone: string;
  phoneStart?: string;
  phoneMid?: string;
  emailId?: string;
};

type User = {
  id: number;
  firstName: string;
  email: string;
  phone: string;
  phoneStart: string;
  phoneMid: string;
  emailId: string;
};

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("직접입력");
  const { users, addUser } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>();

  const formSubmit = (data: FormData) => {
    const fullEmail =
      selectedDomain === "직접입력"
        ? data.emailId
        : `${data.emailId}@${selectedDomain}`;
    const fullPhone = `${data.phoneStart}-${data.phoneMid}-****`;

    const postData = {
      id: new Date().getTime(),
      firstName: data.firstName,
      email: fullEmail,
      phone: fullPhone,
    };
    addUser(postData as User);
    localStorage.setItem("userData", JSON.stringify(users));

    reset();
    console.log(users);

    console.log("Object Data:", postData);
  };

  const domains = [
    "직접입력",
    "gmail.com",
    "naver.com",
    "daum.net",
    "nate.com",
  ];

  return (
    <div className="border mt-10 border-gray-200 bg-white px-4 pt-10 pb-10 font-sans text-black relative max-w-sm mx-auto">
      {/* Header */}

      <div className="flex justify-between items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
        <ArrowsPointingOutIcon className="w-5 h-5 text-gray-400" />
      </div>

      <h2 className="text-sm text-purple-600 font-semibold mb-1">
        카드 신청인 정보를
      </h2>
      <h1 className="text-xl font-bold mb-6">입력해주세요.</h1>

      {/* Form */}
      <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="text-sm font-medium block mb-1">이름</label>
          <input
            type="text"
            {...register("firstName", { required: "이름을 입력하세요" })}
            placeholder="이름 입력"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium block mb-1">휴대폰번호</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              maxLength={3}
              {...register("phoneStart", {
                required: "앞자리를 입력하세요",
                minLength: 3,
              })}
              className="w-16 border border-gray-300 rounded-md px-3 py-2 text-sm text-center"
              placeholder="010"
            />
            <span>-</span>
            <input
              type="text"
              maxLength={4}
              {...register("phoneMid", {
                required: "중간 번호를 입력하세요",
                minLength: 3,
              })}
              className="w-20 border border-gray-300 rounded-md px-3 py-2 text-sm text-center"
              placeholder="1234"
            />
            <div className="flex-1 border border-gray-300 bg-gray-100 rounded-md px-3 py-2 text-sm text-gray-400 text-center">
              ••••
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium block mb-1">이메일</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              {...register("emailId", { required: "이메일을 입력하세요" })}
              placeholder="이메일 입력"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <span className="text-gray-500 text-sm">@</span>
            <button
              type="button"
              onClick={() => setShowPopup(true)}
              className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 text-sm w-36"
            >
              {selectedDomain}
              <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-500" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            이메일 주소는 카드 신청 결과 안내 및 본인 인증용으로 사용됩니다.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-3 rounded-md text-sm font-medium transition 
    ${
      isValid
        ? "bg-purple-600 text-white"
        : "bg-gray-300 text-gray-400 cursor-not-allowed"
    }`}
        >
          다음단계로 입력하기
        </button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-xl transition delay-150 duration-300   px-6 pt-5 pb-8 z-50 max-w-sm mx-auto">
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
      <div className="text-left border mt-4 text-red-500">
        <ul>
          {users?.map((user) => (
            <li key={Math.random()} className="text-sm  mb-2">
              {user.firstName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
