In Single page , parallel routing is implemented to allow simultaneous display of various components, providing users with flexibility and ease of navigation.

## Layout 
The main Layout accepts several props and passes data to various child components. Layout is used to organize the page structure and manage the display of different sections.

## Props
The Layout  accepts the following props:

| Prop | Required | Type |
| ---  | ---      | ---  |
| `img` | not | React.ReactNode |
| `mainInfo` | not | React.ReactNode |
| `plans` | not | React.ReactNode |
| `rent` | not | React.ReactNode |
| `services` | not | React.ReactNode |
| `details` | not | React.ReactNode |
| `gallery` | not | React.ReactNode |


## Props Description

- img: Component for displaying an image.
- mainInfo: Component for displaying main information.
- plans: Component for displaying plans.
- rent: Component for displaying rental information.
- services: Component for displaying a list of services.
- details: Component for displaying additional details.
- gallery: Component for displaying an image gallery.

Each component described above accepts Prop:

| Prop   | Required | Type   | Description          |
| ------ | -------- | ------ | -------------------- |
| `data` | yes      | object | received from strapi |


## Parallel Routing
Parallel routing allows components to operate independently of each other, enhancing the user experience. Each of the components listed above can be loaded and displayed simultaneously without blocking the loading of other components.

This is particularly useful when working with large amounts of data, ensuring fast and smooth page navigation.


