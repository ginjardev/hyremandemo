import React from "react";
import CandidateView from "pages/CandidateView";
import CompanyOnboardingOne from "pages/CompanyOnboardingOne";
import DASHBOARD from "pages/DASHBOARD";
import Homepage from "pages/Homepage";
import ResumeBank from "pages/ResumeBank";
import Companyonboarding from "pages/Companyonboarding";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/companyonboarding" element={<Companyonboarding />} />
        <Route path="/resumebank" element={<ResumeBank />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/dashboard" element={<DASHBOARD />} />
        <Route
          path="/companyonboardingone"
          element={<CompanyOnboardingOne />}
        />
        <Route path="/candidateview" element={<CandidateView />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
