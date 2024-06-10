## The application example - `<DropdownList />`

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `children` | yes | ReactNode | The component <CustomSelect /> for rendering into the wrapper |
| `className` | not | string | The component wrapper can styled using this prop |

## The application example - `<CustomSelect />`

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `data` | yes | ReactNode | The data for Select options () |
| `selectedItem` | yes | The started value for Select. It`s using value from your initial State (when defining the state, pass the initial value for the option list into Select) |
| `onChange` | yes | function | The set function from your definite State |
| `className` | not | string | styles can be passed for the Select wrapper |

#### The remark

If you want an extra item in data for a definite start value, You'll use `createDataSelectOptions(data, defaultValue)`. It's helped function with two required arguments.
