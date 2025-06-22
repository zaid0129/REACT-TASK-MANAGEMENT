const Footer=()=>{
    return(
        <>
        <div className="footer">
      <div className="footer-content">
        <h2 className="footer-title">TaskManager Project</h2>
        <p className="footer-tagline">Stay organized. Stay ahead.</p>
        <div className="footer-links">
          <span>About</span>
          <span>Contact</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} TaskManager Pro. All rights reserved.</p>
      </div>

      <style>
        {`
          .footer {
    background: linear-gradient(to right,rgb(102, 215, 196), #00b3b3);
                color: #004466;
            padding: 40px 20px;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            border-top: 2px solid #b3e5fc;
            margin-top: 40px;
          }

          .footer-content {
            max-width: 900px;
            margin: auto;
          }

          .footer-title {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #003d66;
          }

          .footer-tagline {
            font-size: 16px;
            color: #005580;
            margin-bottom: 20px;
          }

          .footer-links {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 20px;
            font-size: 15px;
            color: #006699;
            font-weight: 500;
            cursor: pointer;
          }

          .footer-links span:hover {
            text-decoration: underline;
            color: #0099cc;
          }

          .footer-copy {
            font-size: 14px;
            color: #004d66;
            margin-top: 10px;
          }
        `}
      </style>
    </div>

        </>
    )
}
export default Footer