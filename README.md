# 🌍 Travello

**Travello** is a modern, responsive travel discovery and AI itinerary-planning web application built with **React, Vite, Tailwind CSS, and Groq**.

It combines destination discovery with an interactive AI travel planner, allowing users to explore destinations by mood and generate personalized trip ideas based on their destination, budget, travel duration, interests, and preferred experiences.

## ✨ Features

### 🏠 Travel Homepage

* Modern travel-focused landing page
* Hero section with destination-focused visuals
* Destination showcases and interactive content sections
* Responsive navigation
* Travel-oriented visual design
* Responsive layout across desktop and mobile devices

### 🧭 Destination Discovery

The **Discover** page provides curated destination recommendations organized around different travel styles and categories.

Currently supported discovery moods include:

* 🏖️ Beach
* 🏔️ Mountains
* 🌾 Grasslands
* 🏛️ Heritage
* 🌆 City

The page also provides curated sections such as:

* **India Trending**
* **World Trending**
* **Hot Destinations**
* **Seasonal Places**

Each destination can include:

* Destination name
* Location
* Rating
* Description
* Travel tags
* Destination imagery

The selected mood is reflected in the URL, allowing discovery states to be represented through query parameters such as `?mood=beach`.

### 🔎 City Search

Travello includes a shared city-search context for handling destination searches across the application.

Users can search for destinations and navigate to the Discover experience with the selected city represented in the URL.

### 🤖 AI Travel Planner

The **Plan** page provides an interactive AI travel-planning experience powered by **Groq**.

Users can describe their trip in natural language, including information such as:

* Destination
* Travel mood
* Budget
* Number of days
* Places they want to visit

The AI is instructed to generate practical travel plans containing:

* Day-by-day itinerary
* Places to visit
* Food and local experiences
* Approximate budget guidance
* Transportation suggestions
* Useful travel tips

The planner supports conversational follow-up messages and renders AI responses as Markdown.

Example prompts are provided for quick starting points, such as:

> Plan 5 days in Kerala for nature, food, and a medium budget.

> Make a Goa trip for beaches, cafes, and relaxed nightlife.

> Suggest a family friendly Himachal route under 40000 INR.

### 🎨 Responsive UI

Travello uses Tailwind CSS for its interface and is designed to work across:

* Desktop
* Tablet
* Mobile

The application uses reusable React components for navigation, destination cards, destination rails, hero sections, sliders, and other UI elements.

---

## 🛠️ Tech Stack

| Technology            | Purpose                                         |
| --------------------- | ----------------------------------------------- |
| **React 19**          | Frontend UI and component architecture          |
| **Vite**              | Development server and production build tooling |
| **Tailwind CSS 4**    | Styling and responsive UI                       |
| **React Router 7**    | Client-side routing                             |
| **React Markdown**    | Rendering AI-generated Markdown responses       |
| **Groq API**          | AI-powered itinerary generation                 |
| **cities.json**       | City/destination data                           |
| **ESLint**            | Code quality and linting                        |

The current project configuration uses React 19, Vite 8, Tailwind CSS 4, React Router 7, and React Markdown.

---

## 🗺️ Application Routes

Travello currently uses the following routes:

| Route       | Description                   |
| ----------- | ----------------------------- |
| `/`         | Homepage / landing experience |
| `/discover` | Destination discovery         |
| `/plan`     | AI-powered itinerary planner  |

Routing is handled through React Router and all pages share a common application layout and navigation.

---

## 📁 Project Structure

```text
Travello-Site/
├── public/
├── src/
│   ├── Pages/
│   │   ├── Homepage.jsx
│   │   ├── Discover.jsx
│   │   └── Plan.jsx
│   │
│   ├── components/
│   │   ├── DestinationCard.jsx
│   │   ├── DestinationRail.jsx
│   │   ├── DiscoverMoodRail.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Landing.jsx
│   │   ├── Landscape.jsx
│   │   ├── Navbar.jsx
│   │   ├── PopWindow.jsx
│   │   └── Slider.jsx
│   │
│   ├── context/
│   │   ├── CitySearchContext.jsx
│   │   ├── citySearchState.js
│   │   └── useCitySearch.js
│   │
│   ├── data/
│   ├── assets/
│   ├── App.jsx
│   ├── Layout.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── LICENSE
```

The current source tree separates pages, reusable components, shared city-search context, data, and assets.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* **Node.js** (LTS recommended)
* **npm**

### 1. Clone the repository

```bash
git clone https://github.com/adityasengar-in/Travello-Site.git
cd Travello-Site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Groq

The AI planner uses the Groq API and expects the following environment variable:

```env
VITE_GROQ_API_KEY=your_groq_api_key
```

Create a `.env` file in the project root:

```env
VITE_GROQ_API_KEY=your_groq_api_key
```

Optionally override the model:

```env
VITE_GROQ_MODEL=openai/gpt-oss-20b
```

> **Security note:** Vite `VITE_*` variables are exposed to the client-side application. For a production deployment, the Groq request should ideally be moved behind a secure backend/server-side endpoint so the API key is not exposed to users.

The current implementation reads `VITE_GROQ_API_KEY` directly from the Vite environment and sends requests to the Groq API from the Plan page.

### 4. Start the development server

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

### 7. Run linting

```bash
npm run lint
```

These scripts are defined in the project's current `package.json`.

---

## 🤖 Using the AI Planner

Navigate to:

```text
/plan
```

Enter a request describing your trip.

For example:

```text
Plan 6 days in Rajasthan for heritage, local food,
and photography with a moderate budget.
```

Travello sends the conversation to Groq and requests a practical itinerary containing destinations, activities, food experiences, budget guidance, transportation suggestions, and travel tips.

If the Groq API key is not configured, the planner displays an appropriate configuration error.

---

## 🧭 Discovering Destinations

Navigate to:

```text
/discover
```

Select a travel mood to explore curated destinations.

The discovery experience currently contains destination data covering categories such as beaches, mountains, grasslands, heritage locations, and cities, with examples spanning India and international destinations.

Mood selection is synchronized with URL search parameters, making discovery states linkable and navigable.

---

## 🧩 Architecture

Travello follows a component-based React architecture.

### Pages

Application-level screens are contained in `src/Pages`:

* `Homepage.jsx`
* `Discover.jsx`
* `Plan.jsx`

### Components

Reusable UI elements are maintained in `src/components`, including destination cards, navigation, hero sections, destination rails, mood selectors, and other presentation components.

### Context

The city-search functionality is shared through React context:

```text
src/context/
├── CitySearchContext.jsx
├── citySearchState.js
└── useCitySearch.js
```

This allows destination-search state to be shared across relevant parts of the application.

### Routing

The application uses React Router with a shared layout:

```text
/
├── /
├── /discover
└── /plan
```

The shared layout provides the application navigation and renders the active route through React Router's `Outlet`.

---

## 📌 Current Status

Travello currently provides:

* ✅ Responsive travel landing page
* ✅ Destination discovery
* ✅ Mood-based destination exploration
* ✅ City search flow
* ✅ Curated destination recommendations
* ✅ AI itinerary generation
* ✅ Groq-powered conversational planning
* ✅ Markdown-rendered AI responses
* ✅ React Router navigation
* ✅ Responsive Tailwind CSS interface
* ✅ ESLint configuration
* ✅ Vite development and production builds

---

## 🔮 Potential Future Improvements

The project can be extended with features such as:

* Secure server-side Groq integration
* Saved user itineraries
* Authentication and user accounts
* Persistent trip history
* Export itineraries as PDF/JSON
* Interactive maps
* Live weather information
* Hotel and activity recommendations
* Shareable trip links
* More destination filters
* Budget-aware itinerary optimization

---

## 📄 License

Travello is released under the **MIT License**.

See the [`LICENSE`](LICENSE) file for details.

---

## 🔗 Links

* **Repository:** https://github.com/adityasengar-in/Travello-Site
* **Live Site:** https://travello-site.vercel.app/

---

## 👨‍💻 Author

Built by **Aditya Sengar**.

If you find the project useful, consider giving the repository a ⭐ on GitHub.
