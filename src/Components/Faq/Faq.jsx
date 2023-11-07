import { Accordion } from 'flowbite-react';
import { useInView } from 'react-intersection-observer';

const Faq = () => {

    const [ref, inView] = useInView({
        threshold: 0
    })

    return (
        <div className={`max-w-screen-lg mx-auto my-6 md:my-14 transition-transform transform duration-1000 ${inView? 'scale-100': 'scale-75'}`} ref={ref}>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mb-4 md:mb-8">Frequently Asked Question</h1>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>Is your blog content free to access?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Yes our blog contents are free to access. All you need to do is register.
                        </p>
                        
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Do you offer advertising or sponsorship opportunities?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Currently we do not offer any advertising or sponsorship opportunities.
                        </p>
                        
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>What is your privacy policy?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            We take our privacy seriously. You can find detail information about our privacy practices in our privacy policy located in the footer of our website.
                        </p>
                        
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Faq;