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
        height={409}
        src="/logo-invd.png"
        unoptimized
        width={721}
      />
    </span>
  );
}
