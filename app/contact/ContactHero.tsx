import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ContactHero = () => {
  return (
    <div id="getintouch" className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[600px]">
      <div className="hidden bg-bgpink lg:block p-12 font-sans">
        <h3 className="text-3xl font-light text-white">Address</h3>
        <h4 className="text-xl font-light text-white mb-5">Office # 12, Jawad Centre, Q block, DHA, Lahore.</h4>
<h3 className="text-3xl font-light text-white">Branch Office</h3>
        <h4 className="text-xl font-light text-white mb-5"> Sheridan WY 82801-6317, United States</h4>
<h3 className="text-3xl font-light text-white">Email</h3>
        <h4 className="text-xl font-light text-white mb-5">info@ihporganisation.org</h4>
<h3 className="text-3xl font-light text-white">Phone No</h3>
        <h4 className="text-xl font-light text-white mb-5">+92 300 0000000</h4>
      </div>
        <div id="contains the form" className="p-10 bg-bgpink">
  <Card className="mx-auto border-0">
    <CardHeader>
      <CardTitle className="text-3xl font-light text-gray-700">Get In Touch</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="first-name" className="text-lg text-neutral-800">First name</Label>
            <Input id="first-name" placeholder="Max" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name" className="text-lg text-neutral-800">Last name</Label>
            <Input id="last-name" placeholder="Robinson" required />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-lg text-neutral-800">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company" className="text-lg text-neutral-800">Organisation</Label>
          <Input id="company" placeholder="IHP" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message" className="text-lg text-neutral-800">Message</Label>
          <Textarea />
        </div>
        <div className="flex items-center justify-center">
        <Button className=" rounded-full bg-bgpink hover:bg-dmagenta text-white font-sans font-light text-2xl flex items-center justify-center" >Submit</Button>
        </div>
        
      </div>
    </CardContent>
  </Card>
</div>
      
      
    </div>
  )
}

export default ContactHero