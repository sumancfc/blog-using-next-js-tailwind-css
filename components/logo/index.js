import Image from "next/image";
import Link from "next/link";

export default function Logo({ image, width, height, alt }) {
  return (
    <Link href='/' legacyBehavior>
      <a>
        <Image
          loading='lazy'
          src={image}
          width={width}
          height={height}
          alt={alt}
          quality={100}
          // objectFit='cover'
        />
      </a>
    </Link>
  );
}

Logo.defaultProps = {
  image: "/img/logo/logo.png",
  width: "300",
  height: "60",
  alt: "React Next Js Blog Logo",
};
