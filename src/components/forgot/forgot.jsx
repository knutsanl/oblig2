function ForgotPassword(){
    return(
        <form>
            <>
            <h5>Forgotten password? Please type your to reset password</h5>
            <label>
                Email
                    <input type = "email" placeholder="Email"/>
            </label>
            <input type = "submit" value = "submit"/>
            </>
        </form>
    )
}
export default ForgotPassword;