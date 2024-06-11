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

#### `NEXT`:

- This is a Next.js project bootstrapped with `create-next-app`. Next.js is a React framework for building server-side rendered (SSR) and statically generated web applications. It provides features like automatic code splitting, hot module replacement, and server-side rendering out of the box.

#### `react`:

- React is a JavaScript library for building user interfaces. It enables developers to create reusable UI components and manage the application's state efficiently.

#### `react-dom`:

- React DOM is a package that serves as the entry point to the DOM and server renderers for React. It provides DOM-specific methods that can be used to interact with the DOM during React component lifecycle.

#### `swiper`:

- A library for creating sliders and carousels in web applications. It provides smooth animations, touch gesture support for mobile devices, and many configuration options and customization possibilities.

#### `react-fast-marquee`:

- A lightweight and easy-to-use React component for creating marquee or scrolling text effects. It is optimized for smooth animations and high performance.

#### `react-hook-form`:

- A popular library for managing forms in React, using hooks to handle form state and validation. It provides a convenient and flexible way to work with forms.

#### `react-hook-form-persist`:

- A plugin for react-hook-form that allows persisting form state in the browser's local storage. This is useful for maintaining form state across page refreshes or sessions.

#### `react-scroll`:

- A library for adding smooth scrolling to web pages. It provides convenient methods for scrolling to specific elements or positions on the page with customizable animation parameters.

#### `clsx`:

- A tiny utility for conditionally joining CSS classNames together. It makes it easier to dynamically create strings of classes in React based on certain conditions or component state.

#### `@headlessui/react`:

- A UI component library for React, providing a set of ready-made and accessible components such as menus, modals, dropdowns, and more.

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

- #### component FormBlock

| Prop | Type | Description |
| --- | --- | --- |
| `className` | `string` | optional, the style can be passed to manage placing the component next to others in the section |

<hr>

- #### component CustomInput

| Prop | Type | Description |
| --- | --- | --- |
| `label` | `string` | optional, can pass text displaying for a label |
| `errorMessage` | `string` | optional, can pass text displaying for a error message |
| `className` | `string` | optional, styles can be passed for the component wrapper |
| `{...data}` | `string` | optional, any other attributes that are characteristic of the input (type, placeholder, etc) |

<hr>

- #### component CustomTextarea

| Prop | Type | Description |
| --- | --- | --- |
| `label` | `string` | optional, can pass text displaying for a label |
| `className` | `string` | optional, styles can be passed for the component wrapper |
| `{...data}` | `string` | optional, any other attributes that are characteristic of the textarea (placeholder, rows, cols, etc) |

<hr>

- #### component CustomCheckbox

| Prop | Type | Description |
| --- | --- | --- |
| `checked` | `boolean` | required, starting value for checked |
| `handleChange` | `function` | required, the function to control the value into state in the parent component |
| `className` | `string` | optional, styles can be passed for the component wrapper |
| `definition` | `string` | optional, text for the checkbox |
| `{...data}` | `string` | optional, any other attributes that are characteristic of the checkbox (checked, type, etc) |

<hr>

<h3 align="center">Footer</h3>

<div align="center"><img src="/public/images/readme/footer.webp" alt="footer images" width="800" align="center"></div>

- #### component Footer

| Prop | Type | Description |
| --- | --- | --- |
|  |  | The Footer includes links to the homepage (Logo) and the privacy policy page. Additionally, it contains links to the partners involved in the creation of this application |

Also include the use of components: [Logo](#component-logo)

<hr>

- #### component MovingLine

| Prop | Type | Description |
| --- | --- | --- |
|  |  | The MovingLine component utilizes the React Fast Marquee library - a lightweight and easy-to-use React component for creating smooth and performant marquee or scrolling text effects. A marquee is a horizontal scrolling animation, commonly used for displaying news tickers, announcements, or displaying a long piece of text in a limited space. |

Also include the use of components: [Section](#component-section), [Title](#component-title), [Slider](#component-slider), [SlideCardGeneration](#component-slidecardgeneration), [ButtonMain](#component-buttonmain)

<hr>

<h3 align="center">Policy</h3>

<div align="center"><img src="/public/images/readme/policy.webp" alt="policy images" width="800" align="center"></div>

| Prop | Type | Description |
| --- | --- | --- |
| `data` | `sanity` | A separate page. Header and Footer are common. Contains the title and text of the privacy policy. Data obtained from sanity admin. |

<hr>

- #### component PortableText

**The PortableText component** is part of the `@portabletext/react` library, which provides a convenient way to render structured portable text data in React. It accepts an array of portable text blocks or objects and renders them according to the specified components. It is designed for integration with content management systems that use the portable text format for structured data, allowing you to flexibly and conveniently render this content using React with full customization capabilities.

| Prop         | Type          | Description                                |
| ------------ | ------------- | ------------------------------------------ |
| `value`      | `string`      | required, Privacy Policy Title             |
| `components` | `JSX.Element` | required, an array of portable text blocks |

<hr>

- #### component CustomComponents

| Prop | Type | Description |
| --- | --- | --- |
|  |  | This code defines several custom React components for rendering different elements of structured portable text data. |
