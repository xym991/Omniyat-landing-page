import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Slides/Home";
import Carousel from "./Slides/Carousel";
import {
  carouselHome,
  carouselStory,
  galleryHome,
  gallerySales,
  homeCards,
  masterpieces,
  ourFounder,
  partners,
  pillars,
  projects,
  story,
  story2,
  storyCards,
  storyMetrics,
} from "./utils/content";
import Section from "./Slides/Section";
import MidSection from "./Slides/MidSection";
import CardsGallery from "./Slides/CardsGallery";
import { useEffect, useRef } from "react";
import Bottom from "./Slides/Bottom";
import Header from "./Components/Header";
import StoryElement from "./Components/StoryElement";
import Footer from "./Slides/Footer";
import StoryHome from "./Slides/StoryHome";
import StoryCards from "./Slides/StoryCards";
import Founder from "./Components/Founder";

function App() {
  return (
    <div className="_App">
      <Router>
        <Routes>
          {" "}
          <Route
            path="/"
            exact
            element={
              <>
                {" "}
                <Header></Header>
                <Home></Home>
                <Carousel items={carouselHome}></Carousel>
                <Section data={masterpieces} />
                <MidSection items={galleryHome} />
                <Section data={partners} />
                <CardsGallery items={homeCards} />
                <Bottom />
                <Section
                  data={story}
                  append={<StoryElement button={true} items={storyMetrics} />}
                  className="h-full"
                />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/masterpieces"
            exact
            element={
              <>
                {" "}
                <Header></Header>
                <MidSection items={projects} />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/our-story"
            exact
            element={
              <>
                <Header></Header>
                <StoryHome></StoryHome>
                <Section
                  data={story2}
                  append={
                    <>
                      <StoryElement items={storyMetrics} />
                      <main>
                        <h1>{story2.heading2}</h1>
                        <p>{story2.content2}</p>
                      </main>
                    </>
                  }
                  // className="h-full"
                />
                <Carousel items={carouselStory} button={false} />
                <Section data={pillars}></Section>
                <StoryCards
                  items={storyCards}
                  text={
                    <>
                      At OMNIYAT, we take visionary to the next level. We
                      elevate spaces that reflect your unique personality,
                      celebrate your accomplishments, and align with your
                      aspirations.
                    </>
                  }
                ></StoryCards>
                <Section data={ourFounder}></Section>
                <Founder />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/sales"
            exact
            element={
              <>
                <Header></Header>
                <MidSection items={gallerySales}></MidSection>
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
