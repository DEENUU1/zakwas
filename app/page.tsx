import Image from "next/image";
import {Image as NextImage} from "@nextui-org/react";
import React from "react";
import MenuCard from "@/components/MenuCard";

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
						<NextImage isBlurred={true} isZoomed={true} className="h-auto max-w-full rounded-lg" src={src}
											 alt={`Image ${index + 1}`}/>
					</div>
				))}
			</div>

			<div className={"grid grid-cols-2 md:grid-cols-2 gap-4 justify-items-center mt-5 mb-5"}>
				<MenuCard name={"Pizza"} ingredients={"Pomidor, ser, sos"} price={20.90}/>
				<MenuCard name={"Pizza"} ingredients={"Pomidor, ser, sos"} price={20.90}/>
				<MenuCard name={"Pizza"} ingredients={"Pomidor, ser, sos"} price={20.90}/>
				<MenuCard name={"Pizza"} ingredients={"Pomidor, ser, sos"} price={20.90}/>
			</div>

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.548400897059!2d18.937132712715382!3d51.59483960419378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a5b4062d8c21b%3A0xcf2e84daa433ccb9!2sZAKWAS%20Zdu%C5%84ska%20Wola!5e0!3m2!1spl!2spl!4v1717205423044!5m2!1spl!2spl"
				className="border:0 w-full" height={"500"} loading="lazy">
			</iframe>
			<p className="mt-8 mb-8 text-base leading-6 text-center text-gray-400">
				© 2024 Zakwas, created by Kacper Włodarczyk.
			</p>

		</>
	);
}
