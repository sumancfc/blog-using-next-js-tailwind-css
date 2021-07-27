import Image from "next/image";
import Link from "next/link";

export default function Banner({ image, width, height, alt }) {
  return (
    <Link href='https://sumancfc.com'>
      <a>
        <Image
          loading='lazy'
          src={image}
          width={width}
          height={height}
          alt={alt}
          quality={100}
          objectFit='cover'
        />
      </a>
    </Link>
  );
}

Banner.defaultProps = {
  image: "/img/banner/top-banner.png",
  width: "730",
  height: "92",
  alt: "Top Banner",
};
