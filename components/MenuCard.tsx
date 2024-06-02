import {Image as NextImage} from "@nextui-org/react";
import React from "react";

export default function MenuCard({name, ingredients, price}: {name: string, ingredients: string, price: number}) {
	return (
		<div
			className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl shadow-md">
			<NextImage
				isBlurred={true}
				radius={"lg"}
				loading={"lazy"}
				src="/3.jpg"
				alt="menu1"
				height={150}
				width={200}
			/>
			<div className="flex flex-col justify-between flex-2 text-center sm:text-left">
				<div>
					<strong className="text-2xl mb-2 block">{name}</strong>
					<p className="mb-2 block overflow-hidden overflow-ellipsis" style={{maxHeight: "3em", width: "250px"}}>
						{ingredients}
					</p>
				</div>
				<i className="text-2xl font-bold drop-shadow-lg">{price} PLN</i>
			</div>
		</div>


	)
}