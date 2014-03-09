class ContactController < ApplicationController
  def create
  	@contact=Contact.new(params.require(:contact).permit(:name,:last_name,:email,:phno,:message))
  	@contact.save
  	redirect_to root_path
  end
end
