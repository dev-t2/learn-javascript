import { memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { useQuery } from '@apollo/client';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineLike } from 'react-icons/ai';

import { GET_MY_NOTES } from '../apollo/query';
import { Link } from 'react-router-dom';

const NoteItem = ({ note }) => {
  const { data } = useQuery(GET_MY_NOTES);
  const isAuthor = useMemo(() => data.me.id === note.author.id, [note.author.id, data.me.id]);
  const createdAt = useMemo(() => format(new Date(note.createdAt), 'yyyy-MM-dd'), [note.createdAt]);

  return (
    <article className="w-full p-4 border border-solid border-gray-200 rounded-xl shadow-md hover:shadow-lg">
      <div className="flex items-center my-2">
        <div>
          <img
            className="h-10 rounded-full mr-4"
            src={note.author.avatar}
            alt={`${note.author.nickname} avatar`}
          />
        </div>

        <div>
          <div className="text-gray-700 font-semibold">{note.author.nickname}</div>
          <div className="text-xs text-gray-600">{createdAt}</div>
        </div>
      </div>

      <ReactMarkdown
        className="max-h-20 p-1 break-all whitespace-pre-line overflow-y-hidden"
        children={note.content}
      />

      <div>
        <button className="text-sm font-semibold ml-1">... MORE</button>
      </div>

      <div className="flex items-center border-t border-b border-solid border-gray-200 py-1 mt-2">
        <button className="flex-1 flex items-center justify-center text-gray-800 focus:outline-none hover:bg-gray-100 px-6 py-2 rounded-md">
          <div className="mr-1">
            <AiOutlineLike className="text-xl" />
          </div>

          <div className="text-sm">좋아요</div>
        </button>

        {isAuthor && (
          // <Link to={`/update/${note.id}`}>
          //   <AiOutlineEdit />
          // </Link>
          <button className="flex-1 flex items-center justify-center text-gray-800 focus:outline-none hover:bg-gray-100 px-6 py-2 rounded-md">
            <div className="mr-1">
              <AiOutlineEdit className="text-xl" />
            </div>

            <div className="text-sm">수정하기</div>
          </button>
        )}

        {isAuthor && (
          <button className="flex-1 flex items-center justify-center text-gray-800 focus:outline-none hover:bg-gray-100 px-6 py-2 rounded-md">
            <div className="mr-1">
              <AiOutlineDelete className="text-xl" />
            </div>

            <div className="text-sm">삭제하기</div>
          </button>
        )}
      </div>
    </article>
  );
};

export default memo(NoteItem);
