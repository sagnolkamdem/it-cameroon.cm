import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Newsletter from '@/components/sections/Newsletter';
import MadeInCmr from '@/components/sections/Made-in-cmr';
import Feedback from '@/components/sections/Feedback';

export default function Home() {

  return (
    
    <Layout>

      <Hero />

      <MadeInCmr />

      <Feedback />
      
      <Newsletter />
    
    </Layout>
  );
}
