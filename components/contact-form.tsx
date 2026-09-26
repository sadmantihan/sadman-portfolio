"use client";
import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export function ContactForm() {
 const [opened,setOpened]=useState(false);
 const submit=(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();const data=new FormData(event.currentTarget);
  const body=`Name: ${data.get("name")}\nReply email: ${data.get("email")}\n\n${data.get("message")}`;
  window.location.href=`mailto:samisadman6@gmail.com?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;setOpened(true);
 };
 return <form className="contact-form" onSubmit={submit}><div className="form-row"><div className="form-field"><label htmlFor="contact-name">Name</label><Input id="contact-name" name="name" autoComplete="name" placeholder="Your name" required maxLength={100}/></div><div className="form-field"><label htmlFor="contact-email">Email</label><Input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={200}/></div></div><div className="form-field"><label htmlFor="contact-subject">Subject</label><Input id="contact-subject" name="subject" placeholder="What would you like to discuss?" required maxLength={150}/></div><div className="form-field"><label htmlFor="contact-message">Message</label><Textarea id="contact-message" name="message" placeholder="Tell me about your project or inquiry…" rows={6} required maxLength={3000}/></div><button className="button solid" type="submit">Open email draft <Mail size={18}/></button><p className="form-note">Opens your email app with these details. Review and send your message there.</p>{opened&&<p className="form-status" role="status">If your email app didn’t open, email <a href="mailto:samisadman6@gmail.com">samisadman6@gmail.com</a> directly. Your message has not been sent by this website.</p>}</form>;
}
