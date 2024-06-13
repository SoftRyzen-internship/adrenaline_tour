- #### component DisclosureFaq

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `features` | yes | array | An array of objects representing data from `faq.json` |

- #### component DisclosureFaqItem

| Prop | Required | Type | Description |
| --- | --- | --- | --- | --- |
| `handleClick` | yes | () => void | Function called when the button is clicked to expand or collapse the answer. |
| `item` | yes | object | Object representing the question and answers from DisclosureFaq. |
| `panelOpenId` | yes | number | string | Identifier for the open panel. Used to determine if the current item is expanded. |

- #### component DisclosureFaqItemText

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `point` | yes | string | Text of the point |
| `item` | yes | object | Object representing the question and answers from DisclosureFaq. |
