import Image from "next/image";
import {ThreeDCardImage} from "@/components/3dCardImage";
import React from "react";


export default function Hero(){
	return (
		<>
			<div id={"home"} className="relative w-full min-h-screen">
				<div className="absolute inset-0 -z-10">
					<Image
						src="/outside.jpg"
						layout="fill"
						objectFit="cover"
						alt="background image"
						className={"blur-sm"}
					/>
				</div>
				<div className="h-screen flex flex-col items-center justify-center bg-black bg-opacity-50">
					<ThreeDCardImage/>
					<h1 className="font-bold text-white text-center text-6xl">
						Zakwas
					</h1>
					<p className="text-white text-center text-xl">
						Pizza neapolitańska. Klasyka w nowej odsłonie.
					</p>
				</div>
			</div>
		</>
	)
}