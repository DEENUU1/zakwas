import React from "react";
import Hero from "@/components/Hero";
import Galery from "@/components/Galery";
import Menu from "@/components/Menu";
import GoogleMaps from "@/components/GoogleMapsIFrame";
import Testimonials from "@/components/Testimonials";

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
			<Hero/>
			<Menu/>
			<Testimonials/>
			<Galery images={images}/>
			<GoogleMaps/>
		</>
	);
}
