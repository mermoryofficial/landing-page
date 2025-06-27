"use client";

import Image from "next/legacy/image";

const ImportComponent = () => {
    return (
        <div className="w-full">
            <div className="md:hidden">

            </div>
            <div className="hidden md:block">
                <div className="w-full bg-white h-screen flex items-center justify-center">
                    <div className="flex flex-col justify-center items-center">
                        <div id="top-text"
                            className="mb-16 text-center"
                        >
                            <div
                                style={{
                                    fontWeight: 600,
                                    fontSize: 48,
                                    maxWidth: 620,
                                    marginBottom: 16,
                                    color: '#001F2E'
                                }}
                            >
                                Short on time and want more study prep?
                            </div>
                            <div
                                style={{
                                    fontSize: 24,
                                    color: '#083347'
                                }}
                            >
                                We got you covered with our Import feature
                            </div>
                        </div>
                        <div
                            className="z-0 flex flex-col items-center justify-center"
                            style={{
                                backgroundColor: "#F9EECC",
                                height: 575,
                                width: 'calc(100% - 32px)',
                                maxWidth: 1230,
                                marginLeft: 100,
                                marginRight: 100,
                                borderRadius: 40
                            }}
                        >
                            <div
                                className="z-10 flex flex-row overflow-hidden"
                                style={{
                                    backgroundColor: "#FFF8E1",
                                    margin: 16,
                                    borderRadius: 40,
                                    width: 'calc(100% - 32px)',
                                    height: 'calc(100% - 32px)'
                                }}
                            >
                                {/* Left side */}
                                <div style={{ flex: 1 }}>
                                    <img
                                        src="/icons/landing-page/import-background.svg"
                                        alt="import background"
                                        width={800}
                                        height={550}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>

                                {/* Right side */}
                                <div
                                    className="bg-white flex flex-col justify-center items-center"
                                    style={{
                                        width: 350,
                                        minWidth: 350,
                                        maxWidth: 350,
                                        height: "100%",
                                        borderRadius: 40,
                                        flexShrink: 0
                                    }}
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <div style={{ borderRadius: "50%", width: 145, height: 145, backgroundColor: "#FFF8E1", position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img
                                                src="/icons/landing-page/plus.svg"
                                                alt="plus"
                                                width={37}
                                                height={37}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="mt-6"
                                        style={{
                                            fontSize: 48,
                                            fontWeight: 600,
                                            color: '#271E01'
                                        }}
                                    >
                                        Import
                                    </div>
                                    <div
                                        className="mt-4 text-center"
                                        style={{
                                            fontSize: 24,
                                            color: '#083347',
                                            maxWidth: 372,
                                            padding: '0 24px'
                                        }}
                                    >
                                        Make flashcards <strong>instantly</strong> by uploading your materials.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ImportComponent;