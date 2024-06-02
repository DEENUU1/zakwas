import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";


const testimonials = [
  {
    quote:
      "Super miejscówka w Zduńskiej! Pizza neapolitańska bardzo dobra, składniki wysokiej jakości i w dużych ilościach. Plusem jest też obecność 3 rodzajów oliwy. Obsługa przemiła :) Jedyna rzecz, której mi brakowało to oznaczenia, która pizza jest wege i może o 1 czy 2 opcje wege więcej. Podsumowując bardzo polecam i na pewno jeszcze wrócę. :)",
    name: "Google 5/5",
    title: "",
  },
  {
    quote:
      "Pizza super, podana szybko i przede wszystkim czuć że zrobiona z dobrych składników. Frytki z batata - bardzo fajne. Obsługa miła i sprawna, chce się wracać do takich miejsc.\n" +
      "Serdecznie polecam",
    name: "Google 5/5",
    title: "",
  },
  {
    quote: "Ulalala mega rewelacyjna pizza, jadłem aż 4 różne po kawałku i naprawdę ciężko wybrać najlepsza z nich dlatego że wszystkie mega💪👌Kilka zostało jeszcze do posmakowania i w najbliższym czasie to nadrobię 😁Polecam w 100%miejscówkę i warto tu wpasc💪Do tego fajny automat z grami, cudowny powrót do dzieciństwa. Drinki też spoko gites i rower w toalecie rowniez😁",
    name: "Google 5/5",
    title: "",
  },
  {
    quote:
      "Jedna z najlepszych pizzy włoskich jakie w życiu jadłem. Reszta menu również na najwyższym poziomie. Polecam z całego serca😍",
    name: "Google 5/5",
    title: "",
  },
  {
    quote:
      "Miejsce zaskakujące blisko basenu Zduńska Woda. Pizzeria Zakwas z zewnątrz budynek nie zachęca do wejścia, ale po wejściu przyjemne wnętrza , a na lato szykowany zadaszony ogródek. Fajnie! Smaczna pizza!",
    name: "Google 5/5",
    title: "",
  },
];

export default function Testimonials() {
  return (
    <div id={"testimonials"}>
      <h1 className={"text-center text-5xl mt-5 mb-5"}>Opinie naszych klientów</h1>
      <p className={"text-center text-gray-200 mt-5"}>
        Oceń nas na{" "}
        <a className={"underline text-gray-300"} href={"https://maps.app.goo.gl/oymGZTdR4bB17BDeA"}>
          Google!
        </a>
      </p>
      <div
        className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

