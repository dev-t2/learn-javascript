import { memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { useQuery } from '@apollo/client';

import { GET_MY_NOTES } from '../apollo/query';
import { Link } from 'react-router-dom';

const NoteItem = ({ note }) => {
  const { data } = useQuery(GET_MY_NOTES);
  const isAuthor = useMemo(() => data.me.id === note.author.id, [note.author.id, data.me.id]);
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
            <div className="text-gray-900">
              {note.author.nickname}
              {isAuthor && <Link to={`/update/${note.id}`}>(Edit)</Link>}
            </div>

            <div className="text-xs text-gray-600">{createdAt}</div>
          </div>
        </div>

        <div className="text-xs text-gray-600">Likes: {note.likeCount}</div>
      </div>

      <ReactMarkdown
        className="max-h-48 break-all whitespace-pre-line overflow-y-hidden"
        children={note.content}
      />
    </article>
  );
};

export default memo(NoteItem);
