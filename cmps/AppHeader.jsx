
export function AppHeader({ onSetPage }) {
    // console.log('props:', props)

    return (
        <header className="app-header full main-layout">
            <section>
                <h1>React Car App</h1>
                <nav className="app-nav">
                    <a onClick={() => onSetPage('home')} href="#">Home</a>
                    <a onClick={() => onSetPage('about')} href="#">About</a>
                    <a onClick={() => onSetPage('car')} href="#">Cars</a>
                </nav>
            </section>
        </header>
    )
}