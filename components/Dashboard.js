const Dashboard = ({
  user,
  executeTransaction,
  initAccount,
  sendQuery,
  transactionStatus,
}) => {
  return (
    <>
      <table>
        <tr>
          <td>
            {' '}
            <p>Address:</p>
          </td>
          <td>
            {' '}
            <p> {user?.addr ?? 'No Address'} </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Profile Name:</p>
            <p>Transaction Status: {transactionStatus ?? '--'}</p>
          </td>
        </tr>
      </table>
      <button onClick={sendQuery} className="btn">
        Send Query
      </button>
      <button onClick={initAccount} className="btn">
        Init Account
      </button>
      <button onClick={executeTransaction} className="btn">
        Execute Transaction
      </button>{' '}
    </>
  );
};
export default Dashboard;
