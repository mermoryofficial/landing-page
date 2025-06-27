"use client";

import { useState, useEffect, useRef } from 'react';

const ThreeReasons = () => {
    const [activeContainer, setActiveContainer] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef(null);

    const CreatorStudioFeatures = [
        {
            img: "/icons/landing-page/three-reasons/themes.svg",
            title: "Themes",
            desc: "1M+ Themes and Elements to make studying fun"
        },
        {
            img: "/icons/landing-page/three-reasons/embed-media.svg",
            title: "Embed Media",
            desc: "Upload videos, audio, and images to boost retention"
        },
        {
            img: "/icons/landing-page/three-reasons/organization.svg",
            title: "Organization",
            desc: "Create sub-decks to organize your flashcard deck"
        }
    ];

    const CollaborateFeatures = [
        {
            img: "/icons/landing-page/three-reasons/remote-ready.svg",
            title: "Remote Ready",
            desc: "Easy to use on any device, anytime"
        },
        {
            img: "/icons/landing-page/three-reasons/save-time.svg",
            title: "Save Time",
            desc: "Split the work and finish flashcard decks faster"
        },
        {
            img: "/icons/landing-page/three-reasons/live-comments.svg",
            title: "Live Comments",
            desc: "Leave comments as you create for easy communication"
        }
    ];

    const StudyFeatures = [
        {
            img: "/icons/landing-page/three-reasons/learn.svg",
            title: "Learn",
            desc: "A quick study session, just flip and learn"
        },
        {
            img: "/icons/landing-page/three-reasons/review.svg",
            title: "Review",
            desc: "A knowledge check to test what you know"
        },
        {
            img: "/icons/landing-page/three-reasons/fsrs.svg",
            title: "FSRS",
            desc: "Spaced Repetition model for long-term retention"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;
            if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
                const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
                if (progress < 0.3) {
                    setActiveContainer(0);
                } else if (progress < 0.65) {
                    setActiveContainer(1);
                } else {
                    setActiveContainer(2);
                }

                setScrollY(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const containerData = [
        {
            number: "one",
            title: "Customize",
            subtitle: "in Creator Studio",
            description: "Start fresh or import a deck—our creator studio lets you design without limits",
            features: CreatorStudioFeatures,
            decorativeImages: [
                { src: "/icons/landing-page/three-reasons/top-pencil.svg", width: 77.64, height: 241.82, left: 520, top: -20, speed: -0.25 },
                { src: "/icons/landing-page/three-reasons/bottom-pencil.svg", width: 150, height: 150, left: 10, top: 500, speed: -0.35 }
            ],
            mobileImages: [
                { src: "/icons/landing-page/three-reasons/top-pencil.svg", width: 77.64, height: 241.82, left: 250, top: -70, speed: -0.25 },
                { src: "/icons/landing-page/three-reasons/bottom-pencil.svg", width: 150, height: 150, left: -50, top: 430, speed: -0.35 }
            ],
        },
        {
            number: "two",
            title: "Collaborate",
            subtitle: "with friends in real time",
            description: "Team up with classmates to build flashcard decks together",
            features: CollaborateFeatures,
            decorativeImages: [
                { src: "/icons/landing-page/three-reasons/top-cursor.svg", width: 140, height: 140, left: 490, top: 225, speed: -0.3 },
                { src: "/icons/landing-page/three-reasons/bottom-cursor.svg", width: 100, height: 100, left: 30, top: 510, speed: -0.25 }
            ],
            mobileImages: [
                { src: "/icons/landing-page/three-reasons/top-cursor.svg", width: 55, height: 55, left: 295, top: 40, speed: -0.3 },
                { src: "/icons/landing-page/three-reasons/bottom-cursor.svg", width: 100, height: 100, left: -50, top: 380, speed: -0.25 }
            ]
        },
        {
            number: "three",
            title: "Study Smarter",
            subtitle: "with adaptive learn modes",
            description: "Master any topic with quick flips, self-checks, and memory-boosting review",
            features: StudyFeatures,
            decorativeImages: [
                { src: "/icons/landing-page/three-reasons/checkmark.svg", width: 88, height: 73, left: -20, top: 15, speed: -0.3 },
                { src: "/icons/landing-page/three-reasons/checkmark.svg", width: 69, height: 57, left: 540, top: 250, speed: -0.35 },
                { src: "/icons/landing-page/three-reasons/checkmark.svg", width: 69, height: 57, left: 80, top: 565, speed: -0.25 }
            ],
            mobileImages: [
                { src: "/icons/landing-page/three-reasons/checkmark.svg", width: 60, height: 73, left: 330, top: 15, speed: -0.3 },
                { src: "/icons/landing-page/three-reasons/checkmark.svg", width: 50, height: 57, left: -5, top: 300, speed: -0.35 },
            ],
        }
    ];

    const Container = ({ data, index }) => {
        const sectionProgress = scrollY;
        const containerStart = index * 0.3;
        const containerEnd = containerStart + 10;

        let translateY = 0;
        let opacity = 0;

        if (sectionProgress >= containerStart && sectionProgress <= containerEnd) {
            const localProgress = (sectionProgress - containerStart) / 0.35;

            if (localProgress <= 0.1) {
                opacity = Math.min(1, localProgress * 8.5);
                translateY = (1 - localProgress * 8.5) * 10;
            } else {
                opacity = Math.max(0, (1 - localProgress) * 8.5);
                translateY = -(localProgress - 0.1) * 8.5 * 10;
            }
        } else if (sectionProgress < containerStart) {
            opacity = 0;
            translateY = 30;
        } else {
            opacity = 0;
            translateY = -30;
        }

        const getParallaxOffset = (speed) => {
            const sectionProgress = scrollY;
            const containerSpecificProgress = (sectionProgress - (index * 0.33)) / 0.33;
            const normalizedProgress = Math.max(0, Math.min(1, containerSpecificProgress));

            return normalizedProgress * speed * 100;
        };

        const getContentParallaxOffset = () => {
            const sectionProgress = scrollY;
            const containerStart = index * 0.3;
            const containerEnd = containerStart + 0.35;

            if (sectionProgress >= containerStart && sectionProgress <= containerEnd) {
                const localProgress = (sectionProgress - containerStart) / 0.35;
                return localProgress * -0.15 * 100;
            }
            return 0;
        };

        return (
            <div>
                <div
                    className="absolute inset-0 transition-all duration-75 ease-out flex flex-col items-center md:hidden"
                    style={{
                        transform: `translateY(${translateY}px)`,
                        opacity: opacity,
                        zIndex: Math.round(opacity * 10)
                    }}
                >
                    <div
                        className="flex flex-col relative overflow-hidden items-center"
                        style={{
                            background: "#F2FAFF",
                            borderRadius: 25,
                            borderColor: "#E2EFF8",
                            borderWidth: 6,
                            borderStyle: "solid",
                            height: 493,
                            width: 392
                        }}
                    >
                        {/* Parallax images */}
                        {data.mobileImages.map((img, i) => (
                            <img
                                key={i}
                                src={img.src}
                                alt="decoration"
                                width={img.width}
                                height={img.height}
                                style={{
                                    position: "absolute",
                                    left: img.left,
                                    top: img.top,
                                    transform: `translateY(${getParallaxOffset(img.speed)}px)`,
                                    transition: 'transform 0.1s ease-out'
                                }}
                            />
                        ))}
                        <img
                            src={`/icons/landing-page/three-reasons/${data.number}.svg`}
                            alt={data.number}
                            width={36}
                            height={36}
                            style={{
                                position: "absolute",
                                left: 32,
                                top: 32
                            }}
                        />
                        {/* Left side with parallax */}
                        <div
                            className="flex flex-col justify-center items-center w-full lg:w-auto"
                            style={{
                                transform: `translateY(${getContentParallaxOffset()}px)`,
                                transition: opacity > 0 ? 'transform 0.05s ease-out' : 'none'
                            }}
                        >
                            {/* Title */}
                            <div className="mt-8 flex flex-row gap-[24px] items-center text-center">
                                {/* Title (gradient) */}
                                <span
                                    style={{
                                        fontWeight: 600,
                                        fontSize: 32,
                                        background: 'linear-gradient(135deg, #2C9CE2 0%, #BFADF2 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    {data.title}
                                </span>
                            </div>
                            {/* Subtitle */}
                            <div
                                style={{
                                    fontWeight: 600,
                                    fontSize: 20,
                                    color: "#001F2E",
                                    maxWidth: 508,
                                    marginBottom: 8
                                }}
                            >
                                {data.subtitle}
                            </div>
                            {/* White space */}
                            <div className="flex justify-center items-center">
                                <div
                                    className="flex justify-center items-center"
                                    style={{
                                        height: 200,
                                        width: 330,
                                        background: "white",
                                        borderRadius: 15,
                                        borderColor: "#E6E8EA",
                                        borderStyle: "solid",
                                        borderWidth: 1,
                                        marginBottom: 24
                                    }}
                                />
                            </div>
                            {/* Features */}
                            <div className="flex flex-row gap-[16px] items-center"
                            // style={{
                            //     width: 400
                            // }}
                            >
                                {data.features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col gap-[6px] justify-center items-center"
                                        style={{
                                            minHeight: 95,
                                            minWidth: 75,
                                            borderRadius: 20,
                                            borderStyle: "solid",
                                            borderColor: "#E2EFF8",
                                            background: "white",
                                            borderWidth: 3,
                                            padding: 8
                                        }}
                                    >
                                        {/* Image */}
                                        <img
                                            src={feature.img}
                                            alt="img"
                                            width={25}
                                            height={25}
                                            style={{
                                                marginTop: 4
                                            }}
                                        />
                                        {/* Title */}
                                        <div
                                            className="text-center"
                                            style={{
                                                fontSize: 10,
                                                fontWeight: 600,
                                                color: "#001F2E"
                                            }}
                                        >
                                            {feature.title}
                                        </div>
                                        {/* Description */}
                                        <div
                                            style={{
                                                marginBottom: 4,
                                                fontSize: 6,
                                                color: "#768285",
                                                height: 22,
                                                width: 60,
                                                textAlign: "center"
                                            }}
                                        >
                                            {feature.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CSS for white space */}
                        <style jsx>{`
                .white-space-element {
                    width: 50%; /* Default desktop width */
                }
                
                /* Large screens */
                @media (min-width: 1200px) {
                    .white-space-element {
                        width: 45%;
                    }
                }
                
                /* Medium screens (tablets) */
                @media (max-width: 1024px) {
                    .white-space-element {
                        width: 30%;
                    }
                }
                
                /* Small tablets */
                @media (max-width: 768px) {
                    .white-space-element {
                        width: 15%;
                    }
                }
                
                /* Mobile phones */
                @media (max-width: 640px) {
                    .white-space-container {
                        display: none;
                    }
                }
            `}</style>
                    </div>
                </div>
                <div
                    className="absolute inset-0 transition-all duration-75 ease-out hidden md:block"
                    style={{
                        transform: `translateY(${translateY}px)`,
                        opacity: opacity,
                        zIndex: Math.round(opacity * 10)
                    }}
                >
                    <div
                        className="flex flex-row relative w-full overflow-hidden h-full"
                        style={{
                            background: "#F2FAFF",
                            borderRadius: 32,
                            borderColor: "#E2EFF8",
                            borderWidth: 15,
                            borderStyle: "solid"
                        }}
                    >
                        {/* Parallax images */}
                        {data.decorativeImages.map((img, i) => (
                            <img
                                key={i}
                                src={img.src}
                                alt="decoration"
                                width={img.width}
                                height={img.height}
                                style={{
                                    position: "absolute",
                                    left: img.left,
                                    top: img.top,
                                    transform: `translateY(${getParallaxOffset(img.speed)}px)`,
                                    transition: 'transform 0.1s ease-out'
                                }}
                            />
                        ))}

                        {/* Left side with parallax */}
                        <div
                            className="flex flex-col justify-center ml-[32px] w-full lg:w-auto"
                            style={{
                                transform: `translateY(${getContentParallaxOffset()}px)`,
                                transition: opacity > 0 ? 'transform 0.05s ease-out' : 'none'
                            }}
                        >
                            {/* Title + number with circle */}
                            <div className="flex flex-row gap-[24px] items-center">
                                {/* Circle with number */}
                                <img
                                    src={`/icons/landing-page/three-reasons/${data.number}.svg`}
                                    alt={data.number}
                                    width={64}
                                    height={64}
                                />
                                {/* Title (gradient) */}
                                <span
                                    className="text-4xl md:text-5xl lg:text-6xl"
                                    style={{
                                        fontWeight: 600,
                                        background: 'linear-gradient(135deg, #2C9CE2 0%, #BFADF2 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    {data.title}
                                </span>
                            </div>
                            {/* Subtitle */}
                            <div
                                className="text-2xl md:text-3xl lg:text-4xl"
                                style={{
                                    fontWeight: 600,
                                    color: "#001F2E",
                                    maxWidth: 508
                                }}
                            >
                                {data.subtitle}
                            </div>
                            {/* Description */}
                            <div
                                className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 lg:mt-8 mb-4 md:mb-6 lg:mb-8"
                                style={{
                                    maxWidth: 441
                                }}
                            >
                                {data.description}
                            </div>
                            {/* Features */}
                            <div className="flex flex-col sm:flex-row gap-[16px] items-center">
                                {data.features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col gap-[12px] justify-center items-center"
                                        style={{
                                            height: 180,
                                            width: 146,
                                            borderRadius: 16,
                                            borderStyle: "solid",
                                            borderColor: "#E2EFF8",
                                            background: "white",
                                            borderWidth: 3,
                                            paddingBottom: 8
                                        }}
                                    >
                                        {/* Image */}
                                        <img
                                            src={feature.img}
                                            alt="img"
                                            width={40}
                                            height={40}
                                        />
                                        {/* Title */}
                                        <div
                                            style={{
                                                fontSize: 16,
                                                fontWeight: 600,
                                                color: "#001F2E"
                                            }}
                                        >
                                            {feature.title}
                                        </div>
                                        {/* Description */}
                                        <div
                                            style={{
                                                marginBottom: 4,
                                                fontSize: 12,
                                                color: "#768285",
                                                height: 42,
                                                width: 118,
                                                textAlign: "center"
                                            }}
                                        >
                                            {feature.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* White space */}
                        <div className="flex justify-center items-center white-space-container">
                            <div
                                className="flex justify-center items-center white-space-element"
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    height: "calc(100% - 128px)",
                                    background: "white",
                                    borderRadius: "32px 0 0 32px",
                                    borderColor: "#E6E8EA",
                                    borderStyle: "solid",
                                    borderWidth: 2
                                }}
                            />
                        </div>

                        {/* CSS for responsive white space */}
                        <style jsx>{`
                .white-space-element {
                    width: 50%; /* Default desktop width */
                }
                
                /* Large screens */
                @media (min-width: 1200px) {
                    .white-space-element {
                        width: 45%;
                    }
                }
                
                /* Medium screens (tablets) */
                @media (max-width: 1024px) {
                    .white-space-element {
                        width: 30%;
                    }
                }
                
                /* Small tablets */
                @media (max-width: 768px) {
                    .white-space-element {
                        width: 15%;
                    }
                }
                
                /* Mobile phones */
                @media (max-width: 640px) {
                    .white-space-container {
                        display: none;
                    }
                }
            `}</style>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full bg-white">
            {/* Top text */}
            <div className="mt-[150px] mb-20 text-center text-4xl md:text-6xl">
                <div
                    style={{
                        fontWeight: 600,
                        marginBottom: 0,
                        color: '#001F2E'
                    }}
                >
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #2C9CE2 0%, #BFADF2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        3 Reasons
                    </span>
                    {' '}to choose Mermory
                </div>
            </div>

            {/* Main scrollable section */}
            <div
                ref={sectionRef}
                className="relative w-full flex flex-col items-center"
                style={{ height: '300vh' }} // 3x viewport height for 3 containers
            >
                {/* Sticky container */}
                <div
                    className="sticky"
                    style={{
                        top: 'calc(50vh - 321px)',
                        height: 643,
                        minHeight: 643,
                        maxWidth: 1340,
                        width: "calc(100% - 32px)"
                    }}
                >
                    {containerData.map((data, index) => (
                        <Container
                            key={index}
                            data={data}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThreeReasons;