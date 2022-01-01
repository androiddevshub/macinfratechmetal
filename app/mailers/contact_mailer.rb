class ContactMailer < ApplicationMailer

  def send_mail
    @name = params[:name]
    # @email = email
    # @phone = phone
    # @message = message
    mail(to: 'shubjain440@gmail.com', subject: 'Query subject')
  end
end
