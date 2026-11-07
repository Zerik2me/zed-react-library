function template({imports, interfaces, componentName, props, jsx, exports}, {tpl}) {
  return tpl`
    ${imports}
    import type { IconProps } from "../types";
    ${interfaces}

    const ${componentName} = ({size = "1em", color = "currentColor", ...props }: IconProps, ref: Ref<SVGSVGElement> ) => ${jsx};

    ${exports}
    `
}

module.exports = template