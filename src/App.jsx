import './App.css';
import {Head,Sub,Footer} from "./components"

function App() {
  return (
    <div className="app">
      <header className='app-header'>
        <Head/>
      </header>
      <div className="app-sub">
        <Sub/>
      </div>
      <footer className='app-footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;







/*

      <div className="container">
        <header className="head">
          <div className="head-content">
                <nav className="head-nav">

                    <div className="head-nav-logo">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAAC7CAMAAACKAsDWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAD338/349P35NT45tb55dX/38/45dX45NT45Nb45NT05NT449P759b45dX25NT55dX349P65NT35NT55NT55NT54tL359f65NT339f45NX65Nf/5tb35NL45dT55dX659f55NX45NT55dX55dT358/45NT55dj85dX55dP65NT65M/34tL45NH66dn45NT///8qWXqyAAAAL3RSTlMAIEBgb38Qr++PvzCQP99wT4BfoM+fUCCPIN9fH2Dfn1+f36+fIM9PT68wMGBwL3RpSU0AAAABYktHRDCu3C3kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5gsBAyEbxxlmHQAAAAFvck5UAc+id5oAABC0SURBVHja7Z19Y6M4DsbzAoSFS9uZS9Jstz063elcd/bu+P7f7pq00wZLlmVbGEj0/DcTarD0w5bfxGymUqlUKpVKpVKpVCqVSqVSqVQqlWqsmi+WWU5puRj6EVXTU5Gtytat34Z+TtXEtKgYWB1VDP2oqimJD1bb1kM/rGo6Kv7BB6tt10M/rmoyqq98yFK0VFxde4HVtjdDP7BqIvriSVb7degnVk1D3mQpWiqW/MlStFQcBZClaKkYCiFL0VK5FUSWoqVyKowsRUvlUiBZipbKoVCyFC0VrX+GkqVoqUiFk6VoqShFkKVoqQjFkKVoqeyKIkvRUtlUxJGlaKksKjZxZClaKlzRZClaKlTxZCla01a9zLfb6qjVNs92C6ETWgJk6Qbm6WqeVchR07ISaC1u/Q5YaKt1Tioy64nAbXThImS1+6FtpArRNXE0/gStxRbKXbgMWW35+9BWUnmrJiOhk9ZiifzsLF2IrLa9+6OeE1rU86ENqTJ0TXs0/7wyBC2UrDK/91L98C8WfZtVpuf3xyPXBqo4tPAj0gHtCzs7xN0fQ1tU9SZn3oWTkZk/WjUaxK0CnnPZsqVwjULuTZ8xaOFknTaEbC34aL3ClTTk32/ZOmSh2y3qS0joxGgL1vTVVOkWsvpHq22/JDRiwDilrFa51Hz0OMUZvYWjdWub0kiAVkq2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" alt="" 
                      className='head-nav-logo-img'/>
                    </div>
                    <div className="head-nav-theam">
                    {
                      true?<button className="head-nav-light">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" focusable="false" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
                      </button>:
                      <button className="head-nav-dark"></button>
                      
                    }
                    </div>
                  
                </nav>
          </div>
        </header>
        
      </div>
    */
  