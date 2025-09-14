import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_7mBX0aCo.mjs';
import 'kleur/colors';
import { $ as $$Button } from '../chunks/Button_CaHOqoOV.mjs';
import { $ as $$BaseBlog } from '../chunks/BaseBlog_01fH5pna.mjs';
import 'clsx';
import { g as getAllPosts, b as getUniqueTagsWithCount } from '../chunks/post_smEqDIP1.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  const allTags = getUniqueTagsWithCount(allPosts);
  const meta = {
    description: "A list of all the tags I've written about in my posts",
    title: "All Tags"
  };
  return renderTemplate`${renderComponent($$result, "BaseBlog", $$BaseBlog, { "meta": meta }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/blog", "style": "button" }, { "icon-before": async ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"> <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z"></path> </svg>` })} <h1 class="mb-6 mt-5 text-2xl font-bold">Tags</h1> ${allTags.length === 0 && renderTemplate`<p>No posts yet.</p>`} ${allTags.length > 0 && renderTemplate`<ul class="flex flex-col gap-y-3"> ${allTags.map(([tag, val]) => renderTemplate`<li class="flex items-center gap-x-2"> ${renderComponent($$result2, "Button", $$Button, { "title": `#${tag}`, "href": `/tags/${tag}/`, "style": "button" })} <span class="inline-block">
- ${val} post${val > 1 && "s"} </span> </li>`)} </ul>`} </div> ` })}`;
}, "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/jusoa/Documents/github/dev.quiachonj.us/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
