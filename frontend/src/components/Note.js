import { memo } from 'react';
import ReactMarkdown from 'react-markdown';

const Note = ({ note }) => {
  return (
    <article key={note.id}>
      <img className="h-12" src={note.author.avatar} alt={`${note.author.nickname} avatar`} />
      {note.author.nickname} {note.createAt} {note.likeCount}
      <ReactMarkdown>{note.content}</ReactMarkdown>
    </article>
  );
};

export default memo(Note);
