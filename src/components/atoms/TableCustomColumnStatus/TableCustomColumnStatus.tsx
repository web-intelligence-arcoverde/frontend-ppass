
interface ITableCustomColumnStatus{
  status:boolean
}

export const TableCustomColumnStatus = ({status}: ITableCustomColumnStatus) => {
  return (
    <label style={{color: status ? '#3498db' : '#e74c3c'}}>
      {status ? 'Ativo' : 'Desabilitado'}
    </label>
  );
};