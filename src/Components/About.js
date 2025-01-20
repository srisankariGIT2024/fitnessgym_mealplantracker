
import Image1 from '../Components/Images/aboutimage1.jpg';
import Image2 from '../Components/Images/aboutimage2.jpg';
import Image3 from '../Components/Images/aboutimage3.jpg';
import Image4 from '../Components/Images/aboutimage4.jpg';

const features = [
    { name: 'Who', description: 'Certified and experienced coach with a passion for endurance sports and fitness challenges' },
    { name: 'Why', description: 'Personalized training plans designed to meet individual fitness goals' },
    { name: 'What', description: '1-on-1 sessions, group classes, or virtual coaching' },
    { name: 'Where', description: 'Available at our fitness studio, online, or in-home sessions' },
    { name: 'Connect with me', description: 'Virtual coaching options for athletes who prefer to train at home or have specific schedules' },
    { name: 'Considerations', description: 'Suitable for all fitness levels. Sessions can be tailored for specific needs, such as injury recovery or strength training.' },
    { name: 'Includes', description: 'Fitness assessments, progress tracking, and nutritional advice' },
    { name: 'Achievements', description: 'Completed Half Iron Challenge in 2024' },
];

export default function Example() {
    return (
        
        <div className="bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Sets Me Apart</h2>
                    <p className="mt-4 text-gray-500">
                        The trainer’s digital fitness dashboard is equipped with advanced tracking software to monitor workouts, nutrition, and progress. The dashboard syncs seamlessly with wearable devices to provide real-time data and personalized feedback.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-bold text-red-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-black-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-0">
                    <img
                        alt="Image1"
                        src={Image1}
                        className="rounded-md bg-gray-100 object-cover w-full h-full sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2"
                    />
                    <img
                        alt="Image2"
                        src={Image2}
                        className="rounded-md bg-gray-100 object-cover w-full h-full sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2"
                    />

                    <img
                        alt="Image3"
                        src={Image3}
                        className="rounded-md bg-gray-100 object-cover w-full h-full sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3"
                    />
                    <img
                        alt="Image4"
                        src={Image4}
                        className="rounded-md bg-gray-100 object-cover w-full h-full sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3"
                    />
                </div>

            </div>
        </div>
    );
}
