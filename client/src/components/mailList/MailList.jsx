import "./mailList.css"
const MailList = () => {

  return (
    <div className="mail">
      <span className="mailDesc">Sign up for quick updates</span>
      <div className="mailInputContainer">
        <input id="emailval"  type="text" placeholder="Enter Your email for more updates"  />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList