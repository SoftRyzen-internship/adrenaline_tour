| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `children` | yes | ReactNode | required, label of the button |
| `href` | yes | string | required, string path to page or name of id section for scroll, examples 'pageName' or '#sectionId' |
| `variant` | yes | string | required, 'main', 'secondary' - see UiKIt (Buttons), 'navLink' for NavBar (desktop, mobile), "footer" for footer links; disclosure - for disclosure nav |
| `toScroll` | not | boolean | true if you need to use react-scroll |
| `to` | not | string | optional, anchor for react-scroll [id or name of the section] |
| `icon` | not | ReactNode | optional, your icon (example <YourIcon/>) |
| `iconPosition` | not | string | optional, 'before' or 'after' - position of your icon |
| `onClick` | not | () => void | optional, function callback if it needed |
| `className` | not | string | optional, the string of styles if it needed |
