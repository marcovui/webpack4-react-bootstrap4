import React from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from '../../auth/fakeAuth';

const AuthButton = withRouter(
  ({ history }) => fakeAuth.isAuthenticated ? (
    <div className="py-3 pl-3 text-white">
      {'Welcome! '}
      <button
        type="button"
        className="btn btn-link p-0"
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        {'Sign out'}
      </button>
    </div>
  ) : (
    <div className="py-3 pl-3 text-white">
      {'You are not logged in.'}
    </div>
  )
);

export default AuthButton;