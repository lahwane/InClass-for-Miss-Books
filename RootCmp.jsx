import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./pages/About.jsx"
import { Home } from "./pages/Home.jsx"
import { CarIndex } from "./pages/CarIndex.jsx"

const { useState } = React

export function App() {

    const [page, setPage] = useState('car')

    function onSetPage(page) {
        setPage(page)
    }

    return (
        <section className="app">
            <AppHeader onSetPage={onSetPage} />

            <main className="main-layout">
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'car' && <CarIndex />}
            </main>
        </section>
    )
} 