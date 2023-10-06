require "test_helper"

class CompensationPackagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @compensation_package = compensation_packages(:one)
  end

  test "should get index" do
    get compensation_packages_url, as: :json
    assert_response :success
  end

  test "should create compensation_package" do
    assert_difference("CompensationPackage.count") do
      post compensation_packages_url, params: { compensation_package: { hours_per_week: @compensation_package.hours_per_week, label: @compensation_package.label, stock_options_percentage: @compensation_package.stock_options_percentage, weeks_per_year: @compensation_package.weeks_per_year } }, as: :json
    end

    assert_response :created
  end

  test "should show compensation_package" do
    get compensation_package_url(@compensation_package), as: :json
    assert_response :success
  end

  test "should update compensation_package" do
    patch compensation_package_url(@compensation_package), params: { compensation_package: { hours_per_week: @compensation_package.hours_per_week, label: @compensation_package.label, stock_options_percentage: @compensation_package.stock_options_percentage, weeks_per_year: @compensation_package.weeks_per_year } }, as: :json
    assert_response :success
  end

  test "should destroy compensation_package" do
    assert_difference("CompensationPackage.count", -1) do
      delete compensation_package_url(@compensation_package), as: :json
    end

    assert_response :no_content
  end
end
