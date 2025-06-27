import React, { useEffect, useState, useRef } from 'react';

const JustKeepLearning = () => {
    const [relativeScrollY, setRelativeScrollY] = useState(0);
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);
    const [sectionTop, setSectionTop] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
                if (entry.isIntersecting && sectionRef.current) {
                    const rect = sectionRef.current.getBoundingClientRect();
                    setSectionTop(window.scrollY + rect.top);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
            const rect = sectionRef.current.getBoundingClientRect();
            setSectionTop(window.scrollY + rect.top);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            if (inView && sectionRef.current) {
                const currentScrollY = window.scrollY;
                const relativeScroll = currentScrollY - sectionTop;
                setRelativeScrollY(relativeScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [inView, sectionTop]);

    return (
        <div ref={sectionRef} className="relative w-full overflow-hidden z-0 bg-red-500 mt-0">
            {/* Top wave */}
            <div className="relative bg-white h-32 z-20">
                <div className="absolute bottom-[-50px] w-full">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="w-full h-32"
                        style={{
                            transform: `scaleY(-10)`
                        }}
                    >
                        <path
                            d="M0,45
                            C400,40 700,80 1200,40
                            L1200,120 
                            L0,120 Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>

            {/* Background */}
            <div
                className="relative flex items-center justify-center z-0"
                style={{
                    background: '#E2EFF8',
                    backgroundAttachment: 'fixed',
                    height: '880px'
                }}
            >
                {/* Content with parallax movement */}
                <div
                    className="flex flex-col justify-center items-center text-center z-20"
                    style={{
                        transform: inView ? `translateY(${relativeScrollY * -0.5}px)` : 'translateY(0px)',
                        color: '#65849A'
                    }}
                >
                    <h2
                        className="mb-6 mt-16"
                        style={{
                            fontSize: 60,
                            width: 363,
                            fontWeight: 600,
                            textAlign: 'center',
                        }}
                    >
                        Just keep studying
                    </h2>
                    <img
                        src="/icons/landing-page/swimming.svg"
                        alt="Studying Icon"
                        width={350}
                        height={350}
                    />
                </div>

                {/* Floating elements */}
                <div
                    className="absolute z-10 top-[-100px] left-[800px]"
                    style={{ transform: inView ? `translateY(${relativeScrollY * -0.15}px)` : 'translateY(0px)' }}
                >
                    <img
                        src="/icons/landing-page/card1.svg"
                        alt="card1"
                        width={400}
                        height={225}
                    />
                </div>
                <div
                    className="absolute z-10 top-[-70px] left-40"
                    style={{ transform: inView ? `translateY(${relativeScrollY * -0.15}px)` : 'translateY(0px)' }}
                >
                    <img
                        src="/icons/landing-page/card2.svg"
                        alt="card2"
                        width={450}
                        height={250}
                    />
                </div>
                <div
                    className="absolute z-10 top-[100px] left-[1300px]"
                    style={{ transform: inView ? `translateY(${relativeScrollY * -0.15}px)` : 'translateY(0px)' }}
                >
                    <img
                        src="/icons/landing-page/card3.svg"
                        alt="card3"
                        width={500}
                        height={300}
                    />
                </div>
                <div
                    className="absolute z-10 top-[200px] left-[-100px]"
                    style={{ transform: inView ? `translateY(${relativeScrollY * -0.15}px)` : 'translateY(0px)' }}
                >
                    <img
                        src="/icons/landing-page/card4.svg"
                        alt="card4"
                        width={500}
                        height={300}
                    />
                </div>
                <div
                    className="absolute z-10 top-[400px] left-[250px]"
                    style={{ transform: inView ? `translateY(${relativeScrollY * -0.15}px)` : 'translateY(0px)' }}
                >
                    <img
                        src="/icons/landing-page/card5.svg"
                        alt="card5"
                        width={425}
                        height={225}
                    />
                </div>
                <div
                    className="absolute z-10 top-[750px] left-[350px]"
                    style={{ transform: inView ? `translateY(${relativeScrollY * -0.15}px)` : 'translateY(0px)' }}
                >
                    <img
                        src="/icons/landing-page/card6.svg"
                        alt="card6"
                        width={400}
                        height={200}
                    />
                </div>
                <div
                    className="absolute z-10 top-[550px] left-[900px]"
                    style={{ transform: inView ? `translateY(${relativeScrollY * -0.15}px)` : 'translateY(0px)' }}
                >
                    <img
                        src="/icons/landing-page/card7.svg"
                        alt="card7"
                        width={425}
                        height={225}
                    />
                </div>
                <div
                    className="absolute z-10 top-[450px] left-[1400px]"
                    style={{ transform: inView ? `translateY(${relativeScrollY * -0.15}px)` : 'translateY(0px)' }}
                >
                    <img
                        src="/icons/landing-page/card8.svg"
                        alt="card8"
                        width={475}
                        height={250}
                    />
                </div>
            </div>

            {/* Bottom wave */}
            <div className="relative bg-white h-32 z-0">
                <div className="absolute top-[-200px] w-full">
                    <svg
                        viewBox="0 0 1200 300"
                        className="w-full h-[800px] rotate-180"
                        preserveAspectRatio="none"
                        style={{ transform: `translateY(-100px)` }}
                    >
                        <path
                            d="M0,0
                            C300,200 700,20 1200,40
                            L1200,120 
                            L0,120 Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default JustKeepLearning;