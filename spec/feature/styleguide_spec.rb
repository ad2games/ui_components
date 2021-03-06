# frozen_string_literal: true

RSpec.feature 'Styleguide', :js do
  scenario 'all components are properly documented' do
    # If any component is missing a description or an example, we get an
    # error.

    visit '/'

    click_on 'UI Components'

    expect(page).to have_css('h1', text: 'Hello, John!')
    expect(page).to have_content('A basic example.')
  end
end
