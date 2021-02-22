import { memo } from 'react';
import { useQuery } from '@apollo/client';

import { GET_EDIT, GET_NOTE } from '../apollo/query';
import UpdateForm from '../components/UpdateForm';

const Update = ({ match }) => {
  const id = match.params.id;
  const { data: noteData } = useQuery(GET_NOTE, { variables: { id } });
  const { data: editData } = useQuery(GET_EDIT);

  if (noteData?.note?.author?.id !== editData?.me?.id) {
    return <div>You do not have access to edit this note.</div>;
  }

  return <>{noteData && <UpdateForm id={noteData.note.id} content={noteData.note.content} />}</>;
};

export default memo(Update);
