import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import FAQ from "./app/pages/FAQ/FAQ";
import Home from "./app/pages/Home/Home";
import Terms from "./app/pages/Terms/Terms";
import Careers from "./app/pages/Careers/Careers";
import AboutUs from "./app/pages/AboutUs/AboutUs";
import Services from "./app/pages/Services/Services";
// import Success from "./app/pages/Success/Success";
import ContactUs from "./app/pages/ContactUs/ContactUs";
import LifeAtTykans from "./app/pages/LifeAtTykans/LifeAtTykans";
import PrivacyPolicy from "./app/pages/PrivacyPolicy/PrivacyPolicy";
import AdministrativePage from "./app/pages/AdministrativePage/AdministrativePage";
import TeamTestimonialsPage from "./app/pages/TeamTestimonialsPage/TeamTestimonialsPage";
import CandidatePrivacyPolicy from "./app/pages/CandidatePrivacyPolicy/CandidatePrivacyPolicy";
import './App.css';



function App() {

  return (
      <Router>
          <Routes>
              <Route exact path="/" element={ <Home/>}/>
              <Route exact path="/services" element={ <Services/>}/>
              <Route  path="life-at-tykans" >
                  <Route index element={ <LifeAtTykans/>}/>
                  <Route  path="team-testimonials"  element={ <TeamTestimonialsPage/>}/>
              </Route>
              <Route  path="careers" >
                  <Route index element={ <Careers/>}/>
                  <Route  path="job/:jobId"  element={ <AdministrativePage/>}/>
                  <Route  path="faq"  element={ <FAQ/>}/>
              </Route>
              <Route exact path="/about-us"  element={ <AboutUs/>}/>
              <Route exact path="/contact-us"  element={ <ContactUs/>}/>
              {/*<Route exact path="/success-stories" element={<Success/>}/>*/}
              <Route exact path="/terms" element={<Terms/>}/>
              <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
              <Route exact path="/candidate-privacy-policy" element={<CandidatePrivacyPolicy/>}/>
          </Routes>
      </Router>
  );
}

export default App;
