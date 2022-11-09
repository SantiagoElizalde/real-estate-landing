import React from "react";
import { Link } from "react-router-dom";
import HomeSearchBar from "../../components/pageComponents/HomeSearchBar/HomeSearchBar";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

// 
import PropertiesList from '../../dummies/PropertiesList'

const Home = () => {
  return (
    <main className={Style.main}>
      {/*  */}
      <section className="flex border-b mb-8 pb-8 mt-6 h-[600px] relative">
        <HomeSearchBar />
        <img
          className=" w-[56%] ml-auto"
          alt=""
          src={
            "https://i0.wp.com/theorangebackpack.nl/wp-content/uploads/2019/03/andrea-leopardi-694660-unsplash-scaled.jpg?fit=2560%2C1707&ssl=1"
          }
        />
      </section>

      {/*  */}
      <section className="flex gap-[40px] flex-wrap justify-center">
        {PropertiesList.map((p) => (
          <Link to={"#"} key={p.id} className={`flex`}>
            <PropertyCard 
              title={p.title}
              location={p.location}
              imgesUrl={p.imgUrl}
              price={p.price}
              details={p.details}
              availableFor={p.availableFor}
            />
          </Link>
        ))}

        {/* <PropertyCard />
        <PropertyCard />
        <PropertyCard /> */}
      </section>
    </main>
  );
};

const Style = {
  main: `px-side pb-side`,
};

export default Home;
