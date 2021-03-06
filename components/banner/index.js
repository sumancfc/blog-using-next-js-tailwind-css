import Image from "next/image";
import Link from "next/link";

export default function Banner({ className, image, width, height, alt }) {
  return (
    <Link href='https://sumancfc.com'>
      <a className={className}>
        <Image
          loading='lazy'
          src={image}
          width={width}
          height={height}
          alt={alt}
          quality={100}
          objectFit='cover'
          layout='responsive'
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
