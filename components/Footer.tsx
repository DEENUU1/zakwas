import React from "react";
import Link from "next/link";


export default function Footer(){
	return (
		<>
			<p className="mt-8 mb-8 text-base leading-6 text-center text-gray-400">
				© 2024 Zakwas, created by{" "}
				<Link
					className={"underline"}
					href={"https://www.linkedin.com/in/kacper-wlodarczyk/"}
				>
					Kacper Włodarczyk
				</Link>.
			</p>
		</>
	)
}