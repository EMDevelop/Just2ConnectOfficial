import Link from "next/link";

import { CallLink } from "@/components/CallLink";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { business } from "@/content/business";

/**
 * Fixed bar shown below 768px only. Reserved space comes from the
 * `--callBarHeight` padding applied to `body` at the same breakpoint.
 */
export function MobileCallBar() {
  return (
    <div className="mobileCallBar">
      <CallLink
        source="mobile_call_bar"
        className="mobileCallBar__action mobileCallBar__action--call"
      >
        <PhoneIcon className="mobileCallBar__icon" />
        Call {business.phone.display}
      </CallLink>

      <Link
        href="/contact-us"
        className="mobileCallBar__action mobileCallBar__action--quote"
      >
        Get a quote
      </Link>
    </div>
  );
}
