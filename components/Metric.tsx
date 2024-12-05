import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
  ImageStyle,
}: Metrics) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`items-center rounded-full object-contain ${ImageStyle}`}
      />

      <p className={`${textStyles} ml-1 flex items-center gap-1`}>
        {value}

        <span
          className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </p>
    </>
  );

  return href ? (
    <Link href={href} className="flex-center  gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center  gap-1">{metricContent}</div>
  );
};

export default Metric;
