class Api::V1::CompensationPackagesController < ApplicationController
  before_action :set_compensation_package, only: %i[ show update destroy ]

  # GET /compensation_packages
  def index
    @compensation_packages = CompensationPackage.all

    render json: @compensation_packages
  end

  # GET /compensation_packages/1
  def show
    render json: @compensation_package
  end

  # POST /compensation_packages
  def create
    @compensation_package = CompensationPackage.new(compensation_package_params)

    if @compensation_package.save
      render json: @compensation_package, status: :created, location: @compensation_package
    else
      render json: @compensation_package.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /compensation_packages/1
  def update
    if @compensation_package.update(compensation_package_params)
      render json: @compensation_package
    else
      render json: @compensation_package.errors, status: :unprocessable_entity
    end
  end

  # DELETE /compensation_packages/1
  def destroy
    @compensation_package.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_compensation_package
      @compensation_package = CompensationPackage.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def compensation_package_params
      params.require(:compensation_package).permit(:label, :stock_options_percentage, :hours_per_week, :weeks_per_year)
    end
end
