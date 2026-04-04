import Hero from './Hero';
import CreateTicket from './CreateTicket';

const SupportPage = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-30 text-text-color px-4 sm:px-6 lg:px-8 w-full">
        <Hero />
        <CreateTicket />
      </div>
    </>
  )
}

export default SupportPage;