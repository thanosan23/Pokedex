import React from "react";
import Image from "next/image";
import Link from "next/link";
import video_games_image from "../public/video-games.svg"

const Landing = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center h-screen gap-3">
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl font-bold">Pokedex</h1>
                    <p className="text-lg">
                        A list of all the <span className="text-viridian-green font-semibold">pokemons</span>!
                    </p>
                    <div className="py-2">
                        <Link href="/pokemon">
                            <button className="bg-viridian-green px-5 py-2 rounded shadow-lg hover:scale-110 hover:translate-y-1 hover:opacity-90 duration-300 delay-50">
                                Visit
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="px-20">
                    <Image src={video_games_image} width={300} height={300} alt="Map"/>
                </div>
            </div>
        </>
    );
};

export default Landing;
