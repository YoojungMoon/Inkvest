"use client";

import { X } from "lucide-react";

export default function RefundSuccessPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-[30px] p-8 w-full max-w-sm relative shadow-lg">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black text-white rounded-full p-2"
          aria-label="닫기"
        >
          <X size={20} />
        </button>
        <div className="text-center">
          <h2 className="text-xl font-bold text-primary mb-2">환불 완료</h2>
          <p className="text-gray-600">후원 금액이 성공적으로 환불되었습니다.</p>
        </div>
      </div>
    </div>
  );
}
