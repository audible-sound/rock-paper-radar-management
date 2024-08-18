import { Link } from 'react-router-dom';
import Header from '../components/ui/Header';
import Subsection from '../components/ui/Subsection';
import land1 from '../assets/images/land1.jpg';
import land2 from '../assets/images/land2.jpg';
import land3 from '../assets/images/land3.jpg';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-screen">
      <Header>
        <span className="text-3xl font-bold text-blue-600">Rock Paper Radar</span>
      </Header>
      
      <main className="w-full">
      <section className="relative text-right flex flex-col items-end justify-center mb-16 bg-landing-bg bg-cover bg-center bg-no-repeat h-screen p-16 w-full">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 ">
            <h1 className="text-5xl font-bold text-white mb-4">Discover Sustainable Adventures</h1>
            <p className="text-xl text-white mb-8">Connect with eco-conscious travelers and explore hidden gems responsibly</p>
            <Link to="/user/signup" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
              Join the Community
            </Link>
          </div>
        </section>

        <div className="w-full">
          <Subsection 
            title="Explore Eco-Friendly Destinations"
            description="Discover hidden gems and sustainable travel spots that preserve local environments and cultures. Our community-driven platform helps you find and share eco-conscious travel experiences around the world."
            imageSrc={land1}
            imageAlt="Eco-friendly destination"
          />

          <Subsection 
            title="Connect with Like-Minded Travelers"
            description="Build a network of responsible tourists, share your experiences, and learn from others. Engage in meaningful discussions about sustainable travel practices and make lasting connections with fellow eco-conscious adventurers."
            imageSrc={land2}
            imageAlt="Travelers connecting"
            imageOnRight={true}
          />

          <Subsection 
            title="Make a Positive Impact"
            description="Share your sustainable travel stories and inspire others to make a positive impact. Learn about local conservation efforts, participate in eco-friendly activities, and contribute to the well-being of the destinations you visit."
            imageSrc={land3}
            imageAlt="Positive impact on local community"
          />
        </div>

        <section className="text-center my-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Start Your Sustainable Journey?</h2>
          <Link to="/user/signup" className="bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:bg-green-700 transition duration-300">
            Get Started Now
          </Link>
        </section>
      </main>

      <footer className="bg-blue-800 text-white text-center py-4 mt-16">
        <Link to="/admin" className="bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:bg-green-700 transition duration-300 inline-block">Employee Login Portal</Link>
        <p>&copy; 2023 Rock Paper Radar. All rights reserved.</p> 
      </footer>
    </div>
  );
};

export default LandingPage;