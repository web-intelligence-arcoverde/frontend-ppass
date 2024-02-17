
export const TableCustomColumnStatus = ({user}: any) => {

  return (
    <label style={{color: user.status ? '#3498db' : '#e74c3c'}}>
      {user.status ? 'Ativo' : 'Desativado'}
    </label>
  );
};