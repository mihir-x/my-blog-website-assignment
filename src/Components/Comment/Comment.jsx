import PropTypes from 'prop-types';

const Comment = ({ comment }) => {

    const { name, photo, commentText } = comment

    return (
        <div className='flex gap-1 md:gap-4 mt-5 md:mt-7'>
            <img src={photo} alt="" className='h-10 w-10 md:h-16 md:w-16 rounded-full' />
            <div className='space-y-1 bg-slate-200 rounded-xl p-4'>
                <h1 className='text-lg font-bold'>{name}</h1>
                <p className='text-xs md:text-sm'>{commentText}</p>
            </div>
        </div>
    );
};

export default Comment;
Comment.propTypes = {
    comment: PropTypes.object
}