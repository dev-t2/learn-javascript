import { memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

const Note = ({ note }) => {
  const createdAt = useMemo(() => format(new Date(note.createdAt), 'yyyy-MM-dd'), [note.createdAt]);

  return (
    <article className="max-w-3xl mx-auto">
      <div className="flex items-start">
        <div className="pr-4">
          <img className="h-12" src={note.author.avatar} alt={`${note.author.nickname} avatar`} />
        </div>

        <div className="pr-4">
          <div>by {note.author.nickname}</div>

          <div>{createdAt}</div>
        </div>

        <div className="mr-auto">Likes: {note.likeCount}</div>
      </div>

      <ReactMarkdown>{note.content}</ReactMarkdown>
    </article>
  );
};

export default memo(Note);
