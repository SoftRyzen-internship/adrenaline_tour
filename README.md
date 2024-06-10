<h1 align="center">ADRENALIN TOUR</h1>

<p align="center">Our business covers the entire cycle — from site selection and variety selection to processing and crop storage. We also provide services for the production of processed products, such as juice, wine, and raisins.</p>

<p align="center">Additionally, we offer grape tourism with tasting elements. Our company successfully operates in the Kharkiv region, Ukraine, and abroad, meeting the needs of our clients.</p>

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

#### `sanity`:

- A headless CMS (Content Management System) that provides a convenient way to structure and manage content. Sanity has a powerful content editing platform, a flexible API for fetching data, and the ability to easily integrate with various front-end frameworks like React.

#### `@sanity/client`:

- The official Sanity library for interacting with the Sanity API and fetching data from your Sanity content management platform. It provides a convenient and type-safe way to query and manipulate data.

#### `@sanity/vision`:

- A Sanity plugin that provides data structure visualization and allows you to preview content directly in the Sanity studio. This helps developers and content editors better understand and manage the data structure.

#### `@sanity/ui`:

- A UI component library for Sanity, providing a set of pre-styled components that make it easier to develop custom interfaces for editing content in Sanity.

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

#### `sharp`:

- A Node.js library for processing images on the server-side. It provides powerful tools for transforming, compressing, resizing, and manipulating images, which is useful for optimizing images before sending them to the client.

<h2 align="center">Components that the application consists of:</h2>

<h3 align="center">Header and Hero</h3>

<div align="center"><img src="/public/images/readme/header-hero.webp" alt="hero images" width="800" align="center"></div>

- #### component Logo

| Prop | Type | Description |
| --- | --- | --- |
| `theme` | `"white" or "green"` | Depending on the value, a company's logo of a certain size and color is rendered. |
| `size` | `"small" or "big"` | For example, for Footer: `<Logo theme='green' size='big' />`. By default theme === "white" size="small". |

<hr>

- #### component NavMenu

| Prop | Type | Description |
| --- | --- | --- |
| `onClick` | `() => void` | optional, add the function of closing the burger menu |
| `className` | `string` | optional, props for providing additional styles. |

<hr>

- #### component ButtonMain

**ButtonMain** - for Header & Burger menu & About Us section with name `Зв'язатись з нами`, for cards with name `Замовити` and for modal window with name `На головну`;

| Prop        | Type         | Description                                   |
| ----------- | ------------ | --------------------------------------------- | ------- | ------------------------------------------------- |
| `to`        | `string`     | anchor for react-scroll [name of the section] |
| `chapter`   | `string`     | one of the value `'header'                    | 'about' | 'card'`, depending on where the button is located |
| `className` | `string`     | the `string of styles` if it needed           |
| `children`  | `ReactNode`  | name of the button                            |
| `onClick`   | `() => void` | optional, function callback if it needed      |

<hr>

- #### component ButtonLess

**ButtonLess** - for Contact form with name `Надіслати заявку` and for Slider's and Video player's buttons with svg arrows icons;

| Prop | Type | Description |
| --- | --- | --- | --- | --- | --- | --- |
| `type` | `string` | one of the value `'button' | 'submit'`, depending on what type of button |
| `purpose` | `string` | one of the value `'form' | 'slider' | 'video' | 'burger' | 'modal'`, depending on where the button is used |
| `disabled` | `boolean` | optional, accept the value `true` or `false` for button disabled state |
| `aria` | `string` | optional, accept value of aria-label if it needed |
| `className` | `string` | optional, the `string of styles` if it needed |
| `children` | `ReactNode` | optional, name of the button or svg icon |
| `onClick` | `() => void` | optional, unction callback if it needed |

<hr>

- #### component BurgerMenu

| Prop | Type | Description |
| --- | --- | --- |
| `onClick` | `() => void` | required, add the function of closing the burger menu |

<hr>

- #### component Hero

| Prop | Type | Description |
| --- | --- | --- |
|  |  | Include background image with a torn effect, main title and text-description. |

<hr>

<h3 align="center">Our History</h3>

<div align="center"><img src="/public/images/readme/history.webp" alt="history images" width="800" align="center"></div>

- #### component AnimationContainer

**AnimationContainer** – a reusable component for animating certain components.

| Prop | Type | Description |
| --- | --- | --- |
| `className` | `string` | required, you need to pass the class `lg:[--x-hidden:-80px]` or `lg:[--x-hidden:80px]` depending on how you want to animate from left to right or right to left. Other classes can also be transferred. |
| `children` | `ReactNode` | required, components & JSX-markup |

<hr>

- #### component Section

**Section** - reusable component for all sections on the project, include adaptive container

| Prop | Type | Description |
| --- | --- | --- |
| `id` | `string` | required, for anchor links [name of the section] |
| `sectionStyles` | `string` | optional, string of styles for section if it needed |
| `containerStyles` | `string` | optional, string of styles for container if it needed |
| `children` | `ReactNode` | required, components & JSX-markup |
| `render` | `ReactNode` | optional, components & JSX-markup |

<hr>

- #### component Title

**Title** - reusable component for all titles on the project, includes h1 & h2 & h3

| Prop        | Type        | Description                             |
| ----------- | ----------- | --------------------------------------- | --------------------------------------------------------------------- |
| `chapter`   | `string`    | optional, 'hero'                        | 'chapter', for h1 & h3 accordingly, and for h2 this prop don't needed |
| `className` | `string`    | optional, string of styles if it needed |
| `children`  | `ReactNode` | required, title of the section          |

<hr>

- #### component HistoryFrame

| Prop | Type | Description |
| --- | --- | --- |
| `onClick` | `() => void` | required, includes a photo frame and a Play button to open a modal window with a video |

Also include the use of components: [ButtonLess](#component-buttonless)

<hr>

- #### component HistoryContent

| Prop | Type | Description |
| --- | --- | --- |
|  |  | includes a title and a brief description of the services offered by the business |

Also include the use of components: [ButtonMain](#component-buttonmain)

<hr>

- #### component HistoryVideo

| Prop | Type | Description |
| --- | --- | --- |
| `onClick` | `() => void` | includes a modal window component in which the children transmits an iframe video with the history of the establishment of the business |

<hr>

- #### component Modal

1. Create state for control showing modal `const [modalOpen, setModalOpen] = useState<boolean>(false);`
2. The application example - `<Modal>...</Modal>`

##### Importantly

- for control sizes for Modal - transfer sizes into your component
- to increase padding internal Modal - transfer your padding minus the default ones with your component:

| Screen | Top  | Right | Bottom | Left |
| ------ | ---- | ----- | ------ | ---- |
| `mob`  | 16px | 16px  | 32px   | 16px |
| `tab`  | 24px | 24px  | 32px   | 24px |
| `desk` | 24px | 24px  | 32px   | 24px |

| Prop | Type | Description |
| --- | --- | --- |
| `show` | `boolean` | required, give created state `show={modalOpen}` |
| `onClose` | `() => void` | required, callback with false for your components state `onClose={() => setModalOpen(false)}` |
| `whiteBg` | `string` | optional, for white modal`s background` |
| `title` | `string` | optional, text for the Title Modal |
| `errorMessage` | `boolean` | optional, for title text color |
| `children` | `ReactNode` | required, your component for showing in Modal |

<hr>

<h3 align="center">Our Services</h3>

<div align="center"><img src="/public/images/readme/services.webp" alt="services images" width="800" align="center"></div>

- #### component Slider

**Slider** - component is implemented using Swiper, an open-source, free JavaScript library for creating touch-enabled sliders with hardware-accelerated transitions and modern touch interaction on mobile devices, as well as modern slide-shows and animated carousels. It is widely used for building websites and web applications, including mobile ones. You need to write to use: `'use client'` and `import { SwiperSlide } from 'swiper/react'`. The data is obtained from the sanity admin.

| Prop | Type | Description |
| --- | --- | --- |
| `prevEl` | `special value` | required, "servicesBtnBack" or "productsBtnBack" or "reviewsBtnBack", sets the css class for the prevEl button |
| `nextEl` | `special value` | required, "servicesBtnNext" or "productsBtnNext" or "reviewsBtnNext", sets the css class for the nextEl button |
| `loop` | `boolean` | optional, sets the slider type. By default loop = false |
| `desktopSpaceBetween` | `number` | optional, sets the distance between slides on the desktop. By default desktopSpaceBetween = 174 |
| `children` | `ReactNode` | required, list of slides |
| `btnConteinerStyle` | `string` | optional, sets an additional css class for the button container |

<hr>

- #### component SlideCardGeneration

The component is designed to create a product, service card, etc.

| Prop | Type | Description |
| --- | --- | --- |
| `title` | `string` | required, sets the title |
| `src` | `string` | required, sets the src of image |
| `alt` | `string` | required, sets the alt of image |
| `description` | `string` | optional, sets the description a product, service, etc. |
| `children` | `ReactNode` | required, list of slides |
| `slide` | `special value` | required, "service" or "product", sets the css styles for card |

Also include the use of components: [Section](#component-section), [Title](#component-title)

<hr>

- #### component MovingLine

| Prop | Type | Description |
| --- | --- | --- |
|  |  | The MovingLine component utilizes the React Fast Marquee library - a lightweight and easy-to-use React component for creating smooth and performant marquee or scrolling text effects. A marquee is a horizontal scrolling animation, commonly used for displaying news tickers, announcements, or displaying a long piece of text in a limited space. |

Also include the use of components: [Section](#component-section), [Title](#component-title), [Slider](#component-slider), [SlideCardGeneration](#component-slidecardgeneration), [ButtonMain](#component-buttonmain)

<hr>

<h3 align="center">Advantages</h3>

<div align="center"><img src="/public/images/readme/advantages.webp" alt="advantages images" width="800" align="center"></div>

- #### component AdvantagesCard

| Prop | Type | Description |
| --- | --- | --- |
|  |  | The "Advantages" component is a part of a web application and is designed to display the benefits or features of a product and service. It provides users with a convenient way to learn about the key advantages offered by the company. |

<hr>

<h3 align="center">Our Goods</h3>

<div align="center"><img src="/public/images/readme/product.webp" alt="product images" width="800" align="center"></div>

- #### component ProductsSlides

| Prop | Type | Description |
| --- | --- | --- |
| `data` | `sanity` | Contains a title and slider with product card. Navigates with arrows and swipe gestures. The slider is infinite. The data is obtained from the sanity admin |

<hr>

<h3 align="center">Reviews</h3>

<div align="center"><img src="/public/images/readme/review.webp" alt="review images" width="800" align="center"></div>

- #### component ReviewsSlider

| Prop | Type | Description |
| --- | --- | --- |
| `data` | `sanity` | Contains a title and slider with product card. Navigates with arrows and swipe gestures. The slider is infinite. The data is obtained from the sanity admin |

Also include the use of components: [Section](#component-section), [Title](#component-title), [Slider](#component-slider), [ButtonMain](#component-buttonmain)

<hr>

- #### component SlideCardReviews

**The SlideCardReviews component** is designed to display a review card with the review text. If the text overflows the designated area, a "Read More" button appears. When clicked, this button opens a modal displaying the full review text.

**Features:**

- Displays a review card with text.
- Shows a "Read More" button if the text overflows.
- Opens a modal with the full review text when "Read More" is clicked.

| Prop | Type | Description |
| --- | --- | --- |
| `text` | `string` | required, the author's comment is transmitted by props |
| `author` | `string` | required, the full name of the author is transferred to the props |

Also include the use of components: [Modal](#component-modal)

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
