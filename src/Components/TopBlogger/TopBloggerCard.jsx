import { Card, Dropdown } from 'flowbite-react';
import PropTypes from 'prop-types';

const TopBloggerCard = ({ blogger }) => {
    console.log(blogger)
    const { _id, count } = blogger
    console.log(_id, count)
    return (
        <Card className="max-w-sm">
            <div className="flex justify-end px-4 pt-4">
                <Dropdown inline label="">
                    <Dropdown.Item>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Send Star
                        </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Profile
                        </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Report
                        </a>
                    </Dropdown.Item>
                </Dropdown>
            </div>
            <div className="flex flex-col items-center pb-10">
                <img
                    alt="no image"
                    src={_id.ownerPhoto}
                    className="mb-3 rounded-full h-28 w-28 shadow-lg"
                />
                <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">{_id.ownerName}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{_id.owner}</span>
                <h5 className='font-semibold'>Total Blogs: {count}</h5>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                        href="#"
                        className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                        Add friend
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                        Message
                    </a>
                </div>
            </div>
        </Card>
    );
};

export default TopBloggerCard;

TopBloggerCard.propTypes = {
    blogger: PropTypes.object
}