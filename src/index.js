// Importer les outils React
import ReactDOM from "react-dom/client";

// Importer le composant App
import { App } from './App';

// Cibler la div avec l'id root
const divRoot = document.getElementById('root');

// Créer un noeud racine react à partir de la div root
const reactRoot = ReactDOM.createRoot(divRoot);

// Injecter notre premier composant : le noeud racine
reactRoot.render(<App />);