class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      signin(@user)
      render "api/users/show"
    else
      render json: ["Username or Password is incorrect"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      signout
      render json: {}
    else
      render json: ["error, no current user"], status: 404
    end
  end
end
