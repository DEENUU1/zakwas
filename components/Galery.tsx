import {Image as NextImage} from "@nextui-org/image";
import React from "react";


export default function Galery(){
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
			<h1 className={"text-center text-5xl mt-5 mb-5"}>Galeria smaków</h1>
			<div id="galery" className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
				{images.map((src, index) => (
					<div key={index} className={"h-min w-full"}>
						<NextImage radius={"lg"} isZoomed={true}  className="rounded-lg object-cover" src={src} alt={`Image ${index + 1}`}/>
					</div>
				))}
			</div>


		</>
	)
}