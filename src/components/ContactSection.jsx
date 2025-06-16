import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import {cn} from "../lib/utils"
import emailjs from "@emailjs/browser"
import EmailAlert from "../components/EmailAlert"

export default function ContactSection() {
    const [name,setName] = useState('');
    const [from,setFrom] = useState('');
    const [message,setMessage] = useState('');
    const [alert, setAlert] = useState(null);
    const [isSubmitting,setIsSubmitting] = useState(false);

    const sendEmail=(e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        let params = {
            name:name,
            from_email:from,
            title:'message to JD',
            message:message
        }
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID,import.meta.env.VITE_EMAILJS_TEMPLATE_ID,params)
        .then(()=>{
            setAlert({ status: 'success' })
            setIsSubmitting(false);
        })
        .catch((error)=>{
            setAlert({ 
                status: 'error',
                message: error.message || 'Failed to send message. Please try again later.'
            });
            setIsSubmitting(false);
        })
    }
  return (
    <section id="contact" className='py-24 px-4 relative bg-secondary/30'>
        {alert && (
            <EmailAlert 
            status={alert.status}
            message={alert.message}
            onClose={() => setAlert(null)}
            />
        )}
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get in <span className='text-primary'>Touch</span></h2>
            <p className='text-center text0muted-foreground mb-12 max-w-2xl mx-auto'>
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6'>
                        Contact Information
                    </h3>
                    <div className='mx-auto w-xs space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary'/>{" "}
                            </div>
                            <div className='max-md:min-w-[12rem] md:flex md:flex-col md:items-start'> 
                                <h4 className='font-medium'>Email</h4>
                                <a href='mailto:handjoydeep@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>
                                    hansjoydeep@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary'/>{" "}
                            </div>
                            <div className='max-md:min-w-[12rem] md:flex md:flex-col md:items-start'>
                                <h4 className='font-medium'>Phone</h4>
                                <a href='tel:+919315371250' className='text-muted-foreground hover:text-primary transition-colors'>
                                    +91 9315371250
                                </a>
                            </div>
                        </div>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 text-primary'/>{" "}
                            </div>
                            <div className='max-md:min-w-[12rem] md:flex md:flex-col md:items-start'>
                                <h4 className='font-medium'>Location</h4>
                                <a className='text-muted-foreground hover:text-primary transition-colors'>
                                    New Delhi, India
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='pt-8'>
                        <h4 className='font-medium mb-4'> Connect with Me</h4>
                        <div className='flex space-x-4 justify-center'>
                            <a className='text-muted-foreground hover:text-primary' href='https://www.linkedin.com/in/joydeep-hans-65870928a/' target='_blank'>
                                <Linkedin/>
                            </a>
                            <a className='text-muted-foreground hover:text-primary' href='https://x.com/HansJoydee2410' target='_blank'>
                                <Twitter/>
                            </a>
                            <a className='text-muted-foreground hover:text-primary' href='https://www.instagram.com/joydeephans36/' target='_blank'>
                                <Instagram/>
                            </a>
                            <a className='text-muted-foreground hover:text-primary' href='https://www.facebook.com/joydeep.hans/' target='_blank'>
                                <Facebook/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='bg-card p-8 rounded-lg shadow-xs'>
                    <h3 className='text-2xl font-semibold mb-6'> Send a Message</h3>
                    <form className='space-y-6'onSubmit={sendEmail} >
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium mb-2'>Your Name</label>
                            <input
                                value={name}
                                onChange={(e)=>{setName(e.target.value)}}
                                type="text"
                                id="name"
                                name="name"
                                required
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='Joydeep Hans...'
                            >
                            </input>
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium mb-2'>Your Email</label>
                            <input
                                value={from}
                                onChange={(e)=>{setFrom(e.target.value)}}
                                type="email"
                                id="email"
                                name="email"
                                required
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='hansjoydeep@gmail.com'
                            >
                            </input>
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-sm font-medium mb-2'>Your Message</label>
                            <input
                                value={message}
                                onChange={(e)=>{setMessage(e.target.value)}}
                                type="text"
                                id="message"
                                name="message"
                                required
                                className='w-full px-4 py-7 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                                placeholder='Hi, How are you?...'
                            >
                            </input>
                        </div>
                        <button disabled={isSubmitting} type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                        )}>
                            {isSubmitting?"Sending...":"Send  Message"}
                            <Send/>
                        </button>
                    </form>
                </div>
            </div>
        </div> 
    </section>
  )
}
