import Navbars from "./components/header/Navbar"
import Footer from "./components/footer/FooterComponent"
import Product from "./components/main/Product"
import Feedback from "./components/main/Feedback"

function App() {
  return (
    <>
    <header className="sticky top-0">
    <Navbars></Navbars>
    </header>
    <main>
      <section>
        <h1 className="text-center font-semibold text-3xl">Products</h1>
        <div className="flex justify-center">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 py-5">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        </div>
        </div>
      </section>
      <section className="mt-5">
        <h1 className="text-center font-semibold text-3xl">Feedback</h1>
        <div className="flex justify-center">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 py-5">
          <Feedback></Feedback>
          <Feedback></Feedback>
          <Feedback></Feedback>
          <Feedback></Feedback>
          <Feedback></Feedback>
          <Feedback></Feedback>
          <Feedback></Feedback>
          <Feedback></Feedback>
        </div>
        </div>
      </section>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </>
  )
}

export default App
