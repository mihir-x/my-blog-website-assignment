import PropTypes from 'prop-types';

const Comment = ({comment}) => {

    const {name, photo, commentText} = comment

    return (
        <div className='flex gap-4 mt-5 md:mt-7'>
            <div>
                <figure><img src={photo} alt="" className='h-16 w-16 rounded-full' /></figure>
            </div>
            <div className='space-y-1 bg-slate-200 rounded-xl p-4'>
                <h1 className='text-lg font-bold'>{name}</h1>
                <p>{commentText}</p>
            </div>
        </div>
    );
};

export default Comment;
Comment.propTypes = {
    comment: PropTypes.object
}