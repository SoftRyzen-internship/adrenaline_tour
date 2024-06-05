| Prop        | Required | Type       | Description                                            |
| ----------- | -------- | ---------- | ------------------------------------------------------ |
| `children`  | yes      | ReactNode  | ==content of the modal window with own styles          |
| `isOpen`    | yes      | boolean    | current state of modal                                 |
| `close`     | yes      | () => void | add the function for closeModal                        |
| `variant`   | yes      | string     | "burger" - for burgerMenu, "simple" - for other modals |
| `className` | not      | string     | the string of styles if it needed                      |
