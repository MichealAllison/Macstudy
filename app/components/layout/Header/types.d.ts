import { Route } from 'next'

export type NavLinkType = {
  title: string
  href: Route<string>
}
