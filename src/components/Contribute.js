import React from "react";


function Contribute({submit}){


    return (
      <div className="container-md">
        <form>
          <div className="text-center padding">
            <h1 className="text-centre-padding">Thankyou for donating</h1>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputDonation"
              className="form-label"
              aria-describedby="donationBox"
            >
              How Much Do You Wish To Donate
            </label>
            <input
              id="inputDonation"
              type="integer"
              className="form-control"
              placeholder="Enter value here"
            ></input>
            <div id="donationBox" className="form-text">
              Currently only accepting donations in Kenya Shillings{"(ksh, /=)"}
            </div>

            <div className="mb-3 ">
              <label for="paymentOptions" className="form-label"></label>
              <div id="paymentOptions">
                <div className="btn-group">
                  <a
                    href="#"
                    className="btn btn-warning active"
                    data-bs-toggle="button"
                    aria-pressed="false"
                    role="button"
                  >
                    Card Payment
                  </a>
                  <br />
                  <br />
                  <a
                    href="#"
                    className="btn btn-warning disabled"
                    data-bs-toggle="button"
                    aria-pressed="true"
                    role="button"
                    aria-disabled="true"
                  >
                    Pay by mpesa
                  </a>
                </div>
              </div>
            </div>
            <div id="names">
              <label for="personalDetailsContainer" className="form-label">
                Fill in your personal information
              </label>
              <div className="form-group-row" id="personalDetailsContainer">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="first-name" className="form-label col-lg-14">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control col-lg-14"
                      id="first-name"
                      placeholder="First Name"
                      autoComplete
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="last-name" className="form-label col-lg-12">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="form-control col-lg-12 "
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="inputEmailAddress" className="form-label">
                Enter valid email address
              </label>
              <input
                id="inputEmailAddress"
                type="email"
                className="form-control"
                placeholder="Example: johnjohn@gmail.com"
              />
            </div>
            <label for="inputCardDetails" className="form-label">
              Card Details
            </label>
            <div id="inputCardDetails">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Card number"
                ></input>
              </div>
              <div className="form-group-row">
                <div className="form-row">
                  <div className="form-group col-md-2 mb-3">
                    <input
                      type="text"
                      className="form-control col-lg-14"
                      id="first-name"
                      placeholder="Expiration Date"
                      autoComplete
                    />
                  </div>
                  <div className="form-group col-md-2 mb-3">
                    <input
                      type="text"
                      className="form-control col-lg-14"
                      id="first-name"
                      placeholder="CVC"
                      autoComplete
                    />
                  </div>
                  <div className="form-group col-md-2 mb-3">
                    <input
                      type="text"
                      className="form-control col-lg-14"
                      id="first-name"
                      placeholder="ZIP"
                      autoComplete
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onSubmit={(z) => {
              z.preventDefault();
              alert(
                "Thankyou for donating, A confirmation email has been sent to your email address"
              );
            }}
            className="btn btn-warning"
          >
            Press to Donate
          </button>
        </form>
      </div>
    );
}
export default Contribute