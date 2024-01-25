import {cleaners} from "./../../assets/data/cleaners";
import CleanerCard from "./CleanerCard";


const CleanerList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
        lg:mt-[55px]">
            {cleaners.map((cleaner,index)=> <CleanerCard key={index} cleaner={cleaner}/>)}
        </div>
    )
}

export default CleanerList