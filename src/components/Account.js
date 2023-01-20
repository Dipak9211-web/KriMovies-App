
function Account() {
  const userAccount = JSON.parse(localStorage.getItem('user'))

  return (
      <div className="account-container">
        <div className="account">
          <h3 className="use-name">User Name :{userAccount?userAccount.fullName:"Please Login first"}</h3>
          <h4 className="use-name">User Email :{userAccount?userAccount.email:"user@gmail.com"}</h4>
          <p>"login-logout module is not working properly because i used localStorage for emplementing this module"</p>
        </div>
      </div>
  )
}

export default Account