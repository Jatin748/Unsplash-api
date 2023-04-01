import React from "react";
import { useContext } from "react";
import { imagecontext } from "../App";
import Image from "./Image";
import Skeleton from "./Skeleton";
const Images = () => {
  const { response, isloading } = useContext(imagecontext);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto">
        {isloading ? (
          <Skeleton item={10}/>
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </>
  );
};

export default Images;
