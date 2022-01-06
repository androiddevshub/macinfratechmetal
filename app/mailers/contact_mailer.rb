class ContactMailer < ApplicationMailer

  def send_mail
    @name = params[:name]
    @email = params[:email]
    @phone = params[:phone]
    @message = params[:message]
    mail(to: 'enquiry@macinfratechmetal.com', subject: 'Enquiry')
  end
end
