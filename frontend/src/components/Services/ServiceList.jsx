import React from "react";

import { service } from "./../../assets/data/service";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
    return (
        <div className="grit grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-5 lg:gap-[30px] mt-[30px] 
        lg:mt-[55px]">
            {service.map((item,index)=> ( <ServiceCard item={item} index={index} key={index}/>))}
        </div>
    )
}
export default ServiceList