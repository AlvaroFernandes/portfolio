"use server"

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import EmailTemplate from "@/email/EmailTemplate"
import React from "react";


const resend = new Resend(process.env.RESEND_API_KEY);


  
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')
  
  if(!validateString(senderEmail,500)){
    return {
      error: "invalid sender email"
    }
  }

  if(!validateString(message,5000)){
    return{
      error: "invalid message"
    }
  }

  let data;
  try{
    data = await resend.emails.send({
      from: 'Portfolio contact form <onboarding@resend.dev>',
      to: "fernandes.alvaro@gmail.com",
      subject: "message from contact form",
      react: React.createElement(EmailTemplate,{
        message: message as string,
        senderEmail: senderEmail as string
      })
    })
  }catch (error){
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data,
  }
};