import { AnchorHTMLAttributes } from 'react'

import { TextProps } from 'components/Text'

export interface LinkProps
  extends TextProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean
}
