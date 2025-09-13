import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, a as renderTemplate } from './astro/server_7mBX0aCo.mjs';
import 'clsx';
import { s as siteConfig } from './site.config_qp5nQVpy.mjs';

const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options);
function getFormattedDate(date, options) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(siteConfig.date.locale, {
      ...siteConfig.date.options,
      ...options
    });
  }
  return dateFormat.format(new Date(date));
}

const $$Astro = createAstro("https://astro-resume-01.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, dateTimeOptions, ...attrs } = Astro2.props;
  const postDate = getFormattedDate(date, dateTimeOptions);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}${spreadAttributes(attrs)}> ${postDate} </time>`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
