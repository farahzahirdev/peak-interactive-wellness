import Image from "next/image";
import Link from "next/link";
import {
  CONDITIONS_SECTION_ID,
  FORM_SECTION_ID,
  LOCATIONS,
  LOGO_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SERVICES_SECTION_ID,
  WEBSITE_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-teal-deep text-white">
      <div className="container-main grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src={LOGO_URL}
            alt="Peak Interactive Wellness"
            width={192}
            height={78}
            className="h-10 w-auto object-contain object-left"
            unoptimized
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            Modern, whole-person psychiatric care in Denver &amp; Greenwood Village—TMS, Spravato®,
            and personalized treatment for those ready for something more.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <address className="mt-3 space-y-3 text-sm not-italic text-white/75">
            <p>
              <a href={PHONE_HREF} className="transition-colors hover:text-mustard">
                {PHONE_NUMBER}
              </a>
            </p>
            {LOCATIONS.map((loc) => (
              <p key={loc.name}>
                <span className="block font-medium text-white/90">{loc.name}</span>
                {loc.address}
              </p>
            ))}
          </address>
        </div>

        <div>
          <p className="font-semibold text-white">Explore</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-white/75">
            <a href={`#${SERVICES_SECTION_ID}`} className="transition-colors hover:text-mustard">
              Services
            </a>
            <a href="#tms" className="transition-colors hover:text-mustard">
              TMS Therapy
            </a>
            <a href="#spravato" className="transition-colors hover:text-mustard">
              Spravato®
            </a>
            <a href={`#${CONDITIONS_SECTION_ID}`} className="transition-colors hover:text-mustard">
              Conditions
            </a>
            <a href="#providers" className="transition-colors hover:text-mustard">
              Providers
            </a>
            <a href="#faq" className="transition-colors hover:text-mustard">
              FAQ
            </a>
            <a href={`#${FORM_SECTION_ID}`} className="transition-colors hover:text-mustard">
              Find out if you Qualify
            </a>
            <Link
              href={WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-mustard"
            >
              Main Website
            </Link>
          </nav>
        </div>
      </div>

      <div className="container-main border-t border-white/15 pb-8 pt-8">
        <div className="max-w-4xl space-y-3 text-xs leading-relaxed text-white/60">
          <p className="font-semibold text-white/80">Important information</p>
          <p>
            This page is for educational purposes and does not replace medical advice. Treatment
            decisions should be made with a qualified clinician. TMS and Spravato® are available by
            prescription only and may not be appropriate for everyone. Individual results vary.
            Spravato® is a registered trademark of its owner.
          </p>
          <p className="font-medium text-mustard">
            If you are in danger or having thoughts of suicide, call or text 988, or dial 911.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-white/15 pt-5 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Peak Interactive Wellness. All rights reserved.</p>
          <p>TMS · Spravato® · Denver &amp; Greenwood Village, CO</p>
        </div>
      </div>
    </footer>
  );
}
