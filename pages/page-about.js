import React from 'react';
import Layout from "../components/layout/Layout";
import AboutInner from "../components/sections/AboutInner";
import FunfactOne from "../components/sections/FunfactOne";
import OfferOne from "../components/sections/OfferOne";
import ServiceOne from "../components/sections/ServiceOne";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="About Us" />
                <AboutInner />
                <ServiceOne />
                <OfferOne />
                <FunfactOne />
            </Layout>
        </>
    )
}
