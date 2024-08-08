import MainView from '../Components/MainView'
let connected  = true
export default function Home() {
  // Assuming `connected` is a state for user authentication status
  // Initialize with default value (false)

  return (
    <div className="app">
      {connected ? (
        <MainView />
      ) : (
        <div className="loginContainer">
          <div className="loginTitle">Log in to TikTok</div>
          <div className="loginSubtitle">
            Manage your account, check notifications, comment on videos, and more
          </div>
        </div>
      )}
    </div>
  );
}