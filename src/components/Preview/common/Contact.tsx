import { type JSXElement, Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import Github from "~/icons/GithubIcon";
import Website from "~/icons/GlobeIcon";
import Default from "~/icons/LinkIcon";
import Linkedin from "~/icons/LinkedinIcon";
import Location from "~/icons/LocationIcon";
import Mail from "~/icons/MailIcon";
import Phone from "~/icons/PhoneIcon";
import type { SocialIcon } from "~/types.d.ts";

const SOCIAL_ICONS: SocialIcon = {
  Github,
  Linkedin,
  Mail,
  Location,
  Phone,
  Website,
  Default,
};

type SOCIAL =
  | "Github"
  | "Linkedin"
  | "Mail"
  | "Location"
  | "Phone"
  | "Website"
  | "Default";

interface Props {
  icon: SOCIAL;
  children: JSXElement;
  url?: string;
}

export default function Contact(props: Props) {
  const ICON_SIZE = 20;

  return (
    <span class="text-sm flex gap-1">
      <Dynamic component={SOCIAL_ICONS[props.icon]} size={ICON_SIZE} />
      <Show when={props.url} fallback={props.children}>
        <a href={props.url} target="_blank" rel="noreferrer">
          {props.children}
        </a>
      </Show>
    </span>
  );
}
