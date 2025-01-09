import Image from "next/image";
import Link from "next/link";

export default function Logo({
  image,
  width = 300,
  height = 60,
  alt = "Website Logo",
}) {
  return (
    <Link href='/'>
      <Image
        src={image}
        width={width}
        height={height}
        alt={alt}
        quality={100}
      />
    </Link>
  );
}
