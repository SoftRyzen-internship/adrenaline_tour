- #### component ToursGrid

| Prop | Type | Description |
| --- | --- | --- |
| `isLoading` | `boolean` | Sets the loading state. |
| `tours` | `ITours[]` | An array of tours for rendering. |
| `totalPages` | `number` | The number of tour pages on the server. |
| `quantityPerPage` | `number` | The number of tours returned by the request. |
| `loadMore` | `() => void` | The function that is called when the "More" button is clicked. |
| `resetVisibleTours` | `() => void` | The function that is called when the "Less" button is clicked. |

<hr>

