export const ToDo = ({ completed, description, hendlerDelete, id }) => {
  return (
    <>
      <p>{description}</p>
      <button type="button" onClick={() => hendlerDelete(id)}>
        Удалить
      </button>
    </>
  );
};
