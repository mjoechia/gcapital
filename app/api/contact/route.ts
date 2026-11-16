import { NextRequest, NextResponse } from 'next/server';
export const runtime = 'nodejs';
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name || '').trim(); const email = String(body.email || '').trim();
    const company = String(body.company || '').trim(); const interest = String(body.interest || 'General enquiry').trim();
    const message = String(body.message || '').trim(); const consent = body.consent === 'yes';
    if (!name || name.length > 100 || !email || email.length > 200 || !/^\S+@\S+\.\S+$/.test(email) || !message || message.length > 4000 || !consent) return NextResponse.json({error:'Please complete the required fields and consent.'},{status:400});
    const to = process.env.CONTACT_EMAIL; const key = process.env.RESEND_API_KEY; const from = process.env.RESEND_FROM_EMAIL;
    if (!to || !key || !from) return NextResponse.json({error:'The enquiry form is not yet connected. Please configure the website email settings before launch.'},{status:503});
    const response = await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to,reply_to:email,subject:`Website enquiry: ${interest} — ${name}`,text:`Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nInterest: ${interest}\n\nMessage:\n${message}`})});
    if (!response.ok) return NextResponse.json({error:'We could not send your enquiry just now. Please try again later.'},{status:502});
    return NextResponse.json({message:'Thank you. Your enquiry has been sent.'});
  } catch { return NextResponse.json({error:'Invalid request. Please try again.'},{status:400}); }
}
