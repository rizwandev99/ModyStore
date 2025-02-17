"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={images[current]}
        alt="image-product"
        height={1000}
        width={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex ">
        {images.map((image, index) => (
          <Image
            key={index}
            src={images[index]}
            alt="below-image"
            height={100}
            width={100}
            className={`border mr-2 cursor-pointer hover:border-orange-500 ${
              index === current ? "border-orange-600" : null
            } `}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
