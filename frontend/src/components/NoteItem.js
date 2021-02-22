import { memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

const NoteItem = ({ note }) => {
  const createdAt = useMemo(() => format(new Date(note.createdAt), 'yyyy-MM-dd'), [note.createdAt]);

  return (
    <article className="w-full p-6 border border-solid border-gray-200 rounded-md mb-4 shadow">
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <div>
            <img
              className="h-10 rounded-full mr-4"
              src={note.author.avatar}
              alt={`${note.author.nickname} avatar`}
            />
          </div>

          <div>
            <div className="text-gray-900">{note.author.nickname}</div>

            <div className="text-xs text-gray-600">{createdAt}</div>
          </div>
        </div>

        <div className="text-xs text-gray-600">Likes: {note.likeCount}</div>
      </div>

      <div className="max-h-40 truncate">
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default memo(NoteItem);
