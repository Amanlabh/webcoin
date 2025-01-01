"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Extra = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative">
            <div className="max-w-lg text-center md:text-left mb-10 md:mb-0">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    Work smarter, not harder.
                </h2>
                <ul className="text-gray-400 text-base space-y-4">
                    <li className="flex items-center">
                        <span className="text-purple-500 text-lg mr-2">✔</span>
                        <strong>Funding:</strong> Provide long-term financial support.
                    </li>
                    <li className="flex items-center">
                        <span className="text-purple-500 text-lg mr-2">✔</span>
                        <strong>Assistance:</strong> Offer strategic guidance and digital services.
                    </li>
                    <li className="flex items-center">
                        <span className="text-purple-500 text-lg mr-2">✔</span>
                        <strong>KOL's Service:</strong> Promotion of projects through our extensive KOL network.
                    </li>
                </ul>
                <div className="mt-8">
                    <Button className="px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-900 rounded-lg font-medium">
                        TRY IT NOW
                    </Button>
                </div>
            </div>

            <div className="flex flex-col items-center relative">
                <div className="relative flex items-center justify-center w-80 h-80 bg-gray-800 rounded-full">
                    <div className="absolute w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
                    <motion.div
                        className="absolute w-full h-full flex justify-center items-center"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    >
                        <div className="relative w-80 h-80">
                            {[
                                "/icons/icon1.png",
                                "/icons/icon2.png",
                                "/icons/icon3.png",
                                "/icons/icon4.png",
                                "/icons/icon5.png",
                                "/icons/icon6.png"
                            ].map((icon, index) => (
                                <img
                                    key={index}
                                    src={icon}
                                    alt={`Icon ${index + 1}`}
                                    className="absolute w-12 h-12 object-cover rounded-full shadow-md bg-gray-700"
                                    style={{
                                        top: `${50 + 40 * Math.sin((index * 2 * Math.PI) / 6)}%`,
                                        left: `${50 + 40 * Math.cos((index * 2 * Math.PI) / 6)}%`,
                                        transform: "translate(-50%, -50%)"
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
                <p className="text-gray-400 text-sm mt-6 text-center max-w-xs">
                    With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.
                </p>
            </div>
        </div>
    );
};

export default Extra;
