import { memo, useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';

import { UPDATE_NOTE } from '../apollo/mutation';
import { GET_MY_NOTES } from '../apollo/query';

const UpdateForm = ({ history, id, content = '' }) => {
  const [updateNote] = useMutation(UPDATE_NOTE, {
    refetchQueries: [{ query: GET_MY_NOTES }],
    onCompleted: () => {
      history.push(`/note/${id}`);
    },
  });

  const [value, setValue] = useState(content);

  console.log(id);
  console.log(value);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      updateNote({
        variables: {
          id,
          content: value,
        },
      });
    },
    [updateNote, id, value]
  );

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <div className="max-w-7xl mx-auto h-full">
      <form className="h-full p-4 flex flex-col" onSubmit={onSubmit}>
        <textarea
          className="w-full h-full p-4 resize-none border border-solid border-gray-300 rounded-md focus:outline-none"
          required
          value={value}
          onChange={onChange}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-800 px-7 py-3 mt-4 rounded-md text-white text-sm hover:bg-blue-900 focus:outline-none"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(memo(UpdateForm));
