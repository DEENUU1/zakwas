"use client";
import MenuCard from "@/components/MenuCard";
import React, { useState } from "react";

export default function Menu(){
	const pizzaRossa = [
		{
			"name": "MARINARA",
			"ingredients": "SAN MARZANO, ŚWIEŻY CZOSNEK, OLIWA EVOO,OREGANO",
			"price": 34
		},
		{
			"name": "COSACCA",
			"ingredients": "SAN MARZANO, PARMEZAN, PECORINO, OLIWKI, BAZYLIA ŚWIEŻA, OLIWA EVOO",
			"price": 39
		},
		{
			"name": "MARGHERITA",
			"ingredients": "SAN MARZANO, MOZARELLA FIOR DI LATTE, PARMEZAN, ŚWIEŻA BAZYLIA, OLIWA EVOO",
			"price": 42
		},
		{
			"name": "CAPRICCIOSA",
			"ingredients": "SAN MARZANO, MOZARELLA FIOR DI LATTE, PARMEZAN, PROSCIUTTO COTTO, PIECZARKI, OREGANO, BAZYLIA, OLIWA EVOO",
			"price": 45
		},
		{
			"name": "QUATTRO FORMAGGI",
			"ingredients": "SAN MARZANO, PARMEZAN, PECORINO, MOZARELLA FIOR DI LATTE, GORGONZOLA, RICOTTA, ŚWIEŻA BAZYLIA",
			"price": 49
		},
		{
			"name": "PARMA",
			"ingredients": "SAN MARZANO, MOZARELLA FIOR DI LATTE, PECORINO DOP, PROSCIUTTO CRUDO, RUKOLA, OCET BALSAMICZNY, OLIWA EVOO",
			"price": 50
		},
		{
			"name": "GORGONZOLA",
			"ingredients": "SAN MARZANO, PECORINO DOP, GORGONZOLA DOP, SALAMI VENTRICINA, PAPRYCZKA PEPERONCINI, OLIWA EVOO",
			"price": 50
		},
		{
			"name": "DIAVOLA",
			"ingredients": "SAN MARZANO, MOZARELLA FIOR DI LATTE, PARMEZAN, SALAMI VENTRICINA, PEPERONCINI, TRUFLOWE MASCARPONE, BAZYLIA",
			"price": 52
		},
		{
			"name": "NAPOLI",
			"ingredients": "SAN MARZANO, PECORINO DOP, MOZARELLA FIOR DI LATTE, ŚWIEŻA BAZYLIA, ANCHOIS, PARARY, OLIWA EVOO",
			"price": 49
		},
		{
			"name": "LADY ZAZA",
			"ingredients": "SAN MARZANO - GOCHUJANG, KIMCHI, NDUJA, SEZAM, OLEJ SEZAMOWY, CEBULKA DYMKA",
			"price": 50
		}
	]

	const pizzaBianca = [
		{
			"name": "NDUJA",
			"ingredients": "CREME FRAICHE, PARMEZAN, NDUJA, ŚWIEŻA BAZYLIA, MIÓD",
			"price": 45
		},
		{
			"name": "MORTADELE BIANCO",
			"ingredients": "CREME FRAICHE, MOZARELLA FIOR DI LATTE, MORTADELA, PESTO BAZYLIOWE, PISTACJE, POMIDORKI KOKTAJLOWE",
			"price": 50
		},
		{
			"name": "BASCAIOLA",
			"ingredients": "CREME FRAICHE, PARMEZAN DOP, MOZARELLA, PIECZARKI, PROSCIUTTO COTTO, ŚWIEŻA BAZYLIA, PIEPRZ, OLIWA EVOO",
			"price": 50
		},
		{
			"name": "RICOTTA YUZU",
			"ingredients": "RICOTTA, KONFITURA Z CYTRUSA YUZU, ŚWIEŻA BAZYLIA, OLIWA EVO0",
			"price": 47
		},
	]

	const otherDishes = [
		{
			"name": "BUŁKA NEAPOLITAŃSKA",
			"ingredients": "PRZYSTAWKA / GORĄCA BUŁKA NEAPOLITAŃSKA (3 SZT.) PODANA Z OLIWĄ EVOO ORAZ OCTEM BALSAMICZNYM",
			"price": 16
		},
		{
			"name": "FRYTKI Z BATATA",
			"ingredients": "FRYTKI Z BATATA PODANE Z SOSEM MISO-MAYO",
			"price": 23
		},
		{
			"name": "KREM Z POMIDORÓW",
			"ingredients": "KREM Z POMIDORÓW POSYPANY SEREM PECORINO + PESTO BAZYLIOWE ORAZ WYPIEKANE PRZEZ NAS PALICHY",
			"price": 20
		},
		{
			"name": "LOSAGNE BOLOGNESE",
			"ingredients": "KLASYCZNE WYDANIE ZNANEJ WŁOSKIEJ POTRAWY, POLANA PESTO BAZYLIOWYM I POSYPANA PECORINO.",
			"price": 38
		},
	]

	const coffeTea = [
		{
			"name": "ESPRESSO",
			"ingredients": "DOPPIO",
			"price": 7
		},
		{
			"name": "AMERICANO",
			"ingredients": "",
			"price": 9
		},
		{
			"name": "CAPPUCCINO",
			"ingredients": "",
			"price": 13
		},
		{
			"name": "FLAT WHITE",
			"ingredients": "",
			"price": 15
		},
		{
			"name": "LATTE MACCHIATO",
			"ingredients": "",
			"price": 13
		},
		{
			"name": "SYROP DO KAWY",
			"ingredients": "KOKOS, WANILIA, KARMEL, ORZECH LASKOWY",
			"price": 2
		},
		{
			"name": "HERBATA",
			"ingredients": "EARL GREY, SPICY CINNAMON, MELON Z MIĘTĄ, OWOCE LEŚNE",
			"price": 14
		},
	]

	const drinks = [
		{
			"name": "NAPÓJ, SOK",
			"ingredients": "200ML - PEPSI, MIRINDA, 7-UP, TOMA",
			"price": 7
		},
		{
			"name": "WODA",
			"ingredients": "300ML - GAZOWANA, NIEGAZOWANA",
			"price": 5
		},
	]

	const [selectedCategory, setSelectedCategory] = useState("pizzaRossa");

  const getCategoryData = () => {
    switch (selectedCategory) {
      case "pizzaRossa":
        return pizzaRossa;
      case "pizzaBianca":
        return pizzaBianca;
      case "otherDishes":
        return otherDishes;
      case "coffeTea":
        return coffeTea;
      case "drinks":
        return drinks;
      default:
        return [];
    }
  };


  return (
		<div className={""}>
			<h1 className="text-center text-5xl mt-5 mb-5">Menu</h1>
			<div className="overflow-x-auto">
				<div className="flex justify-center space-x-4 mb-5 w-max mx-auto">
					<button
						onClick={() => setSelectedCategory("pizzaRossa")}
						className={`btn ${selectedCategory === "pizzaRossa" ? "hover:border-red-600 border-solid border-3 border-red-700 border-transparent rounded-2xl p-2 font-bold" : ""}`}
					>
						Pizza Rossa
					</button>
					<button
						onClick={() => setSelectedCategory("pizzaBianca")}
						className={`btn ${selectedCategory === "pizzaBianca" ? "hover:border-red-600 border-solid border-3 border-red-700 border-transparent rounded-2xl p-2 font-bold" : ""}`}
					>
						Pizza Bianca
					</button>
					<button
						onClick={() => setSelectedCategory("otherDishes")}
						className={`btn ${selectedCategory === "otherDishes" ? "hover:border-red-600 border-solid border-3 border-red-700 border-transparent rounded-2xl p-2 font-bold" : ""}`}
					>
						Inne Dania
					</button>
					<button
						onClick={() => setSelectedCategory("coffeTea")}
						className={`btn ${selectedCategory === "coffeTea" ? "hover:border-red-600 border-solid border-3 border-red-700 border-transparent rounded-2xl p-2 font-bold" : ""}`}
					>
						Kawa i Herbata
					</button>
					<button
						onClick={() => setSelectedCategory("drinks")}
						className={`btn ${selectedCategory === "drinks" ? "hover:border-red-600 border-solid border-3 border-red-700 border-transparent rounded-2xl p-2 font-bold" : ""}`}
					>
						Napoje
					</button>
				</div>
			</div>
			<div id="menu" className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-5 mb-5">
				{getCategoryData().map((item, index) => (
					<MenuCard key={index} name={item.name} ingredients={item.ingredients} price={item.price}/>
				))}
			</div>
		</div>

	);
}