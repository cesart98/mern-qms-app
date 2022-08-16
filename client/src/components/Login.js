export default function Login() {
  return (
    <section className="flex justify-center items-center h-full">
      <div className="card bg-primary w-72">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form className="form-control">
            <label className="label" htmlFor="username">
              <span className="label-text">Username</span>
            </label>
            <input type="text" id="username" placeholder="Enter your username" className="input input-bordered"/>
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input type="password" id="password" placeholder="Enter your password" className="input input-bordered"/>
          </form>
          <div className="card-actions">
            <button className="btn w-full">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
}