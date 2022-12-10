import React from "react";
import ServicesData from "../data/ServicesData";
import SectionTitle from "./SectionTitle";
import ServicesItem from "./ServicesItem";

function Services() {
  return (
    <div id="services" className="py-12">
      <SectionTitle>Our Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {ServicesData.map(service => (
          <ServicesItem
            key={service.title}
            title={service.title}
            icon = {service.icon}
            dec = {service.description}
            
          ></ServicesItem>
          ))}
      </div>
    </div>
  );
}

export default Services;
