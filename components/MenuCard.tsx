import {Image as NextImage} from "@nextui-org/react";
import React from "react";

export default function MenuCard({name, ingredients, price}: {name: string, ingredients: string, price: number}) {
	return (
		<>
			<div className={"flex items-center gap-4"}>
				<NextImage isBlurred={true} className={"rounded-2xl"} src={"/2.jpg"} alt={"menu1"} height={150} width={200}/>
				<div className={""}>
					<strong className={"text-2xl mb-2"}>{name}</strong>
					<i className={"mb-2 block overflow-hidden overflow-ellipsis"} style={{maxWidth: "250px"}}>
						{ingredients}
					</i>
				</div>
				<i className={"text-2xl"}>{price} PLN</i>
			</div>
		</>
	)
}