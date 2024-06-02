import Hero from "@/components/Hero";
import Galery from "@/components/Galery";
import Menu from "@/components/Menu";
import GoogleMaps from "@/components/GoogleMapsIFrame";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Zakwas',
  description: 'Pizza neapolitańska. Klasyka w nowej odsłonie.',
}

export default function Home() {

	return (
		<>
			<Hero/>
			<Menu/>
			<Testimonials/>
			<Galery/>
			<GoogleMaps/>
		</>
	);
}
