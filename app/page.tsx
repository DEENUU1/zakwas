import Image from "next/image";
import {Image as NextImage} from "@nextui-org/react";
import React from "react";

export default function Home() {

	const images = [
		"/1.jpg",
		"/2.jpg",
		"/3.jpg",
		"/4.jpg",
		"/5.jpg",
		"/6.jpg",
		"/7.jpg",
		"/8.jpg",
		"/9.jpg",
		"/10.jpg",
		"/11.jpg",
		"/12.jpg",
		"/13.jpg",
		"/14.jpg",
		"/15.jpg",
		"/16.jpg",
		"/17.jpg",
		"/18.jpg",
	]

	return (
		<>
			<div className="relative w-full min-h-screen">
				<div className="absolute inset-0 -z-10">
					<Image src="/outside.jpg" layout="fill" objectFit="cover" alt="bg"/>
				</div>
				<div className="h-screen flex flex-col items-center justify-center bg-black bg-opacity-50">
					<h1 className="text-white text-center text-6xl font-bold">
						Zakwas
					</h1>
					<p className="text-white text-center text-xl">
						Pizza neapolitańska. Klasyka w nowej odsłonie.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-black">
				{images.map((src, index) => (
					<div key={index}>
						<NextImage isBlurred={true} isZoomed={true} className="h-auto max-w-full rounded-lg" src={src} alt={`Image ${index + 1}`}/>
					</div>
				))}
			</div>
		</>
	);
}
