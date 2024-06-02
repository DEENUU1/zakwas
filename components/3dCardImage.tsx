"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardImage() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-emerald-500/[0.1] w-auto h-auto rounded-xl">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image src={"/logo.png"} alt={"logo_hero"} height={250} width={300} />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
