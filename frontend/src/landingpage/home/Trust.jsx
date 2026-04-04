import AwardCard from '../UI/TrustCard';
import { NavLink } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Trust = () => {
    return (
        <div className="max-w-6xl mx-auto mt-20 flex md:flex-row flex-col items-center justify-between text-text-color px-4 sm:px-6 lg:px-8">
            <div className='flex flex-col items-start justify-center gap-4'>
                <h1 className="text-2xl font-medium mb-5">Trust with confidence</h1>
                <AwardCard
                    title="Customer-first always"
                    description="That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India."
                />
                <AwardCard
                    title="No spam or gimmicks"
                    description='No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.'
                />
                <AwardCard
                    title="The Zerodha universe"
                    description="Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."
                />
                <AwardCard
                    title="Do better with money"
                    description="With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <img
                    src="./images/ecosystem.png"
                    alt="awards image"
                    className="w-150 md:mt-0 mt-12"
                />
                <div className="flex md:flex-row flex-col mt-10 justify-between gap-4 text-primary">
                    <NavLink className="flex items-center justify-center group">
                        Explore our products
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform ml-2 duration-300 hover:text-primary-dull" />
                    </NavLink>
                    <NavLink className="flex items-center justify-center group" >
                        Try Kite demo
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform ml-2 duration-300 hover:text-primary-dull" />
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Trust;