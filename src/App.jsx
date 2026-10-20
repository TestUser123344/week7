import Header from './Header.jsx';
import CreatureField from './CreatureField.jsx';
import Footer from './Footer.jsx';

function App() {
    return (
        <div>
            <Header title="Sleeping Creatures" />
            <CreatureField />
            <Footer text="Made with React" />
        </div>
    );
}

export default App;
