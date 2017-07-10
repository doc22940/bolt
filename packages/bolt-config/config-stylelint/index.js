module.exports = {
  plugins: [
    `stylelint-order`,
  ],
  rules: {
    'at-rule-empty-line-before': [`always`, {
      ignore: [`after-comment`, `blockless-after-blockless`, `inside-block`],
    }],
    'at-rule-name-case': `lower`,
    'at-rule-name-space-after': `always-single-line`,
    'at-rule-semicolon-newline-after': `always`,
    'block-closing-brace-newline-after': [`always`, {
      ignoreAtRules: [`if`, `else`],
    }],
    'block-closing-brace-newline-before': `always-multi-line`,
    'block-closing-brace-space-before': `always-single-line`,
    'block-no-empty': true,
    'block-opening-brace-newline-after': `always-multi-line`,
    'block-opening-brace-space-after': `always-single-line`,
    'block-opening-brace-space-before': `always`,
    'color-hex-case': `lower`,
    'color-hex-length': `short`,
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [`always`, {
      except: [`first-nested`],
      ignore: [`stylelint-commands`],
    }],
    'comment-whitespace-inside': `always`,
    'declaration-bang-space-after': `never`,
    'declaration-bang-space-before': `always`,
    'declaration-block-no-shorthand-property-overrides': true,
    'order/declaration-block-properties-specified-order': [
      `display`,
      `visibility`,
      `position`,
      `top`,
      `right`,
      `bottom`,
      `left`,
      `z-index`,
      `margin`,
      `margin-top`,
      `margin-right`,
      `margin-bottom`,
      `margin-left`,
      `padding`,
      `padding-top`,
      `padding-right`,
      `padding-bottom`,
      `padding-left`,
      `min-width`,
      `min-height`,
      `max-width`,
      `max-height`,
      `width`,
      `height`,
      `line-height`,
      `flex`,
      `flex-align`,
      `flex-basis`,
      `flex-direction`,
      `flex-flow`,
      `flex-grow`,
      `flex-order`,
      `flex-pack`,
      `flex-shrink`,
      `flex-wrap`,
      `justify-content`,
      `align-content`,
      `align-items`,
      `align-self`,
      `order`,
      `float`,
      `clear`,
      `overflow`,
      `overflow-x`,
      `overflow-y`,
      `clip`,
      `columns`,
      `column-span`,
      `column-width`,
      `column-count`,
      `column-fill`,
      `column-gap`,
      `column-rule`,
      `column-rule-width`,
      `column-rule-style`,
      `column-rule-color`,
      `box-sizing`,
      `border`,
      `border-spacing`,
      `border-collapse`,
      `border-width`,
      `border-style`,
      `border-color`,
      `border-top`,
      `border-top-width`,
      `border-top-style`,
      `border-top-color`,
      `border-right`,
      `border-right-width`,
      `border-right-style`,
      `border-right-color`,
      `border-bottom`,
      `border-bottom-width`,
      `border-bottom-style`,
      `border-bottom-color`,
      `border-left`,
      `border-left-width`,
      `border-left-style`,
      `border-left-color`,
      `border-radius`,
      `border-top-right-radius`,
      `border-top-left-radius`,
      `border-bottom-right-radius`,
      `border-bottom-left-radius`,
      `border-image`,
      `border-image-source`,
      `border-image-slice`,
      `border-image-width`,
      `border-image-outset`,
      `border-image-repeat`,
      `border-top-image`,
      `border-right-image`,
      `border-bottom-image`,
      `border-left-image`,
      `border-corner-image`,
      `border-top-right-image`,
      `border-top-left-image`,
      `border-bottom-right-image`,
      `border-bottom-left-image`,
      `outline`,
      `outline-width`,
      `outline-style`,
      `outline-color`,
      `outline-offset`,
      `background`,
      `background-color`,
      `background-image`,
      `background-attachment`,
      `background-position`,
      `background-position-x`,
      `background-position-y`,
      `background-clip`,
      `background-origin`,
      `background-size`,
      `background-repeat`,
      `box-decoration-break`,
      `box-shadow`,
      `color`,
      `table-layout`,
      `caption-side`,
      `empty-cells`,
      `list-style`,
      `list-style-position`,
      `list-style-type`,
      `list-style-image`,
      `quotes`,
      `content`,
      `counter-increment`,
      `counter-reset`,
      `vertical-align`,
      `text-align`,
      `text-align-last`,
      `text-decoration`,
      `text-emphasis`,
      `text-emphasis-position`,
      `text-emphasis-style`,
      `text-emphasis-color`,
      `text-indent`,
      `text-justify`,
      `text-outline`,
      `text-transform`,
      `text-wrap`,
      `text-overflow`,
      `text-overflow-ellipsis`,
      `text-overflow-mode`,
      `text-shadow`,
      `white-space`,
      `word-spacing`,
      `word-wrap`,
      `word-break`,
      `tab-size`,
      `hyphens`,
      `letter-spacing`,
      `font`,
      `font-weight`,
      `font-style`,
      `font-variant`,
      `font-size-adjust`,
      `font-stretch`,
      `font-size`,
      `font-family`,
      `src`,
      `opacity`,
      `filter`,
      `resize`,
      `cursor`,
      `nav-index`,
      `nav-up`,
      `nav-right`,
      `nav-down`,
      `nav-left`,
      `transition`,
      `transition-delay`,
      `transition-timing-function`,
      `transition-duration`,
      `transition-property`,
      `transform`,
      `transform-origin`,
      `animation`,
      `animation-name`,
      `animation-duration`,
      `animation-play-state`,
      `animation-timing-function`,
      `animation-delay`,
      `animation-iteration-count`,
      `animation-direction`,
      `pointer-events`,
      `unicode-bidi`,
      `direction`,
      `break-before`,
      `break-inside`,
      `break-after`,
      `page-break-before`,
      `page-break-inside`,
      `page-break-after`,
      `orphans`,
      `widows`,
      `zoom`,
      `max-zoom`,
      `min-zoom`,
      `user-zoom`,
      `orientation`,
    ],
    'declaration-block-semicolon-newline-after': `always-multi-line`,
    'declaration-block-semicolon-space-after': `always-single-line`,
    'declaration-block-semicolon-space-before': `never`,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': `always`,
    'declaration-colon-newline-after': `always-multi-line`,
    'declaration-colon-space-after': `always-single-line`,
    'declaration-colon-space-before': `never`,
    'font-weight-notation': `numeric`,
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': `always-multi-line`,
    'function-comma-space-after': `always-single-line`,
    'function-comma-space-before': `never`,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': `lower`,
    'function-parentheses-newline-inside': `always-multi-line`,
    'function-parentheses-space-inside': `never-single-line`,
    'function-url-quotes': `always`,
    'function-whitespace-after': `always`,
    indentation: 2,
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'max-nesting-depth': [1, {
      ignore: [`blockless-at-rules`],
      ignoreAtRules: [`media`],
    }],
    'media-feature-colon-space-after': `always`,
    'media-feature-colon-space-before': `never`,
    'media-feature-parentheses-space-inside': `never`,
    'media-feature-range-operator-space-after': `always`,
    'media-feature-range-operator-space-before': `always`,
    'media-query-list-comma-newline-after': `always-multi-line`,
    'media-query-list-comma-space-after': `always-single-line`,
    'media-query-list-comma-space-before': `never`,
    'no-descending-specificity': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': `always`,
    'number-no-trailing-zeros': true,
    'property-case': `lower`,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [`always-multi-line`, {
      except: [`first-nested`],
      ignore: [`after-comment`],
    }],
    'selector-attribute-brackets-space-inside': `never`,
    'selector-attribute-operator-space-after': `never`,
    'selector-attribute-operator-space-before': `never`,
    'selector-combinator-space-after': `always`,
    'selector-combinator-space-before': `always`,
    'selector-list-comma-newline-after': `always`,
    'selector-list-comma-space-before': `never`,
    'selector-max-empty-lines': 0,
    'selector-pseudo-class-case': `lower`,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': `never`,
    'selector-pseudo-element-case': `lower`,
    'selector-pseudo-element-colon-notation': `double`,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': `lower`,
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': null,
    'string-quotes': `single`,
    'unit-case': `lower`,
    'unit-no-unknown': true,
    'value-list-comma-newline-after': `always-multi-line`,
    'value-list-comma-space-after': `always-single-line`,
    'value-list-comma-space-before': `never`,
    'value-no-vendor-prefix': true,
  },
};
