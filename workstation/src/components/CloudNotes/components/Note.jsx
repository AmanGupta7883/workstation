import { MdDelete } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer' style={{"borderTop":"1px solid black","paddingTop":"0.2rem"}}>
				<small>{date}</small>
				<MdDelete
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
					style={{"color":"red"}}
				/>
			</div>
		</div>
	);
};

export default Note;
