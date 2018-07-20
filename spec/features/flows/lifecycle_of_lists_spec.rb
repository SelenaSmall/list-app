require 'rails_helper'

feature 'Lifecycle of a list', type: :feature, js: true do
  Steps 'Adding and removing items to a list' do
    When 'Someone adds a new list' do
      visit('/')

      page.find('input[placeholder="Title..."]').set('the title')
      page.find('input[placeholder="Excerpt..."]').set('the excerpt')
      click_button('Add List')
    end

    Then 'they see the new list' do
      wait_for { page.find_all('.single-list h4').last.text }.to include('the title')
    end

    When 'they delete the list'

    Then "they don't see it anymore"
  end
end
