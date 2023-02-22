export const ToDo = ({ completed, description }) => {
  return (
    <>
      <p>{description}</p>
      <button type="button">Удалить</button>
    </>
  );
};
