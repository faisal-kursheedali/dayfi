import React from 'react'
import "./footerContent.css"

const FooterContent = () => {
  return (
    <div className="fc">
        <div className="fc-sm-screen">
          <div className="fc-head">
            Creed
          </div>
          <div className="fc-sub">
            Decentralization : Privacy : Freedom : Sovereignty
          </div>
        </div>

        <div className="fc-lrg-screen">
          <div className="fc-sub-lrg-screen">
            Creed : Decentralization : Privacy : Freedom : Sovereignty

          </div>
          <hr className="fc-hr-lrg-screen" />
          <div className="fc-link-other-lrg-screen">
          <div className="fc-link-other-item" onClick={()=>window.location.href="https://share.hsforms.com/1HV6-N3sNStmtIGY9hoWa7wdr4q5"}>Partner with us</div>
            <div className="fc-link-other-item" onClick={()=>window.location.href="https://docs.dayfi.io/"}>
              For developers</div>
            <div className="fc-link-other-item" onClick={()=>window.location.href="https://docs.dayfi.io/roadmap/buy-now-pay-later-q4"}>Docs & Roadmap</div>
            <div className="fc-link-other-item" onClick={()=>window.location.href="https://drive.google.com/drive/folders/1fQOhUD4zYJqCG_bf2q4-y9mXMuMJZ29S"}>
              Brand guidelines / Media kit</div>
            <div className="fc-link-other-item" onClick={()=>window.location.href="https://docs.dayfi.io/resources-and-legal/faq"}>FAQ</div>
          </div>
        </div>
        <div className="fc-link">
          <div className="fc-link-social-media">
            <a href="https://twitter.com/dayfifinance" className="fc-link-social-media-link">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/dayfi-finance/" className="fc-link-social-media-link">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" aria-hidden="true" focusable="false" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
            </a>
            <a href="https://discord.gg/RMwRAVNkKF" className="fc-link-social-media-link">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" aria-hidden="true" focusable="false" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"></path><path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"></path></svg>
            </a>
          </div>
          <div className="fc-link-other">
            <div className="fc-link-other-item">Partner with us</div>
            <div className="fc-link-other-item">
              For developers</div>
            <div className="fc-link-other-item">Docs & Roadmap</div>
            <div className="fc-link-other-item">
              Brand guidelines / Media kit</div>
            <div className="fc-link-other-item">FAQ</div>
          </div>
        </div>
      </div>
  )
}

export default FooterContent