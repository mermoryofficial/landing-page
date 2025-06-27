"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from "next/legacy/image";
import ModalLearn from './ModalLearn'
import ModalReview from './ModalReview'
import ModalFSRS from './ModalFSRS'

const Modes = () => {
    const [isLearnOpen, setIsLearnOpen] = useState(false);
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    const [isFSRSOpen, setIsFSRSOpen] = useState(false);

    return (
        <div className="w-full overflow-hidden">
            {/* Mobile Layout */}
            <div className="md:hidden">
                <div className="relative w-full overflow-hidden z-0 bg-white mt-0">
                    {/* Top text */}
                    <div
                        className="flex flex-col justify-center items-center text-center mb-16 w-full"
                    >
                        <div
                            style={{
                                fontSize: 24,
                                fontWeight: 600,
                                maxWidth: 400
                            }}
                        >
                            Learn at your own page with adaptive study modules</div>
                        <div
                            style={{
                                fontSize: 16,
                                maxWidth: 620,
                                marginTop: 16
                            }}
                        >Choose the study style that works best for you</div>
                    </div>
                    {/* Scrollable container */}
                    <div
                        className="w-full overflow-x-auto overflow-y-hidden"
                    >
                        <div
                            className="flex flex-row"
                            style={{
                                gap: 40,
                                marginLeft: 64
                            }}
                        >
                            {/* Learn */}
                            <div
                                className="flex flex-col"
                                style={{
                                    borderRadius: 40,
                                    minHeight: 354,
                                    minWidth: 306,
                                    maxHeight: 354,
                                    maxWidth: 306,
                                    gap: 0,
                                    border: "8px solid #FF9FAA"
                                }}
                            >
                                {/* Top */}
                                <div
                                    style={{
                                        height: 364,
                                        background: "#FFE0E4",
                                        borderRadius: "30px 30px 0 0",
                                        borderBottom: "8px solid #FF9FAA"
                                    }}
                                >
                                    {/* Top design */}
                                    <div className="w-full overflow-hidden relative h-full">
                                        <img
                                            src="/icons/landing-page/flashcard-top.svg"
                                            alt="middle flashcard"
                                            width={78}
                                            height={46}
                                            style={{
                                                position: "absolute",
                                                left: 5,
                                                top: 45
                                            }}
                                        />
                                        <img
                                            src="/icons/landing-page/flashcard-middle.svg"
                                            alt="top flashcard"
                                            width={221}
                                            height={105}
                                            style={{
                                                position: "absolute",
                                                left: 35,
                                                top: 60,
                                            }}
                                        />
                                        <img
                                            src="/icons/landing-page/flashcard-bottom.svg"
                                            alt="bottom flashcard"
                                            width={61}
                                            height={36}
                                            style={{
                                                position: "absolute",
                                                left: 200,
                                                top: 175,
                                            }}
                                        />
                                    </div>
                                </div>
                                {/* Bottom */}
                                <div
                                    className="flex items-center"
                                    style={{
                                        background: "white",
                                        height: 136,
                                        width: "100%",
                                        borderRadius: "0 0 30px 30px",
                                        overflow: "hidden"
                                    }}
                                >
                                    {/* Bottom content */}
                                    <div className="flex flex-row justify-between items-center w-full">
                                        {/* Text */}
                                        <div style={{ marginLeft: 16 }}>
                                            <div style={{ fontSize: 24, fontWeight: 600, color: "#001F2E" }}>Learn</div>
                                            <div style={{ fontSize: 16, color: "#083347", marginTop: 8 }}>Standard Flashcard Mode</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End of Learn */}
                            {/* Review */}
                            <div
                                className="flex flex-col"
                                style={{
                                    borderRadius: 40,
                                    minHeight: 354,
                                    minWidth: 306,
                                    maxHeight: 354,
                                    maxWidth: 306,
                                    gap: 0,
                                    border: "8px solid #62BFA9"
                                }}
                            >
                                {/* Top */}
                                <div
                                    style={{
                                        height: 364,
                                        background: "#CFF5EF",
                                        borderRadius: "30px 30px 0 0",
                                        borderBottom: "8px solid #62BFA9"
                                    }}
                                >
                                    {/* Top design */}
                                    <div className="w-full overflow-hidden relative h-full">
                                        <img
                                            src="/icons/landing-page/lower-check.svg"
                                            alt="checkmark"
                                            width={47}
                                            height={39}
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 180
                                            }}
                                        />
                                        <img
                                            src="/icons/landing-page/review-flashcard.svg"
                                            alt="flashcard"
                                            width={221}
                                            height={170}
                                            style={{
                                                position: "absolute",
                                                left: 35,
                                                top: 50,
                                            }}
                                        />
                                        <img
                                            src="/icons/landing-page/upper-check.svg"
                                            alt="checkmark"
                                            width={55}
                                            height={56}
                                            style={{
                                                position: "absolute",
                                                left: 245,
                                                top: 15,
                                            }}
                                        />
                                    </div>
                                </div>
                                {/* Bottom */}
                                <div
                                    className="flex items-center"
                                    style={{
                                        background: "white",
                                        height: 136,
                                        width: "100%",
                                        borderRadius: "0 0 30px 30px",
                                        overflow: "hidden"
                                    }}
                                >
                                    {/* Bottom content */}
                                    <div className="flex flex-row justify-between items-center w-full">
                                        {/* Text */}
                                        <div style={{ marginLeft: 16 }}>
                                            <div style={{ fontSize: 24, fontWeight: 600, color: "#001F2E" }}>Review</div>
                                            <div style={{ fontSize: 16, color: "#083347", marginTop: 8 }}>Knowledge Check Mode</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* FSRS */}
                            <div
                                className="flex flex-col overflow-hidden"
                                style={{
                                    borderRadius: 40,
                                    minHeight: 354,
                                    minWidth: 306,
                                    maxHeight: 354,
                                    maxWidth: 306,
                                    gap: 0,
                                    border: "8px solid #896A96"
                                }}
                            >
                                {/* Top */}
                                <div
                                    className='overflow-hidden'
                                    style={{
                                        height: 364,
                                        background: "#F2E1F9",
                                        borderRadius: "30px 30px 0 0",
                                        borderBottom: "8px solid #896A96"
                                    }}
                                >
                                    {/* Top design */}
                                    <div className="w-full overflow-hidden relative h-full">
                                        <img
                                            src="/icons/landing-page/again.svg"
                                            alt="again"
                                            width={105}
                                            height={58}
                                            style={{
                                                position: "absolute",
                                                left: 200,
                                                top: 37
                                            }}
                                        />

                                        <img
                                            src="/icons/landing-page/good.svg"
                                            alt="good"
                                            width={105}
                                            height={58}
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: -300,
                                            }}
                                        />
                                        <img
                                            src="/icons/landing-page/fsrs-flashcard.svg"
                                            alt="flashcard"
                                            width={221}
                                            height={175}
                                            style={{
                                                position: "absolute",
                                                left: 35,
                                                top: 50,
                                            }}
                                        />
                                        <img
                                            src="/icons/landing-page/easy.svg"
                                            alt="easy"
                                            width={87}
                                            height={48}
                                            style={{
                                                position: "absolute",
                                                left: 200,
                                                top: 225,
                                            }}
                                        />
                                    </div>
                                </div>
                                {/* Bottom */}
                                <div
                                    className="flex items-center"
                                    style={{
                                        background: "white",
                                        height: 136,
                                        width: "100%",
                                        borderRadius: "0 0 30px 30px",
                                        overflow: "hidden"
                                    }}
                                >
                                    {/* Bottom content */}
                                    <div className="flex flex-row justify-between items-center w-full">
                                        {/* Text */}
                                        <div style={{ marginLeft: 16 }}>
                                            <div style={{ fontSize: 24, fontWeight: 600, color: "#001F2E" }}>FSRS</div>
                                            <div style={{ fontSize: 16, color: "#083347", marginTop: 8 }}>Space Repetition Mode</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
                <div className="relative w-full overflow-hidden z-0 bg-white mt-0">
                    {/* Top text */}
                    <div
                        className="flex flex-col justify-center items-center text-center mb-16 w-full"
                    >
                        <div
                            style={{
                                fontSize: 48,
                                fontWeight: 600,
                                maxWidth: 700
                            }}
                        >
                            Learn at your own page with adaptive study modules</div>
                        <div
                            style={{
                                fontSize: 24,
                                maxWidth: 620,
                                marginTop: 16
                            }}
                        >Choose the study style that works best for you</div>
                    </div>
                    <div
                        className="flex flex-col lg:flex-row items-center"
                        style={{
                            gap: 40,
                            marginLeft: 40,
                            marginRight: 40,
                            justifyContent: "center",
                            alignContent: "center"
                        }}
                    >
                        {/* Learn */}
                        <div
                            className="flex flex-col"
                            style={{
                                borderRadius: 40,
                                height: 500,
                                width: 422,
                                gap: 0,
                                border: "8px solid #FF9FAA"
                            }}
                        >
                            {/* Top */}
                            <div
                                style={{
                                    height: 364,
                                    background: "#FFE0E4",
                                    borderRadius: "30px 30px 0 0",
                                    borderBottom: "8px solid #FF9FAA"
                                }}
                            >
                                {/* Top design */}
                                <div className="w-full overflow-hidden relative h-full">
                                    <img
                                        src="/icons/landing-page/flashcard-top.svg"
                                        alt="middle flashcard"
                                        width={109}
                                        height={65}
                                        style={{
                                            position: "absolute",
                                            left: 12,
                                            top: 45
                                        }}
                                    />
                                    <img
                                        src="/icons/landing-page/flashcard-middle.svg"
                                        alt="top flashcard"
                                        width={309}
                                        height={148}
                                        style={{
                                            position: "absolute",
                                            left: 50,
                                            top: 80,
                                        }}
                                    />
                                    <img
                                        src="/icons/landing-page/flashcard-bottom.svg"
                                        alt="bottom flashcard"
                                        width={87}
                                        height={151}
                                        style={{
                                            position: "absolute",
                                            left: 300,
                                            top: 200,
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Bottom */}
                            <div
                                className="flex items-center"
                                style={{
                                    background: "white",
                                    height: 136,
                                    width: "100%",
                                    borderRadius: "0 0 30px 30px",
                                    overflow: "hidden"
                                }}
                            >
                                {/* Bottom content */}
                                <div className="flex flex-row justify-between items-center w-full">
                                    {/* Text */}
                                    <div style={{ marginLeft: 16 }}>
                                        <div style={{ fontSize: 32, fontWeight: 600, color: "#001F2E" }}>Learn</div>
                                        <div style={{ fontSize: 20, color: "#083347", marginTop: 8 }}>Standard Flashcard Mode</div>
                                    </div>
                                    {/* Circle */}
                                    <div
                                        className="flex justify-center items-center"
                                        style={{
                                            borderRadius: "50%",
                                            backgroundColor: "#FFBFC6",
                                            height: 64,
                                            width: 64,
                                            marginRight: 16,
                                            transform: "scale(1)",
                                            transition: "transform 1s cubic-bezier(0.85, 0, 0.15, 1)",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => setIsLearnOpen(true)}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                    >
                                        <img
                                            src="/icons/landing-page/learn-arrow.svg"
                                            alt="arrow"
                                            height={24}
                                            width={24}
                                            style={{ pointerEvents: "none" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of Learn */}
                        {/* Review */}
                        <div
                            className="flex flex-col"
                            style={{
                                borderRadius: 40,
                                height: 500,
                                width: 422,
                                gap: 0,
                                border: "8px solid #62BFA9"
                            }}
                        >
                            {/* Top */}
                            <div
                                style={{
                                    height: 364,
                                    background: "#CFF5EF",
                                    borderRadius: "30px 30px 0 0",
                                    borderBottom: "8px solid #62BFA9"
                                }}
                            >
                                {/* Top design */}
                                <div className="w-full overflow-hidden relative h-full">
                                    <img
                                        src="/icons/landing-page/lower-check.svg"
                                        alt="checkmark"
                                        width={47}
                                        height={39}
                                        style={{
                                            position: "absolute",
                                            left: 12,
                                            top: 250
                                        }}
                                    />
                                    <img
                                        src="/icons/landing-page/review-flashcard.svg"
                                        alt="flashcard"
                                        width={309}
                                        height={207}
                                        style={{
                                            position: "absolute",
                                            left: 50,
                                            top: 80,
                                        }}
                                    />
                                    <img
                                        src="/icons/landing-page/upper-check.svg"
                                        alt="checkmark"
                                        width={55}
                                        height={56}
                                        style={{
                                            position: "absolute",
                                            left: 350,
                                            top: 15,
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Bottom */}
                            <div
                                className="flex items-center"
                                style={{
                                    background: "white",
                                    height: 136,
                                    width: "100%",
                                    borderRadius: "0 0 30px 30px",
                                    overflow: "hidden"
                                }}
                            >
                                {/* Bottom content */}
                                <div className="flex flex-row justify-between items-center w-full">
                                    {/* Text */}
                                    <div style={{ marginLeft: 16 }}>
                                        <div style={{ fontSize: 32, fontWeight: 600, color: "#001F2E" }}>Review</div>
                                        <div style={{ fontSize: 20, color: "#083347", marginTop: 8 }}>Knowledge Check Mode</div>
                                    </div>
                                    {/* Circle */}
                                    <div
                                        className="flex justify-center items-center"
                                        style={{
                                            borderRadius: "50%",
                                            backgroundColor: "#BCE2DC",
                                            height: 64,
                                            width: 64,
                                            marginRight: 16,
                                            transform: "scale(1)",
                                            transition: "transform 1s cubic-bezier(0.85, 0, 0.15, 1)",
                                            cursor: "pointer"
                                        }}
                                        onClick={() => setIsReviewOpen(true)}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                    >
                                        <img
                                            src="/icons/landing-page/review-arrow.svg"
                                            alt="arrow"
                                            height={24}
                                            width={24}
                                            style={{ pointerEvents: "none" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FSRS */}
                        <div
                            className="flex flex-col"
                            style={{
                                borderRadius: 40,
                                height: 500,
                                width: 422,
                                gap: 0,
                                border: "8px solid #896A96"
                            }}
                        >
                            {/* Top */}
                            <div
                                style={{
                                    height: 364,
                                    background: "#F2E1F9",
                                    borderRadius: "30px 30px 0 0",
                                    borderBottom: "8px solid #896A96"
                                }}
                            >
                                {/* Top design */}
                                <div className="w-full overflow-hidden relative h-full">
                                    <img
                                        src="/icons/landing-page/again.svg"
                                        alt="again"
                                        width={105}
                                        height={58}
                                        style={{
                                            position: "absolute",
                                            left: 310,
                                            top: 37
                                        }}
                                    />
                                    <img
                                        src="/icons/landing-page/fsrs-flashcard.svg"
                                        alt="flashcard"
                                        width={309}
                                        height={202}
                                        style={{
                                            position: "absolute",
                                            left: 50,
                                            top: 80,
                                        }}
                                    />
                                    <img
                                        src="/icons/landing-page/good.svg"
                                        alt="good"
                                        width={105}
                                        height={58}
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 20,
                                        }}
                                    />
                                    <img
                                        src="/icons/landing-page/easy.svg"
                                        alt="easy"
                                        width={87}
                                        height={48}
                                        style={{
                                            position: "absolute",
                                            left: 300,
                                            top: 305,
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Bottom */}
                            <div
                                className="flex items-center"
                                style={{
                                    background: "white",
                                    height: 136,
                                    width: "100%",
                                    borderRadius: "0 0 30px 30px",
                                    overflow: "hidden"
                                }}
                            >
                                {/* Bottom content */}
                                <div className="flex flex-row justify-between items-center w-full">
                                    {/* Text */}
                                    <div style={{ marginLeft: 16 }}>
                                        <div style={{ fontSize: 32, fontWeight: 600, color: "#001F2E" }}>FSRS</div>
                                        <div style={{ fontSize: 20, color: "#083347", marginTop: 8 }}>Space Repetition Mode</div>
                                    </div>
                                    {/* Circle */}
                                    <div
                                        className="flex justify-center items-center"
                                        style={{
                                            borderRadius: "50%",
                                            backgroundColor: "#E8D5F0",
                                            height: 64,
                                            width: 64,
                                            marginRight: 16,
                                            transform: "scale(1)",
                                            transition: "transform 1s cubic-bezier(0.85, 0, 0.15, 1)",
                                            cursor: "pointer"
                                        }}
                                        onClick={() => setIsFSRSOpen(true)}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                    >
                                        <img
                                            src="/icons/landing-page/fsrs-arrow.svg"
                                            alt="arrow"
                                            height={24}
                                            width={24}
                                            style={{ pointerEvents: "none" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalLearn open={isLearnOpen} onClose={() => setIsLearnOpen(false)} />
                    <ModalReview open={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
                    <ModalFSRS open={isFSRSOpen} onClose={() => setIsFSRSOpen(false)} />
                </div>
            </div>
        </div>
    );
};

export default Modes;