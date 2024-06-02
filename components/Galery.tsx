import {Image as NextImage} from "@nextui-org/image";
import React from "react";


export default function Galery({images}: {images: string[]}){
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