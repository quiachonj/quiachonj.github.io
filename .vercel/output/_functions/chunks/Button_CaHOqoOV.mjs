import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, e as renderSlot, m as maybeRenderHead } from './astro/server_7mBX0aCo.mjs';
import 'kleur/colors';
import { c as cn } from './Icon_BsCJOhkV.mjs';
import './site.config_H-ENChsp.mjs';

const $$Astro = createAstro("https://dev.quiachonj.us");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { as: Tag = "a", class: className, title, href, style = "button", target, rel } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "inline-flex items-center gap-x-1 rounded-lg bg-accent-200/30 text-secondary-foreground border border-border px-2 py-1 text-sm transition-all hover:bg-input",
    !href && "cursor-default",
    style === "pill" && "rounded-md"
  ), "target": target, "rel": rel, "href": href, "data-astro-prefetch": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon-before"])} ${maybeRenderHead()}<p>${title}</p> ${renderSlot($$result2, $$slots["icon-after"])} ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/Button.astro", void 0);

export { $$Button as $ };
