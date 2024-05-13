import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
  };
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
  },
}: Nav) {
  return (
    <nav class="absolute left-0 top-0 h-fit z-20 w-full box-border bg-cookie-cat bg-primary">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="drawer-content container px-4 flex gap-8 items-center justify-between py-4">
        <label
          htmlFor="mobile-drawer-nav"
          class="flex btn btn-ghost drawer-button"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>

        <a href="/">
          <Image class="h-fit max-w-16" src={logo.src || ""} alt={logo.alt} />
        </a>

      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="drawer flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content bg-cookie-cat">
          <a class="p-4" href="/">
            <Image class="h-fit max-w-16" src={logo.src || ""} alt={logo.alt} />
          </a>

          <ul class="menu">
            {navigation?.links.map((link) => (
              <li>
                <a href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul class="p-4 flex items-center gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary ${item.outline && "btn-outline"
                  }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>
      </aside>
    </nav>
  );
}
