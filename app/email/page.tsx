'use client'
import React from "react";

const Email = () => {
  return (
    <>
      <div className="form">
        <form
          className="w-25 border shadow"
          method="post"
          action="https://passport.yandex.com/for/neurohospital.com.np?mode=auth"
          
        >
          <div className="m-3">
            <label className="form-label">
              Username:
            </label>
            <input
              name="login"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="m-3">
            <label className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="passwd"
              className="form-control"
              id="exampleInputPassword1"
              maxLength={100}
              tabIndex={100}
            />
          </div>
          <div className="m-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="twoweeks"
              value="yes"
              
            />
            <label className="form-check-label" >
              Don't Remember me
            </label>
          </div>
          <div className="text-center mb-3">
            <button type="submit" name="In" className="btn btn-primary px-4">
              Log in
            </button>
          </div>
        </form>
        {/* <form
          method="post"
          action="https://passport.yandex.com/for/neurohospital.com.np?mode=auth"
        >
          <div class="label">Username:</div>
          <input type="text" name="login" value="" tabindex="1" />
          <div class="label">Password:</div>
          <input
            type="hidden"
            name="retpath"
            value="http://mail.yandex.com/for/neurohospital.com.np"
          />
          <input
            type="password"
            name="passwd"
            value=""
            maxlength="100"
            tabindex="2"
          />
          <label for="a">
            <input
              type="checkbox"
              name="twoweeks"
              id="a"
              value="yes"
              tabindex="4"
            />
            Don't remember me
          </label>
          <input type="submit" name="In" value="Log in" tabindex="5" />
        </form> */}
      </div>
    </>
  );
};

export default Email;
