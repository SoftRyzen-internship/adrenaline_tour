The application example - `<CustomCheckbox />`

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `pages` | yes | string[] | pages array where the component has to reflect certain data; and not specified pages have to reflect other data |
| `component` | yes | React.ElementType | component to render with different props or/and children |
| `trueProps` | not | object | object with props must be rendered on specified pages for the component |
| `alternativeProps` | not | object | object with props must be rendered on not specified pages for the component |
| `trueContent` | not | React.ReactNode | what must be rendered on specified pages into the component |
| `alternativeContent` | not | React.ReactNode | what must be rendered on not specified pages into the component |
| `className` | not | string | styles can be passed for the component style |
