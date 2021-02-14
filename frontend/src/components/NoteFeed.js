import { memo } from 'react';
import { Link } from 'react-router-dom';

import Note from './Note';

const NoteFeed = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <div
          key={note.id}
          className="max-w-3xl mx-auto mb-8 pb-8 border-b border-solid border-gray-200"
        >
          <Note note={note} />
          <Link to={`note/${note.id}`}>Link</Link>
        </div>
      ))}
    </div>
  );
};

export default memo(NoteFeed);
