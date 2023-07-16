import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const Joke = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="${escape(base, true) + "/"}" class="api-button footer-button">Back</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-fd6qkf_START -->${$$result.title = `<title>Comic</title>`, ""}<meta name="author" content="Nickolaus Petukhov"><meta name="description" content="Here you can see the joke"><!-- HEAD_svelte-fd6qkf_END -->`, ""} <div class="assignment"><h4 class="assignment-title" data-svelte-h="svelte-1t713b1">Third Assignment</h4> <div class="aligning-button enigma-link"><p class="id">${escape(data.joke.titleElement)}</p> <img${add_attribute("src", data.joke.imgSrc, 0)}${add_attribute("alt", data.joke.imgAlt, 0)}> <p>${escape(data.joke.dateElement)}</p> <p>${escape(data.joke.releasedElement)}</p> ${validate_component(Joke, "Joke").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
