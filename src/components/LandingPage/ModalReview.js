import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

const ModalReview = ({ open, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!open || !mounted) return null;

    const steps = [
        "Encourages active self-assessment to test what you truly know",
        "Short, targeted reviews reduce study fatigue",
        "Customize your review pace and focus on what matters",
        "Know exactly where you stand with clear progress indicators"
    ]

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const modalContent = (
        <div
            className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center p-4 sm:p-8"
            onClick={handleBackdropClick}
            style={{ zIndex: 99999 }}
        >
            {/* Modal */}
            <div
                className="flex flex-col justify-between lg:flex-row w-full relative max-w-[1311px] bg-[#CFF5EF] border-4 border-[#62BFA9] rounded-3xl overflow-hidden"
                style={{
                    minHeight: 'fit-content',
                    maxHeight: '90vh',
                    border: "4px solid #62BFA9",
                    zIndex: 99999
                }}
            >
                {/* X Close Button */}
                <Image
                    src="/icons/landing-page/review-x.svg"
                    alt="x"
                    width={40}
                    height={40}
                    onClick={onClose}
                    className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer z-10"
                />

                {/* Text content */}
                <div className="flex flex-col justify-center w-full lg:w-auto px-6 sm:px-8 lg:pl-16 py-6 lg:py-8">
                    {/* Title */}
                    <div className="flex flex-row gap-2 items-center">
                        {/* Title image */}
                        <Image
                            src="/icons/landing-page/review-title-img.svg"
                            alt="img"
                            width={92}
                            height={57}
                            className="w-12 h-8 sm:w-16 sm:h-10 lg:w-[92px] lg:h-[57px]"
                        />
                        {/* Title text */}
                        <div className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
                            Review
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="text-base sm:text-lg lg:text-2xl mt-3 lg:mt-4 mb-6 lg:mb-8">
                        Knowledge Check Mode
                    </div>

                    {/* Steps */}
                    <div className="max-w-none lg:max-w-[470px]">
                        <ul className="list-none space-y-3 lg:space-y-4">
                            {steps.map((step, i) => {
                                return (
                                    <li key={i} className="flex flex-row gap-3 items-center lg:gap-4">
                                        {/* Circle */}
                                        <div className="flex justify-center items-center flex-shrink-0 bg-white rounded-full w-8 h-8 lg:w-10 lg:h-10 text-sm lg:text-base font-medium">
                                            {i + 1}
                                        </div>
                                        {/* Step text */}
                                        <div className="text-sm sm:text-base lg:text-base leading-relaxed">
                                            {step}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex flex-col items-center lg:items-end px-6 pb-8">
                    {/* Flashcard */}
                    <Image
                        src="/icons/landing-page/review-popup.svg"
                        alt="img"
                        width={538}
                        height={327}
                        className="w-full max-w-[400px] lg:max-w-[538px] h-auto lg:mr-8 lg:mt-12"
                    />
                    {/* X and Checkmark */}
                    <div className="flex justify-center lg:w-full items-center mt-3 lg:mt-4 lg:mr-8">
                        <Image
                            src="/icons/landing-page/incorrect-correct.svg"
                            alt="buttons"
                            width={275}
                            height={80}
                            className="w-full max-w-[275px] h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default ModalReview;