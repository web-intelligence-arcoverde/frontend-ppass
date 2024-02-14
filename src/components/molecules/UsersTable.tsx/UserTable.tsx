import {TableCustomColumnStatus} from '@/components/atoms/TableCustomColumnStatus/TableCustomColumnStatus';
import {MaterialTable} from '@/components/molecules/MaterialTableDynamic/MaterialTableDynamic';
import {getUserRequestService} from '@/service/user/get-users-service';

interface IUserTable {
  handleRouterToCreateUser: () => void;
  handleRouterToEditUser: (userId: number) => void;
  handleDeleteUser: (userId: number) => void;
}

export default async function UserTable({
  handleRouterToCreateUser,
  handleRouterToEditUser,
  handleDeleteUser,
}: Readonly<IUserTable>) {
  const data = await getUserRequestService();

  return (
    <MaterialTable
      title='Usuários'
      columns={[
        {title: 'Nome', field: 'name'},
        {title: 'Email', field: 'email'},
        {
          title: 'Status',
          field: 'status',
          render: (status: boolean) => (
            <TableCustomColumnStatus status={status} />
          ),
        },
      ]}
      data={data}
      actions={[
        {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: () => handleRouterToCreateUser(),
        },
        {
          icon: 'edit',
          tooltip: 'Editar',
          //@ts-ignore
          onClick: (_, rowData: any) => handleRouterToEditUser(rowData.id),
        },
        {
          icon: 'delete',
          tooltip: 'Deletar',
          //@ts-ignore
          onClick: (_, rowData: any) => handleDeleteUser(rowData.id),
        },
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
    />
  );
}
