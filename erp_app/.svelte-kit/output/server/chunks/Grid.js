import { c as create_ssr_component, f as compute_rest_props, o as onDestroy, h as spread, i as escape_object, j as escape_attribute_value } from "./ssr.js";
import { w as writable } from "./index.js";
const columnsStore = writable(12);
const Grid_svelte_svelte_type_style_lang = "";
const css = {
  code: ".containerSGR.svelte-zbu7j0{box-sizing:border-box;display:flex;flex-wrap:wrap;width:calc(100% + (var(--paddingSGR) * 2));margin:var(--marginSGR)}.colSGR.svelte-zbu7j0{position:relative;box-sizing:border-box;flex-grow:var(--colFlexSGR);padding:var(--paddingSGR);order:var(--orderSGR)}.colSGR-offset-xs.svelte-zbu7j0{margin-left:var(--xsOffset)}.col-xs.svelte-zbu7j0{flex-basis:var(--xsWidthSGR);max-width:var(--xsWidthSGR)}@media(min-width: 576px){.col-sm.svelte-zbu7j0{flex-basis:var(--smWidthSGR);max-width:var(--smWidthSGR)}.colSGR-offset-sm.svelte-zbu7j0{margin-left:var(--smOffset)}}@media(min-width: 768px){.col-md.svelte-zbu7j0{flex-basis:var(--mdWidthSGR);max-width:var(--mdWidthSGR)}.colSGR-offset-md.svelte-zbu7j0{margin-left:var(--mdOffset)}}@media(min-width: 992px){.col-lg.svelte-zbu7j0{flex-basis:var(--lgWidthSGR);max-width:var(--lgWidthSGR)}.colSGR-offset-lg.svelte-zbu7j0{margin-left:var(--lgOffset)}}@media(min-width: 1200px){.col-xl.svelte-zbu7j0{max-width:var(--xlWidthSGR)}.colSGR-offset-xl.svelte-zbu7j0{margin-left:var(--xlOffset)}}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "container",
    "columns",
    "gutter",
    "order",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xsOffset",
    "smOffset",
    "mdOffset",
    "lgOffset",
    "xlOffset"
  ]);
  let { container = false } = $$props;
  let { columns = 12 } = $$props;
  let { gutter = null } = $$props;
  let { order = null } = $$props;
  let { xs = null } = $$props;
  let { sm = null } = $$props;
  let { md = null } = $$props;
  let { lg = null } = $$props;
  let { xl = null } = $$props;
  let { xsOffset = null } = $$props;
  let { smOffset = null } = $$props;
  let { mdOffset = null } = $$props;
  let { lgOffset = null } = $$props;
  let { xlOffset = null } = $$props;
  let classGeneral = "";
  let styleGeneral = "";
  let localColumns;
  const unsubscribe = columnsStore.subscribe((value) => localColumns = value);
  const getValue = (breakpoint) => {
    if (breakpoint > localColumns) {
      breakpoint = localColumns;
    }
    return breakpoint ? `${breakpoint / localColumns * 100}%` : false;
  };
  const createClassSize = () => {
    let newClass = "col-xs ";
    newClass += sm ? "col-sm " : "";
    newClass += md ? "col-md " : "";
    newClass += lg ? "col-lg " : "";
    newClass += xl ? "col-xl " : "";
    newClass += xsOffset ? "colSGR-offset-xs " : "";
    newClass += smOffset ? "colSGR-offset-sm " : "";
    newClass += mdOffset ? "colSGR-offset-md " : "";
    newClass += lgOffset ? "colSGR-offset-lg " : "";
    newClass += xlOffset ? "colSGR-offset-xl " : "";
    return newClass;
  };
  const createStyleSize = () => {
    let newStyle = "";
    newStyle += xs ? `--xsWidthSGR:${getValue(xs)}; ` : `--xsWidthSGR:100%; `;
    newStyle += sm ? `--smWidthSGR:${getValue(sm)}; ` : "";
    newStyle += md ? `--mdWidthSGR:${getValue(md)}; ` : "";
    newStyle += lg ? `--lgWidthSGR:${getValue(lg)}; ` : "";
    newStyle += xl ? `--xlWidthSGR:${getValue(xl)}; ` : "";
    newStyle += xsOffset ? `--xsOffset:${getValue(xsOffset)}; ` : "";
    newStyle += smOffset ? `--smOffset:${getValue(smOffset)}; ` : "";
    newStyle += mdOffset ? `--mdOffset:${getValue(mdOffset)}; ` : "";
    newStyle += lgOffset ? `--lgOffset:${getValue(lgOffset)}; ` : "";
    newStyle += xlOffset ? `--xlOffset:${getValue(xlOffset)}; ` : "";
    return newStyle;
  };
  const createGutter = () => {
    return gutter ? `--paddingSGR:${gutter / 2}px;--marginSGR:-${gutter / 2}px;` : "--paddingSGR:0px;--marginSGR:0px;";
  };
  onDestroy(() => unsubscribe());
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0)
    $$bindings.gutter(gutter);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  if ($$props.xs === void 0 && $$bindings.xs && xs !== void 0)
    $$bindings.xs(xs);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xl === void 0 && $$bindings.xl && xl !== void 0)
    $$bindings.xl(xl);
  if ($$props.xsOffset === void 0 && $$bindings.xsOffset && xsOffset !== void 0)
    $$bindings.xsOffset(xsOffset);
  if ($$props.smOffset === void 0 && $$bindings.smOffset && smOffset !== void 0)
    $$bindings.smOffset(smOffset);
  if ($$props.mdOffset === void 0 && $$bindings.mdOffset && mdOffset !== void 0)
    $$bindings.mdOffset(mdOffset);
  if ($$props.lgOffset === void 0 && $$bindings.lgOffset && lgOffset !== void 0)
    $$bindings.lgOffset(lgOffset);
  if ($$props.xlOffset === void 0 && $$bindings.xlOffset && xlOffset !== void 0)
    $$bindings.xlOffset(xlOffset);
  $$result.css.add(css);
  {
    {
      classGeneral = container ? "containerSGR" : `colSGR ${createClassSize()}`;
      if (container) {
        styleGeneral = createGutter();
        columnsStore.update(() => columns || 12);
      } else {
        styleGeneral = createStyleSize();
        if (xs || sm || md || lg || xl) {
          styleGeneral += `--colFlexSGR:0;`;
        } else {
          styleGeneral = `--colFlexSGR:1;`;
        }
        if (order || order === 0) {
          styleGeneral += `--orderSGR:${order};`;
        }
      }
      if ($$restProps.style) {
        styleGeneral += $$restProps.style;
      }
      if ($$restProps.class) {
        classGeneral += ` ${$$restProps.class}`;
      }
    }
  }
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        style: escape_attribute_value(styleGeneral)
      },
      {
        class: escape_attribute_value(classGeneral)
      }
    ],
    { classes: "svelte-zbu7j0" }
  )}>${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Grid as G
};
