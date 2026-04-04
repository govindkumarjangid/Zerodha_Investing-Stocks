import React from 'react'
import ProductCard from '../UI/ProductCard';

const ProductSections = () => {
    const productsData = [
        {
            title: "Kite",
            description: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
            links: [
                { text: "Try demo", url: "#" },
                { text: "Learn more", url: "#" }
            ],
            imageSrc: "./images/kite.png",
            imageAlt: "Kite Platform",
            imageLeft: true,
            showAppStore: true,
        },
        {
            title: "Console",
            description: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualizations.",
            links: [
                { text: "Learn more", url: "#" }
            ],
            imageSrc: "/images/console.png",
            imageAlt: "Console Dashboard",
            imageLeft: false,
            showAppStore: false,
        },
        {
            title: "Coin",
            description: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
            links: [
                { text: "Coin", url: "#" }
            ],
            imageSrc: "/images/coin.png",
            imageAlt: "Coin App",
            imageLeft: true,
            showAppStore: true,
        },
        {
            title: "Kite Connect API",
            description: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
            links: [
                { text: "Kite Connect", url: "#" }
            ],
            imageSrc: "/images/kiteconnect.png",
            imageAlt: "Kite Connect API",
            imageLeft: false,
            showAppStore: false,
        },
        {
            title: "Varsity mobile",
            description: "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
            links: [],
            imageSrc: "/images/varsity.png",
            imageAlt: "Varsity Mobile App",
            imageLeft: true,
            showAppStore: true,
        },
    ];
    return (
       <>
        <div className="bg-white py-10">
            {productsData.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    links={product.links}
                    imageSrc={product.imageSrc}
                    imageAlt={product.imageAlt}
                    imageLeft={product.imageLeft}
                    showAppStore={product.showAppStore}
                />
            ))}
        </div>
        <p className="text-center text-xl">Want to know more about our technology stack? Check out the
            <span className="text-primary cursor-pointer"> {" "} Zerodha.tech {" "} </span>
        blog.</p>
       </>
    )
}

export default ProductSections;