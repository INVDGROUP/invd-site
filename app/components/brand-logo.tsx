import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  small?: boolean;
};

export default function BrandLogo({ className = "", small = false }: BrandLogoProps) {
  return (
    <span
      aria-label="INVD Group"
      className={`brand-logo ${small ? "brand-logo--small" : ""} ${className}`}
      role="img"
    >
      <Image
        alt=""
        aria-hidden="true"
        height={1000}
        src="/logo-invd.png"
        width={1000}
      />
    </span>
  );
}
