class Contacts < Api

  namespace :contacts, desc: "User Related Operations" do
    
    get "/" do
      { status: true, message: "API Called" }
    end

    desc "Send contact mail API"
    params do
      requires :name, type: String, desc: "Name", documentation: { param_type: "body" }
      requires :email, type: String, desc: "Email Address", documentation: { param_type: "body" }
      requires :phone, type: String, desc: "Phone", documentation: { param_type: "body" }
      requires :message, type: String, desc: "Password", documentation: { param_type: "body" }
      
    end

    post "/send_mail" do
      begin
        ContactMailer.with(name: params[:name], email: params[:email], phone: params[:phone], message: params[:message]).send_mail.deliver_now
        { status: true, message: "Your query has been sent successfully. We will contact you soon" }
      rescue StandardError => e
        error!({ status: false, message: "Something went wrong, #{e}" })
      end
    end

  end
end
