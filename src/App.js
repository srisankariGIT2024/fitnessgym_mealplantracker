import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header.js';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import SubscriptionPlan from './Components/SubscriptionsPlans.js';
import GetStarted from './Components/GetStarted.js';
import FitnessTracker from './Components/fitnessTracker.js';
import LoginMentor from './Components/mentor/loginMentor.js';
import MentorDashboard from './Components/mentor/mentorDashboard.js';
import UsersList from './Components/mentor/usersList.js';
import FoodList from './Components/mentor/foodList.js';
import DietTracker from './Components/mentor/dietTracker.js';

function AppContent() {
  const location = useLocation();

  const showNavbar = location.pathname !== '/mentor-dashboard' && location.pathname !== '/users-list' && location.pathname !== '/foods' && location.pathname !== '/diet-tracker';

  return (
    <div className="font-sans">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<SubscriptionPlan />} />
        <Route path="/contact" element={<GetStarted />} />
        <Route path="/blogs" element={<FitnessTracker />} />
        <Route path="/mentorlogin" element={<LoginMentor />} />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/users-list" element={<UsersList />} />
        <Route path="/foods" element={<FoodList />} />
        <Route path="/diet-tracker" element={<DietTracker />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
