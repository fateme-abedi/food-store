import Header from "../components/Header";
import heroImg from '../assets/hero.png'
import FoodsList from "../components/FoodsList";
import Footer from "../components/Footer";



const HomePage: React.FC = () => { 
    return(
        <div className="min-h-screen ">
            <Header/>
            <main className="mx-auto px-4 py-8">
                <section className="flex flex-col lg:flex-row items-center justify-between mb-16 h-[70%]">
                    <div className="lg:w-1/2 text-center lg:text-left">
                     <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-yellow-600 block">The Fastest</span> Delivery in your city
                     </h1>
                     <p className="text-lg lg:text-xl mb-8">Your favorite place for delicious meals.</p>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <img src={heroImg} alt="HeroImage" className="w-full h-auto cov"/>
                    </div>
                </section>
                <section className="mt-8 px-8">
                    <h2 className="text-3xl font-bold text-center mb-8  text-white">Our Foods</h2>
                    <FoodsList/>
                </section>
            </main>
            <Footer/>
        </div>

    )

}
export default HomePage;