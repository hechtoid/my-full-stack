class Api::ArtistsController < ApplicationController
    def index
        @artists = Artist.all
        render :index
    end

    def show
        @artist = Artist.find(params[:id])
    end

    def create
    @artist = Artist.new(artist_params)

    if @artist.save
      render "api/artists/show"
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:artist_name, :date_released, :artist_image, :about, :live)
  end
end
