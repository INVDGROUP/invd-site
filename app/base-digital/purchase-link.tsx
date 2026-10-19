"use client";

type PurchaseLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  location: string;
};

export default function PurchaseLink({ location, onClick, ...props }: PurchaseLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "base_digital_checkout_click",
          button_location: location,
          link_url: props.href,
        });
        onClick?.(event);
      }}
    />
  );
}
