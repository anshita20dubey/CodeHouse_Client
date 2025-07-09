import Navbar from './components/front/Navbar';
import Hero from './components/front/Hero';
import CodePreview from './components/front/CodePreview';
import RealTimeCollaboration from './components/front/RealTimeCollaboration';
import OrganizeFiles from './components/front/OrganizeFiles';
import SyntaxHighlighting from './components/front/SyntaxHighlighting';
import ShareLink from './components/front/ShareLink';
import FAQ from './components/front/FAQ';
import Footer from './components/front/Footer';
import ScrollButton from './components/front/ScrollButton';

// Scroll Button Component


const CodehouseApp = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Add pt-20 to account for the fixed navbar height */}
            <div className="pt-20">
                <Hero />
                <div id="features">
                    <CodePreview />
                </div>
                <div id="collaboration">
                    <RealTimeCollaboration />
                </div>
                {/* <div id="organize">
                    <OrganizeFiles />
                </div> */}
                <div id="syntax">
                    <SyntaxHighlighting />
                </div>
                <div id="share">
                    <ShareLink />
                </div>
                <div id="faq">
                    <FAQ />
                </div>
                <Footer />
            </div>
            
            {/* Scroll Button - Always visible across all components */}
            <ScrollButton />
        </div>
    );
};

export default CodehouseApp;