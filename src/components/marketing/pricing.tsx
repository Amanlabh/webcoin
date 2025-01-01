"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/functions";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";

const PROJECTS = [
    {
        id: "project1",
        name: "GameFi Project Partnership",
        description: "Partnering with new and innovative GameFi Projects also including Gaming guild & eSports.",
        status: "In Progress",
        since: "2024",
        image: "/path-to-image/gamefi-project.png",
    },
    {
        id: "project2",
        name: "Advisory Board",
        description: "Providing industry insights and support with members of the Advisory Board.",
        status: "In Progress",
        since: "2024",
        image: "/path-to-image/advisory-board.png",
    },
    {
        id: "project3",
        name: "DEX & Liquidity Pools (LPs)",
        description: "Collaborating with decentralized exchanges and establishing liquidity pools for project.",
        status: "In Progress",
        since: "2024",
        image: "/path-to-image/dex-liquidity-pools.png",
    },
    {
        id: "project4",
        name: "INO Launchpad & Staking",
        description: "Dedicated platform for Initial NFT Offerings (INOs) and staking platform to stake tokens and earn rewards.",
        status: "Done",
        since: "2024",
        image: "/path-to-image/ino-launchpad-staking.png",
    },
];

const ProjectCards = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative bg-gradient-to-b from-black via-gray-900 to-black">
            <Container>
                <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium text-white leading-snug mt-6">
                        What we’re working on
                    </h2>
                    <p className="text-base md:text-lg text-center text-gray-400 mt-6">
                        Ready to get started
                    </p>
                </div>
            </Container>
            <div className="mt-8 w-full relative flex flex-col items-center justify-center">
                <Container>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-14"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </motion.div>
                </Container>
            </div>
        </div>
    );
};

const ProjectCard = ({
    id,
    name,
    description,
    status,
    since,
    image,
}: {
    id: string;
    name: string;
    description: string;
    status: string;
    since: string;
    image: string;
}) => {
    return (
        <motion.div 
            className="w-full relative flex flex-col rounded-3xl shadow-lg bg-gray-800 p-8 hover:shadow-2xl transition-shadow duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">[ Since {since} ]</span>
                <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${status === "Done" ? "bg-green-600" : "bg-purple-600"}`}>{status}</span>
            </div>
            <h2 className="text-xl font-medium text-white mb-4">{name}</h2>
            <p className="text-sm text-gray-400 mb-6">{description}</p>
            <div className="w-full h-40 bg-gray-700 rounded-xl overflow-hidden">
                <img src={image} alt={name} className="object-cover w-full h-full" />
            </div>
        </motion.div>
    );
};

export default ProjectCards;
