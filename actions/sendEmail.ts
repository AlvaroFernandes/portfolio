  "use server"

  import { Resend } from "resend";

  const resend = new Resend(process.env.RESEND_API_KEY);
  
  export const sendEmail = async (formData: FormData) => {
    console.log("running on server");
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"));

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ["fernandes.alvaro@gmail.com"],
        subject: "message from contact form",
    })
  };