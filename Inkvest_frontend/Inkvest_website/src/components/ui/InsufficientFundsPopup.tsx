"use client";

interface InsufficientFundsPopupProps {
  onClose: () => void;
}

export default function InsufficientFundsPopup({ onClose }: InsufficientFundsPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-[30px] p-8 shadow-lg w-[300px] relative">
        <button
          className="absolute top-4 right-4 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>
        <h2 className="text-lg font-bold text-center mb-4">잔액이 부족합니다</h2>
        <p className="text-sm text-gray-600 text-center">
          이더리움 잔액이 부족하여 후원을 진행할 수 없습니다.
        </p>
      </div>
    </div>
  );
}
