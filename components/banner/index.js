import Image from "next/image";
import Link from "next/link";

export default function Banner({ className, image, width, height, alt }) {
  return (
    <Link href='https://suman-stha.com.np' className={className} legacyBehavior>
      <Image
        loading='lazy'
        src={image}
        width={width}
        height={height}
        alt={alt}
        quality={100}
        // objectFit='cover'
        // layout='responsive'
      />
    </Link>
  );
}

Banner.defaultProps = {
  image: "/img/banner/top-banner.png",
  width: "730",
  height: "92",
  alt: "Top Banner",
};
