<tbody>
  {users.map((user) => {
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.mobileno}</td>
        <td>
          <form>
            <Button
              variant="contained"
              color="success"
              onClick={() => history(`/update/${user.id}`)}
            >
              {" "}
              Edit
            </Button>
          </form>
        </td>
        <td>
          <form>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                deleteRow(user.id);
              }}
            >
              {" "}
              Delete
            </Button>
          </form>
        </td>
      </tr>
    );
  })}
</tbody>;
