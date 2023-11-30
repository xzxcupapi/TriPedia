import React from "react";
import DestinationCard from "../layouts/DestinationCard";
import img1 from "../assets/img/dest1.jpg";
import img2 from "../assets/img/dest2.jpg";
import img3 from "../assets/img/dest3.jpg";

const Destination = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5">
      <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">
        Most Popular Destinations
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 mt-14 mb-10">
        <DestinationCard
          img={img1}
          title="Museum Macan"
          para="Museum MACAN or the Museum of Modern and Contemporary Art in Nusantara, is a prominent art institution located in Jakarta, Indonesia."
        />
        <DestinationCard
          img={img2}
          title="Museum Art:1 New"
          para="Museum MACAN or the Museum of Modern and Contemporary Art in Nusantara, is a prominent art institution located in Jakarta, Indonesia."
        />
        <DestinationCard
          img={img3}
          title="Museum Harry Darsono"
          para="Museum MACAN or the Museum of Modern and Contemporary Art in Nusantara, is a prominent art institution located in Jakarta, Indonesia."
        />
      </div>
    </div>
  );
};

export default Destination;
