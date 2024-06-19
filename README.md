<h1 align="center">ADRENALIN TOUR</h1>

<p align="center">Discover the thrill of adventure with ADRENALIN TOUR! Experience the rush as we scale mountain peaks, navigate pristine rivers, and unravel the mysteries of ancient cities.</p>

<p align="center">Immerse yourself in our unforgettable adventure routes, curated to include visits to captivating destinations and thrilling experiences tailored for the adventurous traveler. Let us be your guide as you explore new horizons and embrace the excitement of the unknown.</p>

The "Adrenalin Tour" website was developed according to the design. You can view the design at the following link. [Link to the design](<https://www.figma.com/design/SiSQIfp61anqvulVVihX6o/Adrenaline-Tour!-(Copy)?t=kmjzMl34CFh85CQm-0>)

<hr>

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/SoftRyzen-internship/adrenaline_tour`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

#### `react`:

- React is a JavaScript library for building user interfaces. It enables developers to create reusable UI components and manage the application's state efficiently.

#### `NEXT.js`:

- This is a Next.js project bootstrapped with `create-next-app`. Next.js is a React framework for building server-side rendered (SSR) and statically generated web applications. It provides features like automatic code splitting, hot module replacement, and server-side rendering out of the box.

#### `TypeScript`:

- TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

#### `Tailwindcss`:

- Tailwind CSS is a utility-first CSS framework that works exceptionally well with Next.js.

#### `graphql`:

- GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

#### `react-hook-form`:

- A popular library for managing forms in React, using hooks to handle form state and validation. It provides a convenient and flexible way to work with forms.

#### `@headlessui/react`:

- A UI component library for React, providing a set of ready-made and accessible components such as menus, modals, dropdowns, and more.

#### `Swiper`:

- A library for creating sliders and carousels in web applications. It provides smooth animations, touch gesture support for mobile devices, and many configuration options and customization possibilities.

#### `Framer Motion`:

- Framer Motion is an animation library. Framer Motion is an open source, production-ready library that’s designed for all creative developers.

<h2 align="center">Components that the application consists of:</h2>

<h3 align="center">Header and Hero</h3>

<div align="center"><img src="/public/images/readme/hero-main.webp" alt="hero images" width="800" align="center"></div>

- #### component Logo

| Prop | Type | Description |
| --- | --- | --- |
| `textWhite?` | `boolean` | Depending on the value, a company's logo of a certain color of text is rendered. |
| `width?` | `number` | sets the width of the logo |
| `height?` | `number` | sets the height of the logo |
| `toScroll?` | `boolean` | optional, sets scroll or not after click |
| `onClick?` | `() => void` | optional, adds the scroll to section Hero |
| `className?` | `string` | optional, adds the styles |

<hr>

- #### component NavMenu

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `buttonStyle` | yes | string | 'navLink' for NavBar, "footer" for footer links |
| `onCloseMenu` | not | function | The function to control the value into the state in the parent component (needed for close Burger-menu) |
| `className` | not | string | optional, the style can be passed to manage placing the component next to others in the section |

<hr>

- #### component Button

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `children` | yes | ReactNode | required, label of the button |
| `variant` | yes | string | required, 'main', 'secondary' - see UiKIt (Buttons), 'readMore-main', 'readMore-secondary' - see the layout |
| `icon` | not | ReactNode | optional, your icon (example <YourIcon/>) |
| `iconPosition` | not | string | optional, 'before' or 'after' - position of your icon |
| `onClick` | not | () => void | optional, function callback if it needed |
| `className` | not | string | optional, the string of styles if it needed |

<hr>

- #### component Modal

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `children` | yes | ReactNode | ==content of the modal window with own styles |
| `isOpen` | yes | boolean | current state of modal |
| `close` | yes | () => void | add the function for closeModal |
| `variant` | yes | string | "burger" - for burgerMenu, "simple" - for other modals |
| `className` | not | string | the string of styles if it needed |

<hr>

- #### section Hero

Contains background (Slider with auto scrolling), title, description.

<hr>

<h3 align="center">Upcoming tours</h3>

<div align="center"><img src="/public/images/readme/upcoming-tours.webp" alt="history images" width="800" align="center"></div>

- #### component TourCard

| Prop   | Required | Type   | Description          |
| ------ | -------- | ------ | -------------------- |
| `data` | yes      | object | received from strapi |

<hr>

- #### component Slider

**Slider** - component is implemented using Swiper, an open-source, free JavaScript library for creating touch-enabled sliders with hardware-accelerated transitions and modern touch interaction on mobile devices, as well as modern slide-shows and animated carousels. It is widely used for building websites and web applications, including mobile ones. You need to write to use: `'use client'` and `import { SwiperSlide } from 'swiper/react'`. The data is obtained from the sanity admin.

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `slides` | yes | [ id: number or string; |  |
|  |  | content: ReactNode;] |  |
| `section` | yes | string | 'upcomingTours' or 'reviews' or 'worthVisiting' |
|  |  |  | 'upcomingTours' suitable for правила безпеки |
| `className` | not | string | styles can be passed for the component wrapper |

<hr>

<h3 align="center">Welcome section</h3>

<div align="center"><img src="/public/images/readme/welcome-section.webp" alt="services images" width="800" align="center"></div>

- #### Welcome section

Contains background, title, description, Button component.

<hr>

<h3 align="center">Our activities</h3>

<div align="center"><img src="/public/images/readme/our-activities.webp" alt="advantages images" width="800" align="center"></div>

- #### section Our Activities

Contains the title, activity cards and the "View all activities" button, which will take you to the Our Tours page.

<hr>

<h3 align="center">Gallery</h3>

<div align="center"><img src="/public/images/readme/gallery.webp" alt="product images" width="800" align="center"></div>

- #### section Gallery

Contains the title and Slider component.

<hr>

<h3 align="center">Reviews</h3>

<div align="center"><img src="/public/images/readme/review.webp" alt="review images" width="800" align="center"></div>

- #### component Slider

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `slides` | yes | [ id: number or string; |  |
|  |  | content: ReactNode;] |  |
| `section` | yes | string | 'upcomingTours' or 'reviews' or 'worthVisiting' |
|  |  |  | 'upcomingTours' suitable for правила безпеки |
| `className` | not | string | styles can be passed for the component wrapper |

<hr>

- #### component BtnSlider

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `section` | yes | string | 'upcomingTours' or 'reviews' or 'worthVisiting' or 'gallery' |
| `isNextSlide` | not | boolean |  |
|  |  |  |  |
| `isPrevSlide` | not | boolean |

<hr>

- #### component SlideCardReviews

**The SlideCardReviews component** is designed to display a review card with the review text. If the text overflows the designated area, a "Read More" button appears. When clicked, this button opens a modal displaying the full review text.

**Features:**

- Displays a review card with text.
- Shows a "Read More" button if the text overflows.
- Opens a modal with the full review text when "Read More" is clicked.

Also include the use of components: [Modal](#component-modal)

<hr>

<h3 align="center">FAQ</h3>

<div align="center"><img src="/public/images/readme/faq.webp" alt="contacts images" width="800" align="center"></div>

- #### section Gallery

Contains the title and Accordion component.

<hr>

<h3 align="center">Contacts & Form</h3>

<div align="center"><img src="/public/images/readme/contacts.webp" alt="contacts images" width="800" align="center"></div>

**Contacts** includes the address semantic tag, which indicates the location of the business and the contact phone number (link)

**FormBlock** includes a form assembly that includes custom inputs, textareas, and checkboxes

**The remark:** To apply with React-Hook-Form using the library's component - <Controller />

- #### component FormInput

| Prop          | Required | Type   | Description                     |
| ------------- | -------- | ------ | ------------------------------- |
| `placeholder` | yes      | string | required, text for placeholder  |
| `type`        | yes      | string | required, input type            |
| `name`        | yes      | string | required, for using in the form |
| `label`       | yes      | string | required                        |

<hr>

- #### component FormTextarea

| Prop          | Required | Type   | Description                     |
| ------------- | -------- | ------ | ------------------------------- |
| `placeholder` | yes      | string | required, text for placeholder  |
| `name`        | yes      | string | required, for using in the form |
| `label`       | yes      | string | required                        |

<hr>

- #### component Checkbox

| Prop    | Required | Type   | Description                     |
| ------- | -------- | ------ | ------------------------------- |
| `name`  | yes      | string | required, for using in the form |
| `label` | yes      | string | required                        |

<hr>

<h3 align="center">Footer</h3>

<div align="center"><img src="/public/images/readme/footer.webp" alt="footer images" width="800" align="center"></div>

- #### component Logo

| Prop | Type | Description |
| --- | --- | --- |
| `textWhite?` | `boolean` | Depending on the value, a company's logo of a certain color of text is rendered. |
| `width?` | `number` | sets the width of the logo |
| `height?` | `number` | sets the height of the logo |
| `toScroll?` | `boolean` | optional, sets scroll or not after click |
| `onClick?` | `() => void` | optional, adds the scroll to section Hero |
| `className?` | `string` | optional, adds the styles |

<hr>

- #### component MovingLine

The MovingLine component utilizes the React Fast Marquee library - a lightweight and easy-to-use React component for creating smooth and performant marquee or scrolling text effects. A marquee is a horizontal scrolling animation, commonly used for displaying news tickers, announcements, or displaying a long piece of text in a limited space. |

<hr>

- #### component Social

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `variant` | yes | string | 'header' or 'footer' |
| `className` | not | string | styles can be passed for the component wrapper |

<hr>

- #### component Phones

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `variant` | yes | string | 'contacts' or 'footer' |
| `className` | not | string | styles can be passed for the component wrapper |

<hr>

<h3 align="center">Our Destinations Page</h3>

<div align="center"><img src="/public/images/readme/destinations-page.webp" alt="policy images" width="800" align="center"></div>

In Single page , parallel routing is implemented to allow simultaneous display of various components, providing users with flexibility and ease of navigation.

## Layout

The main Layout accepts several props and passes data to various child components. Layout is used to organize the page structure and manage the display of different sections.

## Props

The Layout accepts the following props:

| Prop       | Required | Type            |
| ---------- | -------- | --------------- |
| `img`      | not      | React.ReactNode |
| `mainInfo` | not      | React.ReactNode |
| `plans`    | not      | React.ReactNode |
| `rent`     | not      | React.ReactNode |
| `services` | not      | React.ReactNode |
| `details`  | not      | React.ReactNode |
| `gallery`  | not      | React.ReactNode |

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

<hr>

#### component AnimationContainer

AnimationContainer – a reusable component for animating certain components.

| Prop | Type | Description |
| --- | --- | --- |
| className | string | required, you need to pass the class lg:[--x-hidden:-80px] or lg:[--x-hidden:80px] depending on how you want to animate from left to right or right to left. Other classes can also be transferred. |
| children | ReactNode | required, components & JSX-markup |

<hr>

<h3 align="center">Calendar</h3>

<div align="center"><img src="/public/images/readme/calendar.webp" alt="calendar page" width="800" align="center"></div>

A separate page. Data obtained from strapi admin. Also include Contact form component.

- #### component MonthSlider

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `currentMonth` | yes | Date | The current month displayed in the slider. |
| `onMonthChange` | yes | func | Function called when the month changes. Takes a new date as an argument. |

<hr>

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

### For instance

```
const activitiesData = createDataSelectOptions(activitiesDataTemporary.data, 'Всі активності');
const countriesData = createDataSelectOptions(countriesDataTemporary.data, Всі країни');

const [selectedActivitiesItem, setSelectedActivitiesItem] = useState<ISelectState>(activitiesData.at(-1) as ISelectState);
const [selectedCountryItem, setSelectedCountryItem] = useState<ISelectState>(countriesData.at(-1) as ISelectState,);

<DropdownList>
   <CustomSelect
    data={activitiesData}
    selectedItem={selectedActivitiesItem}
    onChange={setSelectedActivitiesItem}
  />
  <CustomSelect
    data={countriesData}
    selectedItem={selectedCountryItem}
    onChange={setSelectedCountryItem}
  />
</DropdownList>

```

<hr>

<h3 align="center">Policy</h3>

<div align="center"><img src="/public/images/readme/policy.webp" alt="policy images" width="800" align="center"></div>

A separate page. Data obtained from strapi admin. Using showdown library for parsing text.

<hr>
