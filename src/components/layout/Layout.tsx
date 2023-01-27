import Footer from "./footer/Footer";
import Header from "./header/Header";
import { LayoutProps } from "./layout.interface";

const Layout = (props: LayoutProps) => {

    return ( 
        <main>
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