import Footer from "./footer/Footer";
import Header from "./header/Header";

interface Props {
    children: React.ReactNode;
    classMeta?: string;
}

const Layout = (props: Props) => {
    return ( 
        <main className="dark:bg-gray-900">
            <section>
                <Header />
            </section>

            <section>{props.children}</section>

            <section>
                <Footer />
            </section>
        </main>
     );
}
 
export default Layout;